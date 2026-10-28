import "./../../styles/Dashboard.css";

import DashboardSidebar from "./components/DashboardSidebar";
import DashboardTopbar from "./components/DashboardTopbar";


function Dashboard() {

  return (

    <div className="dashboard-page">


      <DashboardSidebar />


      <main className="dashboard-content">


        <DashboardTopbar />


        


      </main>


    </div>

  );

}


export default Dashboard;