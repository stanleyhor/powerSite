import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

import Box from './Box';
import { numberOfItemsToSwitchLayout } from '../util/constants';

const PowerLayout = props => {
  const { selectedProducts } = props;

  const [ multiplier, setMultiplier ] = useState(1);

  useEffect(() => {
    const multip = selectedProducts.length > numberOfItemsToSwitchLayout ? 0.5 : 1;
    setMultiplier(multip);
  }, [selectedProducts]);
  
  const styles ={
    layoutContainer: {
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'flex-start'
    },
    title: {
      marginBottom: 20
    }
  }

  return (
    <Grid container style={styles.layoutContainer}>
      {
        Array.isArray(selectedProducts) && selectedProducts.length > 0 && (
          <Grid item xs={12} style={styles.title}>
            Potential Layout
          </Grid>
        )
      }
      
      <Grid item xs={12}>
        <Grid container>
          {
            Array.isArray(selectedProducts) && selectedProducts.map((product, i) => {
              return (
                <Grid 
                  item 
                  xs={(product.width / 100)*12}
                  style={{}}
                  key={i}
                >
                  <Box 
                    product={product} 
                    multiplier={multiplier}
                  />
                </Grid>
              )
            })
          }
          <Grid item xs={12} style={{height: 100}}></Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PowerLayout;