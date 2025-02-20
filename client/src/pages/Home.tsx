
import { Link } from "react-router-dom";
<link rel="stylesheet" href=".css"></link>


const Homepage = () => {
  return (
    <div className="homepg-container">
      <h1>Welcome to DocConnection</h1>
      <p>Please choose your login type:</p>
<div className="homepg-buttons">
      {/* Doctor login */}
      <Link to="/Drlogin" className="btn custom-btn">
        Doctor Login
      </Link>

      {/* Patient login */}
      <Link to="/PatientLogin" className="btn custom-btn2">
        Patient Login
      </Link>
      </div>
    </div>
  );
};
  
  export default Homepage;