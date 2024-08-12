// import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import whatsapp from '../assets/whatsappimage.jpg';
import './Pregnancy.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const DoctorCard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className="bg">
        <Box className="glass-nav">
          {/* AppBar and other components removed as they are not used */}
        </Box>

        <Box className="grid">
          <Typography variant="h4" align="center" gutterBottom>
            DOCTOR PROFILE
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} className='doctors'>
              <Box className="card">
                <img
                  src={"https://media.istockphoto.com/id/1293373291/photo/portrait-of-confident-ethnic-female-doctor.jpg?s=612x612&w=0&k=20&c=CJsw6IgTecJZoBeVXqZdvh2BI-NyVa-8VcQM3fPhbYc="}
                  alt="Doctor"
                  style={{
                    marginBottom: 16,
                    height: '300px',
                    width: '300px',
                    objectFit: 'cover',
                  }}
                />
                <Typography variant="h6">Dr. Vaani</Typography>
                <Typography variant="body1" color="textSecondary">
                  Gynecologist
                </Typography>
                <a href="https://wa.me/+919894552798" style={{ textDecoration: 'none', color: 'black' }}>
                  <Box className="card-icon">
                    <img
                      src={whatsapp}
                      alt="WhatsApp"
                      style={{
                        borderRadius: '50%',
                        height: 50,
                        width: 50,
                        objectFit: 'cover',
                        marginBottom: 8,
                      }}
                    />
                    <Typography>WhatsApp</Typography>
                  </Box>
                </a>
              </Box>

              <Box className="card">
                <img
                  src={"https://media.istockphoto.com/id/1398828096/photo/portrait-of-a-young-indian-doctor-wearing-a-stethoscope-sitting-in-a-office-writing-a.jpg?s=612x612&w=0&k=20&c=JHRk3XilS2_pzTTcuozuVTX49I7AXuI8vN_NjHJQ04w="}
                  alt="Doctor"
                  style={{
                    marginBottom: 16,
                    height: '300px',
                    width: '300px',
                    objectFit: 'cover',
                  }}
                />
                <Typography variant="h6">Dr. Vimala</Typography>
                <Typography variant="body1" color="textSecondary">
                  Gynecologist
                </Typography>
                <a href="https://wa.me/+919159954311" style={{ textDecoration: 'none', color: 'black' }}>
                  <Box className="card-icon">
                    <img
                      src={whatsapp}
                      alt="WhatsApp"
                      style={{
                        borderRadius: '50%',
                        height: 50,
                        width: 50,
                        objectFit: 'cover',
                        marginBottom: 8,
                      }}
                    />
                    <Typography>WhatsApp</Typography>
                  </Box>
                </a>
              </Box>
              <Box className="card">
                <img
                  src={"https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZlbWFsZSUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"}
                  alt="Doctor"
                  style={{
                    marginBottom: 16,
                    height: '300px',
                    width: '300px',
                    objectFit: 'cover',
                  }}
                />
                <Typography variant="h6">Dr. Bhagya</Typography>
                <Typography variant="body1" color="textSecondary">
                  Gynecologist
                </Typography>
                <a href="https://wa.me/+919843873343" style={{ textDecoration: 'none', color: 'black' }}>
                  <Box className="card-icon">
                    <img
                      src={whatsapp}
                      alt="WhatsApp"
                      style={{
                        borderRadius: '50%',
                        height: 50,
                        width: 50,
                        objectFit: 'cover',
                        marginBottom: 8,
                      }}
                    />
                    <Typography>WhatsApp</Typography>
                  </Box>
                </a>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DoctorCard;
