import { Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

import MainNavigation from "./shared/components/Navigation/MainNavigation";

import { useContext } from "react";
import NewPlacePage from "./place/pages/NewPlacePage";
import UpdatePlacePage from "./place/pages/UpdatePlacePage";
import UsersPlacesPage from "./place/pages/UsersPlacesPage";
import { PlaceShareContext } from "./shared/context/PlaceShareContextProvider";
import AuthenticatePage from "./user/pages/AuthenticatePage";
import UsersPage from "./user/pages/UsersPage";

function App() {
  const { isLoggedIn } = useContext(PlaceShareContext);
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     navigate("/auth");
  //   }
  // }, [navigate]);
  //
  let routes;
  if (isLoggedIn) {
    routes = (
      <>
        <Route path="/" element={<UsersPage />} exact />
        <Route path="/:uId/places" element={<UsersPlacesPage />} exact />
        <Route path="/places/new" element={<NewPlacePage />} exact />
        <Route path="/places/:placeId" element={<UpdatePlacePage />} exact />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<UsersPage />} exact />
        <Route path="/:uId/places" element={<UsersPlacesPage />} exact />
        <Route path="/auth" element={<AuthenticatePage />} exact />
      </>
    );

    console.log(`isLoggedIn: ${isLoggedIn}`);
  }
  return (
    <>
      <MainNavigation />
      <main>
        {
          <Routes>
            {routes}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        }
      </main>
    </>
  );
}

export default App;
