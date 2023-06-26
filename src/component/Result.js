import React from 'react';
import Grid from '@mui/material/Grid';

import Power from './Power';

const Result = props => {
  const { selectedProducts } = props;

  const styles = {
    powerItem: {
      marginBottom: 15
    }
  }

  return (
    <Grid
      container
      direction={'column'}
    >
      <Grid item xs={12} style={styles.powerItem}>
        <Power 
          selectedProducts={selectedProducts}
        />
      </Grid>
    </Grid>
  )
}

export default Result;