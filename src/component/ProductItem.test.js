
import React from 'react';
import { render } from '@testing-library/react';
import ProductItem from './ProductItem';

import '@testing-library/jest-dom';

describe('ProductItem', () => {
  const product = {
    name: 'Product 1',
    energy: 100,
    cost: 5000,
    width: 10,
    length: 20,
    releaseDate: '2023-01-01',
  };

  it('renders the ProductItem component with the correct product details', () => {
    const { getByText } = render(<ProductItem product={product} />);

    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('100 MWh')).toBeInTheDocument();
    expect(getByText('$5,000')).toBeInTheDocument();
    expect(getByText('10ft X 20ft')).toBeInTheDocument();
    expect(getByText('2023-01-01')).toBeInTheDocument();
  });
});
