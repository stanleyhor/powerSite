import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

const PowerLayout = props => {
  const { selectedProducts } = props;

  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    if (Array.isArray(selectedProducts) && selectedProducts.length > 0) {
      setProducts(selectedProducts);
    }
  }, [selectedProducts]);
  
  const styles ={
    layoutContainer: {
      paddingLeft: 20,
      paddingRight: 20,
      // width: '100%',
      justifyContent: 'flex-start'
    },
    title: {
      marginBottom: 20
    },
    devices: {
      height: 80, 
      marginBottom: 10,
      width: '90%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '5px 5px 5px lightgray',
      borderRadius: 10
    },
    deviceImage: {
      width: 60
    }
  }

  const Box = props => {
    const { product } = props;
    return (
      <div 
        style={{...styles.devices, border: `1px solid ${product.color}`}}
      >
        <img style={styles.deviceImage} src={product.image} alt={product.name} />
      </div>
    )
  }

  return (
    <Grid container style={styles.layoutContainer}>
      {
        Array.isArray(products) && products.length > 0 && (
          <Grid item xs={12} style={styles.title}>
            Potential Layout
          </Grid>
        )
      }
      
      <Grid item xs={12}>
          <Grid container>
          {
            Array.isArray(products) && products.map((product, i) => {
              return (
                <Grid 
                  item 
                  xs={(product.width / 100)*12}
                  style={{}}
                  key={i}
                >
                  <Box product={product} />
                </Grid>
              )
            })
          }
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PowerLayout;