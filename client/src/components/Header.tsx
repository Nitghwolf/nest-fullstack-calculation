import { FC } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBtc, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { useAppDispatch } from "../hooks/hooks";
import { logout } from "../store/user/userSlice";
import { removeTokenFromLocalStorage } from "../helpers/localstorage.helper";
import { toast } from "react-toastify";

const Header: FC = () => {
  const isAuth = useAuth();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logoutHendler = () => {
    dispatch(logout());
    removeTokenFromLocalStorage('token');
    toast.success('Logout');
    navigate('/');
  };

  return (
    <header className="flex items-center bg-slate-800 p-4 shadow-sm backdrop-blur-sm">
      <Link to="/">
        <FaBtc size={20} />
      </Link>
      {isAuth && (
        <nav className="ml-auto mr-10">
          <ul className="flex items-center gap-5">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-white/70"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/transaction"}
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-white/70"
                }
              >
                Transaction
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/categories"}
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-white/70"
                }
              >
                Categories
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
      {isAuth ? (
        <button className="btn btn-red" onClick={logoutHendler}>
          <span>Log out</span>
          <FaSignOutAlt />
        </button>
      ) : (
        <Link className="py-2 text-white/70 hover:text-white ml-auto" to={'auth'}>Log in/Sign in</Link>
      )}
    </header>
  );
};

export default Header;
