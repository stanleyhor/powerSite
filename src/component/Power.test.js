import React from 'react';
import { render } from '@testing-library/react';
import Power from './Power';
import {
  calculateTotalEnergy,
  calculateTotalDimension,
  calculateDimension,
  calculateTotalCost,
} from '../util/util.js';

import '@testing-library/jest-dom';

jest.mock('../util/util.js', () => ({
  calculateTotalEnergy: jest.fn(() => 100),
  calculateTotalDimension: jest.fn(() => 200),
  calculateDimension: jest.fn(() => ({ width: 10, length: 20 })),
  calculateTotalCost: jest.fn(() => 5000),
}));

describe('Power', () => {
  it('renders the Power component with the correct calculations', () => {
    const selectedProducts = [
      { name: 'Product 1' },
      { name: 'Product 2' },
    ];

    const { getByText } = render(
      <Power selectedProducts={selectedProducts} />
    );

    expect(getByText('100')).toBeInTheDocument();
    expect(getByText('200')).toBeInTheDocument();
    expect(getByText('10 ft X 20 ft')).toBeInTheDocument();
    expect(getByText('$5,000')).toBeInTheDocument();

    // Make assertions about the mock functions
    expect(calculateTotalEnergy).toHaveBeenCalledWith(selectedProducts);
    expect(calculateTotalDimension).toHaveBeenCalledWith(selectedProducts);
    expect(calculateDimension).toHaveBeenCalledWith(selectedProducts);
    expect(calculateTotalCost).toHaveBeenCalledWith(selectedProducts);
  });
});
