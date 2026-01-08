import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        rerum, aliquid architecto, harum corrupti praesentium eaque, veritatis
        tenetur adipisci facilis ipsum omnis distinctio. Dolores illum eius
        placeat aliquam facere consequuntur.
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>.
      </p>
    </div>
  );
}
