import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

import ProductItem from './ProductItem';
import { getProducts } from '../util/apiUtil';

const Product = props => {

  const { addSelectedProducts } = props;
  
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const products = getProducts();
    setProducts(products);
  }, []);

  const styles ={
    productContainer: {
      paddingLeft: 20,
      paddingRight: 20
    },
    product: {
      alignItems: 'center',
      display: 'flex',
      border: 'solid gray 2px',
      borderRadius: 10,
      marginBottom: 10,
      padding: 10,
      cursor: 'pointer'
    },
    productNotSelectable: {
      cursor: 'not-allowed',
      backgroundColor: 'lightgray',
      opacity: 0.6
    },
    image: {
      height: 50,
      width: 50
    }
  }

  const nonClickable = _ => {

  }
  
  return (
    <div style={styles.productContainer}>
      {
        products.map((product, i) => {
          return (
            <Grid 
              container 
              columns={2} 
              columnSpacing={2} 
              style={(product.type === 'transformer') ? {...styles.product, ...styles.productNotSelectable, borderColor: `${product.color}`} : {...styles.product, borderColor: `${product.color}`}}
              key={i}
              onClick={(product.type === 'transformer') ? nonClickable() : addSelectedProducts.bind(this, product)}
            >
              <Grid item>
                <img style={styles.image} src={product.image} alt={product.name} />
              </Grid>
              <Grid item>
                <ProductItem 
                  product={product} 
                />
              </Grid>
            </Grid>
          )
        })
      }
      <div style={{height:80}}></div>
    </div>
  )
}

export default Product;