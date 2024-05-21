import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import LinkButton from "../Common/LinkButton/LinkButton";
import "./Content.scss";
import ThreeScene from "../ThreeScene/ThreeScene";
import SvgComponent from "../ThreeScene/SvgComponent";

const Content: React.FC = () => {
	const container = useRef(null);
	const titleRef = useRef(null);
	const svgRef = useRef(null); // Référence pour SvgComponent
	const threeSceneRef = useRef(null); // Référence pour ThreeScene

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

			gsap.fromTo(
				svgRef.current,
				{
					scale: 0,
					opacity: 0,
				},
				{
					scale: 1,
					opacity: 1,
					transformOrigin: "center center",
					duration: 2,
					ease: "power2.inOut",

					onComplete: () => {
						gsap.fromTo(
							threeSceneRef.current,
							{
								// scale: 0,
								y: 50,
								opacity: 0,
							},
							{
								// scale: 1,
								opacity: 1,
								y: 0,
								// transformOrigin: "center center",
								duration: 1.25,
								delay: 0.5,
								ease: "power2.inOut",
							},
						);
					},
				},
			);

			return () => {
				splitTitle.revert();
			};
		},
		{ scope: container },
	);

	return (
		<>
			<section ref={container} className="section">
				<div className="container">
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
				</div>
				<div className="container__three">
					<div className="container__illu" ref={svgRef}>
						<SvgComponent />
					</div>
					<div ref={threeSceneRef} style={{ opacity: 0 }}>
						<ThreeScene />
					</div>
				</div>
			</section>
		</>
	);
};

export default Content;
