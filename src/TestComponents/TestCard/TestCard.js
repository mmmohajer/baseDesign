import React from 'react';

import Card from 'Components/Card';
import CardHeader from 'Components/Card/subs/CardHeader';
import CardBody from 'Components/Card/subs/CardBody';
import CardFooter from 'Components/Card/subs/CardFooter';

const TestCard = () => {
  return (
    <>
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>
    </>
  );
};

export default TestCard;
