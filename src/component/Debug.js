import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Debug = props => {
  const { selectedProducts } = props;
  
  const [ products, setProducts ] = useState([]);
  
  useEffect(() => {
    if (Array.isArray(selectedProducts) && selectedProducts.length > 0) {
      setProducts(selectedProducts);
    }
  }, [selectedProducts]);

  return (
    <Grid container direction={'row'} style={{minHeight: 80, alignItems: 'center', border: '2px dotted black', marginTop: 100}}>
      <Grid item xs={3}>
        <Typography
          sx={{ display: 'inline' }}
          variant="body"
          color="text.primary"
          style={{fontWeight: 'bold'}}
        >
          ---Total items:
        </Typography>
          {` ${products.length}`}
      </Grid>

      <Grid item xs={3}>
        <Typography
          sx={{ display: 'inline' }}
          variant="body"
          color="text.primary"
          style={{fontWeight: 'bold'}}
        >
          ---Items:
        </Typography>
          { products.map(product => product.name + ', ')}
      </Grid>
    </Grid>
  )
}

export default Debug;