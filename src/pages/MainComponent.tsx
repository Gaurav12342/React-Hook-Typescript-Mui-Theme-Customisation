import React, { useState, FC } from 'react'
import Home from '../pages/Home';
import Typography from '@mui/material/Typography';
import Button from '../component/Button';


const MainComponent: FC = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);
  return (
    <div>
      <Typography variant="h5" gutterBottom component="div">
        {`( Root component )`} {`Update count value: ${count}`}
      </Typography>
      <Home item={item} />

      <Button variant="contained" sx={{ backgroundColor: 'primary.dark' }} onClick={() => { setCount(count + 1) }}>{'Update Count'}</Button>&nbsp;
      <Button variant="contained" sx={{ backgroundColor: 'status.danger' }} onClick={() => { setItem(item * 2) }}>{'Update Item'}</Button>
    </div>
  )
}

export default MainComponent