import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'






import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Category from "./pages/Category";
import CreateListing from "./pages/CreateListing";




function App() {
  return (
   <> 
   <Router>
       <Routes> 
          <Route path="/" element={<Explore />} />
          <Route path="/offers" element={<Offers />} />
          <Route path='/category/:categoryName' element={<Category />} />
          <Route path="/profile" element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/create-listing" element={<CreateListing />} />
          
       </Routes>

      <Navbar />
   </Router>
   <ToastContainer />
   </>
  );
}

export default App;
