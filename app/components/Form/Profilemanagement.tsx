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
import '../css/card.css';
import Card from '@mui/material/Card'
import {Typography,IconButton,CardContent} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';








export default function ManagementForm() {
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
  const [submittedData, setSubmittedData]= useState<typeof formData[]>([]);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setFormData((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    setSubmittedData((prevData) => [...(prevData || []), formData]);
    setFormData({
    Name: '',
    LastName: '',
    Email: '',
    Confirm: false,
    Gender: '',
    Hobby: [],
    Status: '',
    Note: '',
  });
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
  const handleDelete = (index: number) => {
    setSubmittedData((prevData) => prevData.filter((_, i) => i !== index));
  };



 
  return (
    <div>
    

    <Box sx={{ flexGrow: 1, p: { xs: 1, sm: 2 },  }}>
          <Grid container spacing={2}>
                {/* Form Section with Border */}
                <Grid>
                <Typography
            variant="h4"
            sx={{
              fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' },
              mb: { xs: 1, sm: 2 ,md:1 },
              px: 1,
              py: 1,
              padding:5,
              textAlign:'center'
            }}
          >
            Profile Management
          </Typography>
                      <Box
                        sx={{
                          border: '1px outset',
                          borderRadius: 1,
                          p: { xs: 1, sm: 2 },
                          maxWidth: { xs: '100%', sm: 700 },
                          mx: 'auto',
                        
                          
                        }}
                      >
                    <Stack spacing={0.5}>
                      <form onSubmit={handleSubmit}>
                        <Box
                          sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            gap: 1,
                            mb: 0.5,
                          }}
                        >
                          <TextField
                            fullWidth
                            name="Name"
                            id="Name"
                            label="Name"
                            variant="outlined"
                            value={formData.Name}
                            onChange={handleChange}
                            sx={{ maxWidth: 380 }}
                          />
                          <TextField
                            fullWidth
                            name="LastName"
                            id="LastName"
                            label="Last Name"
                            variant="outlined"
                            value={formData.LastName}
                            onChange={handleChange}
                            sx={{ maxWidth: 380 }}
                          />
                        </Box>

                        <TextField
                          fullWidth
                          name="Email"
                          id="Email"
                          label="Email"
                          variant="outlined"
                          value={formData.Email}
                          onChange={handleChange}
                          sx={{ mb: 0.5, maxWidth: 700 }}
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              name="Confirm"
                              checked={formData.Confirm}
                              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                setFormData({ ...formData, Confirm: event.target.checked })
                              }
                              id="Confirm"
                            />
                          }
                          label="Confirm PDPA"
                          sx={{ mb: 0.5  }}
                        />
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: { xs: 'column', sm: 'row' },
                          gap: 2,
                          mb: 0.5,
                        }}
                      >
                        <FormControl sx={{ mb: 0.5 }}>
                          <FormLabel id="Gender">Gender</FormLabel>
                          <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="Gender"
                            value={formData.Gender}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                              const { name, value } = event.target;
                              setFormData((prevForm) => ({
                                ...prevForm,
                                [name]: value,
                              }));
                            }}
                          >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="etc" control={<Radio />} label="Etc" />
                          </RadioGroup>
                        </FormControl>

                        <FormControl component="fieldset" sx={{ mb: 0.5 }}>
                          <FormLabel component="legend">Hobby</FormLabel>
                          <FormGroup row>
                            {['Game', 'Music', 'Craft', 'Reading'].map((hobby) => (
                              <FormControlLabel
                                key={hobby}
                                value={hobby}
                                checked={formData.Hobby.includes(hobby)}
                                onChange={(event) =>
                                  handleCheckboxGroupChange(event as React.ChangeEvent<HTMLInputElement>)
                                }
                                control={<Checkbox />}
                                label={hobby}
                              />
                            ))}
                          </FormGroup>
                        </FormControl>
                          </Box>
                        <FormControl fullWidth sx={{ mb: 0.5 }}>
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

                        <TextField
                          fullWidth
                          name="Note"
                          id="Note"
                          label="Note"
                          variant="outlined"
                          value={formData.Note}
                          onChange={handleChange}
                          sx={{ mb: 0.5, maxWidth: 700 }}
                        />

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                          <Button variant="contained" onClick={handleReset} size="small">
                            RESET
                          </Button>
                          <Button type="submit" variant="contained" size="small">
                            SUBMIT
                          </Button>
                        </Box>
                      </form>
                    </Stack>
                  </Box>
                </Grid>

                {/* Submitted Data Section with Border */}
                <Grid sx={{ width: { xs: '100%', sm: '100%', md: 1000 } ,ml:5,mt:5,mb:5 }}> 
                
                  {submittedData.map((data, index) => (
                    <Card
                      key={index}
                      sx={{
                        mb: 0.5,
                        maxWidth: '100% !important',
                        mx: 'auto',
                        minHeight: 150,
                      }}
                    >
                      <CardContent
                        sx={{
                          border: '1px outer',
                          borderRadius: 1,
                          p: { xs: 2, sm: 2.5 },
                          display: 'flex',
                          flexDirection: { xs: 'column', sm: 'row' },
                          justifyContent: 'space-between',
                          gap: 10,
                          
                        }}
                      >
                        <Box sx={{ flex: 1 ,gap:5 }}>
                        <Typography
                              variant="h1"
                              sx={{
                                fontSize: { xs: '1.25rem', sm: '1.25rem', md: '1.25rem' },
                                mb: { xs: 1, sm: 2 },
                                px: 1,
                                py: 1,
                              }}
                            > USER {index + 1}</Typography>
                            
                          <Typography>
                                Name: {`${data.Name} ${data.LastName || '-'}`}
                            </Typography>
                          <Typography sx={{ flex: 1 }}>
                               Gender: {data.Gender || '-'}
                            </Typography>
                          
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: { xs: 'column', sm: 'row' },
                              gap: 2,
                              mb: 1.5,
                            }}
                          >
                            <Typography>Status: {data.Status || '-'}</Typography>
                            
                          </Box>
                          <FormControlLabel
                            disabled
                            control={<Checkbox checked={data.Confirm} />}
                            label="Confirm PDPA"
                          />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                        <br></br><br></br><br></br>
                          <Typography>
                            Email: {data.Email || '-'}
                            </Typography>
                          
                          <Typography sx={{ flex: 1 }}>
                              Hobby: {data.Hobby.join(', ') || '-'}
                            </Typography>
                            <Typography>
                              Note: {data.Note || '-'}
                              </Typography>
                        </Box>
                        <IconButton onClick={() => handleDelete(index)} sx={{ alignSelf: 'flex-start' }}>
                          <DeleteIcon />
                        </IconButton>
                      </CardContent>
                    </Card>
                  ))}
                
                </Grid>
          </Grid>
    </Box>
  </div>
  );
}