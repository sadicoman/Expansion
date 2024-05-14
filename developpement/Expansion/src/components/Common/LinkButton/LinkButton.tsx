import React from "react";
import "./LinkButton.scss";

interface LinkButtonProps {
	text: string; // Texte du bouton
	iconUrl?: string; // URL de l'icône (optionnel)
	href: string; // URL pour le lien
}

const LinkButton: React.FC<LinkButtonProps> = ({ text, iconUrl, href }) => {
	return (
		// Utilisez `onClick` pour la gestion des événements, et `href` pour la navigation
		<a className="btn lien" href={href}>
			{iconUrl && (
				<img src={iconUrl} alt="Icon" style={{ width: "18px", paddingRight: "8px" }} />
			)}{" "}
			<span>{text}</span>
		</a>
	);
};

export default LinkButton;
