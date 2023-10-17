import css from "./Sidebar.module.css";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className={css.container}>
      <img src="./camp.svg" alt="logo" className={css.logo} />

      <div className={css.menu}>
        <Link to="dashboard" className={css.item} title={"Dashboard"}>
          <MdSpaceDashboard size={30} />
        </Link>

        <Link to="calendar" className={css.item} title="Calendar">
          <AiFillCalendar size={30} />
        </Link>

        <Link to="board" className={css.item} title="Trello Board">
          <FaTasks size={30} />
        </Link>

        <Link to="users" className={css.item} title="Users">
          <AiOutlineTable size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
