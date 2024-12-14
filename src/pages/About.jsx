import React from 'react';
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my: 15,
          textAlign: 'center',
          p: 2,
          '& h3':{
            fontWeight: 'bold',
            my: 2,
            fontSize: '2.5rem',
          }, '& h4':{
            fontWeight: 'bold',
            my: 2,
          },
          '& p': {
            textAlign: 'justify'
          },
          '@media (max-width:600px)':{
            mt:0,
            '& h3':{
              fontSize: '2rem'
            },
            '& h4':{
              fontSize: '1.5rem'
            }
          },
          '@media (max-width:900px)':{
            mt: 0
          },
        }}>
          <Typography variant='h3'>
            Welcome to Master Chef
          </Typography>
          <p>Where passion meets flavour! At our restaurant, we believe that every meal is an opportunity to create unforgettable experiences. Our chefs craft each dish with the finest, freshest ingredients, blending traditional recipes with modern techniques to delight your palate. Whether you're here for a quick bite, family dinner, or a special celebration, we're committed to providing exceptional service and an inviting atmosphere. Come savour the taste of our culinary creations and let us take you on a journey of delicious memories.</p>
          <br />
          <Typography variant='h4'>Vision Statement</Typography>
          <p>To become a beloved destination for food enthusiasts, known for our commitment to excellence, sustainability, and creating meaningful connections through the universal language of food. We aim to inspire and nurture a love for great dining, one meal at a time.</p>
          <br />
          <Typography variant='h4'>Mission Statement</Typography>
          <p>To provide exceptional dining experiences by serving fresh, high-quality cuisine in a warm, welcoming environment. We are dedicated to celebrating flavors, fostering community , and exceeding customer expectations through outstanding service and culinary innovation.</p>
        </Box>
    </Layout>
  );
};

export default About;