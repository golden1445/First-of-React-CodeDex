import Notification from "./Notification.js";
export default function App() {
  return <div>{
    <div>
  <h1>Notifications</h1>
  <Notification message="Fatima commented on your post." isRead={true} />
  <Notification message="Daniel's birthday is today! 🎂" isRead={false} />
  <Notification message="Rhea just posted on their feed!" isRead={true} />
</div>
  }</div>;
}
{/* Props used */}
import React from "react";

export default function Notification(props) {
  let classString = "";

  // Replace string below
  if ("replace with isRead prop" == false) {
    classString = "not-read";
  }
  return <div className={classString}>{props.message}</div>;
}

