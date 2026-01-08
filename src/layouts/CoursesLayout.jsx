import { Outlet } from "react-router-dom";

export default function CoursesLayout() {
  return (
    <div className="courses-layout">
      <h2>Courses</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
        praesentium.
      </p>

      <Outlet />
    </div>
  );
}
