import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { Link, useNavigate} from "react-router-dom";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";

import arrowRight from "../assets/svg/keyboardArrowRightIcon.svg"
import homeIcon from "../assets/svg/homeIcon.svg"

const Profile = () => {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  const onLoguut = () => {
    auth.signOut();
    navigate("/");
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        // update the user profile
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        // update the user profile in the database

        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name: name,
        });
      }
    } catch (error) {
      toast.error("could not update profile");
    }
  };

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <div className="profile">
        <header className="profilerHeader">
          <p className="pageHeader">My Profile</p>
          <button type="button" className="logOut" onClick={onLoguut}>
            Log out
          </button>
        </header>

        <main>
          <div className="profileDetailsHeader">
            <p className="profileDetailText">Personal Details</p>

            <p
              className="changePersonalDetails"
              onClick={() => {
                changeDetails && onSubmit();
                setChangeDetails((prev) => !prev);
              }}
            >
              {changeDetails ? "Done" : "Change"}
            </p>
          </div>

          <div className="profileCard">
            <form>
              <input
                type="text"
                id="name"
                className={!changeDetails ? "profileName" : "profileNameActive"}
                disabled={!changeDetails}
                value={name}
                onChange={onChange}
              />
              <input
                type="text"
                id="email"
                className={
                  !changeDetails ? "profileEmail" : "profileEmailActive"
                }
                disabled={!changeDetails}
                value={email}
                onChange={onChange}
              />
            </form>
          </div>


          <Link to="/create-listing" className="createListing"> 
           <img src={homeIcon} alt="homeIcon" />
           <p>Sell or Rent your place</p>
            <img src={arrowRight} alt="arrowRight" />
          </Link>
        </main>
      </div>
    </>
  );
};

export default Profile;
