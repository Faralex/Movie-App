import RouterProvider from "./providers/RouterProvider";
import AppRouter from "./providers/AppRouter";

const App = () => {
  return (
    <RouterProvider>
      <AppRouter />
    </RouterProvider>
  );
};

export default App;
