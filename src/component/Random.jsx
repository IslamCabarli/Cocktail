import { useEffect, useState } from "react"
import CocktailAPI from "../provider/CocktailAPI"
import SingleSkeleton from "./SingleSkeleton"
import SingleError from "./SingleError"
import Single from "./Single"

const cocktail = new CocktailAPI()


function Random() {
    const [random, setRandom] = useState({})
    const [refresh, setRefresh] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        cocktail.randomCocktail().then(
                obj => {
                setRandom(obj)
                setLoading(false)
            }, 
            err => setError(true)
        )
    }, [refresh])

    return (
        error ? <SingleError /> :
        loading ? <SingleSkeleton /> :
        <Single {...random} setRefresh={setRefresh} setLoading={setLoading} />
    )
}

export default Random