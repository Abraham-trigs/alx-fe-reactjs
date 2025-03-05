import { useContext } from "react";
import UserContext from "./UserContext"; // Import UserContext

function UserProfile() {
  const userData = useContext(UserContext); // Consume context

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
