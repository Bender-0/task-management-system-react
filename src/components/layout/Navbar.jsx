import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={navLinkClasses}
        >
          Projects
        </NavLink>
        <NavLink
          to="/tasks"
          className={navLinkClasses}
        >
          Tasks
        </NavLink>
        <NavLink
          to="/categories"
          className={navLinkClasses}
        >
          Categories
        </NavLink>
      </nav>
    </>
  );

  function navLinkClasses({ isActive }) {
    return isActive
      ? "nav-link-active"
      : "nav-link";
  }
}
