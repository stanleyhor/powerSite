import React from 'react';
import { render } from '@testing-library/react';
import PowerLayout from './PowerLayout';

jest.mock('./Box', () => ({ product }) => (
  <div data-testid="box">{product.name}</div>
));

describe('PowerLayout', () => {
  const selectedProducts = [
    { name: 'Product 1', width: 100 },
    { name: 'Product 2', width: 200 },
  ];

  it('renders the PowerLayout component with the correct number of boxes', () => {
    const { getAllByTestId } = render(
      <PowerLayout selectedProducts={selectedProducts} />
    );

    const boxes = getAllByTestId('box');

    expect(boxes).toHaveLength(selectedProducts.length);
  });
});
