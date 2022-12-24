import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { signin, signup } from "../constants";

function LoginDialog({ open, toggleLoginDialog }) {
  const [showRegisterFields, setShowRegisterFields] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => {
    if (!showRegisterFields) {
      fetch(signin, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: username, password: password }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          if (!data.name) {
            alert(data.message);
          } else {
            localStorage.setItem("userDetails", JSON.stringify(data));
            toggleLoginDialog();
          }
        })
        .catch((error) => {
          console.log(error);
          alert(`Some error occured. Please retry`);
        });
    } else {
      const userData = {
        userId: username,
        password: password,
        email: email
      };

      fetch(signup, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: username, password: password }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          if (!data.name) {
            alert(data.message);
          } else {
            localStorage.setItem("userDetails", JSON.stringify(data));
            toggleLoginDialog();
          }
        })
        .catch((error) => {
          console.log(error);
          alert(`Some error occured. Please retry`);
        });
    }
  };
  const handleRegisterClick = () => {
    setShowRegisterFields(!showRegisterFields);
  };

  return (
    <Dialog open={open}>
      <FormGroup>
        <FormControlLabel
          control={<Switch onChange={handleRegisterClick} />}
          label='Register'
        />
      </FormGroup>
      <DialogTitle>
        {showRegisterFields ? `Register` : `Login`} to CRM
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please {showRegisterFields ? `register` : `login`} to continue
        </DialogContentText>
        <TextField
          autoFocus
          margin='dense'
          id='username'
          label='Username'
          type='email'
          fullWidth
          onChange={(event) => setUsername(event.target.value)}
          variant='standard'
        />
        <TextField
          margin='dense'
          id='password'
          label='Password'
          type='password'
          fullWidth
          onChange={(event) => setPassword(event.target.value)}
          variant='standard'
        />
        {showRegisterFields && (
          <TextField
            margin='dense'
            id='email'
            label='Email'
            error={email==""}
            type='email'
            fullWidth
            onChange={(event) => setEmail(event.target.value)}
            variant='standard'
          />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}
        disabled={
          username === "" ||
          password === "" 
        }
        >
          {showRegisterFields ? `Register` : `Login`}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default LoginDialog;
