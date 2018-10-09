// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
// core components/views
import DashboardPage from "../views/Dashboard";
import UserProfile from "../views/UserProfile";
import Attendance from "../views/Attendance";
import Results from "../views/Results";
import NotificationsPage from "../views/Notifications";
import UpgradeToPro from "../views/UpgradeToPro";

const dashboardRoutes = [

  {
    path: "/dashboard/campus_apps_dashboard",
    sidebarName: "Campus Apps",
    navbarName: "Campus Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/dashboard/attendance",
    sidebarName: "Attendance",
    navbarName: "Attendance",
    icon: "pan_tool",
    component: Attendance
  },
  {
    path: "/dashboard/results",
    sidebarName: "Results",
    navbarName: "Students Results",
    icon: "content_paste",
    component: Results
  },
  {
    path: "/dashboard/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/dashboard/userprofile",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/dashboard/upgrade-to-pro",
    sidebarName: "Upgrade To PRO",
    navbarName: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro
  },

  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
