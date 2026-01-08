import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./NotFound";
import Courses, { coursesLoader } from "./pages/courses/Courses";
import CourseDetails, {
  courseDetailsLoader,
} from "./pages/courses/CourseDetails";

//layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CoursesLayout from "./layouts/CoursesLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>

      <Route path="courses" element={<CoursesLayout />}>
        <Route index element={<Courses />} loader={coursesLoader} />
        <Route
          path=":id"
          element={<CourseDetails />}
          loader={courseDetailsLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
