import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SimpleContainer() {
  return (
    <div>
      <form action="/test" method="POST">
        <input type="text" name="firstName" placeholder="Name" required />
        <input type="text" name="lastName" placeholder="Last name" required /> <br />
        <input type="email" name="email" placeholder="Email" required /> <br />
  
        <label>
          <input type="checkbox" name="pdpaConsent" required /> Confirm PDPA
        </label> <br />
  
        <div>
          <label>Gender:</label><br />
          <label><input type="radio" name="gender" value="male" required /> Male</label>
          <label><input type="radio" name="gender" value="female" required /> Female</label>
          <label><input type="radio" name="gender" value="other" required /> Other</label>
        </div>
  
        <div>
          <label>Hobby:</label><br />
          <label><input type="checkbox" name="hobbies" value="game" /> Game</label>
          <label><input type="checkbox" name="hobbies" value="music" /> Music</label>
          <label><input type="checkbox" name="hobbies" value="craft" /> Craft</label>
          <label><input type="checkbox" name="hobbies" value="reading" /> Reading</label>
        </div>
  
        /* <div>
          <label htmlFor="status">Status:</label>
          <select name="status" id="status">
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorce">Divorced</option>
          </select>
          <input type="text" name="Note" placeholder="Note" required />
        </div> */

        <Autocomplete
      disablePortal
       options={['Single', 'Married', 'Divorced']}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />

        
  
        <Stack spacing={2} direction="row">
      <Button variant="contained">Submit</Button>
    </Stack>
      </form>
    </div>
  );
  
}
