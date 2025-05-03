'use client';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Header from '@/app/components/header';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ColumnLayoutInsideGrid() {
const [Status, setStatus] = React.useState('');
const handleChange = (event: SelectChangeEvent) => {
  setStatus(event.target.value as string);
};


  return (
    
    <div className="MuiBox-root css-1i3v59a">
      <Header/>
      <div className="MuiTypography-root MuiTypography-h4 css-txqzc7">Profile management</div>
      
      

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Stack spacing={2}>
            <Item>
                <TextField id="outlined-basic" label="Name" variant="outlined" />
                <TextField id="outlined-basic" label="Last name" variant="outlined" />
            </Item>
            <Item>
              <TextField id="outlined-E" label="Email" variant="outlined" />
            </Item>
            <Item>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Confirm PDPA" />
            </Item>
            <Item>
             <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel
                      value="disabled"
                      disabled
                      control={<Radio />}
                      label="other"
                    />
                  </RadioGroup>
                  
                </FormControl>

            </Item>
            <Item>
                  <FormControl component="fieldset">
                  <FormLabel component="legend">Hobby</FormLabel>
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="bottom"
                      control={<Checkbox />}
                      label="Game"
                      
                    />
                    <FormControlLabel
                      value="end"
                      control={<Checkbox />}
                      label="Music"
                    />
                    <FormControlLabel
                      value="end"
                      control={<Checkbox />}
                      label="Craft"
                    />
                    <FormControlLabel
                      value="end"
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
              id="demo-simple-select"
              value={Status}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value={10}>Single</MenuItem>
              <MenuItem value={20}>Married</MenuItem>
              <MenuItem value={30}>Divorce</MenuItem>
            </Select>
          </FormControl>
            </Item>
            <Item>
                <TextField id="outlined-basic" label="Note" variant="outlined" />
            </Item>
            <Item>
            <Button variant="contained">RESET</Button>
            <Button variant="contained">SUBMIT</Button>
            </Item>
          </Stack>
        </Grid>
        <Grid size={8}>
          <Item sx={{ height: '100%', boxSizing: 'border-box' }}>Column 2</Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}