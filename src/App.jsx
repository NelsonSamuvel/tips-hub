import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import TipsContextProvider from "./context/TipsContextProvider";
import AppLayout from "./UI/AppLayout";
import PageNotFound from "./UI/PageNotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="tips" replace />,
      },
      {
        path: "/tips",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <TipsContextProvider>
      <RouterProvider router={router}>
        <AppLayout />
      </RouterProvider>
    </TipsContextProvider>
  );
}

export default App;
