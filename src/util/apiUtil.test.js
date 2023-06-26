import { getProducts } from './apiUtil';

const productsMock = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
];

jest.mock('./constants', () => ({
  products: productsMock,
}));

describe('getProducts', () => {
  it('should return the mocked products', () => {
    const result = getProducts();
    expect(result).toEqual(productsMock);
  });
});