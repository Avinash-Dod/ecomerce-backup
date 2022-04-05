
import { Link } from "react-router-dom";
function tabBar() {
  var x = document.getElementById("navbarResponsive");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



function Header() {
  return (
    <>
      <header className="">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <a className="navbar-brand" href="index.html"><h2><i className="fa fa-shopping-bag" aria-hidden="true"></i> Imperial <em>Shopping</em></h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={tabBar} data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active ">
                  <Link className="nav-link" to="/" ><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/contact"><i className="fa fa-envelope" aria-hidden="true"></i> Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about"><i className="fa fa-info-circle" aria-hidden="true"></i> About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login"><i className="fa fa-user" aria-hidden="true"></i> Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/favourite"><i className="fa fa-heart" aria-hidden="true"></i> Favourite</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

    </>
  )
}
export default Header;



