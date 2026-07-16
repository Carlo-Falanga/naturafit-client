import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar bg-white border-bottom sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          NaturaFit
        </Link>
        <a
          className="btn btn-outline-success btn-sm"
          href="http://naturafit-api.test/dashboard"
        >
          Area admin
        </a>
      </div>
    </nav>
  );
}
