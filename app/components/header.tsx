"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        
          
          <div className="headerr">
          
          User profile management System
          
          </div>
        
        
      </AppBar>
    </Box>
  );
}