import React, { useState } from "react";
import PropTypes from 'prop-types';

function Aloha(props) {
  const [isGreeting, setIsGreeting] = useState(true);
  const switchState = () => setIsGreeting(!isGreeting);
  const { name = "React" } = props;
  return (
    <>
      <h1 className="heading">
        {isGreeting ? "Hello" : "Goodbye"}, {name}
      </h1>
      <button onClick={switchState}>Switch</button>
    </>
  );
}

Aloha.propTypes = {
    name: PropTypes.string
};

export default Aloha;
