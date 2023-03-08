import { Link } from "react-router-dom";

export default function searchUsers({ users }){
    return(
        <ul>
            {users.map(user => (
                <li><Link to={`/user/${user.id}`}>{user.username}</Link></li>
            ))}
        </ul>
    );
}