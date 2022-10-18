import { Routes, Route } from "react-router-dom";

import { Login } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login/*" element={
          <PublicRouter>
            <Routes>
              <Route path={'/*'} element={<Login />} />
            </Routes>
          </PublicRouter>
        } />
        <Route path="/*" element={
          <PrivateRouter>
            <HeroesRoutes />
          </PrivateRouter>
        } />
      </Routes>
    </>
  )
}
