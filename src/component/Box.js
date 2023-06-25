const Box = props => {
  const { product, multiplier } = props;

  const styles ={
    devices: {
      height: 80 * multiplier, 
      marginBottom: 10 * multiplier,
      width: '90%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: '5px 5px 5px lightgray',
      borderRadius: 10
    },
    deviceImage: {
      width: 60 * multiplier
    }
  }

  return (
    <div 
      style={{...styles.devices, border: `1px solid ${product.color}`}}
    >
      <img style={styles.deviceImage} src={product.image} alt={product.name} />
    </div>
  )
}

export default Box;