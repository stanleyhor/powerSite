import {
  getTransformer,
  calculateTotalEnergy,
  calculateTotalDimension,
  calculateTotalCost,
  calculateDimension,
  updateWithTransformer,
  removeTransformers,
  updateSelectedProducts
} from './util';

import { products, maxAllowedWidth, transformerPerStorage } from './constants';

describe('getTransformer', () => {
  it('should return the first transformer product', () => {
    const result = getTransformer();
    const expectedTransformer = products.find(product => product.type === 'transformer');
    expect(result).toEqual(expectedTransformer || {});
  });
});

describe('calculateTotalEnergy', () => {
  it('should calculate the total energy of products', () => {
    const testProducts = [
      { energy: 10 },
      { energy: 20 },
      { energy: 30 }
    ];
    const result = calculateTotalEnergy(testProducts);
    const expectedTotalEnergy = 60;
    expect(result).toBe(expectedTotalEnergy);
  });

  it('should return 0 if products array is empty', () => {
    const result = calculateTotalEnergy([]);
    expect(result).toBe(0);
  });
});

describe('calculateTotalDimension', () => {
  it('should calculate the total dimension of products', () => {
    const testProducts = [
      { width: 10, length: 20 },
      { width: 30, length: 40 },
      { width: 50, length: 60 }
    ];
    const result = calculateTotalDimension(testProducts);
    const expectedTotalDimension = 10 * 20 + 30 * 40 + 50 * 60;
    expect(result).toBe(expectedTotalDimension);
  });

  it('should return 0 if products array is empty', () => {
    const result = calculateTotalDimension([]);
    expect(result).toBe(0);
  });
});

describe('calculateTotalCost', () => {
  it('should calculate the total cost of products', () => {
    const testProducts = [
      { cost: 100 },
      { cost: 200 },
      { cost: 300 }
    ];
    const result = calculateTotalCost(testProducts);
    const expectedTotalCost = 600;
    expect(result).toBe(expectedTotalCost);
  });

  it('should return 0 if products array is empty', () => {
    const result = calculateTotalCost([]);
    expect(result).toBe(0);
  });
});

describe('calculateDimension', () => {
  it('should calculate the final dimension of products', () => {
    const testProducts = [
      { width: 10, length: 20 },
      { width: 30, length: 40 },
      { width: 50, length: 60 }
    ];
    const result = calculateDimension(testProducts);
    const expectedFinalDimension = { width: 90, length: 20 };

    expect(result).toEqual(expectedFinalDimension);
  });

  it('should return an empty object if products array is empty', () => {
    const result = calculateDimension([]);
    expect(result).toEqual({ width: 0, length: 0});
  });
});

describe('updateWithTransformer', () => {
  it('should update the products array with transformers', () => {
    const testProducts = [
      { type: 'product' },
      { type: 'product' },
      { type: 'product' },
      { type: 'product' }
    ];
    const result = updateWithTransformer(testProducts);

    expect(result.length).toEqual(5);
  });

  it('should return an empty array if products array is empty', () => {
    const result = updateWithTransformer([]);
    expect(result).toEqual([]);
  });
});

describe('removeTransformers', () => {
  it('should remove transformer products from the array', () => {
    const testProducts = [
      { type: 'product' },
      { type: 'transformer' },
      { type: 'product' },
      { type: 'transformer' },
      { type: 'product' }
    ];
    const result = removeTransformers(testProducts);
    const expectedProducts = [
      { type: 'product' },
      { type: 'product' },
      { type: 'product' }
    ];
    expect(result).toEqual(expectedProducts);
  });

  it('should return the same array if there are no transformer products', () => {
    const testProducts = [
      { type: 'product' },
      { type: 'product' },
      { type: 'product' }
    ];
    const result = removeTransformers(testProducts);
    expect(result).toEqual(testProducts);
  });

  it('should return an empty array if products array is empty', () => {
    const result = removeTransformers([]);
    expect(result).toEqual([]);
  });
});

describe('updateSelectedProducts', () => {
  it('should update the selected products array with the given product and count', () => {
    const selectedProducts = [{ name: 'product1' }];
    const product = { name: 'product2' };
    const count = 3;
    const result = updateSelectedProducts({ selectedProducts, product, count });
    const expectedUpdatedProducts = [
      { name: 'product1' },
      { name: 'product2' },
      { name: 'product2' },
      { name: 'product2' }
    ];
    expect(result).toEqual(expectedUpdatedProducts);
  });

  it('should remove the product from the selected products array if count is 0', () => {
    const selectedProducts = [
      { name: 'product1' },
      { name: 'product2' },
      { name: 'product2' },
      { name: 'product2' }
    ];
    const product = { name: 'product2' };
    const count = 0;
    const result = updateSelectedProducts({ selectedProducts, product, count });
    const expectedUpdatedProducts = [{ name: 'product1' }];
    expect(result).toEqual(expectedUpdatedProducts);
  });

  it('should remove all occurrences of the product from the selected products array if count is undefined', () => {
    const selectedProducts = [
      { name: 'product1' },
      { name: 'product2' },
      { name: 'product2' },
      { name: 'product2' }
    ];
    const product = { name: 'product2' };
    const result = updateSelectedProducts({ selectedProducts, product });
    const expectedUpdatedProducts = [{ name: 'product1' }];
    expect(result).toEqual(expectedUpdatedProducts);
  });

  it('should return the same selected products array if count is undefined and the product is not in the array', () => {
    const selectedProducts = [{ name: 'product1' }];
    const product = { name: 'product2' };
    const result = updateSelectedProducts({ selectedProducts, product });
    expect(result).toEqual(selectedProducts);
  });

  it('should return an empty array if selectedProducts is undefined', () => {
    const product = { name: 'product1' };
    const result = updateSelectedProducts({ selectedProducts: undefined, product });
    expect(result).toEqual([]);
  });
});
