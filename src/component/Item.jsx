import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from "react-router"

function Item({item}) {
    const {id, name, desc, img} = item
    return (
        <Card>
            <CardActionArea component={Link} to={'details/' + id}>
                <LazyLoadImage src={img} alt={name} width="100%" effect="blur" wrapperProps={{ style: {transitionDelay: "1s"} }} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{name} </Typography>
                    <Typography variant="body2" sx={{color: 'text.secondary', height: '75px'}}>
                        {desc.slice(0, 100) + (desc.length > 100 ? '...' : '')}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Item