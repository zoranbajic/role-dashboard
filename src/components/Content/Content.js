import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'client', headerName: 'Client', width: 70 },
  { field: 'contact', headerName: 'POC', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  {
    field: 'role',
    headerName: 'Role',
    width: 200,
  },
  {
    field: 'quantity',
    headerName: 'Quantity',
    width: 90,
  },
  {
    field: 'skillsNeeded',
    headerName: 'Skills Needed',
    width: 200,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
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
    skillsNeeded: 'Java, Springboot Docker/Kubernetes, API/microserices',
  },
  {
    id: 2,
    client: 'PwC',
    contact: 'Maria Rodriguez',
    email: 'M.RD43@datapiper.com',
    role: 'Core Senior Software Developer - Senior Associate',
    role: 'High',
    quantity: 1,
    skillsNeeded: 'Java, Springboot Docker/Kubernetes, API/microserices',
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
    skillsNeeded: 'Java, Springboot Docker/Kubernetes, API/microserices',
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
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%', marginTop: 100 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
