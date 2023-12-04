import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '7.5rem'
          }}
        >
          <img src="/images/modangSide.png" width="60px" alt=''/>
          <Typography component="h1"  variant="h4" style={{ fontWeight: 'bold' }}>
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container marginTop="2.5rem" spacing={2}>
            <Grid item xs={12}>
                이메일
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일을 입력해주세요."
                  name="email"
                  autoComplete="email"
                  helperText="가천대 이메일을 통해 회원가입해주세요."
                />
              </Grid>
              <Grid item xs={12} >
                닉네임
                <TextField
                  required
                  fullWidth
                  id="nickname"
                  label="닉네임을 입력해주세요."
                  name="nickname"
                  autoComplete="nickname"
                />
              </Grid>
             
              
              <Grid item xs={12}>
                비밀번호
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호를 입력해주세요."
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              회원가입
            </Button>
            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}