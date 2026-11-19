
import React from 'react';

function DefaultProps(props) {
  return (
    <div>
      <h2>Default Properties Example</h2>
      <h3>Name: {props.name}</h3>
      <h3>Course: {props.course}</h3>
      <h3>College: {props.college}</h3>
    </div>
  );
}

DefaultProps.defaultProps = {
  name: "Rishal",
  course: "MCA",
  college: "St Joseph Engineering College"
};

export default DefaultProps;
