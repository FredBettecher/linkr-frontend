import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GlobalContext } from "../contexts/GlobalContext";
import { UserContext } from "../contexts/UserContext";
import { userMock } from "../mock/mock";
import Header from "./Header/Header";
import SignIn from "./SignIn/SignIn"

function App() {
  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ nothing: null }}>
        <UserContext.Provider value={userMock}>
          <Routes>
            <Route path="/" element={<SignIn />} />
            {/* <Route path="/sign-up" element={<SignUp />} /> */}
            {/* <Route path="/hashtag/:hashtag" element={<Hashtag />} /> */}
            <Route path="/timeline" element={<Header />} />
            {/* <Route path="/user/:id" element={<User />} /> */}
          </Routes>
        </UserContext.Provider>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
