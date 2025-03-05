import useUserStore from "../useUserStore";

function ProfilePage() {
  const { userData, setUserData } = useUserStore();

  const updateBio = () => {
    setUserData({ ...userData, bio: "Updated Bio!" });
  };

  return (
    <div>
      <h2>{userData.name}'s Profile</h2>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
      <button onClick={updateBio}>Update Bio</button>
    </div>
  );
}

export default ProfilePage;
 