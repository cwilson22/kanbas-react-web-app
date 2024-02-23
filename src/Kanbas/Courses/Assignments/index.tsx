import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaRegFile } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css"

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="flex-fill m-2">
        <input type="text" className="w-25 form-control wd-pos-relative-nudge-down" placeholder="Search for Assignment"/>
        <span className="float-end">
            <button type="button" className="btn btn-light wd-pos-relative-nudge-up btn-outline-secondary"><FaPlusCircle className="ms-2" /> Group</button>
            <button type="button" className="btn btn-danger wd-pos-relative-nudge-up"><FaPlusCircle className="ms-2" /> Assignment</button>
            <button type="button" className="btn btn-light wd-pos-relative-nudge-up btn-outline-secondary"><FaEllipsisV className="" /></button>
        </span>
        <hr style={{width: "100%"}}/>
        <ul className="list-group wd-modules">
            <li className="list-group-item">
            <div>
                <FaEllipsisV className="me-2" /> ASSIGNMENTS
                <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" /><FaEllipsisV className="" />
                </span>
            </div>
            <ul className="list-group">
                {assignmentList.map((assignment) => (
                <li className="list-group-item">
                    <div className="row align-items-center">
                        <div className="col-sm-1"><span className=""><FaEllipsisV className="" /><FaRegFile className="me-2 text-success" /></span></div>
                        <div className="col-sm-6"><Link className="wd-link-nostyle" to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link><br/><span className="wd-smaller"><b>Due</b> {assignment.due} | {assignment.pts} pts</span></div>
                        <div className="col-sm-5">
                            <span className="float-end">
                                <FaCheckCircle className="text-success" />
                                <FaEllipsisV className="ms-2" />
                            </span>
                        </div>
                    </div>
                    {/* <FaEllipsisV className="me-2" />
                    <Link
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                    <span className="float-end">
                    <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                    <br/><span className="wd-smaller"><b>Due</b> {assignment.due} | {assignment.pts} pts</span> */}
                </li>))}
            </ul>
            </li>
        </ul>
    </div>
);}
export default Assignments;