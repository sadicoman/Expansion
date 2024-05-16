import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import LinkButton from "../Common/LinkButton/LinkButton";
import "./Content.scss";

const Content: React.FC = () => {
	const container = useRef(null);
	const titleRef = useRef(null);

	useGSAP(
		() => {
			gsap.registerPlugin(SplitText);

			const splitTitle = new SplitText(titleRef.current, { type: "words, chars" });
			const chars = splitTitle.chars;

			const tl = gsap.timeline();
			tl.from(chars, {
				duration: 0.18,
				opacity: 0,
				y: -50,
				ease: "back.out(1.7)",
				stagger: 0.04,
				delay: 1.5,
			});

			gsap.from(".text", {
				opacity: 0,
				y: -20,
				duration: 0.25,
				delay: 3.5,
			});

			gsap.from(".box", {
				opacity: 0,
				y: -20,
				duration: 0.3,
				delay: 3.8,
			});

			return () => {
				splitTitle.revert();
			};
		},
		{ scope: container },
	);

	return (
		<>
			<section ref={container} className="section">
				<h1 ref={titleRef} className="title">
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
};

export default Content;
