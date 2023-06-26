import React from 'react';
import { render } from '@testing-library/react';
import Result from './Result';

import '@testing-library/jest-dom';

describe('Result', () => {
  const selectedProducts = [
    { name: 'Product 1', energy: 100, cost: 200, width: 10, length: 20, releaseDate: '2022-01-01' },
    { name: 'Product 2', energy: 150, cost: 300, width: 15, length: 25, releaseDate: '2022-02-01' },
  ];

  it('renders the Result component with the selected products', () => {
    const { getByText } = render(
      <Result selectedProducts={selectedProducts} />
    );

    // Assert that the power component is rendered
    expect(getByText('MWh')).toBeInTheDocument();
    expect(getByText('square ft')).toBeInTheDocument();

    expect(getByText('250')).toBeInTheDocument();
  });
});
