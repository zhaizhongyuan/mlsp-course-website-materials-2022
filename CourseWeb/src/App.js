// CSS
import './index.css'

// Routing
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom"

// Components
import TopNavigationMenu from "./Components/TopNavigationMenu"
import Footer from "./Components/Footer"

// Pages
import Home from "./Pages/Home"
import Lectures from "./Pages/Lectures"
import Homework from "./Pages/Homework"
import Project from "./Pages/Project"

export default function App() {
	return (
		<Router>
			<div className="relative pt-6">
				<TopNavigationMenu />
				
				<Switch>
					<Route path="/lectures">
						<Lectures />
					</Route>
					<Route path="/homework">
						<Homework />
					</Route>
					<Route path="/project">
						<Project />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>

				<Footer/>
			</div>
		</Router>
	)
}
