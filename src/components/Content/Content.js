import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Grid, TextField } from '@mui/material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filter = createFilterOptions();

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'client', headerName: 'Client', width: 70 },
  { field: 'contact', headerName: 'POC', width: 130 },
  { field: 'email', headerName: 'Email', width: 200 },
  {
    field: 'role',
    headerName: 'Role',
    width: 100,
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    width: 90,
  },
  {
    field: 'skillsNeeded',
    headerName: 'Skills Needed',
    width: 400,
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

const rows = [
  {
    id: 1,
    client: 'PwC',
    contact: 'Maria Rodriguez',
    email: 'M.RD43@datapiper.com',
    role: 'Core Senior Software Developer - Senior Associate',
    role: 'High',
    quantity: 1,
    skillsNeeded: 'Java, Springboot Docker/Kubernetes, API/microservices',
  },
  {
    id: 2,
    client: 'PwC',
    contact: 'Maria Rodriguez',
    email: 'M.RD43@datapiper.com',
    role: 'Core Senior Software Developer - Senior Associate',
    role: 'High',
    quantity: 1,
    skillsNeeded: 'Java, Springboot Docker/Kubernetes, API/microservices',
  },
  {
    id: 3,
    client: 'PwC',
    contact: 'David Smith',
    email: 'DavidS_33@datapiper.com',
    role: 'Zendesk Developer',
    role: 'Med',
    quantity: 1,
    skillsNeeded: 'Zendesk Developer',
  },
  {
    id: 4,
    client: 'PwC',
    contact: 'Rob Adams',
    email: 'A!2Robert@datapiper.com',
    role: 'Datavault 2.0',
    role: 'High',
    quantity: 1,
    skillsNeeded: 'Java, Springboot Docker/Kubernetes, API/microservices',
  },
  {
    id: 5,
    client: 'PwC',
    contact: 'Eliza Cath',
    email: 'ElizaT_Cat@datapiper.com',
    role: 'Snowflake data engineer',
    role: 'Low',
    quantity: 1,
    skillsNeeded: 'JD',
  },
  {
    id: 6,
    client: 'PwC',
    contact: 'Eliza Cath',
    email: 'ElizaT_Cat@datapiper.com',
    role: 'Snowflake data engineer',
    role: 'Low',
    quantity: 1,
    skillsNeeded: 'JD',
  },
  {
    id: 7,
    client: 'PwC',
    contact: 'Maria Rodriguez',
    email: 'M.RD43@datapiper.com',
    role: 'Core Senior Software Developer - Senior Associate',
    role: 'High',
    quantity: 1,
    skillsNeeded: 'Java, Springboot Docker/Kubernetes, API/microservices',
  },
  {
    id: 8,
    client: 'PwC',
    contact: 'Maria Rodriguez',
    email: 'M.RD43@datapiper.com',
    role: 'Core Senior Software Developer - Senior Associate',
    role: 'High',
    quantity: 1,
    skillsNeeded: 'Java, Springboot Docker/Kubernetes, API/microservices',
  },
  {
    id: 9,
    client: 'PwC',
    contact: 'David Smith',
    email: 'DavidS_33@datapiper.com',
    role: 'Zendesk Developer',
    role: 'Med',
    quantity: 1,
    skillsNeeded: 'Zendesk Developer',
  },
  {
    id: 10,
    client: 'PwC',
    contact: 'Rob Adams',
    email: 'A!2Robert@datapiper.com',
    role: 'Datavault 2.0',
    role: 'High',
    quantity: 1,
    skillsNeeded: 'Java, Springboot Docker/Kubernetes, API/microservices',
  },
  {
    id: 11,
    client: 'PwC',
    contact: 'Eliza Cath',
    email: 'ElizaT_Cat@datapiper.com',
    role: 'Snowflake data engineer',
    role: 'Low',
    quantity: 1,
    skillsNeeded: 'JD',
  },
  {
    id: 12,
    client: 'PwC',
    contact: 'Eliza Cath',
    email: 'ElizaT_Cat@datapiper.com',
    role: 'Snowflake data engineer',
    role: 'Low',
    quantity: 1,
    skillsNeeded: 'JD',
  },
];

const clientOptions = [{ title: 'Deloitte' }, { title: 'PwC' }];
const contactOptions = [
  { name: 'Maria Rodriguez', email: 'M.RD43@datapiper.com' },
  { name: 'David Smith', email: 'DavidS_33@datapiper.com' },
];
const roleOptions = [
  {
    name: 'Core Senior Software Developer - Senior Associate',
    urgency: 'High',
    quantity: 2,
  },
  {
    name: 'Zendesk Developer',
    urgency: 'Med',
    quantity: 1,
  },
  {
    name: 'Datavault 2.0',
    urgency: 'High',
    quantity: 3,
  },
];

export default function Content() {
  const [clientValue, setClientValue] = React.useState(null);
  const [contactValue, setContactValue] = React.useState(null);
  const [roleValue, setRoleValue] = React.useState(null);
  const [skillsValue, setSkillsValue] = React.useState(null);

  const [openContact, toggleOpenContact] = React.useState(false);
  const [openRole, toggleOpenRole] = React.useState(false);

  const handleContactClose = () => {
    setContactDialogValue({
      name: '',
      email: '',
    });

    toggleOpenContact(false);
  };

  const handleRoleClose = () => {
    setRoleDialogValue({
      name: '',
      urgency: '',
      quantity: 1,
    });

    toggleOpenRole(false);
  };

  const [contactDialogValue, setContactDialogValue] = React.useState({
    name: '',
    email: '',
  });

  const [roleDialogValue, setRoleDialogValue] = React.useState({
    name: '',
    urgency: '',
    quantity: 1,
  });

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setContactValue({
      name: contactDialogValue.name,
      email: contactDialogValue.email,
    });

    handleContactClose();
  };

  const handleRoleSubmit = (event) => {
    event.preventDefault();
    setRoleValue({
      name: roleDialogValue.name,
      urgency: roleDialogValue.urgency,
      quantity: roleDialogValue.quantity,
    });

    handleRoleClose();
  };

  return (
    <Box
      sx={{
        marginTop: 10,
        height: 750,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '20px',
          marginBottom: '20px',
        }}
      >
        <Grid
          container
          spacing={20}
          sx={{
            width: '100%',
          }}
        >
          <Grid item xs={12} sm={3}>
            <Autocomplete
              value={clientValue}
              onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                  setClientValue({
                    title: newValue,
                  });
                } else if (newValue && newValue.inputValue) {
                  // Create a new value from the user input
                  setClientValue({
                    title: newValue.inputValue,
                  });
                } else {
                  setClientValue(newValue);
                }
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some(
                  (option) => inputValue === option.title
                );
                if (inputValue !== '' && !isExisting) {
                  filtered.push({
                    inputValue,
                    title: `Add "${inputValue}"`,
                  });
                }

                return filtered;
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              id='client'
              options={clientOptions}
              getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                  return option.inputValue;
                }
                // Regular option
                return option.title;
              }}
              renderOption={(props, option) => (
                <li {...props}>{option.title}</li>
              )}
              sx={{ width: 200 }}
              freeSolo
              renderInput={(params) => <TextField {...params} label='Client' />}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Autocomplete
              value={contactValue}
              onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                  // timeout to avoid instant validation of the dialog's form.
                  setTimeout(() => {
                    toggleOpenContact(true);
                    setContactDialogValue({
                      name: newValue,
                      email: '',
                    });
                  });
                } else if (newValue && newValue.inputValue) {
                  toggleOpenContact(true);
                  setContactDialogValue({
                    name: newValue.inputValue,
                    email: '',
                  });
                } else {
                  setContactValue(newValue);
                }
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                if (params.inputValue !== '') {
                  filtered.push({
                    inputValue: params.inputValue,
                    name: `Add "${params.inputValue}"`,
                  });
                }

                return filtered;
              }}
              id='contact'
              options={contactOptions}
              getOptionLabel={(option) => {
                // e.g value selected with enter, right from the input
                if (typeof option === 'string') {
                  return option;
                }
                if (option.inputValue) {
                  return option.inputValue;
                }
                return option.name;
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              renderOption={(props, option) => (
                <li {...props}>{option.name}</li>
              )}
              sx={{ width: 200 }}
              freeSolo
              renderInput={(params) => (
                <TextField {...params} label='Contact' />
              )}
            />
            <Dialog open={openContact} onClose={handleContactClose}>
              <form onSubmit={handleContactSubmit}>
                <DialogTitle>Add a new contact</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Please add your new contact.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    value={contactDialogValue.name}
                    onChange={(event) =>
                      setContactDialogValue({
                        ...contactDialogValue,
                        name: event.target.value,
                      })
                    }
                    label='name'
                    type='text'
                    variant='standard'
                  />
                  <TextField
                    margin='dense'
                    id='name'
                    value={contactDialogValue.email}
                    onChange={(event) =>
                      setContactDialogValue({
                        ...contactDialogValue,
                        email: event.target.value,
                      })
                    }
                    label='email'
                    type='text'
                    variant='standard'
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleContactClose}>Cancel</Button>
                  <Button type='submit'>Add</Button>
                </DialogActions>
              </form>
            </Dialog>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Autocomplete
              value={roleValue}
              onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                  // timeout to avoid instant validation of the dialog's form.
                  setTimeout(() => {
                    toggleOpenRole(true);
                    setRoleDialogValue({
                      name: newValue,
                      urgency: '',
                      quantity: 1,
                    });
                  });
                } else if (newValue && newValue.inputValue) {
                  toggleOpenRole(true);
                  setRoleDialogValue({
                    name: newValue.inputValue,
                    urgency: '',
                    quantity: 1,
                  });
                } else {
                  setRoleValue(newValue);
                }
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                if (params.inputValue !== '') {
                  filtered.push({
                    inputValue: params.inputValue,
                    name: `Add "${params.inputValue}"`,
                  });
                }

                return filtered;
              }}
              id='role'
              options={roleOptions}
              getOptionLabel={(option) => {
                // e.g value selected with enter, right from the input
                if (typeof option === 'string') {
                  return option;
                }
                if (option.inputValue) {
                  return option.inputValue;
                }
                return option.name;
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              renderOption={(props, option) => (
                <li {...props}>{option.name}</li>
              )}
              sx={{ width: 200 }}
              freeSolo
              renderInput={(params) => <TextField {...params} label='Role' />}
            />
            <Dialog open={openRole} onClose={handleRoleClose}>
              <form onSubmit={handleRoleSubmit}>
                <DialogTitle>Add a new role</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Please add your new role.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin='dense'
                    id='name'
                    value={roleDialogValue.name}
                    onChange={(event) =>
                      setRoleDialogValue({
                        ...roleDialogValue,
                        name: event.target.value,
                      })
                    }
                    label='name'
                    type='text'
                    variant='standard'
                  />
                  <TextField
                    margin='dense'
                    id='name'
                    value={roleDialogValue.urgency}
                    onChange={(event) =>
                      setRoleDialogValue({
                        ...roleDialogValue,
                        urgency: event.target.value,
                      })
                    }
                    label='urgency'
                    type='text'
                    variant='standard'
                  />
                  <TextField
                    margin='dense'
                    id='name'
                    value={roleDialogValue.quantity}
                    onChange={(event) =>
                      setRoleDialogValue({
                        ...roleDialogValue,
                        quantity: event.target.value,
                      })
                    }
                    label='quantity'
                    type='number'
                    variant='standard'
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleRoleClose}>Cancel</Button>
                  <Button type='submit'>Add</Button>
                </DialogActions>
              </form>
            </Dialog>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Autocomplete
              value={skillsValue}
              onChange={(event, newValue) => {
                if (typeof newValue === 'string') {
                  setSkillsValue({
                    title: newValue,
                  });
                } else if (newValue && newValue.inputValue) {
                  // Create a new value from the user input
                  setSkillsValue({
                    title: newValue.inputValue,
                  });
                } else {
                  setSkillsValue(newValue);
                }
              }}
              filterOptions={(options, params) => {
                const filtered = filter(options, params);

                const { inputValue } = params;
                // Suggest the creation of a new value
                const isExisting = options.some(
                  (option) => inputValue === option.title
                );
                if (inputValue !== '' && !isExisting) {
                  filtered.push({
                    inputValue,
                    title: `Add "${inputValue}"`,
                  });
                }

                return filtered;
              }}
              selectOnFocus
              clearOnBlur
              handleHomeEndKeys
              id='skills'
              options={clientOptions}
              getOptionLabel={(option) => {
                // Value selected with enter, right from the input
                if (typeof option === 'string') {
                  return option;
                }
                // Add "xxx" option created dynamically
                if (option.inputValue) {
                  return option.inputValue;
                }
                // Regular option
                return option.title;
              }}
              renderOption={(props, option) => (
                <li {...props}>{option.title}</li>
              )}
              sx={{ width: 200 }}
              freeSolo
              renderInput={(params) => <TextField {...params} label='Skills' />}
            />
          </Grid>
        </Grid>
      </Box>
      <div style={{ height: 750, width: '80%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </Box>
  );
}
