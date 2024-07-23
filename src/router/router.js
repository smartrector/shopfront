import { createBrowserRouter } from "react-router-dom";

import { Suspense, lazy } from "react";

const Loading = <div className="bg-red-500">Loading.....</div>;
const MainPage = lazy(() => import("../layouts/pages/MainPage"));
const AboutPage = lazy(() => import("../layouts/pages/AboutPage"));

const root = createBrowserRouter([
  {
    path: "",
    // element: <MainPage />,
    element: (
      <Suspense fallback={Loading}>
        <MainPage />
      </Suspense>
    ),
  },
  {
    path: "about",
    element: (
      <Suspense fallback={Loading}>
        <AboutPage />
      </Suspense>
    ),
  },
]);

export default root;
