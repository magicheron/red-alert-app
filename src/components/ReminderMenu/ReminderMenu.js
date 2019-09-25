import React from "react";
import "./ReminderMenu.scss";
import { useStateValue } from "../../state";

function ReminderMenu(props) {
  const [{ touchState }] = useStateValue();

  return (
    <div
      className={`circle-menu ${touchState.overReminder ? "activated" : ""}`}
    >
      <button id="reminder" className={`circle-button main`}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.0001 0.666626C11.363 0.666626 8.78514 1.44861 6.59248 2.9137C4.39983 4.37878 2.69086 6.46116 1.68169 8.89751C0.672525 11.3339 0.408481 14.0147 0.92295 16.6012C1.43742 19.1876 2.7073 21.5633 4.572 23.428C6.4367 25.2927 8.81247 26.5626 11.3989 27.0771C13.9853 27.5916 16.6662 27.3275 19.1025 26.3184C21.5389 25.3092 23.6213 23.6002 25.0863 21.4076C26.5514 19.2149 27.3334 16.637 27.3334 14C27.3334 12.249 26.9885 10.5152 26.3185 8.89751C25.6484 7.27984 24.6663 5.80998 23.4282 4.57187C22.1901 3.33375 20.7202 2.35163 19.1025 1.68157C17.4849 1.0115 15.751 0.666626 14.0001 0.666626ZM14.0001 24.6666C11.8904 24.6666 9.82813 24.041 8.074 22.869C6.31988 21.6969 4.95271 20.031 4.14537 18.0819C3.33804 16.1328 3.1268 13.9881 3.53838 11.919C3.94995 9.84986 4.96586 7.94925 6.45761 6.45749C7.94938 4.96573 9.84999 3.94983 11.9191 3.53825C13.9883 3.12667 16.133 3.33791 18.082 4.14524C20.0311 4.95258 21.697 6.31975 22.8691 8.07388C24.0412 9.828 24.6668 11.8903 24.6668 14C24.6668 16.8289 23.5429 19.542 21.5426 21.5424C19.5422 23.5428 16.8291 24.6666 14.0001 24.6666Z" />
          <path d="M19.3334 12.6667H15.3334V8.66671C15.3334 8.31309 15.1929 7.97395 14.9429 7.7239C14.6928 7.47385 14.3537 7.33337 14.0001 7.33337C13.6465 7.33337 13.3073 7.47385 13.0573 7.7239C12.8072 7.97395 12.6667 8.31309 12.6667 8.66671V14C12.6667 14.3537 12.8072 14.6928 13.0573 14.9428C13.3073 15.1929 13.6465 15.3334 14.0001 15.3334H19.3334C19.687 15.3334 20.0262 15.1929 20.2762 14.9428C20.5263 14.6928 20.6667 14.3537 20.6667 14C20.6667 13.6464 20.5263 13.3073 20.2762 13.0572C20.0262 12.8072 19.687 12.6667 19.3334 12.6667Z" />
        </svg>
      </button>

      <button id="hour1" className={`circle-button popup`}>
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

      <button id="hour2" className={`circle-button popup`}>
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

      <button id="hour3" className={`circle-button popup`}>
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

export default ReminderMenu;
