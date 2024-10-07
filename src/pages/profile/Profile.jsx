import { useState } from "react";
import UploadProfile from "./UplaodProfle";

const Profile = () => {
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(userData);

    //API call...
  };

  const getImageHandler = (img) => {
    setUserData({ dp: img });
  };

  return (
    <div className="flex items-center justify-center pt-5">
      <form onSubmit={submitHandler} className="flex flex-col items-center justify-center">
        <UploadProfile onGetImage={getImageHandler} />
        <button className="hover:bg-green-500 border border-green-500 text-white py-2 px-8 rounded bg-transparent hover:text-black hover:rounded-lg transition delay-150 duration-150">Submit</button>
      </form>
    </div>
  );
};

export default Profile;