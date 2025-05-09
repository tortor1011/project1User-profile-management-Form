'use client';
import React from 'react';
import Header from './components/header';
import { SelectChangeEvent } from '@mui/material/Select';
import InvalidForm from './components/Form/Profilemanagement';
import { Typography } from '@mui/material';
import ManagementForm from './components/Form/Profilemanagement';





export default function ColumnLayoutInsideGrid() {
 


  return (
    
    <div>
      <Header/>
      
      <div className="MuiBox-root css-1i3v59a">
          <ManagementForm />
        </div>
    </div>
  );
}