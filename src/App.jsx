import { Route, Routes } from "react-router-dom";

import "./App.css";

import MainNavigation from "./shared/components/Navigation/MainNavigation";

import { useEffect } from "react";
import NewPlacePage from "./place/pages/NewPlacePage";
import UpdatePlacePage from "./place/pages/UpdatePlacePage";
import UsersPlacesPage from "./place/pages/UsersPlacesPage";
import AuthenticatePage from "./user/pages/AuthenticatePage";
import UsersPage from "./user/pages/UsersPage";

function App() {
  useEffect(() => {
    document.querySelector(
      `#googleMapsScript`
    ).src = `https://maps.googleapis.com/maps/api/js?key=${
      import.meta.env.VITE_GOOGLE_API_KEY
    }&libraries=places`;
  }, []);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/auth");
  //   }
  // }, [navigate]);
  return (
    <>
      <MainNavigation />
      <main>
        <Routes>
          {/* <Route path="/users" exact element={WelcomeScreen} /> */}
          <Route path="/" exact element={<UsersPage />} />
          <Route path="/:uId/places" exact element={<UsersPlacesPage />} />
          <Route path="/places/new" exact element={<NewPlacePage />} />
          <Route path="/places/:placeId" exact element={<UpdatePlacePage />} />
          {/* <Route path="/places/:placeId" exact element={<UpdatePlacePage />} /> */}
          <Route path="/auth" exact element={<AuthenticatePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
