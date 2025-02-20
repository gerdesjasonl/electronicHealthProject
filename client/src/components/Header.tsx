// import React from "react";
import doc1 from "../assets/doc1.png";
import doc2 from "../assets/doc2.png";

const Header = () => {
  return (
    <header className="header bg-#f3f3f8 text-center py-1">
      <nav className="navbar navbar-expand-lg navbar-grey">
        <div className="container d-flex justify-content-between align-items-center">
     
        <a href="/"><img 
            src="https://previews.dropbox.com/p/thumb/ACg6i5LlQN3UPOEvV0skN4J0XXSCp9VXgyxpC0OLvBFVnrW9jt0NIpO3JaFiEiIvaba5nrhMHqbU-CxmrfRo4xOnlroedHCVWncnOZTmln4aM7s6SwwQ0qoHgohTN7bHPOqALqREY6s8VuW7gzTWhYkMLEZgTDoZKL8QxlRXRTQcuT41np9bxa5q2S8W5ZXusydIL8ivm3bcUGNDbqTyUhgSqUfKaZ5LDK4pYmF4CP7CJBEj1FcEt3_sgvBMlT167nwOmU07y7mQbPB5jeabv7HD13mPtYajsDcamuPpuQroMtdZ11tWNJ7x66_SXFmJ_85b3i4xqmzMS_t-YBNE0gzN/p.png?is_prewarmed=true" 
            alt="Company Logo" 
            className="logo"
            /> 
            </a>
          {/* Centered Title
          <h1 className="m-0">Family Doctors Connection</h1> */}
       
        </div>
      </nav>
    </header>
  );
};

export default Header;

