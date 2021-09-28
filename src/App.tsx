import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import Dashboard from "./pages/dashboard/Dashboard.page";
import { Entry } from "./pages/entry/Entry.page";
import AddTicket from "./pages/newTicket/AddTicket.page";
import TicketList from "./pages/ticketListing/TicketList.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketList />
      </DefaultLayout>
    </div>
  );
}

export default App;
