import { Fragment, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import TicketCard from "../../components/TicketCard";
import { ticketsData } from "../../mockdata/tickets";
import TicketDialog from "../../components/TicketDialog";

function DashboardComponent() {
  const [ticketData, setTicketsData] = useState(ticketsData);
  const [isTicketDialogOpen,setIsTicketdialogOpen] = useState(false); 
  const [statusSelected, setStatusSelected] = useState("OPEN");

  const handleChange = (event) => {
    setStatusSelected(event.target.value);
  };

  const addTicket = () => {
    setTicketsData([
      ...ticketData,
      {
        id: 12,
        title: "creation of new ticket",
        description: "new ticket created",
        assignee: "parth",
        reporter: "dyutimay",
        status: "OPEN",
      },
    ]);
  };
  const toggleTicketDialog = () =>{
    setIsTicketdialogOpen(!isTicketDialogOpen);
  }
  return (
    <Fragment>
      <TicketDialog open={isTicketDialogOpen} toggleTicketDialog={toggleTicketDialog}/>
      <ToggleButtonGroup
        color='primary'
        value={statusSelected}
        exclusive
        onChange={handleChange}
        aria-label='status'
      >
        <ToggleButton value='OPEN'>OPEN</ToggleButton>
        <ToggleButton value='CLOSED'>CLOSED</ToggleButton>
      </ToggleButtonGroup>
      <Button variant='contained' onClick={toggleTicketDialog}>
        Create New Ticket
      </Button>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
        }}
      >
        {ticketData
          .filter((ticket) => ticket.status === statusSelected)
          .map((ticket) => {
            return <TicketCard ticket={ticket} />;
          })}
      </List>
    </Fragment>
  );
}
export default DashboardComponent;
