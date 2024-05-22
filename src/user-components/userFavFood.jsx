
export function UserFavFood(props) {
  return (
    <div>
      <p>User-Fav-Food</p>
      <ul>
        <li>Rice</li>

        <li>Beans</li>

        <li>Stew</li>

        <li>{props.otherFoods}</li>

        <li>{props.moreFood}</li>
      </ul>
    </div>
  );
}
