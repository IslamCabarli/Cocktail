import { CardContent, Grid, Skeleton, Typography } from "@mui/material"

function SingleError() {
  return (
    <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
                 <Skeleton animation="wave" height={400} width="100%" variant="rectangular" />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
                <CardContent>
                    <Typography component="h5" variant="h5">Error</Typography>
                    <Typography component="h6" variant="h6">Some error detected...</Typography>
                </CardContent>
            </Grid>
        </Grid>
  )
}

export default SingleError