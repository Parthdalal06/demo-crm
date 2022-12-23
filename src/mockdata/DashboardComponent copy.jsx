import { Component, Fragment } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import List from "@mui/material/List";
import TicketCard from "./components/TicketCard";
import { ticketsData } from "./mockdata/tickets";

class DashboardComponent extends Component {
  constructor() {
    super();
    this.state = {
      statusSelected: "OPEN",
    };
  }
  handleChange = (event) => {
    this.setState({ statusSelected: event.target.value });
  };
  render() {
    return (
      <Fragment>
        <ToggleButtonGroup
          color="primary"
          value={this.state.statusSelected}
          exclusive
          onChange={this.handleChange}
          aria-label="status"
        >
          <ToggleButton value="OPEN">OPEN</ToggleButton>
          <ToggleButton value="CLOSED">CLOSED</ToggleButton>
        </ToggleButtonGroup>
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          {ticketsData
            .filter((ticket) => ticket.status == this.state.statusSelected)
            .map((ticket) => {
              return <TicketCard ticket={ticket} />;
            })}
        </List>
      </Fragment>
    );
  }
}
export default DashboardComponent;
