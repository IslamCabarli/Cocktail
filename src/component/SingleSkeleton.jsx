import { CardContent, Grid, Skeleton } from "@mui/material"

function SingleSkeleton() {
    return (
        <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
                 <Skeleton animation="wave" height={400} width="100%" variant="rectangular" />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
                <CardContent>
                    <Skeleton animation="wave" height={35} width="30%" />
                    <Skeleton animation="wave" height={30} width="50%" />
                    <Skeleton animation="wave" height={20} width="40%" />
                    <Skeleton animation="wave" height={200} width="100%" />
                    
                    <Skeleton animation="wave" height={20} width="30%" />
                    <Skeleton animation="wave" height={20} width="30%" />
                    <Skeleton animation="wave" height={20} width="30%" />
                </CardContent>
            </Grid>
        </Grid>
    )
}

export default SingleSkeleton