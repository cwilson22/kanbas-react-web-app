import { Routes, Route, Navigate, useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses({ courses }: { courses: any[]; }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);
    return (
        <div>
            <Breadcrumb/>
            <CourseNavigation />
            <div>
                <div
                className="overflow-y-scroll position-fixed bottom-0 end-0"
                style={{ left: "320px", top: "50px" }} >
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home/>} />
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
                    <Route path="Grades" element={<Grades/>} />
                </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;