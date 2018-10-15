import Settings from "../views/Settings/Settings.jsx";
import Dashboard from "../views/Dashboard/Dashboard.jsx";
import Buttons from "../views/Components/Buttons.jsx";
import GridSystem from "../views/Components/GridSystem.jsx";
import Panels from "../views/Components/Panels.jsx";
import SweetAlert from "../views/Components/SweetAlert.jsx";
import Notifications from "../views/Components/Notifications.jsx";
import Icons from "../views/Components/Icons.jsx";
import Typography from "../views/Components/Typography.jsx";
import RegularForms from "../views/Forms/RegularForms.jsx";
import ExtendedForms from "../views/Forms/ExtendedForms.jsx";
import ValidationForms from "../views/Forms/ValidationForms.jsx";
import Wizard from "../views/Forms/Wizard.jsx";
import RegularTables from "../views/Tables/RegularTables.jsx";
import ExtendedTables from "../views/Tables/ExtendedTables.jsx";
import ReactTables from "../views/Tables/ReactTables.jsx";
import GoogleMaps from "../views/Maps/GoogleMaps.jsx";
import FullScreenMap from "../views/Maps/FullScreenMap.jsx";
import VectorMap from "../views/Maps/VectorMap.jsx";
import Charts from "../views/Charts/Charts.jsx";
import Calendar from "../views/Calendar/Calendar.jsx";
import Widgets from "../views/Widgets/Widgets.jsx";
import UserProfile from "../views/Pages/UserProfile.jsx";
import TimelinePage from "../views/Pages/Timeline.jsx";
import RTLSupport from "../views/Pages/RTLSupport.jsx";

import Attendance from "../views/Academics/Attendance/Attendance.jsx";

import pagesRoutes from "./pages.jsx";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Image from "@material-ui/icons/Image";
import Apps from "@material-ui/icons/Apps";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import GridOn from "@material-ui/icons/GridOn";
import Place from "@material-ui/icons/Place";
import WidgetsIcon from "@material-ui/icons/Widgets";
import Timeline from "@material-ui/icons/Timeline";
import DateRange from "@material-ui/icons/DateRange";
import BuildIcon from "@material-ui/icons/Build";
import ConnectIcon from "@material-ui/icons/Timeline";
import MailIcon from "@material-ui/icons/Email";
import MessageIcon from "@material-ui/icons/Forum";
import AcademicsIcon from "@material-ui/icons/School";
import SelfServiceIcon from "@material-ui/icons/Devices";
import OrganisationIcon from "@material-ui/icons/AccountBalance";
import BillingIcon from "@material-ui/icons/AttachMoney";
import AppraisalIcon from "@material-ui/icons/AvTimer";

var pages = [
  {
    path: "/timeline-page",
    name: "Timeline Page",
    mini: "TP",
    component: TimelinePage
  },
  {
    path: "/user-page",
    name: "User Profile",
    mini: "UP",
    component: UserProfile
  },
  {
    path: "/rtl/rtl-support-page",
    name: "RTL Support",
    mini: "RS",
    component: RTLSupport
  }
].concat(pagesRoutes);

var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: DashboardIcon,
    component: Dashboard
  },
  {
    path: "/connect",
    name: "Connect",
    icon: ConnectIcon,
    component: TimelinePage
  },
  {
    path: "/message",
    name: "Message",
    icon: MessageIcon,
    component: TimelinePage
  },
  {
    path: "/mail",
    name: "Mail",
    icon: MailIcon,
    component: TimelinePage
  },
  {
    collapse: true,
    path: "/self-service",
    name: "Self Service",
    icon: SelfServiceIcon,
    state: "openSelfService",
    views: [
      {
        path: "/self-service/calendar",
        name: "Calendar",
        mini: "CL",
        component: Calendar
      },
      {
        path: "/self-service/tasks",
        name: "Tasks",
        mini: "TS",
        component: Widgets
      },
      {
        path: "/self-service/requests",
        name: "Requests",
        mini: "RS",
        component: Widgets
      },
      {
        path: "/self-service/leaves",
        name: "Leaves",
        mini: "L",
        component: ExtendedTables
      },
      {
        path: "/self-service/appraisal",
        name: "Appraisal",
        mini: "AP",
        component: ExtendedTables
      },
      {
        path: "/self-service/feedback",
        name: "Feedback",
        mini: "FB",
        component: ExtendedTables
      },
      {
        path: "/self-service/trainings",
        name: "Trainings",
        mini: "TR",
        component: ExtendedTables
      },
      {
        path: "/self-service/publications",
        name: "Publications",
        mini: "PL",
        component: ExtendedTables
      },
      {
        path: "/self-service/assets",
        name: "Assets",
        mini: "AS",
        component: ExtendedTables
      }
      ]
  },
  {
    collapse: true,
    path: "/academics",
    name: "Academics",
    icon: AcademicsIcon,
    state: "openAcademics",
    views: [
      {
        path: "/academics/attendance",
        name: "Attendance",
        mini: "AT",
        component: Attendance
      },
      {
        path: "/academics/results",
        name: "Results",
        mini: "RL",
        component: ExtendedTables
      },
      {
        path: "/academics/subjectmanagement",
        name: "Subject Management",
        mini: "SM",
        component: ExtendedTables
      },
      {
        path: "/academics/academiccalendar",
        name: "Academic Calendar",
        mini: "AC",
        component: ExtendedTables
      },
      {
        path: "/academics/timetable",
        name: "Timetable",
        mini: "TT",
        component: ExtendedTables
      },
      {
        path: "/academics/Subject Allocation",
        name: "Subject Allocation",
        mini: "SA",
        component: ExtendedTables
      },
      {
        path: "/academics/Lesson Plan",
        name: "Lesson Plan",
        mini: "LP",
        component: ExtendedTables
      }
      ]
  },

  {
    collapse: true,
    path: "/appraisal",
    name: "Appraisal",
    icon: AppraisalIcon,
    state: "openAppraisal",
    component: Settings,
    views: [
      {
        path: "/appraisal/studentfbcycle",
        name: "Student FB Cycle",
        mini: "FB",
        component: ExtendedTables
      },
      {
        path: "/academics/appraisalcycle",
        name: "Appraisal Cycle",
        mini: "AC",
        component: ExtendedTables
      }
    ]
  },

  {
    collapse: true,
    path: "/organisation",
    name: "Organisation",
    icon: OrganisationIcon,
    state: "openOrganisation",
    component: Settings,
    views: [
      {
        path: "/organisation/dashboard",
        name: "Dashboard",
        mini: "DB",
        component: Dashboard
      },
      {
        path: "/organisation/employeemanagement",
        name: "Employee Management",
        mini: "EM",
        component: ExtendedTables
      },
      {
        path: "/organisation/studentmanagement",
        name: "Student Management",
        mini: "SM",
        component: ExtendedTables
      },
      {
        path: "/organisation/admission",
        name: "Admission",
        mini: "AD",
        component: ExtendedTables
      },
      {
        path: "/organisation/lessonplanprogress",
        name: "Lesson Plan Progress",
        mini: "LP",
        component: ExtendedTables
      },
      {
        path: "/organisation/attendancedashboard",
        name: "Attendace Dashboard",
        mini: "AB",
        component: Dashboard
      },
      {
        path: "/organisation/resultsdashboard",
        name: "Results Dashboard",
        mini: "RB",
        component: Dashboard
      },
      {
        path: "/organisation/appraisaldashboard",
        name: "Appraisal Dashboard",
        mini: "AB",
        component: Dashboard
      }
      ]
  },
  {
    collapse: true,
    path: "/settings",
    name: "Settings",
    icon: BuildIcon,
    state: "openSettings",
    component: Settings,
    views: [
      {
        path: "/settings/organisations",
        name: "Organisations",
        mini: "ORG",
        component: ExtendedTables
      },
      {
        path: "/settings/institutes",
        name: "Institutes",
        mini: "IN",
        component: ExtendedTables
      },
      {
        path: "/settings/departments",
        name: "Departments",
        mini: "DEP",
        component: ExtendedTables
      },
      {
        path: "/settings/useraccesscontrol",
        name: "User Access Control",
        mini: "UAC",
        component: ExtendedTables
      },
      {
        path: "/settings/lists",
        name: "Lists",
        mini: "LI",
        component: ExtendedTables
      },
      {
        path: "/settings/templates",
        name: "Templates",
        mini: "ORG",
        component: ExtendedTables
      },
      {
        path: "/settings/views",
        name: "Views",
        mini: "VI",
        component: ExtendedTables
      }
    ]
  },
  {
    collapse: true,
    path: "/billing",
    name: "Billing",
    icon: BillingIcon,
    state: "openBilling",
    component: ExtendedTables,
    views: [
      {
        path: "/billing/dashboard",
        name: "Billing Dashboard",
        mini: "BD",
        component: Dashboard
      },
      {
        path: "/billing/invoices",
        name: "Invoices",
        mini: "INV",
        component: ExtendedTables
      },
      {
        path: "/billing/payments",
        name: "Payments",
        mini: "PAY",
        component: ExtendedTables
      }
      ]
  },
/*  {
    collapse: true,
    path: "-page",
    name: "Pages",
    state: "openPages",
    icon: Image,
    views: pages
  },
  {
    collapse: true,
    path: "/components",
    name: "Components",
    state: "openComponents",
    icon: Apps,
    views: [
      {
        path: "/components/buttons",
        name: "Buttons",
        mini: "B",
        component: Buttons
      },
      {
        path: "/components/grid-system",
        name: "Grid System",
        mini: "GS",
        component: GridSystem
      },
      {
        path: "/components/panels",
        name: "Panels",
        mini: "P",
        component: Panels
      },
      {
        path: "/components/sweet-alert",
        name: "Sweet Alert",
        mini: "SA",
        component: SweetAlert
      },
      {
        path: "/components/notifications",
        name: "Notifications",
        mini: "N",
        component: Notifications
      },
      { path: "/components/icons", name: "Icons", mini: "I", component: Icons },
      {
        path: "/components/typography",
        name: "Typography",
        mini: "T",
        component: Typography
      }
    ]
  },
  {
    collapse: true,
    path: "/forms",
    name: "Forms",
    state: "openForms",
    icon: "content_paste",
    views: [
      {
        path: "/forms/regular-forms",
        name: "Regular Forms",
        mini: "RF",
        component: RegularForms
      },
      {
        path: "/forms/extended-forms",
        name: "Extended Forms",
        mini: "EF",
        component: ExtendedForms
      },
      {
        path: "/forms/validation-forms",
        name: "Validation Forms",
        mini: "VF",
        component: ValidationForms
      },
      { path: "/forms/wizard", name: "Wizard", mini: "W", component: Wizard }
    ]
  },
  {
    collapse: true,
    path: "/tables",
    name: "Tables",
    state: "openTables",
    icon: GridOn,
    views: [
      {
        path: "/tables/regular-tables",
        name: "Regular Tables",
        mini: "RT",
        component: RegularTables
      },
      {
        path: "/tables/extended-tables",
        name: "Extended Tables",
        mini: "ET",
        component: ExtendedTables
      },
      {
        path: "/tables/react-tables",
        name: "React Tables",
        mini: "RT",
        component: ReactTables
      }
    ]
  },
  {
    collapse: true,
    path: "/maps",
    name: "Maps",
    state: "openMaps",
    icon: Place,
    views: [
      {
        path: "/maps/google-maps",
        name: "Google Maps",
        mini: "GM",
        component: GoogleMaps
      },
      {
        path: "/maps/full-screen-maps",
        name: "Full Screen Map",
        mini: "FSM",
        component: FullScreenMap
      },
      {
        path: "/maps/vector-maps",
        name: "Vector Map",
        mini: "VM",
        component: VectorMap
      }
    ]
  },
  { path: "/widgets", name: "Widgets", icon: WidgetsIcon, component: Widgets },
  { path: "/charts", name: "Charts", icon: Timeline, component: Charts },
  { path: "/calendar", name: "Calendar", icon: DateRange, component: Calendar }, */
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;
