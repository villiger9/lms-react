import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <h1>CourseRouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="courses">Courses</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
