'use client';
import React from 'react';
import Header from './components/header';
import { SelectChangeEvent } from '@mui/material/Select';
import InvalidForm from './components/Form/InvalidForm';





export default function ColumnLayoutInsideGrid() {
  const [Status, setStatus] = React.useState('aa');
  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
};


  return (
    
    <div className="MuiBox-root css-1i3v59a">
      <Header/>
      <div className="MuiBox-root css-1i3v59a">
          <InvalidForm/>
        </div>
    </div>
  );
}