import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CountInput from './CountInput';

describe('CountInput', () => {
  const mockAddSelectedProducts = jest.fn();

  const product = {
    name: 'Example Product',
    price: 10,
  };

  const index = 0;

  it('calls addSelectedProducts with the correct parameters when input value changes', () => {
    const { getByRole } = render(
      <CountInput
        addSelectedProducts={mockAddSelectedProducts}
        product={product}
        index={index}
      />
    );

    const inputElement = getByRole('textbox');

    fireEvent.change(inputElement, { target: { value: '5' } });

    expect(mockAddSelectedProducts).toHaveBeenCalledWith({
      product,
      count: '5',
    });
  });
});