import { UserFavFood } from "./userFavFood";
import { UserName } from "./userName";
import { UserFooter } from "./userFooter";
import PropTypes from "prop-types";

export function UserProfile(props) {
  console.log(props);

  props.userCall();

  return (
    <main id="User-Profile">
      {/*props */}

      {/* <UserName theusername="that_guy_Dhave" /> */}

      {/* props Drilling */}
      <UserName theusername={props.theusername} />
      <br />
 
      <div>
        <b>Age: </b>
        <span>{props.userage}</span>
      </div>

      <p>
        <b>Email:</b> johndeo@gmail.com
      </p>

      <p>
        <b>Phone:</b> 08100002222
      </p>

      <UserFavFood
      
      otherFoods={props.otherFoods} 
      
      moreFood="biscuit"
      />

      <UserFooter />
    </main>
  );
}

// TypeChecking Props
UserProfile.propTypes = {
  // defining a functional component UserProfile that expects certain props.

  theusername: PropTypes.string.isRequired,

  userage: PropTypes.number.isRequired,

  userCall: PropTypes.func.isRequired,

  userfavfoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),

  otherFoods: PropTypes.string.isRequired,
};
