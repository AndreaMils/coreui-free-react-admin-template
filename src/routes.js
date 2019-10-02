import React from "react";

const AppSettings = React.lazy(() => import("./views/AppSettings/AppSettings"));
const VodConfiguration = React.lazy(() => import("../src/views/VodConfiguration/VodConfiguration"));
const Reacteroids = React.lazy(() => import("../src/views/Reacteroids/Reacteroids"));

const routes = [
  { path: "/", exact: true, name: "" },
  { path: "/appsettings", exact: true, name: "/App Settings", component: AppSettings },
  { path: "/VodConfiguration", exact: true, name: "/Vod Configuration", component: VodConfiguration },
  { path: "/Reacteroids", exact: true, name: "/Reacteroids", component: Reacteroids }
];

export default routes;
