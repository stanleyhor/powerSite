import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Box from './Box';

describe('Box', () => {
  const product = {
    name: 'Example Product',
    color: 'red',
    image: 'example.jpg',
  };
  const multiplier = 2;

  it('renders the Box component with the correct styles and props', () => {
    const { getByAltText } = render(
      <Box product={product} multiplier={multiplier} />
    );

    const boxElement = getByAltText(product.name);
    expect(boxElement).toBeInTheDocument();
    expect(boxElement).toHaveAttribute('src', product.image);

    const styles = window.getComputedStyle(boxElement.parentElement);
    expect(styles.height).toBe(`${80 * multiplier}px`);
    expect(styles.marginBottom).toBe(`${10 * multiplier}px`);
    expect(styles.width).toBe('90%');
    expect(styles.display).toBe('flex');
    expect(styles.justifyContent).toBe('center');
    expect(styles.alignItems).toBe('center');
    expect(styles.boxShadow).toBe('5px 5px 5px lightgray');
    expect(styles.borderRadius).toBe('10px');
    expect(styles.border).toBe(`1px solid ${product.color}`);
  });
});