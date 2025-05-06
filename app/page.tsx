'use client';
import React from 'react';
import Header from './components/header';
import { SelectChangeEvent } from '@mui/material/Select';
import InvalidForm from './components/Form/InvalidForm';
import { TextField } from '@mui/material';
import Card from './components/Form/card'



export default function ColumnLayoutInsideGrid() {
  const [Status, setStatus] = React.useState('aa');
  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
};


  return (
    
    <div className="MuiBox-root css-1i3v59a">
      <Header/>
      <div className="MuiBox-root css-1i3v59a">
          <Card/>
          {/* <TextField
            name='test'
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
          /> */}
        </div>
    </div>
  );
}