/** 
  All of the routes for the MD React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  11. The `component` key is used to store the component of its route.
  12. noCollapse: true for singular route
*/

// MD React layouts
import DataTables from "layouts/MD/applications/data-tables";
import Calendar from "layouts/MD/applications/calendar";
import NewProduct from "layouts/MD/ecommerce/products/new-product";
import EditProduct from "layouts/MD/ecommerce/products/edit-product";
import SignInBasic from "layouts/MD/authentication/sign-in/basic";
import SignInCover from "layouts/MD/authentication/sign-in/cover";
import SignInIllustration from "layouts/MD/authentication/sign-in/illustration";
import SignUpCover from "layouts/MD/authentication/sign-up/cover";
import ResetCover from "layouts/MD/authentication/reset-password/cover";
import CardsExample from "layouts/Template/cards";
import ChartsExample from "layouts/Template/charts"

// @mui icons
import Icon from "@mui/material/Icon";
import ComponentsExample from "./layouts/Template/components";
import ReactTableExample from "./layouts/Template/datatables/react-table";
import MRTExample from "./layouts/Template/datatables/mrt";

const routes = [
  {
    type: "collapse",
    name: "Cards",
    key: "cards",
    route: "/cards",
    noCollapse: true,
    icon: <Icon fontSize="medium">dashboard</Icon>,
    component: <CardsExample />
  },

  {
    type: "collapse",
    name: "Components",
    key: "components",
    route: "/components",
    noCollapse: true,
    icon: <Icon fontSize="medium">settings</Icon>,
    component: <ComponentsExample />
  },

  {
    type: "collapse",
    name: "Charts",
    key: "charts",
    route: "/charts",
    noCollapse: true,
    icon: <Icon fontSize="medium">bar_chart</Icon>,
    component: <ChartsExample />
  },

  {
    type: "collapse",
    name: "Datatables",
    key: "datatables",
    icon: <Icon fontSize="medium">table_chart</Icon>,
    collapse: [
      {
        name: "React Table",
        key: "react-table",
        route: "/datatables/react-table",
        component: <ReactTableExample />,
      },
      {
        name: "MRT",
        key: "mrt",
        route: "/datatables/mrt",
        component: <MRTExample />,
      },
    ],
  },

  { type: "divider" },
  { type: "title", title: "Pages", key: "title-pages" },
  {
    type: "collapse",
    name: "Applications",
    key: "applications",
    icon: <Icon fontSize="medium">apps</Icon>,
    collapse: [
      {
        name: "Data Tables",
        key: "data-tables",
        route: "/applications/data-tables",
        component: <DataTables />,
      },
      {
        name: "Calendar",
        key: "calendar",
        route: "/applications/calendar",
        component: <Calendar />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Ecommerce",
    key: "ecommerce",
    icon: <Icon fontSize="medium">shopping_basket</Icon>,
    collapse: [
      {
        name: "Products",
        key: "products",
        collapse: [
          {
            name: "New Product",
            key: "new-product",
            route: "/ecommerce/products/new-product",
            component: <NewProduct />,
          },
          {
            name: "Edit Product",
            key: "edit-product",
            route: "/ecommerce/products/edit-product",
            component: <EditProduct />,
          },
        ],
      },
    ],
  },
  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: <Icon fontSize="medium">content_paste</Icon>,
    collapse: [
      {
        name: "Sign In",
        key: "sign-in",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/sign-in/basic",
            component: <SignInBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-in/cover",
            component: <SignInCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/sign-in/illustration",
            component: <SignInIllustration />,
          },
        ],
      },
      {
        name: "Sign Up",
        key: "sign-up",
        collapse: [
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-up/cover",
            component: <SignUpCover />,
          },
        ],
      },
      {
        name: "Reset Password",
        key: "reset-password",
        collapse: [
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/reset-password/cover",
            component: <ResetCover />,
          },
        ],
      },
    ],
  }
];

export default routes;
