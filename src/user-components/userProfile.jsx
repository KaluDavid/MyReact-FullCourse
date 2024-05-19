import { UserFavFood } from "./userFavFood";
import { UserName } from "./userName";
import { UserFooter } from "./userFooter";

export function UserProfile() {
  return (
    <main id="User-Profile">
      <UserName theusername="that_guy_Dhave" />
      <p>
        <b>Email:</b> johndeo@gmail.com
      </p>
      <p>
        <b>Phone:</b> 08100002222
      </p>
      <UserFavFood />
      <UserFooter />
    </main>
  );
}
