import { useContext, useState } from "react";

import { StyledHeader, Arrow, StyledMenu } from "./styles";
import { UserContext } from "../../contexts/UserContext";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { username, pictureUrl } = useContext(UserContext);

  return (
    <>
      <StyledHeader>
        <h1>linkr</h1>
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
