import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { 
  calculateTotalEnergy, 
  calculateTotalDimension,
  calculateDimension,
  calculateTotalCost
} from '../util/util.js';

const Power = props => {
  const { selectedProducts } = props;
  
  const [ totalEnergy, setTotalEnergy ] = useState(0);
  const [ totalDimension, setTotalDimension ] = useState(0);
  const [ finalDimension, setFinalDimension ] = useState('');
  const [ totalCost, setTotalCost ] = useState(0);
  
  useEffect(() => {
    if (Array.isArray(selectedProducts) && selectedProducts.length > 0) {
      const calculatedEnergy = calculateTotalEnergy(selectedProducts);
      setTotalEnergy(calculatedEnergy);

      const calculatedTotalDimension = calculateTotalDimension(selectedProducts);
      setTotalDimension(calculatedTotalDimension);

      const calculatedDimension = calculateDimension(selectedProducts);
      setFinalDimension(calculatedDimension);

      const calculatedCost = calculateTotalCost(selectedProducts);
      setTotalCost(calculatedCost);
    }
  }, [selectedProducts]);

  return (
    <Grid container direction={'row'} style={{minHeight: 80, alignItems: 'center'}}>
      <Grid item xs={3} style={{textAlign: 'center', }}>
        <Typography
          sx={{ display: 'block' }}
          variant="h5"
          color="text.primary"
        >
          {totalEnergy}
        </Typography>
          {`MWh`}
      </Grid>

      <Grid item xs={3} style={{textAlign: 'center'}}>
        <Typography
          sx={{ display: 'block' }}
          variant="h5"
          color="text.primary"
        >
          {` ${finalDimension.width || 0} ft X ${finalDimension.length || 0} ft`}
        </Typography>
          
      </Grid>

      <Grid item xs={3} style={{textAlign: 'center'}}>
        <Typography
          sx={{ display: 'block' }}
          variant="h5"
          color="text.primary"
        >
          {totalDimension}
        </Typography>
          {`square ft`}
      </Grid>

      <Grid item xs={3} style={{textAlign: 'center'}}>
        <Typography
          sx={{ display: 'inline' }}
          variant="h5"
          color="text.primary"
        >
          {` $${new Intl.NumberFormat().format(totalCost)}`}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Power;