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
      
        // passing numeric values
        userage={20}

        // PAssing Booleans
        userageis={true}


        // PAssing Arrays
        userfavfoods={[
          {
            food: "shushi",
          },
        ]}
        userCall={userCall}
      />
    </div>
  );
}
