import LinkButton from "../Common/LinkButton/LinkButton";
import "./Content.scss";

function Content() {
	return (
		<>
			<section className="section">
				<h1 className="title">
					Nous vous accompagnons dans votre{" "}
					<span className="color--primary">expansion digitale</span>
				</h1>
				<p className="text text--color">
					Le programme Digital Booster d’Expansion est{" "}
					<span className="highlight">
						l’atout digital des petites, moyennes et grandes entreprises
					</span>{" "}
					qui souhaitent développer ou confirmer leur présence en ligne.
				</p>
				<LinkButton
					text="Faites le test sans plus tarder"
					iconUrl="../src/assets/images/rocket-icon.svg"
					href="#"
				/>
			</section>
		</>
	);
}

export default Content;
