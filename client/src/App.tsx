import { RouterProvider } from "react-router-dom";
import { getTokenFromLocalStarage } from "./helpers/localstorage.helper";
import { useAppDispatch } from "./hooks/hooks";
import { router } from "./router/router";
import { toast } from "react-toastify";
import { AuthService } from "./services/auth.service";
import { login, logout } from "./store/user/userSlice";
import { useEffect } from "react";


function App() {
  const dispatch = useAppDispatch();

  const checkAuth = async () => {
    const token = getTokenFromLocalStarage();
    try {
      if(token){
        const data = await AuthService.getProfile();

        if(data) {
          dispatch(login(data));
        }
        else{
          dispatch(logout());
        }

      }
    } catch (error: any) {
      toast.error(error.response?.data?.message.toString() || "error");
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
