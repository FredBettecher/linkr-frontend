import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalContext } from "../contexts/GlobalContext";
import { UserContext } from "../contexts/UserContext";
import { userMock } from "../mock/mock";
import Timeline from "../pages/Timeline/Timeline";
// import Header from "./Header/Header";
import SignIn from "./SignIn/SignIn"
import SignUp from "./SignUp/SignUp"
import AnotherUserPage from "../pages/AnotherUserPage/AnotherUserPage";


function App() {
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ nothing: null }}>
        <UserContext.Provider value={userMock}>
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            {/* <Route path="/hashtag/:hashtag" element={<Hashtag />} /> */}
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/user/:id" element={<AnotherUserPage />} />
          </Routes>
        </UserContext.Provider>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
