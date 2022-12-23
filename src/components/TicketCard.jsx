import  ListItem  from "@mui/material/ListItem";
import  ListItemAvatar  from "@mui/material/ListItemAvatar";
import  Avatar  from "@mui/material/Avatar";
import  {ImageSearch}  from "@mui/icons-material";
import  ListItemText  from "@mui/material/ListItemText";
import { Fragment } from "react";

function TicketCard ({ticket}){
    return (<ListItem>
        <ListItemAvatar>
          <Avatar>
            <ImageSearch />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={ticket.title} secondary={
            <Fragment>
                 <p>{ticket.description}</p>
                <p>Assignee:{ticket.assignee}</p>
                <p>Reporter:{ticket.reporter}</p>
                <p>Status:{ticket.status}</p>
            </Fragment>
        } />
      </ListItem>
      );
}
export default TicketCard;