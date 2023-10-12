/* eslint-disable @typescript-eslint/no-explicit-any */

import { Route, Routes } from "react-router-dom";
import {
  ChangePasword,
  Dashboard,
  DashboardAdmin,
  Home,
  Login,
  NotAllowed,
  NotFound,
  Profile,
  Register,
  ResetPassword,
  SearchServices,
  SelectCreateAccount,
  UploadDocs,
} from "../components/pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { RoleProtectedRoute } from "./RoleProtectedRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route key="login" path="/login" element={<Login />} />
      <Route key="register" path="/register" element={<Register />} />
      <Route
        key="reset-password"
        path="/auth/reset-password"
        element={<ResetPassword />}
      />
      <Route
        key="change-password"
        path="/auth/change-password/:init/:id/:code"
        element={<ChangePasword />}
      />

      <Route element={<ProtectedRoute />}>
        <Route
          key="createAccount"
          path="/home/create-account"
          element={<SelectCreateAccount />}
        />

        <Route key="upload" path="/upload" element={<UploadDocs />} />
        <Route key="profile" path="/profile" element={<Profile />} />
        <Route key="dashboard" path="/dashboard" element={<Dashboard />} />
        <Route key="services" path="/services" element={<SearchServices />} />
      </Route>
      <Route element={<RoleProtectedRoute />}>
        <Route
          key="dashboardAdmin"
          path="/admin/dashboard"
          element={<DashboardAdmin />}
        />
      </Route>
      <Route key="notAllowed" path="/notAllowed" element={<NotAllowed />} />
      <Route key="notFound" path="*" element={<NotFound />} />
    </Routes>
  );
};
