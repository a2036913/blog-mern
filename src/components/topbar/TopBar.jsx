import { Link } from "react-router-dom";
import "./topBar.css";
import { Context } from "../../context/Context";
import { useContext } from "react";

const TopBar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              HOME{" "}
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link
              to="/write"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout} style={{alignSelf: 'center'}}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>

      <div className="topRight">
        {user ? (
          <div className="topRightWrapper">
            <span className="topGreeting">Hi {user.username}</span>
            <span>
              <Link to="/setting">
                <img
                  className="topImg"
                  src="https://images.pexels.com/photos/5129351/pexels-photo-5129351.jpeg"
                  alt=""
                />
              </Link>
            </span>
          </div>
        ) : (
          <div style={{ display: "flex" }}>
            <Link
              to="/register"
              style={{ marginRight: "auto" }}
              className="link"
            >
              <div className="topListItem">REGISTER</div>
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="topListItem link">LOGIN</div>
            </Link>
          </div>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
