import React from "react";

import Form from "Components/Form";
import Input from "Components/Input";
import Label from "Components/Label";

const TestForm = () => {
  return (
    <>
      <Form
        className="bgRed textWhite py1"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.target.children[1]?.value);
        }}
      >
        <Label htmlFor="sample">First Name</Label>
        <Input
          type="text"
          name="sample"
          fullWidth
          placeholder="Type your name"
        />
        <Input type="checkbox" />
        <Input type="radio" />
        <Input type="submit" value="Submit" />
      </Form>
    </>
  );
};

export default TestForm;
