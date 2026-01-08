import { Link, useLoaderData } from "react-router-dom";

export default function Courses() {
  const courses = useLoaderData();

  return (
    <div className="courses">
      {courses.map((course) => (
        <Link to={course.id.toString()} key={course.id}>
          <p>{course.title}</p>
          <p>Taught by {course.instructor}</p>
        </Link>
      ))}
    </div>
  );
}

//loader function
export const coursesLoader = async () => {
  const res = await fetch("http://localhost:4000/courses/");

  if (!res.ok) {
    throw Error("could not fetch the courses");
  }

  return res.json();
};
