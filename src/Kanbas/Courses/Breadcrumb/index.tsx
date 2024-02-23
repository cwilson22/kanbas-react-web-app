import { Link, useLocation, useParams } from "react-router-dom";
import "./index.css";
import { HiMiniBars3 } from "react-icons/hi2";
import { courses } from "../../../Kanbas/Database";

function Breadcrumb() {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  const link = links.find((l) => pathname.includes(l))
  return (
    <div className="wd-breadcrumb w-100">
        <p><HiMiniBars3 /> {course?.number} {course?.name} <span className="curlink">{">"} {link}</span></p>
        <hr />
    </div>
  );
}
export default Breadcrumb;