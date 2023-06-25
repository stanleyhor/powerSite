import { 
  maxAllowedWidth, 
  transformerPerStorage, 
  products 
} from './constants';

const getTransformer = _ => {
  const trans = products.filter(product => product.type === 'transformer');
  if (trans.length > 0) {
    return trans[0];
  }
  return {};
}

const calculateTotalEnergy = products => {
  if (Array.isArray(products) && products.length > 0) {
    return products.reduce((acc, cur) => acc + cur.energy, 0);
  }
  return 0;
}

const calculateTotalDimension = products => {
  if (Array.isArray(products) && products.length > 0) {
    try {
      return products.reduce((acc, cur) => acc + (cur.width * cur.length), 0);
    } catch (e) {
      return 0;
    }
  }
  return 0;
}

const calculateTotalCost = products => {
  if (Array.isArray(products) && products.length > 0) {
    return products.reduce((acc, cur) => acc + cur.cost, 0);
  }
  return 0;
}

const calculateDimension = products => {
  let width = 0;
  let length = 0;
  let row = 1;
  let maxWidth = 0;

  if (Array.isArray(products) && products.length > 0) {
    products.forEach((product, i) => {
      const thisWidth = product.width;
      const thisLength = product.length;

      if (i === 0) {
        length = thisLength;
      }

      if ((thisWidth + width) > maxAllowedWidth) {
        length += thisLength;
        width = 0;
        row = row + 1;
      } else {
        let addedWidth = thisWidth + width;
        if (addedWidth > maxWidth) {
          maxWidth = addedWidth;
        }
      }
      width += thisWidth;
    });
  }

  return {
    width: maxWidth, length
  }
}

/**
 * Calculate and add transformer if needed
 * @param {*} products 
 * @returns 
 */
const updateWithTransformer = products => {
  if (Array.isArray(products) && products.length > 0) {
    let updatedProducts = [];

    let storageOnly = products.filter(product => product.type !== 'transformer');

    storageOnly.forEach((product, i) => {
      if (i>0 &&(i % transformerPerStorage === 0)) {
        updatedProducts.push(getTransformer());
      }
      updatedProducts.push(product);
    });

    updatedProducts.push(getTransformer());

    return updatedProducts;
  }



  // let updatedProducts = [];
  // if (Array.isArray(products) && products.length > 0) {
  //   updatedProducts = products.filter(product => product.type !== 'transformer');
  //   const powerCount = updatedProducts.length;

  //   let add = 0;
  //   if (powerCount !== 4) {
  //     add = (powerCount % transformerPerStorage) > 0 ? 1 : 0;
  //   }
    
  //   const transformerCount = Math.floor(updatedProducts.length / transformerPerStorage) + add;

  //   for (let i=0; i<transformerCount; i++) {
  //     updatedProducts.push(getTransformer());
  //   }
  // }
  // return updatedProducts;
}

const removeTransformers = products => {
  if (Array.isArray(products) && products.length > 0) {
    return products.filter(product => product.type !== 'transformer');
  }
  return products;
}

const removeProduct = ({ selectedProducts, product }) => {
  let updatedProducts = [];
  if (Array.isArray(selectedProducts) && selectedProducts.length > 0) {
    let found = false;
    for (let i=0; i<selectedProducts.length; i++) {
      if (!found && selectedProducts[i].name === product.name) {
        found = true;
        continue;
      }
      updatedProducts.push(selectedProducts[i]);
    }
  }

  return updatedProducts;
}

export {
  getTransformer,
  calculateTotalEnergy,
  calculateTotalDimension,
  calculateTotalCost,
  calculateDimension,
  updateWithTransformer,
  removeTransformers,
  removeProduct
}