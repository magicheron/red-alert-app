import React from "react";
import "./InboxMenu.scss";
import { useStateValue } from "../../state";

function InboxMenu(props) {
  const [{ touchState }] = useStateValue();

  return (
    <div className={`circle-menu ${touchState.overInbox ? "activated" : ""}`}>
      <button id="inbox" className={`circle-button main`}>
        <svg
          width="27"
          height="22"
          viewBox="0 0 27 22"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22.95 0H4.05C2.97587 0 1.94574 0.426695 1.18622 1.18622C0.426695 1.94574 0 2.97587 0 4.05V17.55C0 18.6241 0.426695 19.6543 1.18622 20.4138C1.94574 21.1733 2.97587 21.6 4.05 21.6H22.95C24.0241 21.6 25.0543 21.1733 25.8138 20.4138C26.5733 19.6543 27 18.6241 27 17.55V4.05C27 2.97587 26.5733 1.94574 25.8138 1.18622C25.0543 0.426695 24.0241 0 22.95 0ZM22.0455 2.7L13.5 9.1125L4.9545 2.7H22.0455ZM22.95 18.9H4.05C3.69196 18.9 3.34858 18.7578 3.09541 18.5046C2.84223 18.2514 2.7 17.908 2.7 17.55V4.3875L12.69 11.88C12.9237 12.0553 13.2079 12.15 13.5 12.15C13.7921 12.15 14.0763 12.0553 14.31 11.88L24.3 4.3875V17.55C24.3 17.908 24.1578 18.2514 23.9046 18.5046C23.6514 18.7578 23.308 18.9 22.95 18.9Z" />
        </svg>
      </button>

      <button id="archive" className={`circle-button popup`}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.30005 27.1H27.1V18.2L22.6 5.30005H9.80005L5.30005 18.2V27.1Z"
            strokeWidth="2.6"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M5.40002 18.2H10.9L12.5 21.7H19.8L21.5 18.2H26.9"
            strokeWidth="2.7"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button id="ignore" className={`circle-button popup`}>
        <svg
          width="21"
          height="15"
          viewBox="0 0 21 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.9 7.49998C20.3 6.39998 16.7 0.799977 10.8 0.999977C5.20001 1.09998 2.00001 5.99998 1.10001 7.49998C0.900012 7.79998 0.900012 8.19998 1.10001 8.49998C1.70001 9.59998 5.10001 15 11 15H11.2C16.7 14.9 19.9 9.99998 20.8 8.49998C21 8.19998 21 7.79998 20.9 7.49998ZM11.2 13C6.90001 13.1 4.10001 9.39998 3.20001 7.99998C4.20001 6.39998 6.80001 3.09998 10.8 2.99998C15.1 2.89998 17.9 6.59998 18.8 7.99998C17.8 9.59998 15.2 12.9 11.2 13Z" />
          <path d="M11 4.5C9.1 4.5 7.5 6.1 7.5 8C7.5 9.9 9.1 11.5 11 11.5C12.9 11.5 14.5 9.9 14.5 8C14.5 6.1 12.9 4.5 11 4.5ZM11 9.5C10.2 9.5 9.5 8.8 9.5 8C9.5 7.2 10.2 6.5 11 6.5C11.8 6.5 12.5 7.2 12.5 8C12.5 8.8 11.8 9.5 11 9.5Z" />
        </svg>
      </button>
    </div>
  );
}

export default InboxMenu;
