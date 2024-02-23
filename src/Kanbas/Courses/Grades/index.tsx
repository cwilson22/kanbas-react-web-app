import { assignments, enrollments, grades, users } from "../../Database";
import { FaDownload, FaUpload, FaCogs, FaCaretDown, FaFilter } from "react-icons/fa";
import { useParams } from "react-router-dom";
import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
        <h4 className="pt-2"><span className="wd-red">Gradebook <FaCaretDown/></span>
            <button type="button" className="btn btn-light btn-lg btn-outline-secondary float-end p-1 me-2"><FaCogs/></button>
            <button type="button" className="btn btn-light btn-outline-secondary float-end me-2"><FaUpload/> Export <FaCaretDown/></button>
            <button type="button" className="btn btn-light btn-outline-secondary float-end me-2"><FaDownload/> Import</button>
        </h4>
        <div className="row ms-2 me-2">
            <div className="col-md-6">
                <div className="row">
                    <b>Student Names</b>
                </div>
                <div className="row">
                    <input type="text" className="form-control" placeholder="Search Students"/>
                    {/* <select class="form-select"><option>Search Students</option></select> */}
                </div>
            </div>
            <div className="col-md-6">
                <div className="row">
                    <b>Assignment Names</b>
                </div>
                <div className="row">
                    <input type="text" className="form-control" placeholder="Search Assignments"/>
                </div>
            </div>
        </div>
        <button className="btn btn-light btn-outline-secondary mt-3 mb-3"><FaFilter/> Apply Filters</button>
        <div className="table-responsive me-2">
            <table className="table table-striped table-bordered">
            <thead>
                <th>Student Name</th>
                {as.map((assignment) => (<th>{assignment.title}</th>))}
            </thead>
            <tbody>
                {es.map((enrollment) => {
                const user = users.find((user) => user._id === enrollment.user);
                return (
                    <tr>
                    <td>{user?.firstName} {user?.lastName}</td>
                    {as.map((assignment) => {
                        const grade = grades.find(
                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                        return (<td>{grade?.grade || ""}</td>);})}
                    </tr>);
                })}
            </tbody></table>
        </div></div>
    );
}
export default Grades;