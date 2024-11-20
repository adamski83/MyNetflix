import { createBrowserRouter } from "react-router-dom";

import { AdsPlan } from "../components/adsPlan/AdsPlan";
import { ErrorPage } from "../components/error/ErrorPage";
import { Login } from "../components/Login/Login";
import { footerData } from "../constans";
import { WelcomePage } from "../pages/Home";
import { Layout } from "../pages/Layout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <WelcomePage />,
			},
			{
				path: "/subscription",
				element: <AdsPlan />,
				errorElement: <ErrorPage />,
			},
		],
	},
	{
		children: footerData.map((item) => ({
			path: item,
			element: <h1>{item}</h1>,
			errorElement: <ErrorPage />,
		})),
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <ErrorPage />,
	},
]);
