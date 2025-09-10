class CocktailAPI {
    path = 'https://www.thecocktaildb.com/api/json/v1/1'

    async randomCocktail () {
        return fetch(`${this.path}/random.php`)
            .then(resp => resp.json())
            .then(json => this.transform( json.drinks[0] ) )
    }

    async getCocktailById (id) {
        return fetch(`${this.path}/lookup.php?i=${id}`)
            .then(resp => resp.json())
            .then(json => this.transform( json.drinks[0] ) )
    }

    async listCocktailByLetter (letter = 'a') {
        return fetch(`${this.path}/search.php?f=${letter}`)
            .then(resp => resp.json())
            .then(json => json.drinks?.map(obj => this.transform(obj)))
    }

    transform(obj) {
        return {
            id: obj.idDrink,
            name: obj.strDrink,
            cath: obj.strCategory,
            alco: obj.strAlcoholic,
            glass: obj.strGlass,
            desc: obj.strInstructions,
            img: obj.strDrinkThumb,
            ingr: Object.entries(obj).filter(arr => arr[0].includes('strIngredient') && arr[1]).map(arr => arr[1]),
            measure: Object.entries(obj).filter(arr => arr[0].includes('strMeasure') && arr[1]).map(arr => arr[1])
        }
    }
}

export default CocktailAPI