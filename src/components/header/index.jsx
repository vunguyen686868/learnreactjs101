import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Link } from "react-router-dom";

Header.propTypes = {};

function Header(props) {
  return (
    <div id="header">
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`todos`}>Todos</Link>
          </li>
          <li>
            <Link to={`contacts`}>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
