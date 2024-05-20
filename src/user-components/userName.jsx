export function UserName(props) {
  // console.log(props.theusername);
  return (
    <div>
      <b>UserName: </b>
     {/* evaluating props  */}
      <span>{props.theusername}</span>
    </div>
  );
}
