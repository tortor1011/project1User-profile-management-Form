'use client';
import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));



export default function DebugForm() {
  const [formData , setFormData] = useState<{ Name: string; LastName: string; }[]>([]);
    
useEffect(() => {
    console.log(formData)
},[])  


const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData((prevForm) => ({
    ...prevForm,
    [name]: value,
    }));
    
};
const handleSubmit = (e: React.FormEvent)=> {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log('submit', formData );
    alert('submitted:\n'+ JSON.stringify(formData, null, 2));
  }
  return (
    <>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
            <form onSubmit={handleSubmit}>
            <Item sx={{m:2}}>
                <TextField sx={{m:2}}
                name="Name"
                id="Name" 
                label="Name" 
                variant="outlined"
                onChange={handleChange}
                value={formData.Name}/>
                <TextField sx={{m:2}}
                name="LastName"
                id="LastName" 
                label="Last name" 
                variant="outlined" 
                onChange={handleChange}
                value={formData.LastName}/>
                
                
            </Item>
            <Item sx={{m:2}}>

                <Button variant="contained" type='submit'>SUBMIT</Button>
            </Item>
            </form>
        </Grid>
        <Grid size={6}>
            <Grid>
             
            </Grid>
        </Grid>
        </Grid>
    
    </>
  
  );
}