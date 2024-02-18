import NavItem from "./nav-item";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

export default function UserBar() {
  return (
    <ul className="space-y-8 flex flex-col md:flex-row md:space-y-0 md:items-center md:gap-x-8">
      <NavItem path="/account">
        <PersonIcon />
        Account
      </NavItem>
      <NavItem path="/logout">
        <LogoutIcon />
        Logout
      </NavItem>
    </ul>
  );
}
