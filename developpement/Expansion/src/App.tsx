import "./App.scss";
import LinkButton from "./components/Common/LinkButton/LinkButton";

function App() {
	return (
		<>
			<section className="section">
				<h1 className="title">Expansion</h1>
				<LinkButton text="Prendre un rendez-vous" href="#" />
				<LinkButton
					text="Faites le test sans plus tarder"
					iconUrl="../src/assets/rocket-icon.svg"
					href="#"
				/>
			</section>
		</>
	);
}

export default App;
