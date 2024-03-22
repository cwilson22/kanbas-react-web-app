import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";


function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
  state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();


  // const [moduleList, setModuleList] = useState<any[]>(modules);
  // const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  //   _id: -1,
  // });

  // const addModule = (module: any) => {
  //   const newModule = { ...module,
  //     _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };

  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId );
  //   setModuleList(newModuleList);
  // };

  // const updateModule = () => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === module._id) {
  //       return module;
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // };

  return (
    <div className="flex-fill wd-modules-div">
        <button type="button" className="btn btn-light">Collapse All</button>
        <button type="button" className="btn btn-light">View Progress</button>
        <select className="form-select d-inline-block w-fix-size" aria-label="Default select example">
            <option selected>View Progress</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        <button type="button" className="btn btn-danger">+ Module</button>
        <button type="button" className="btn btn-light"><FaEllipsisV className="" /></button>
        <hr/>
        <ul className="list-group wd-modules">
          <li className="list-group-item">

          <div className="form-group row">
          <div className="col-md-5">
          <input className="form-control mr-2" value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
          </div>
          <div className="col-auto">
          <button className="btn btn-success" onClick={() => { dispatch(addModule(module)) }}>Add</button>
          <button className="btn btn-light" onClick={() => dispatch(updateModule(module))}>
                Update
          </button>
          </div>
          </div>
          

          <div className="form-group col-md-5 mt-2">
          <textarea className="form-control" value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          />
          </div>
          </li>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <button className="btn btn-light"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>

            <button className="btn btn-danger"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>

            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson: any) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        </ul>
    </div>
  );
}
export default ModuleList;