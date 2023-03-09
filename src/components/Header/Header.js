import { useContext, useEffect, useState, Link } from "react";
import { StyledHeader, Arrow, StyledMenu, Input, InputContainer, SearchResult } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { username, pictureUrl } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const promise = axios.get(`http://localhost:5000/users`)
    promise.then(resp => setUsers(resp.data));
    promise.catch(err => console.log(err.message));
  }, []);

  const handleSearch = (event) => {
    const search = event.target.value;
    const result = users.filter(user => {
      return user.username.includes(search);
    });

    setSearchResults(result);
  };

  const searchUsers = () => {
    return(
        <ul>
            {searchResults.map(user => (
                <li key={user.id}>{user.username}</li>
            ))}
        </ul>
    );
  };

  return (
    <>
      <StyledHeader>
        <h1>linkr</h1>
        <InputContainer>
          <Input type="text" placeholder="Search for people" onChange={handleSearch} />
          {searchResults.length > 0 && <SearchResult>{searchUsers(searchResults)}</SearchResult>}
        </InputContainer>
        <Arrow isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <img src={pictureUrl} alt={`${username}'s avatar`} />
      </StyledHeader>
      <StyledMenu isMenuOpen={isMenuOpen}>
        {/* TODO: mudar o `p` p/ link the logout */}
        <p>Logout</p>
      </StyledMenu>
    </>
  );
}
