import ReactDOM from "react-dom/client";
import {ToastContainer} from 'react-toastify';
import App from "./App";
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App />
    <ToastContainer position='bottom-left' autoClose={2000} />
  </Provider>
);
