import App from "../App";
import { AdsPlan } from "../components/adsPlan/AdsPlan";
import { ErrorPage } from "../components/error/ErrorPage";
import { Home } from "../layouts/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "",
				element: <Home />,
			},
		],
	},
	{
		path: "/subscription",
		element: <AdsPlan />,
		errorElement: <ErrorPage />,
	},
]);
