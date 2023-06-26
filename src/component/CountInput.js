import React from 'react';

const CountInput = props => {
  const { addSelectedProducts, product, index } = props;

  const styles = {
    input: {
      height: 50,
      width: 60,
      textAlign: 'right',
      borderTop: 'none',
      borderLeft: 'none',
      borderRight: 'none',
      fontSize: '2.0em'
    }
  }

  const handleInputChange = event => {
    addSelectedProducts({product, count: event.target.value});
  }

  return (
    <input 
      name={`power${index}`}
      style={styles.input}
      onChange={handleInputChange}
    ></input>
  )
}

export default CountInput;