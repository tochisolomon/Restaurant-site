import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Call, Mail, SupportAgent } from '@mui/icons-material';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{my: 5, ml: 10, '& h4':{fontWeight:'bold', mb: 2}}}>
          <Typography variant='h4' >
            Contact Master Chef
          </Typography>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, hic aliquid, numquam, excepturi doloremque culpa recusandae repellat adipisci quas necessitatibus veniam quidem! Incidunt libero perspiciatis reprehenderit numquam magni, nobis expedita.</p>
        </Box>
        <Box sx={{m: 3, width:'600px', ml: 10,
          '@media (max-width:700px)': {
            width: '300px'
          },
          '@media (max-width:400px)':{
            width: '200px'
          }
        }}>
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black', color:'white', fontWeight:'bold'}} align='center'
                  
                  >CONTACT DETAILS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgent sx={{color:'red', pt: 1}}/> 1800-00-0000 (toll free)
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <Mail sx={{color:'skyblue', pt: 1}}/> kvngfrank96@gmail.com
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <Call sx={{color:'black', pt: 1}}/> +234 916 787 0948
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact