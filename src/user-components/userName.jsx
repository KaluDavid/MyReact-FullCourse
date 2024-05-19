export function UserName(props) {
  console.log(props.theusername);
  return (
    <div>
      <b>UserName: </b>
      <span>{props.theusername}</span>
    </div>
  );
}
