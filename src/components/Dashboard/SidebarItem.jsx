import { useContext } from "react";
import { Link } from "react-router-dom"; 
import { SidebarContext } from "./Dashboard";

export function SidebarItem({ icon, text, to, onClick }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className="flex items-center space-x-3 p-2 rounded-md cursor-pointer hover:bg-gray-700 transition"
      onClick={onClick} 
    >
      <span>{icon}</span>
      {to ? (
        <Link to={to} className="text-white">
          {expanded && <span>{text}</span>}
        </Link>
      ) : (
        expanded && <span className="text-white">{text}</span>
      )}
    </li>
  );
}

export default SidebarItem;
