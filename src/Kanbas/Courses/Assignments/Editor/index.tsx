import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { assignments } from "../../../Database";
import "../index.css"

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
        <h2 className="wd-pos-relative-nudge-down">{assignment?.title}</h2>
            <span className="text-success float-end me-2">
                <FaCheckCircle className="me-2"/> Published 
            </span>
        <br/><br/>
        {/* <hr/> */}
        <p className="mb-1">Assignment Name</p>
        <input type="text" className="w-100 form-control" value={assignment?.title}/>
        <textarea className="form-control mt-3 mb-3">{assignment?.desc}</textarea>
        <div className="container">
            <div className="row">
                <div className="col-md-3"><div className="float-end">
                    Points
                </div></div>
                <div className="col-md-8">
                    <input type="text" className="form-control w-100" value={assignment?.pts}/>
                </div>
            </div>
            <div className="row top-buffer">
                <div className="col-md-3"><div className="float-end">
                    Assignment Group
                </div></div>
                <div className="col-md-8">
                    <select className="form-select">
                        <option>ASSIGNMENTS</option>
                        <option>other</option>
                    </select>
                </div>
            </div>
            <div className="row top-buffer">
                <div className="col-md-3"><div className="float-end">
                    Display Grade as
                </div></div>
                <div className="col-md-8">
                    <select className="form-select">
                        <option>Percentage</option>
                        <option>other</option>
                    </select>
                </div>
            </div>
            <div className="row top-buffer">
                <div className="col-md-3"><div className="float-end"></div></div>
                <div className="col-md-8">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1"> Do not count this assignment towards the final grade</label>
                </div>
            </div>
            <div className="row top-buffer">
                <div className="col-md-3"><div className="float-end">
                    Assign
                </div></div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <span><b>Assign to</b></span><br/>
                            <select className="form-select">
                                <option>Everyone</option>
                            </select>
                            <div className="mt-3">
                                <span><b>Due</b></span>
                            </div>
                            <input type='date' className="form-control" value={assignment?.ddate} />
                            <div className="row mt-3 mb-3">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <b>Available from</b>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type='date' className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <b>Until</b>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input type='date' className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body bg-light">
                            <p className="text-center p-0 m-0"><i className="fa fa-plus ms-2"></i> Add</p>
                        </div>
                    </div>
                </div>
            </div>
            <br/><hr/>
            <button onClick={handleSave} className="btn btn-danger ms-2 float-end">
                Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                    className="btn btn-light btn-outline-secondary float-end">
                Cancel
            </Link>
            <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
                    <label className="form-check-label" htmlFor="exampleCheck2"> Notify users that this content has changed</label>
            <br/><br/><hr/>
        </div>
    </div>
  );
}
export default AssignmentEditor;