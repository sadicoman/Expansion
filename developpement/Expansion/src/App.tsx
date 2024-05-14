import "./_normalize.scss";
import "./App.scss";
import LinkButton from "./components/Common/LinkButton/LinkButton";
import Content from "./components/Content/Content";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<Header />
			<main className="main">
				<Content />
			</main>
		</>
	);
}

export default App;
