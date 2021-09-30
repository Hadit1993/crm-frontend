import TicketHistory from "../../models/History";
import "./messageHistory.style.css";

const MessageHistory = (props: { message: TicketHistory[] }) => {
  return (
    <div>
      {props.message.map((value) => (
        <div key={value.date} className="message-history mt-3">
          <div
            style={{ fontWeight: "bold" }}
            className="send font-weight-bold text-secondary"
          >
            <div className="sender">{value.messageBy}</div>
            <div className="date">{value.date}</div>
          </div>
          <div className="message">{value.message}</div>
        </div>
      ))}
    </div>
  );
};

export default MessageHistory;
