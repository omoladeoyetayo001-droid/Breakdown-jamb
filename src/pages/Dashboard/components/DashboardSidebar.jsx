import "./../../../styles/DashboardSidebar.css";

import {
  House,
  BookOpen,
  ClipboardList,
  Brain,
  Newspaper,
  User,
  Settings
} from "lucide-react";


function DashboardSidebar() {

  return (

    <aside className="dashboard-sidebar">


      <div>


        <div className="dashboard-sidebar-logo">


          <div className="dashboard-logo-circle">
            B
          </div>


          <div>

            <h2>
              Breakdown
            </h2>

            <span>
              JAMB
            </span>

          </div>


        </div>



        <nav className="dashboard-sidebar-menu">


          <button className="dashboard-menu-item dashboard-menu-active">

            <House size={21}/>

            <span>
              Home
            </span>

          </button>



          <button className="dashboard-menu-item">

            <BookOpen size={21}/>

            <span>
              Study Notes
            </span>

          </button>



          <button className="dashboard-menu-item">

            <ClipboardList size={21}/>

            <span>
              Test
            </span>

          </button>



          <button className="dashboard-menu-item">

            <Brain size={21}/>

            <span>
              AI Tutor
            </span>

          </button>



          <button className="dashboard-menu-item">

            <Newspaper size={21}/>

            <span>
              News
            </span>

          </button>



          <button className="dashboard-menu-item">

            <User size={21}/>

            <span>
              Profile
            </span>

          </button>


        </nav>


      </div>




      <button className="dashboard-menu-item dashboard-settings">


        <Settings size={21}/>


        <span>
          Settings
        </span>


      </button>



    </aside>

  );

}


export default DashboardSidebar;