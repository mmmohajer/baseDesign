import React, { useState } from "react";

import "./TestForm.scss";

import Form from "Components/Form";
import Input from "Components/Input";
import Label from "Components/Label";

import {
  firstNameValidators,
  lastNameValidators,
  emailValidators,
} from "./utils";

const TestForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [fistNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [fistNameErrorIsActive, setFirstNameErrorIsActive] = useState(false);

  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  const [lastNameErrorIsActive, setLastNameErrorIsActive] = useState(false);

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [emailErrorIsActive, setEmailErrorIsActive] = useState(false);

  return (
    <>
      <Form
        className="textWhite py1"
        toBeValidatedFields={[
          {
            input_name: "first_name",
            validators: firstNameValidators,
            errorMessageHandler: setFirstNameErrorMessage,
            errorActivateHandler: setFirstNameErrorIsActive,
          },
          {
            input_name: "last_name",
            validators: lastNameValidators,
            errorMessageHandler: setLastNameErrorMessage,
            errorActivateHandler: setLastNameErrorIsActive,
          },
          {
            input_name: "email",
            validators: emailValidators,
            errorMessageHandler: setEmailErrorMessage,
            errorActivateHandler: setEmailErrorIsActive,
          },
        ]}
        onSubmit={() => console.log("Yay")}
      >
        <Label className="textBlack" htmlFor="sample">
          First Name
        </Label>
        <Input
          type="text"
          name="first_name"
          fullWidth
          placeholder="Type your first name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            setFirstNameErrorIsActive(false);
            setFirstNameErrorMessage("");
          }}
          errorMessage={fistNameErrorMessage}
          errorIsActive={fistNameErrorIsActive}
        />
        <Input
          type="text"
          name="last_name"
          placeholder="Type your last name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            setLastNameErrorIsActive(false);
            setLastNameErrorMessage("");
          }}
          errorMessage={lastNameErrorMessage}
          errorIsActive={lastNameErrorIsActive}
        />
        <Input
          type="text"
          name="email"
          placeholder="Type your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailErrorIsActive(false);
            setEmailErrorMessage("");
          }}
          errorMessage={emailErrorMessage}
          errorIsActive={emailErrorIsActive}
        />
        <Input type="checkbox" name="sample3" />
        <Input type="radio" name="sample4" />
        <Input type="submit" value="Submit" />
      </Form>
    </>
  );
};

export default TestForm;
