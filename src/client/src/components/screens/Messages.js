import React from "react";
import "./Messages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Messages = () => {
  return (
    <div className="messages">
      <div className="messages__searchWrapper">
          <FontAwesomeIcon icon={faSearch} className='icon'/>
          <input type="text" placeholder="Enter message..." />
      </div>
    </div>
  );
};

export default Messages;
