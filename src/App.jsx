import { Routes, Route } from "react-router-dom";

import "./App.css";

import MainNavigation from "./shared/components/Navigation/MainNavigation";

import UsersPage from "./user/pages/UsersPage";
import UsersPlacesPage from "./place/pages/UsersPlacesPage";
import NewPlacePage from "./place/pages/NewPlacePage";
import UpdatePlacePage from "./place/pages/UpdatePlacePage";
import AuthenticatePage from "./user/pages/AuthenticatePage";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => navigate("/"), []);
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
          <Route path="/auth" exact element={<AuthenticatePage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
