import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

import { init } from "services/actions";
import { getIngredients } from "services/actions/ingredients";
import useAutoLogin from "hooks/useAutoLogin";
import ProtectedRoute from "components/protected-route-element/protected-route-element";
import IngredientModal from "components/ingredient-modal/ingredient-modal";
import MainPage from "pages/main/main";
import LoginPage from "pages/login/login";
import RegisterPage from "pages/register/register";
import ForgotPasswordPage from "pages/forgot-password/forgot-password";
import ResetPasswordPage from "pages/reset-password/reset-password";
import ProfilePage from "pages/profile/profile";
import NoMatchPage from "pages/no-match/no-match";
import Layout from "pages/layout/layout";
import IngredientsPage from "pages/ingredients/ingredients";

export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const state = location.state;

  useAutoLogin();

  useEffect(() => {
    dispatch(init());
    dispatch(getIngredients());
  }, []);

  return (
    <>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/ingredients/:id" element={<IngredientsPage />} />
          <Route
            path="/login"
            element={
              <ProtectedRoute anonymousOnly={true}>
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute anonymousOnly={true}>
                <RegisterPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <ProtectedRoute anonymousOnly={true}>
                <ForgotPasswordPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reset-password"
            element={
              <ProtectedRoute anonymousOnly={true}>
                <ResetPasswordPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>

      {state?.backgroundLocation && (
        <Routes>
          <Route path="/ingredients/:id" element={<IngredientModal />} />
        </Routes>
      )}
    </>
  );
}
