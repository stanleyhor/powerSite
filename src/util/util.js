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
        maxWidth = (thisWidth + width) > maxAllowedWidth ? maxWidth : (thisWidth + width);
        width = 0;
        row++;
      } else {
        if (row === 1) {
          maxWidth = (thisWidth + width) > maxAllowedWidth ? maxWidth : (thisWidth + width);
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
    const storage = products.filter(product => product.type === 'storage').length;
    const transformer = products.filter(product => product.type === 'transformer').length;

    let add = 0;
    if (storage !== 4) {
      add = (storage % transformerPerStorage) > 0 ? 1 : 0;
    }
    
    const shouldHaveTransformer = Math.floor(storage / transformerPerStorage) + add;

    let updateProducts = [...products];
    if (shouldHaveTransformer > transformer) {
        updateProducts.push(getTransformer());
    }

    return updateProducts;
  }
}

const removeTransformers = products => {
  if (Array.isArray(products) && products.length > 0) {
    return products.filter(product => product.type !== 'transformer');
  }
  return products;
}

export {
  getTransformer,
  calculateTotalEnergy,
  calculateTotalDimension,
  calculateTotalCost,
  calculateDimension,
  updateWithTransformer,
  removeTransformers
}