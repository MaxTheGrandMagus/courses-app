import React from "react";
import { Heading } from "../components";
import { withLayout } from "../layout/layout";

const Error500 = (): JSX.Element => {
  return (
    <>
      <Heading tag='h1'>Ошибка 500</Heading>
    </>
  );
};

export default withLayout(Error500);