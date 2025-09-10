import { Grid, Typography } from "@mui/material"
import Item from "./Item"
import CocktailAPI from "../provider/CocktailAPI"
import { useEffect, useState } from "react"
import LetterNav from "./LetterNav"

const cocktail = new CocktailAPI()

function List() {
    const [cocktailList, setCocktailList] = useState([])
    const [letter, setLetter] = useState('a')

    useEffect(() => {
        cocktail.listCocktailByLetter(letter).then(arr => setCocktailList(arr))
    }, [letter])

    return (
        <>
            <LetterNav setLetter={setLetter} />
            <Grid container spacing={3} sx={{ mt: 3 }}>
                {cocktailList ?
                    cocktailList?.map((item, i) => (
                        <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                            <Item item={item} />
                        </Grid>
                    )) :
                    <Typography component="h6" variant="h6">
                        There are no some cocktails starts with '{letter}'
                    </Typography>
                }
            </Grid>
        </>
    )
}

export default List