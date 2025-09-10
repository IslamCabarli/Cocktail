import { Button, CardContent, CardMedia, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import BubbleChartIcon from '@mui/icons-material/BubbleChart'
import { useNavigate } from "react-router"

function Single({id, name, cath, alco, glass, desc, img, ingr, measure, setRefresh, setLoading}) {
    const navigate = useNavigate()

    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
                <CardMedia image={img} alt={name} component="img"  />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
                <CardContent>
                    <Typography variant="h5" component="h1">{name}</Typography>
                    <Typography variant="h6" component="h2">{cath} ({alco})</Typography>
                    <Typography variant="body1" component="p">Glass: {glass}</Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{desc}</Typography>
                     <List>
                        {ingr.map((prod, i) => 
                            <ListItem key={i} disablePadding>
                                <ListItemIcon><BubbleChartIcon /></ListItemIcon>
                                <ListItemText>{prod} ({measure[i]})</ListItemText>
                            </ListItem>
                        )}
                    </List>
                    <Typography align="right">
                        {setRefresh ? 
                            <Button onClick={() => {
                                setLoading(true)
                                setRefresh(Math.random())
                            }} variant="outlined" color="error">Refresh</Button> :
                            <Button 
                                onClick={() => navigate('/')} 
                                variant="outlined" color="error">Back</Button>
                        }                        
                    </Typography>
                </CardContent>
            </Grid>
        </Grid>
    )
}

export default Single