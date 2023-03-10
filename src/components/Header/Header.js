import { useContext, useEffect, useState } from "react";
import { StyledHeader, Arrow, StyledMenu, Input, InputContainer, SearchResult, Img, StyledLink } from "./styles";
import { UserContext } from "../../contexts/UserContext";
import axios from "axios";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { username, pictureUrl } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const promise = axios.get(`https://linkr-backend-sr4s.onrender.com/users`)
    promise.then(resp => setUsers(resp.data));
    promise.catch(err => console.log(err.message));
  }, []);

  const handleSearch = (event) => {
    const search = event.target.value;
    
    if(search.trim() === ""){
      setSearchResults([]);
      return;
    }

    const result = users.filter(user => {
      return user.username.toLowerCase().includes(search.toLowerCase());
    });

    setSearchResults(result);
  };

  const searchUsers = () => {
      return(
        <ul>
            {searchResults.map(user => (
                <li key={user.id}>
                  <StyledLink> <Img src={user.pictureUrl} /> {user.username} </StyledLink>
                </li>
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
          {searchResults.length !== 0 && searchResults[0].username !== "" && (
          <SearchResult>{searchUsers(searchResults)}</SearchResult>
          )}
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
