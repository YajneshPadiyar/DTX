import Dashboard from "../layouts/Dashboard";
import LandingPage from "../views/LandingPage";
import Login from "../views/Login";

const indexRoutes = [

    { path: "/landing-page",
      name: "LandingPage",
      component: LandingPage
    },
    { path: "/login-page",
      name: "Login",
      component: Login
    },
    { path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    { path: "/",
      name: "LandingPage",
      component: LandingPage
    },
];

export default indexRoutes;
