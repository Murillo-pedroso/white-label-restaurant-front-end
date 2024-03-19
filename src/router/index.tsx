import { Route, Routes } from "react-router-dom";

import routesJson from "./routesJson";

export default function Router() {
  return (
    <Routes>
      {routesJson.map(({ path, element }) => (
        <Route key={path + element} path={path} element={element} />
      ))}
      <Route
        key={"not-found"}
        path={"*"}
        element={<div>Página não encontrada</div>}
      />
    </Routes>
  );
}
