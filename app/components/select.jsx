import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function MultipleSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* <React.Fragment>
      <Container fixed>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <CssBaseline />
        <TextField id="outlined-basic" label="Name" variant="outlined"></TextField>
        <TextField id="outlined-basic" label="Last name" variant="outlined"></TextField> <br></br>
        <TextField id="outlined-basic" label="Email" variant="outlined"></TextField><br></br>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Confirm PDPA" /><br></br>

        <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group">
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="etc" control={<Radio />} label="Other" />
    
        </RadioGroup>
        </FormControl>
        
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
    </Box>
      </Container>
      </React.Fragment>

  ); */}
    </div>
  );
}
