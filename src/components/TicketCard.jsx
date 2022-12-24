import  ListItem  from "@mui/material/ListItem";
import  ListItemAvatar  from "@mui/material/ListItemAvatar";
import  Avatar  from "@mui/material/Avatar";
import  {Edit, ImageSearch}  from "@mui/icons-material";
import  ListItemText  from "@mui/material/ListItemText";
import { Fragment } from "react";
import { Typography } from "@mui/material";

function TicketCard ({ticket,selectedTicket}){
  return (<ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageSearch />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={<Typography>{ticket.title} <Edit onClick={()=>selectedTicket(ticket)}/> </Typography>} secondary={
            <Fragment>
                 <p>{ticket.description}</p>
                <p>Assignee:{ticket.assignee}</p>
                <p>Reporter:{ticket.reporter}</p>
                <p>Status:{ticket.status}</p>
            </Fragment>
        }/>
      </ListItem>
      );
}
export default TicketCard;
