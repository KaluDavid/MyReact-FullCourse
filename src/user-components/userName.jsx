import React from "react";

export function UserName(props) {
  // console.log(props.theusername);
  return (
    <React.Fragment>
      <b>UserName: </b>
     {/* evaluating props  */}
      <span>{props.theusername}</span>
    </React.Fragment>
  );
}
