import { createBrowserRouter } from "react-router-dom";

import { AdsPlan } from "../components/adsPlan/AdsPlan";
import { ErrorPage } from "../components/error/ErrorPage";
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
		children: footerData.map(({ link, component }) => ({
			path: link,
			element: component(),
			errorElement: <ErrorPage />,
		})),
	},
]);
