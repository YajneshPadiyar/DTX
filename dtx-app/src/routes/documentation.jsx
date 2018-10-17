// Getting started
import Tutorial from "../layouts/Documentation/Sections/Tutorial.jsx";
import RoutingSystem from "../layouts/Documentation/Sections/RoutingSystem.jsx";
import Variables from "../layouts/Documentation/Sections/Variables.jsx";
import Styles from "../layouts/Documentation/Sections/Styles.jsx";
import Lint from "../layouts/Documentation/Sections/Lint.jsx";

// Components
import Accordion from "../layouts/Documentation/Sections/Accordion.jsx";
import Badge from "../layouts/Documentation/Sections/Badge.jsx";
import Buttons from "../layouts/Documentation/Sections/Buttons.jsx";
import Cards from "../layouts/Documentation/Sections/Cards.jsx";
import CheckboxRadioSwitch from "../layouts/Documentation/Sections/CheckboxRadioSwitch.jsx";
import Clearfix from "../layouts/Documentation/Sections/Clearfix.jsx";
import Dropdown from "../layouts/Documentation/Sections/Dropdown.jsx";
import Footer from "../layouts/Documentation/Sections/Footer.jsx";
import Grid from "../layouts/Documentation/Sections/Grid.jsx";
import Header from "../layouts/Documentation/Sections/Header.jsx";
import Heading from "../layouts/Documentation/Sections/Heading.jsx";
import InfoArea from "../layouts/Documentation/Sections/InfoArea.jsx";
import Input from "../layouts/Documentation/Sections/Input.jsx";
import Instruction from "../layouts/Documentation/Sections/Instruction.jsx";
import LinearProgress from "../layouts/Documentation/Sections/LinearProgress.jsx";
import Modal from "../layouts/Documentation/Sections/Modal.jsx";
import NavPills from "../layouts/Documentation/Sections/NavPills.jsx";
import Pagination from "../layouts/Documentation/Sections/Pagination.jsx";
import Select from "../layouts/Documentation/Sections/Select.jsx";
import Sidebar from "../layouts/Documentation/Sections/Sidebar.jsx";
import Snackbar from "../layouts/Documentation/Sections/Snackbar.jsx";
import Table from "../layouts/Documentation/Sections/Table.jsx";
import Tabs from "../layouts/Documentation/Sections/Tabs.jsx";
import Tasks from "../layouts/Documentation/Sections/Tasks.jsx";
import Timeline from "../layouts/Documentation/Sections/Timeline.jsx";
import Tooltips from "../layouts/Documentation/Sections/Tooltips.jsx";
import Typography from "../layouts/Documentation/Sections/Typography.jsx";
import Upload from "../layouts/Documentation/Sections/Upload.jsx";
import Wizard from "../layouts/Documentation/Sections/Wizard.jsx";

// Plugins
import Calendar from "../layouts/Documentation/Sections/Calendar.jsx";
import Charts from "../layouts/Documentation/Sections/Charts.jsx";
import DateTimePicker from "../layouts/Documentation/Sections/DateTimePicker.jsx";
import GoogleMaps from "../layouts/Documentation/Sections/GoogleMaps.jsx";
import PerfectScrollbar from "../layouts/Documentation/Sections/PerfectScrollbar.jsx";
import ReactTables from "../layouts/Documentation/Sections/ReactTables.jsx";
import Sliders from "../layouts/Documentation/Sections/Sliders.jsx";
import SweetAlert from "../layouts/Documentation/Sections/SweetAlert.jsx";
import Tags from "../layouts/Documentation/Sections/Tags.jsx";
import VectorMaps from "../layouts/Documentation/Sections/VectorMaps.jsx";

const docsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/tutorial",
    routes: [
      {
        path: "/documentation/tutorial",
        name: "Tutorial",
        component: Tutorial
      },
      {
        path: "/documentation/routing-system",
        name: "RoutingSystem",
        component: RoutingSystem
      },
      {
        path: "/documentation/variables",
        name: "Variables",
        component: Variables
      },
      { path: "/documentation/styles", name: "Styles", component: Styles },
      { path: "/documentation/lint", name: "Lint", component: Lint }
    ]
  },
  {
    name: "Components",
    path: "/documentation/accordion",
    routes: [
      {
        path: "/documentation/accordion",
        name: "Accordion",
        component: Accordion
      },
      { path: "/documentation/badge", name: "Badge", component: Badge },
      { path: "/documentation/buttons", name: "Buttons", component: Buttons },
      { path: "/documentation/cards", name: "Cards", component: Cards },
      {
        path: "/documentation/check-radio-switch",
        name: "CheckRadioSwitch",
        component: CheckboxRadioSwitch
      },
      {
        path: "/documentation/clearfix",
        name: "Clearfix",
        component: Clearfix
      },
      {
        path: "/documentation/dropdown",
        name: "Dropdown",
        component: Dropdown
      },
      { path: "/documentation/footer", name: "Footer", component: Footer },
      { path: "/documentation/grid", name: "Grid", component: Grid },
      { path: "/documentation/header", name: "Header", component: Header },
      { path: "/documentation/heading", name: "Heading", component: Heading },
      {
        path: "/documentation/info-area",
        name: "InfoArea",
        component: InfoArea
      },
      { path: "/documentation/input", name: "Inputs", component: Input },
      {
        path: "/documentation/instruction",
        name: "Instruction",
        component: Instruction
      },
      {
        path: "/documentation/linear-progress",
        name: "LinearProgress",
        component: LinearProgress
      },
      { path: "/documentation/modal", name: "Modal", component: Modal },
      {
        path: "/documentation/nav-pills",
        name: "NavPills",
        component: NavPills
      },
      {
        path: "/documentation/pagination",
        name: "Pagination",
        component: Pagination
      },
      { path: "/documentation/select", name: "Select", component: Select },
      { path: "/documentation/sidebar", name: "Sidebar", component: Sidebar },
      {
        path: "/documentation/snackbar",
        name: "Snackbar",
        component: Snackbar
      },
      { path: "/documentation/table", name: "Table", component: Table },
      { path: "/documentation/tabs", name: "Tabs", component: Tabs },
      { path: "/documentation/tasks", name: "Tasks", component: Tasks },
      {
        path: "/documentation/timeline",
        name: "Timeline",
        component: Timeline
      },
      {
        path: "/documentation/tooltips",
        name: "Tooltips",
        component: Tooltips
      },
      {
        path: "/documentation/typography",
        name: "Typography",
        component: Typography
      },
      { path: "/documentation/upload", name: "Upload", component: Upload },
      { path: "/documentation/wizard", name: "Wizard", component: Wizard }
    ]
  },
  {
    name: "Plugins",
    path: "/documentation/charts",
    routes: [
      {
        path: "/documentation/calendar",
        name: "Calendar",
        component: Calendar
      },
      { path: "/documentation/charts", name: "Charts", component: Charts },
      {
        path: "/documentation/date-time-picker",
        name: "DateTimePicker",
        component: DateTimePicker
      },
      {
        path: "/documentation/google-maps",
        name: "GoogleMaps",
        component: GoogleMaps
      },
      {
        path: "/documentation/perfect-scrollbar",
        name: "PerfectScrollbar",
        component: PerfectScrollbar
      },
      {
        path: "/documentation/react-table",
        name: "ReactTable",
        component: ReactTables
      },
      { path: "/documentation/sliders", name: "Sliders", component: Sliders },
      {
        path: "/documentation/sweet-alert",
        name: "SweetAlert",
        component: SweetAlert
      },
      { path: "/documentation/tags", name: "Tags", component: Tags },
      {
        path: "/documentation/vector-maps",
        name: "VectorMaps",
        component: VectorMaps
      }
    ]
  },
  { redirect: true, path: "/documentation", pathTo: "/documentation/tutorial" }
];

export default docsRoutes;
