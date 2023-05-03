import "../styles/style.css";

const Notification = ({ message, messageType }) => {
  if (message === null) {
    return null;
  }

  return messageType === "success" ? (
    <div className="success">{message}</div>
  ) : (
    <div className="error">{message}</div>
  );
};

export default Notification;
