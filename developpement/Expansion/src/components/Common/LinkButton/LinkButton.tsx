import React from "react";
import "./LinkButton.scss";

interface LinkButtonProps {
	text: string; // Texte du bouton
	iconUrl?: string; // URL de l'icône (optionnel)
	href: string; // URL pour le lien
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, iconUrl, href }) => {
	return (
		<div className="box">
			<a className="btn lien" href={href}>
				{iconUrl && (
					<div className="container__img">
						<img
							src={iconUrl}
							alt="Icon"
							style={{ width: "18px", paddingRight: "8px" }}
						/>
					</div>
				)}
				<span className={iconUrl ? "text-with-icon" : ""}>{text}</span>

				<div className="space">
					<span style={{ "--i": "31" }} className="star"></span>
					<span style={{ "--i": "12" }} className="star"></span>
					<span style={{ "--i": "57" }} className="star"></span>
					<span style={{ "--i": "93" }} className="star"></span>
					<span style={{ "--i": "23" }} className="star"></span>
					<span style={{ "--i": "70" }} className="star"></span>
					<span style={{ "--i": "6" }} className="star"></span>
				</div>
			</a>
		</div>
	);
};

export default LinkButton;
