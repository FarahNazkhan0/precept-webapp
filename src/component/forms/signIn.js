import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ButtonGroup, Paper } from '@mui/material';
import '../../App.css'
import WebSocketConnection from '../../webSocketConnection';


const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username')
    const password = data.get('password')
    WebSocketConnection(username, password)
    console.log({
      username: username,
      password: password,
    });
  };

  return (
    <ThemeProvider theme={theme}>
     <Paper elevation={3} className="backgroundstyle">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            
          }}
        >
          <div >
          <Typography component="h1" variant="h4" className='textalign'>
            Welcome
          </Typography>
          <br/>
          <Typography component="p" variant="p" className='textalign'>
            Please login to your account.
          </Typography>
          </div>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <Grid container>
            {/* <Grid item>
              <FormControlLabel className='checkboxlabel'
              control={<Checkbox value="remember" color="primary" className='checkboxrm' />}
              label="Remember me"
               />
              </Grid>  */}
              <Grid item xs style={{marginLeft:"270px"}}>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
    
            <ButtonGroup className='btngroup'>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            
          
            <Button
              type="submit"
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              style={{marginLeft:"20px"}}
            >
              Sign Up
            </Button>
            
            </ButtonGroup>
          </Box>
        </Box>
      </Container>
      </Paper>
    </ThemeProvider>
  );
}