import React, { useState } from 'react';
import Grid from '@mui/material/Grid';

import Product from './component/Product';
import Result from './component/Result';
import PowerLayout from './component/PowerLayout';
// import Debug from './component/Debug';
import { updateWithTransformer, updateSelectedProducts } from './util/util.js';

const Tesla = props => {
  const [ selectedProducts, setSelectedProducts ] = useState([]);

  const styles = {
    teslaContainer: {
      backgroundColor: '#ffffff',
      padding: 10
    },
    resultContainer: {
      position: 'fixed', 
      bottom: 0, 
      left: 0, 
      width: '100%', 
      backgroundColor: 'white'
    },
    logo: {
      width: 120
    },
    header: {
      textAlign: 'center'
    }
  }

  const addSelectedProducts = ({product, count}) => {
    let products = updateSelectedProducts({selectedProducts, product, count});

    products = updateWithTransformer(products);
    setSelectedProducts(products);
  }

  return (
    <Grid container direction={'row'} style={styles.teslaContainer}>
      <Grid item xs={12} style={styles.header}>
        <h1>
          <svg style={styles.logo} viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"></path></svg>
        </h1>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Product 
              addSelectedProducts={addSelectedProducts} 
            />
          </Grid>
          <Grid item xs={8}>
            <PowerLayout 
              selectedProducts={selectedProducts}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} style={styles.resultContainer}>
        <Result 
          selectedProducts={selectedProducts}
        />
      </Grid>
    </Grid>
  )
}

export default Tesla;