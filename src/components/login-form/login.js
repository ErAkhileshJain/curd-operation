import React , {useState} from 'react'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './login.css'

function LoginForm() {

const [username, setUsername]=useState('');
const [password, setpassword]=useState('');
const [errMsg, setErrMsg] = useState('');

    const login = ()=>{
setErrMsg('')
if(!username){
    setErrMsg("Can't Empty username");
    return
}
if(!password){
    setErrMsg("Can't Empty password");
    return
}
console.log(username)
console.log(password)
const payload={
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify({
        "email":"admin@gmail.com",
        "password":"1234@asdf"
      }),
      


}
fetch('https://peaceful-stream-42545.herokuapp.com/api/v1/auth/login',payload).then(response=>response.json()).then(data=>{
    console.log(data)
}).catch(e=>{console.log(e)})

    }

    return (
        <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
     <div>
        <TextField
          id="outlined-required"
          label="User Name"
          type="text"
          onChange={e => setUsername(e.target.value)} value={username}
        />
        {errMsg ? <p className="errMsg">{errMsg}</p> : null}
        </div><div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          onChange={e => setpassword(e.target.value)} value={password}
        />
{errMsg ? <p className="errMsg">{errMsg}</p> : null}
      </div>

      <Button variant="contained" onClick={login}>Login</Button>
      </Box>

    );
}


export default LoginForm;