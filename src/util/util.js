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
    let updatedProducts = products.filter(product => product.type !== 'transformer');
    const powerCount = updatedProducts.length;

    let add = 0;
    if (powerCount !== 4) {
      add = (powerCount % transformerPerStorage) > 0 ? 1 : 0;
    }
    const transformerCount = Math.floor(updatedProducts.length / transformerPerStorage) + add;

    for (let i=0; i<transformerCount; i++) {
      updatedProducts.push(getTransformer());
    }

    return updatedProducts;
  }
}

const removeTransformers = products => {
  if (Array.isArray(products) && products.length > 0) {
    return products.filter(product => product.type !== 'transformer');
  }
  return products;
}

const updateSelectedProducts = ({selectedProducts, product, count}) => {
  let updatedProducts = [];

  if (Array.isArray(selectedProducts) && selectedProducts.length > 0) {
    // remove old products
    updatedProducts = selectedProducts.filter(thisProduct => thisProduct.name !== product.name);
  }

  if (count !== undefined) {
    if (count > 0) {
      for (let i=0; i<count; i++) {
        updatedProducts.push(product);
      }
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
  updateSelectedProducts
}