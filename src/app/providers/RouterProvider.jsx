import { BrowserRouter } from "react-router-dom";

const RouterProvider = ({ children }) => {
  return <BrowserRouter basename="/Movie-App">{children}</BrowserRouter>;
};

export default RouterProvider;
