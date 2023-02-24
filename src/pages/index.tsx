import { Navigate, Route, Routes } from "react-router";
import { Header } from "../widgets";
import { authModel } from "entities/auth";
import { lazy } from "react";

const HomePage = lazy(() => import("./home"));
const NewsPage = lazy(() => import("./news"));
const ProfilePage = lazy(() => import("./profile"));

export const Routing = () => {
  const isAuth = authModel.useGetIsAuthState();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        {isAuth ? (
          <Route path="/profile" element={<ProfilePage />} />
        ) : (
          <Route path="/profile" element={<Navigate to="/" />} />
        )}
      </Routes>
    </>
  );
};
