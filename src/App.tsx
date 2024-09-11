import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppHome from "./pages/AppHome";
import LookFeed from "./pages/LookFeed";
import ProductListingPage from "./pages/ProductListingPage";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route element={<AppHome />} path="/"></Route>
				<Route element={<LookFeed />} path="/look-feed" />
				<Route element={<ProductListingPage />} path="/product-listing" />
			</Routes>
		</Router>
	);
};

export default App;
