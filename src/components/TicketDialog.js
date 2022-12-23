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
import { useEffect, useRef, useState } from "react";
import { Description } from "@mui/icons-material";

function TicketDialog ({open,toggleTicketDialog,data=null}){
    const [isNewTicket,setIsNewTicket] = useState(data!=null?false:true);
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    //const titleRef = useRef();

    const handleClose = () => {
       alert("ticket creation attempted");
      //console.log(titleRef.current.value);
       toggleTicketDialog();
    }

    return(
        <Dialog open={open} >
        <DialogTitle>{isNewTicket?`Create`:`Update`} Ticket</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            value={title}
            //inputRef={titleRef}
            type="text"
            fullWidth
            onChange={(event)=> setTitle(event.target.value)}
            variant="standard"
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            value={description}
            fullWidth
            multiline
            onChange={(event)=> setDescription(event.target.value)}
            variant="standard"
          />
          
        </DialogContent>
        <DialogActions>
         <Button onClick={handleClose}>{isNewTicket?`Create`:`Update`}</Button>
        </DialogActions>
      </Dialog>
    )
}
export default TicketDialog;