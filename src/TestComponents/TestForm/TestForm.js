import React, { useState } from 'react';

import './TestForm.scss';

import Form from 'Components/Form';
import Input from 'Components/Input';
import Label from 'Components/Label';

import {
  firstNameValidators,
  lastNameValidators,
  emailValidators,
  passwordValidators,
  repeatedPasswordValidators
} from './utils';

const TestForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  const [fistNameErrorMessage, setFirstNameErrorMessage] = useState('');
  const [fistNameErrorIsActive, setFirstNameErrorIsActive] = useState(false);

  const [lastNameErrorMessage, setLastNameErrorMessage] = useState('');
  const [lastNameErrorIsActive, setLastNameErrorIsActive] = useState(false);

  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [emailErrorIsActive, setEmailErrorIsActive] = useState(false);

  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [passwordErrorIsActive, setPasswordErrorIsActive] = useState(false);

  const [repeatedPasswordErrorMessage, setRepeatedPasswordErrorMessage] = useState('');
  const [repeatedPasswordErrorIsActive, setRepeatedPasswordErrorIsActive] = useState(false);

  const toBeValidatedFields = [
    {
      input_name: 'first_name',
      validators: firstNameValidators,
      errorMessageHandler: setFirstNameErrorMessage,
      errorActivateHandler: setFirstNameErrorIsActive
    },
    {
      input_name: 'last_name',
      validators: lastNameValidators,
      errorMessageHandler: setLastNameErrorMessage,
      errorActivateHandler: setLastNameErrorIsActive
    },
    {
      input_name: 'email',
      validators: emailValidators,
      errorMessageHandler: setEmailErrorMessage,
      errorActivateHandler: setEmailErrorIsActive
    },
    {
      input_name: 'password',
      validators: passwordValidators,
      errorMessageHandler: setPasswordErrorMessage,
      errorActivateHandler: setPasswordErrorIsActive
    },
    {
      input_name: 'repeatedPassword',
      validators: repeatedPasswordValidators(password),
      errorMessageHandler: setRepeatedPasswordErrorMessage,
      errorActivateHandler: setRepeatedPasswordErrorIsActive
    }
  ];

  return (
    <>
      <Form
        className="textWhite py1"
        toBeValidatedFields={toBeValidatedFields}
        onSubmit={() => console.log('Yay')}>
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
            setFirstNameErrorMessage('');
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
            setLastNameErrorMessage('');
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
            setEmailErrorMessage('');
          }}
          errorMessage={emailErrorMessage}
          errorIsActive={emailErrorIsActive}
        />
        <Input
          type="password"
          name="password"
          placeholder="Type your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordErrorIsActive(false);
            setPasswordErrorMessage('');
          }}
          errorMessage={passwordErrorMessage}
          errorIsActive={passwordErrorIsActive}
        />
        <Input
          type="password"
          name="repeatedPassword"
          placeholder="Repeat your password"
          value={repeatedPassword}
          onChange={(e) => {
            setRepeatedPassword(e.target.value);
            setRepeatedPasswordErrorIsActive(false);
            setRepeatedPasswordErrorMessage('');
          }}
          errorMessage={repeatedPasswordErrorMessage}
          errorIsActive={repeatedPasswordErrorIsActive}
        />
        <Input type="checkbox" name="sample3" />
        <Input type="radio" name="sample4" />
        <Input type="submit" value="Submit" />
      </Form>
    </>
  );
};

export default TestForm;
