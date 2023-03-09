import { useContext, useEffect, useState } from "react";
import { StyledHeader, Arrow, StyledMenu, Input, InputContainer, SearchResult } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import searchUsers from "../../services/searchUsers";
import axios from "axios";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { username, pictureUrl } = useContext(UserContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const promise = axios.get(`http://localhost:5000/users`)
    promise.then(resp => setUsers(resp.data));
    promise.catch(err => console.log(err.message));
  }, []);

  const handleSearch = (event) => {
    const search = event.target.value;
    const newSearch = users.filter(user => {
      return user.title.includes(search);
    });
  };

  return (
    <>
      <StyledHeader>
        <h1>linkr</h1>
        <InputContainer>
          <Input type="text" placeholder="Search for people" onChange={handleSearch} />
          {users.length !== 0 &&(
            <SearchResult>{searchUsers}</SearchResult>
          )
          }
        </InputContainer>
        <Arrow isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <img src={pictureUrl} alt={`${username}'s avatar`} />
      </StyledHeader>
      <StyledMenu isMenuOpen={isMenuOpen}>
        {/* TODO: mudar o `p` p/ link the logout */}
        <a>Logout</a>
      </StyledMenu>
    </>
  );
}
