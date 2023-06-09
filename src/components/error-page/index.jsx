import React from "react";
import PropTypes from "prop-types";
import { useRouteError } from "react-router-dom";

ErrorPage.propTypes = {};

function ErrorPage(props) {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
