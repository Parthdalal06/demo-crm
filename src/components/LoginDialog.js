import  Dialog  from "@mui/material/Dialog";
import  DialogContent  from "@mui/material/DialogContent";
import  DialogTitle  from "@mui/material/DialogTitle";
import  DialogActions  from "@mui/material/DialogActions";
import  DialogContentText  from "@mui/material/DialogContentText";
import  TextField  from "@mui/material/TextField";
import  Switch  from "@mui/material/Switch";
import  FormGroup  from "@mui/material/FormGroup";
import  FormControlLabel  from "@mui/material/FormControlLabel";
import  Button  from "@mui/material/Button";
import { useEffect, useState } from "react";

function LoginDialog ({open,toggleLoginDialog}){
    const [showRegisterFields,setShowRegisterFields] = useState(false);

    const handleClose = () => {
       alert("login attempted");
       toggleLoginDialog();
    }
    const handleRegisterClick = () =>{
        setShowRegisterFields(!showRegisterFields);
    }

    return(
        <Dialog open={open} >
            <FormGroup>
               
  <FormControlLabel control={<Switch onChange={handleRegisterClick} />} label="Register" />
</FormGroup>
        <DialogTitle>{showRegisterFields?`Register`:`Login`} to CRM</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please {showRegisterFields?`register`:`login`} to continue
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
          {showRegisterFields && <TextField
            margin="dense"
            id="email"
            label="email"
            type="email"
            fullWidth
            variant="standard"
          />}
        </DialogContent>
        <DialogActions>
         <Button onClick={handleClose}>{showRegisterFields?`Register`:`Login`}</Button>
        </DialogActions>
      </Dialog>
    )
}
export default LoginDialog;