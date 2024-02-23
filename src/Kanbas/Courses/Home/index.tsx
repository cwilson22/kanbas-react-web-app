import ModuleList from "../Modules/List";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <div className="d-flex">
      <ModuleList />
      <Sidebar />
    </div>
  );
}
export default Home;