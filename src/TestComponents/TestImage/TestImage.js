import React from "react";
import Image from "Components/Image";

const TestImage = () => {
  return (
    <>  
        <Image
            src="https://picsum.photos/200"
            alt="Random Image"
            width={350}
            height={350}
        />
    </>
  );
};

export default TestImage;