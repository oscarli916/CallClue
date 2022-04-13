import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./containers/home-page";
import HistoryPage from "./containers/history-page";
import SideNav from "./components/sidenav";

function App() {
	return (
		<div className="App">
			<SideNav />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/history" element={<HistoryPage />} />
				<Route path="/*" element={<HomePage />} />
			</Routes>
		</div>
	);
}

export default App;
