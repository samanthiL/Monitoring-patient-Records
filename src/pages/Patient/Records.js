import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import { Grid, Typography } from '@mui/material';

const Records = () => {

 
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
//       <div className="item3" sx>
//       <h2> Records</h2>
      
//       <MUIDataTable
//   title={"Employee List"}
//   data={data}
//   columns={columns}
//   options={options}
// />
//       </div>
<Grid
container
spacing={2}
sx={{
  padding: 2,
  width: '100%',
  margin: '0 auto',
  justifyContent: 'center',
}}
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
  sx={{
    '& .MUIDataTableHeadCell': {
      fontSize: '0.9rem',
      '@media (max-width: 600px)': {
        fontSize: '0.8rem',
      },
    },
    '& .MUIDataTableBodyCell': {
      fontSize: '0.85rem',
      '@media (max-width: 600px)': {
        fontSize: '0.75rem',
      },
    },
  }}
>
  <MUIDataTable
    title={"Employee List"}
    data={data}
    columns={columns}
    options={options}
  />
</Grid>
</Grid>

  )
}

export default Records;