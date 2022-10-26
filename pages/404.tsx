import React from "react";
import { Heading } from "../components";
import { withLayout } from "../layout/layout";

export const Error404 = (): JSX.Element => {
  return (
    <>
      <Heading tag='h1'>Ошибка 404</Heading>
    </>
  );
};

export default withLayout(Error404);