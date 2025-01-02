import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import { Grid, Typography } from '@mui/material';

const Appointments = () => {

 
  const columns = ["Name", "Company", "City", "State"];

const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: 'checkbox',
  responsive: 'standard', // Use 'stacked' for better responsiveness on small screens

};
  return (
      <div className="Appointments">
      <h2> Appointments</h2>
      <Grid
container
spacing={2}

>
{/* Header Section */}
<Grid item xs={12} sm={10} md={8} lg={6}>
  <Typography variant="h4" component="h2" sx={{ textAlign: 'center', mb: 2 }}>
    Records
  </Typography>
</Grid>

{/* DataTable Section */}
<Grid
  item
  xs={12}
  sm={12}
  md={10}
  lg={8}
 
>
  <MUIDataTable
    title={"Employee List"}
    data={data}
    columns={columns}
    options={options}
  />
</Grid>
</Grid>
      </div>
      
      
  )
}

export default Appointments;