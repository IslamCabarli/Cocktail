import { useParams } from "react-router"
import CocktailAPI from "../provider/CocktailAPI"
import { useEffect, useState } from "react"
import SingleError from "./SingleError"
import SingleSkeleton from "./SingleSkeleton"
import Single from "./Single"

const cocktail = new CocktailAPI()

function Details() {
    const [cockt, setCockt] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        cocktail.getCocktailById(id).then(
            obj => {
                setCockt(obj)
                setLoading(false)
            }, 
            err => setError(true)
        )
    }, [])

    return (
        error ? <SingleError /> :
        loading ? <SingleSkeleton /> :
        <Single {...cockt} setLoading={setLoading} />
    )
}

export default Details