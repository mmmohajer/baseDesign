import React from "react";

import Alert from "Components/Alert";
import AlertItem from "Components/Alert/subs/AlertItem";
import "./TestAlert.scss";

const arrayOfNotifications = [
  { key: "key1", message: "Notif1", type: "success", isActive: true },
  { key: "key2", message: "Notif2", type: "error", isActive: false },
];

const TestAlert = () => {
  return (
    <>
      <Alert className="flex flex--ai--end flex--jc--center flex--dir--col w-per-50 ml-auto">
        {arrayOfNotifications.map((notif) => (
          <AlertItem
            key={notif.key}
            className="bgBlue my1 w-per-100 flex flex--jc--end p1 textWhite"
            isActive={notif.isActive}
          >
            <p>{notif.message}</p>
          </AlertItem>
        ))}
      </Alert>
    </>
  );
};

export default TestAlert;
