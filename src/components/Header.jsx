import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="header position-relative">
      {/* Top Bar */}
      <div className="top-bar py-2">
        <div className="container-fluid container-xl">
          <div className="row align-items-center">
            <div className="col-lg-4 d-none d-lg-flex">
              <div className="top-bar-item">
                <i className="bi bi-telephone-fill me-2"></i>
                <span>Need help? Call us: </span>
                <a href="tel:+923134591146">+92 313 4591146</a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 text-center">
              <div className="announcement-slider swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">🚚 Free shipping on orders over 5000 PKR</div>
                  <div className="swiper-slide">💰 30 days money back guarantee.</div>
                  <div className="swiper-slide">🎁 20% off on your first order</div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div className="d-flex justify-content-end">
                <div className="top-bar-item dropdown me-3">
                  <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                    <i className="bi bi-translate me-2"></i>EN
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="bi bi-check2 me-2 selected-icon"></i>English</a></li>
                    <li><a className="dropdown-item" href="#">Urdu</a></li>
                  </ul>
                </div>
                <div className="top-bar-item dropdown">
                  <a href="#" className="dropdown-toggle" data-bs-toggle="dropdown">
                    <i className="bi bi-currency-dollar me-2"></i>PKR
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="bi bi-check2 me-2 selected-icon"></i>PKR</a></li>
                    <li><a className="dropdown-item" href="#">USD</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container-fluid container-xl">
          <div className="d-flex py-3 align-items-center justify-content-between">
            <Link to="/" className="logo d-flex align-items-center">
              <h1 className="sitename">Storeish</h1>
            </Link>

            {/* Search */}
            <form className="search-form desktop-search-form">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for products" />
                <button className="btn" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>

            {/* Header Actions */}
            <div className="header-actions d-flex align-items-center justify-content-end">
              <button className="header-action-btn mobile-search-toggle d-xl-none" type="button" data-bs-toggle="collapse" data-bs-target="#mobileSearch">
                <i className="bi bi-search"></i>
              </button>

              <div className="dropdown account-dropdown">
                <button className="header-action-btn" data-bs-toggle="dropdown">
                  <i className="bi bi-person"></i>
                </button>
                <div className="dropdown-menu">
                  <div className="dropdown-header">
                    <h6>Welcome to <span className="sitename">Storeish</span></h6>
                    <p className="mb-0">Access account &amp; manage orders</p>
                  </div>
                  <div className="dropdown-body">
                    <Link className="dropdown-item d-flex align-items-center" to="/account">
                      <i className="bi bi-person-circle me-2"></i><span>My Profile</span>
                    </Link>
                    <Link className="dropdown-item d-flex align-items-center" to="/account">
                      <i className="bi bi-bag-check me-2"></i><span>My Orders</span>
                    </Link>
                    <Link className="dropdown-item d-flex align-items-center" to="/account">
                      <i className="bi bi-heart me-2"></i><span>My Wishlist</span>
                    </Link>
                    <Link className="dropdown-item d-flex align-items-center" to="/account">
                      <i className="bi bi-gear me-2"></i><span>Settings</span>
                    </Link>
                  </div>
                  <div className="dropdown-footer">
                    <Link to="/login-register" className="btn btn-primary w-100 mb-2">Sign In</Link>
                    <Link to="/login-register" className="btn btn-outline-primary w-100">Register</Link>
                  </div>
                </div>
              </div>

              <Link to="/account" className="header-action-btn d-none d-md-block">
                <i className="bi bi-heart"></i>
                <span className="badge">0</span>
              </Link>

              <Link to="/cart" className="header-action-btn">
                <i className="bi bi-cart3"></i>
                <span className="badge">3</span>
              </Link>

              <i className="mobile-nav-toggle d-xl-none bi bi-list me-0"></i>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;