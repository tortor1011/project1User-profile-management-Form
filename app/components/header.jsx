"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <div className="MuiBox-root css-ks2s3c">
          
          User profile management System
          
          </div>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}