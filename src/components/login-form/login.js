// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import "./login.css";

// function LoginForm() {
//   const [username, setUsername] = useState("");
//   const [password, setpassword] = useState("");
//   const [errMsg, setErrMsg] = useState("");

//   const login = () => {
//     setErrMsg("");
//     if (!username) {
//       setErrMsg("Can't Empty username");
//       return;
//     }
//     if (!password) {
//       setErrMsg("Can't Empty password");
//       return;
//     }
//     console.log(username);
//     console.log(password);
//     const payload = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: username,
//         password: password,
//       }),
//     };
//     fetch(
//       "https://peaceful-stream-42545.herokuapp.com/api/v1/auth/login",
//       payload
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   };

//   return (
//     <Box
//       component="form"
//       sx={{
//         "& .MuiTextField-root": { m: 1, width: "25ch" },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div className="myDiv">
//         <div>
//           <TextField
//             id="outlined-required"
//             label="User Name"
//             type="text"
//             onChange={(e) => setUsername(e.target.value)}
//             value={username}
//           />
//           {errMsg ? <p className="errMsg">{errMsg}</p> : null}
//         </div>
//         <div>
//           <TextField
//             id="outlined-password-input"
//             label="Password"
//             type="password"
//             onChange={(e) => setpassword(e.target.value)}
//             value={password}
//           />
//           {errMsg ? <p className="errMsg">{errMsg}</p> : null}
//         </div>
//         <div clas>
//           <Button variant="contained" onClick={login}>
//             Login
//           </Button>
//         </div>
//       </div>
//     </Box>
//   );
// }

// export default LoginForm;

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

function SignInSide() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const login = () => {
    setErrMsg("");
    if (!username) {
      setErrMsg("Can't Empty username");
      return;
    }
    if (!password) {
      setErrMsg("Can't Empty password");
      return;
    }
    console.log(username);
    console.log(password);
    const payload = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    };
    fetch(
      "https://peaceful-stream-42545.herokuapp.com/api/v1/auth/login",
      payload
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('userToken',data.result.token);
        navigate('/dashboard');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setUsername(e.target.value)}
                value={username}
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
                onChange={(e) => setpassword(e.target.value)}
                value={password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={login}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;
