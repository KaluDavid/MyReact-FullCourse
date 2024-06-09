import { UserProfile } from "./user-components/userProfile";

export default function App() {
  // Passing in functions
  const userCall = () => {
    console.log("Hello World 👋");
  };

  return (
    <div>
      <h1>Mr. Dhave's Profile Card</h1>

      <UserProfile
        // props drilling, but this ain't suppose to be here
        theusername="That_guy_Dhave"
        // passing numeric values
        userage={20}
        // PAssing Booleans
        userageis={true}
        // PAssing Arrays
        userfavfoods={[
          {
            name: "sushi",
            id: "Sushi",
          },
          {
            name: "pasta",
            id: "Pasta",
          },
        ]}
        userCall={userCall}
        // Prop Drilling
        otherFoods="Plantain"
      />
    </div>
  );
}
