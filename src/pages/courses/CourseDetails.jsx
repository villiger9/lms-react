import { useLoaderData, useParams } from "react-router-dom";

export default function CourseDetails() {
  const { id } = useParams();
  const course = useLoaderData();

  return (
    <div className="course-details">
      <h2>Course details for {course.title}</h2>
      <p>Duration: {course.duration}</p>
      <p>Level: {course.level}</p>
      <p>Instructor: {course.instructor}</p>
      <div className="details">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
          perspiciatis, nisi odio consequuntur sunt esse culpa modi repudiandae
          commodi dolorum eveniet, assumenda nesciunt dolor voluptatum quisquam
          doloremque dolores molestias beatae.
        </p>
      </div>
    </div>
  );
}

// loader function
export const courseDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/courses/" + id);

  if (!res.ok) {
    throw Error("could not find that course");
  }

  return res.json();
};
