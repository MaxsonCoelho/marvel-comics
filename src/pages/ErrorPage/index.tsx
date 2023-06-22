import React from "react";
import { useRouteError } from "react-router-dom";
import {
  NotFoundContainer, ErrorMessage,
  MarvelLogo
} from './styles';


const ErrorPage: React.FC = () => {
  const error = useRouteError() as Error;
  console.error(error);

  return (
    <NotFoundContainer>
      <ErrorMessage>404 - Not Found</ErrorMessage>
      <MarvelLogo src={require("../../assets/marvel-logo.png")} alt="Marvel Logo" />
    </NotFoundContainer>
  );
}

export default ErrorPage;