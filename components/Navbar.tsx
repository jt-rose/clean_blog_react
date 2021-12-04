import Link from "next/link";
import { useState } from "react";

const NavBarLinks = (props: { visible: boolean }) => {
  return (
    <div
      className="collapse navbar-collapse"
      id="navbarResponsive"
      style={{ display: props.visible ? "block" : "none" }}
    >
      <ul className="navbar-nav ms-auto py-4 py-lg-0">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link px-lg-3 py-3 py-lg-4">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link px-lg-3 py-3 py-lg-4">About</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/post">
            <a className="nav-link px-lg-3 py-3 py-lg-4">Sample Post</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a className="nav-link px-lg-3 py-3 py-lg-4">Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div className="container px-4 px-lg-5">
        <Link href="/">
          <a className="navbar-brand">Start Bootstrap</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setVisible(!visible)}
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <NavBarLinks visible={visible} />
      </div>
    </nav>
  );
};
