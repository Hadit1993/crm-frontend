import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/privateRoute/PrivateRoute.comp";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./pages/dashboard/Dashboard.page";
import { Entry } from "./pages/entry/Entry.page";
import AddTicket from "./pages/newTicket/AddTicket.page";
import TicketPage from "./pages/ticket/Ticket.page";
import TicketList from "./pages/ticketListing/TicketList.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          <DefaultLayout>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/add-ticket">
              <AddTicket />
            </PrivateRoute>
            <PrivateRoute path="/tickets">
              <TicketList />
            </PrivateRoute>

            <PrivateRoute path="/ticket/:tId">
              <TicketPage />
            </PrivateRoute>
          </DefaultLayout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
