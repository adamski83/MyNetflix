import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { AdsPlan } from "../components/adsPlan/AdsPlan";
import { ErrorPage } from "../components/error/ErrorPage";
import { footerData } from "../constans";
import { WelcomePage } from "../layouts/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
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
]);
