import "./_normalize.scss";
import "./App.scss";
import LinkButton from "./components/Common/LinkButton/LinkButton";
import Header from "./components/Header/Header";

function App() {
	return (
		<>
			<Header />
			<section className="section">
				<h1 className="title">Expansion</h1>
				<LinkButton text="Prendre un rendez-vous" href="#" />
				<LinkButton
					text="Faites le test sans plus tarder"
					iconUrl="../src/assets/images/rocket-icon.svg"
					href="#"
				/>
			</section>
		</>
	);
}

export default App;
