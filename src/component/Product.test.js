import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Product from './Product';

import '@testing-library/jest-dom';

jest.mock('../util/apiUtil', () => ({
  getProducts: () => [
    { name: 'Product 1', type: 'type1', color: 'color1', image: 'image1.png' },
    { name: 'Product 2', type: 'type2', color: 'color2', image: 'image2.png' },
  ],
}));

describe('Product', () => {
  it('renders the Product component with the correct products', () => {
    const addSelectedProductsMock = jest.fn();
    const { getByAltText, getByText } = render(
      <Product addSelectedProducts={addSelectedProductsMock} />
    );

    // Assert that the product items are rendered
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('Product 2')).toBeInTheDocument();

    // Assert that the images are rendered
    expect(getByAltText('Product 1')).toBeInTheDocument();
    expect(getByAltText('Product 2')).toBeInTheDocument();

    // Assert that the count input is not rendered for type1 products
    expect(() => getByText('Count Input')).toThrow();
  });
});
