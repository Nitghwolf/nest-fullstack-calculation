import * as React from "react";
import { FC, useState } from "react";
import { AuthService } from "../services/auth.service";
import { toast } from "react-toastify";
import { setTokenToLocalStorage } from "../helpers/localstorage.helper";
import { useAppDispatch } from "../hooks/hooks";
import { login } from "../store/user/userSlice";
import { useNavigate } from "react-router-dom";

const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.registration({ email, password });
      if (data) {
        toast.success("Account has been created");
        setIsLogin(!isLogin);
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message.toString() || "error");
    }
  };

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const data = await AuthService.login({ email, password });
      console.log(data);
      
      if (data) {
        setTokenToLocalStorage('token', data.token);
        dispatch(login(data));
        toast.success("Account login");
        navigate('/');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message.toString() || "error");
    }
  };

  return (
    <div className="mt-40 flex flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="mb-10 text-center text-xl">
        {isLogin ? "Login" : "Registration"}
      </h1>
      <form
        className="mx-auto flex w-1/3 flex-col gap-5"
        onSubmit={isLogin ? loginHandler : registrationHandler}
      >
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-green mx-auto">Submit</button>
      </form>

      <div className="mt-5 flex justify-center">
        {isLogin ? (
          <button
            className="text-slate-300 hover:text-white"
            onClick={() => setIsLogin(!isLogin)}
          >
            You don`t have account?
          </button>
        ) : (
          <button
            className="text-slate-300 hover:text-white"
            onClick={() => setIsLogin(!isLogin)}
          >
            Already have an account?
          </button>
        )}
      </div>
    </div>
  );
};

export default Auth;
