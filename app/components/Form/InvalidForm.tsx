'use client';
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl, { formControlClasses } from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';






export default function InvalidForm() {
  const [formData , setFormData] = useState<{
    Name: string;
    LastName: string;
    Email: string;
    Confirm: boolean;
    Gender: string;
    Hobby: string[];
    Status: string;
    Note: string;
  }>({
    Name: '',
    LastName: '',
    Email: '',
    Confirm: false,
    Gender: '',
    Hobby: [],
    Status: '',
    Note: '',
  });


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    console.log('formData', formData);
  };
  const handleSubmit = ()=> {
    console.log('submit', formData );
    alert('submitted:\n'+ JSON.stringify(formData, null, 2));
  }
  const handleReset = ()=> {
    const resetFormData = {
      Name: '',
      LastName: '',
      Email: '',
      Confirm: false,
      Gender: '',
      Hobby: [],
      Status: '',
      Note: '',
    };
    setFormData(resetFormData);
  

  }
  const handleCheckboxGroupChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFormData((prevForm) => ({
      ...prevForm,
      Hobby : checked 
       ? [... prevForm.Hobby, value]
       :prevForm.Hobby.filter((hobby) => hobby !== value),
    }));
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
  }));
  
 
  return (
    
    <div className="MuiBox-root css-1i3v59a">
      
      

    <Box sx={{ flexGrow: 1 , padding: 2}}>
      <Grid container spacing={2}>
        {/* <Grid item={true} xs={4}> */}
          <Stack spacing={2}>
            <Item sx={{ m: 2}}>
                <TextField sx={{ m: 2,marginLeft: 2,fullWidth: 1 }}
                name="Name"
                id="Name" 
                label="Name" 
                variant="outlined" 
                value={formData.Name}
                onChange={handleChange}/>
                <TextField sx={{ m: 2,marginLeft: 17}}
                name="LastName"
                id="LastName" 
                label="Last name" 
                variant="outlined" 
                value={formData.LastName}
                onChange={handleChange}/>
          
                
            </Item>
            <Item>
              <TextField fullWidth
                    type="email"
                    name="Email"
                    id="Email" 
                    label="Email" 
                  
                    variant="outlined" 
                    value={formData.Email}
                    onChange={handleChange}/>
            </Item>
            <Item>
              <FormControlLabel              
                    control={<Checkbox 
                      name="Confirm"
                      checked={formData.Confirm}
                      onChange={(event) => setFormData({ ...formData, Confirm: event.target.checked })}
                      id='Confirm'  />} 
                    label="Confirm PDPA" />
            </Item>
            <Item>
             <FormControl>
                    <FormLabel 
                    id="Gender">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="Gender"
                    value={formData.Gender}
                    onChange={(event: SelectChangeEvent) => {
                      const { name, value } = event.target;
                      setFormData((prevForm) => ({
                        ...prevForm,
                        [name]: value,
                      }));
                    }}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="etc" control={<Radio />} label="etc" />

                  </RadioGroup>
                  
                </FormControl>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Hobby</FormLabel>
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="Game"
                      checked={formData.Hobby.includes('Game')}
                      onChange={(event, checked) => handleCheckboxGroupChange(event as React.ChangeEvent<HTMLInputElement>)}
                      control={<Checkbox />}
                      label="Game"
                      
                    />
                    <FormControlLabel
                      value="Music"
                      checked={formData.Hobby.includes('Music')}
                      onChange={(event, checked) => handleCheckboxGroupChange(event as React.ChangeEvent<HTMLInputElement>)}
                      control={<Checkbox />}
                      label="Music"
                    />
                    <FormControlLabel
                      value="Craft"
                      checked={formData.Hobby.includes('Craft')}
                      onChange={(event, checked) => handleCheckboxGroupChange(event as React.ChangeEvent<HTMLInputElement>)}  
                      control={<Checkbox />}
                      label="Craft"
                    />
                    <FormControlLabel
                      value="Reading"
                      checked={formData.Hobby.includes('Reading')}
                      onChange={(event, checked) => handleCheckboxGroupChange(event as React.ChangeEvent<HTMLInputElement>)}
                      control={<Checkbox />}
                      label="Reading"
                    />
                  </FormGroup>
                </FormControl>
            </Item>
            
            <Item>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="Status"
              name="Status"
              value={formData.Status}
              label="Status"
              onChange={(event: SelectChangeEvent) => {
                const { name, value } = event.target;
                setFormData((prevForm) => ({
                  ...prevForm,
                  [name]: value,
                }));
              }}
            >
              <MenuItem value="Single">Single</MenuItem>
              <MenuItem value="Married">Married</MenuItem>
              <MenuItem value="Divorce">Divorce</MenuItem>
            </Select>
          </FormControl>
            </Item>
            <Item>
                <TextField fullWidth
                 name='Note'
                 id="Note" 
                 label="Note" 
                 variant="outlined" 
                 value={formData.Note}
                 onChange={handleChange}/>
            </Item>
            <Item sx={{ display: 'flex', justifyContent: 'space-between', padding: 2}}>
            <Button variant="outlined" onClick={handleReset}>RESET</Button>
            <Button variant="contained" onClick={handleSubmit}>SUBMIT</Button>
            </Item>
          </Stack>
        {/* </Grid> */}
        {/* <Grid item xs={8}> */}
          <Item sx={{ height: '100%', boxSizing: 'border-box' }}>Column 2</Item>
        {/* </Grid> */}
      </Grid>
    </Box>
    </div>
  );
}