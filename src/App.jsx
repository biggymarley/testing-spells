import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import { Loader } from "./Components/Loader.jsx";
import MainRouter from "./Components/MainRouter.jsx";
import { LoadingContext } from "./Context/LoadingContext.js";
import { UserContext } from "./Context/UserContext.js";
import useAuthTokenHook from "./hooks/useAuthTokenHook.js";
import { fetchSpells } from "./firebase/airtable.js";
import spells from "./firebase/spells.json";
import TableData from "./Components/TableData.jsx";
function App() {
  const [appLoading, setAppLoading] = useState(false);
  const [spellsArray, setspellsArray] = useState([]);
  const {
    accessToken,
    saveToken,
    clearToken,
    userData,
    usersData,
    getUser,
    saveTokenUser,
    saveTokenUsers,
    setUserData,
    getUsers,
  } = useAuthTokenHook();

  useEffect(() => {
    console.log(spells)
    fetchSpells();
    setspellsArray(spells);
  }, []);

  return (
    <LoadingContext.Provider value={{ appLoading, setAppLoading }}>
      {/* <UserContext.Provider
        value={{
          saveTokenUser,
          saveTokenUsers,
          accessToken,
          saveToken,
          clearToken,
          setUserData,
          userData,
          usersData,
          getUser,
          getUsers,
        }}
      >
        {appLoading ? (
          <div className="z-50 fixed">
            <Loader />
          </div>
        ) : null}
        <div className="flex min-h-screen bg-bg">
          <MainRouter />
        </div>
        <Toaster richColors={true} position="top-center" />
      </UserContext.Provider> */}
      <TableData/>
    </LoadingContext.Provider>
  );
}

export default App;
