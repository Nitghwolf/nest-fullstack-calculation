import { FC } from "react";
import { Link } from "react-router-dom";
import img from '../assets/404.png';

const ErrorPage: FC = () => {

    return (
        <div className="min-h-screen bg-slate-900 font-roboto text-white flex justify-center items-center flex-col gap-10">
            <img src={img} alt="not found img" className="w-80"/>
            <Link to={'/'} className="rounded-md bg-sky-500 px-6 py-2">Home</Link>
        </div>
    )
};

export default ErrorPage;