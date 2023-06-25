import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const ProductItem = props => {
  const { name, energy, cost, width, length, releaseDate } = props.product;
  return (
    <Grid container direction={'column'}>
      <Grid item>
        <Typography
          sx={{ display: 'inline' }}
          variant="body"
          color="text.primary"
          style={{fontWeight: 'bold'}}
        >
          {name}
        </Typography>
      </Grid>

      <Grid item>
        <Typography
          sx={{ display: 'inline' }}
          variant="body"
          color="text.primary"
        >
          Energy:
        </Typography>
        {` ${energy} MWh`}
      </Grid>

      <Grid item>
        <Typography
          sx={{ display: 'inline' }}
          variant="body"
          color="text.primary"
        >
          Cost:
        </Typography>
        {` $${new Intl.NumberFormat().format(cost)}`}
      </Grid>

      <Grid item>
        <Typography
          sx={{ display: 'inline' }}
          variant="body"
          color="text.primary"
        >
          Dimension:
        </Typography>
        {` ${width}ft X ${length}ft`}
      </Grid>

      <Grid item>
        <Typography
          sx={{ display: 'inline' }}
          variant="body"
          color="text.primary"
        >
          Release Date:
        </Typography>
        {` ${releaseDate}`}
      </Grid>
    </Grid>
  )
}

export default ProductItem;