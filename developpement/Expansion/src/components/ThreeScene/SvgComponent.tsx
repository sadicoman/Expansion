import React, { useEffect } from "react";
import { SVGProps } from "react";
import { gsap } from "gsap";

const SvgComponent: React.FC<SVGProps<SVGSVGElement>> = props => {
	useEffect(() => {
		const timeline = gsap.timeline();

		// timeline.fromTo(
		// 	"#illu",
		// 	{
		// 		scale: 0,
		// 		opacity: 0,
		// 		transformOrigin: "center center",
		// 		duration: 2,
		// 		ease: "power2.inOut",
		// 	},
		// 	{
		// 		scale: 1,
		// 		opacity: 1,
		// 	},
		// );

		// Animation pour la fusée et la fumée
		timeline
			.fromTo(
				"#illu",
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
				},
				"+=1",
			)
			.fromTo(
				"#fusee .st17, #fusee .st18, #fusee .st19",
				{ opacity: 0 },
				{ opacity: 1, duration: 1, stagger: 0.2 },
			)
			.fromTo(
				"#fusee",
				{ y: 100, opacity: 0 },
				{ y: 0, opacity: 1, duration: 2, ease: "power2.inOut" },
				"-=2.5",
			)
			.fromTo(
				".fumer-1, .fumer-2",
				{ opacity: 0 },
				{ opacity: 1, duration: 4, ease: "power2.inOut" },
				"-=2.5",
			);

		return () => {
			timeline.kill();
		};
	}, []);

	return (
		<>
			<svg
				id="illu"
				className="illu"
				xmlns="http://www.w3.org/2000/svg"
				xmlnsXlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 1683.8 1190.6"
				style={{
					enableBackground: "new 0 0 1683.8 1190.6",
				}}
				xmlSpace="preserve"
				{...props}
			>
				<style type="text/css">
					{
						"\r\n\t.st0{fill:#FCFCFC;}\r\n\t.st1{fill:#FFFFFF;}\r\n\t.st2{fill:#EEEEEE;}\r\n\t.st3{fill:#D3D3D3;}\r\n\t.st4{clip-path:url(#XMLID_00000073694445334601698360000000511080990922540209_);fill:url(#SVGID_1_);}\r\n\t\r\n\t\t.st5{clip-path:url(#XMLID_00000073694445334601698360000000511080990922540209_);fill:url(#SVGID_00000074410065330739279830000002637208387898111124_);}\r\n\t.st6{clip-path:url(#XMLID_00000073694445334601698360000000511080990922540209_);fill:#010202;}\r\n\t\r\n\t\t.st7{clip-path:url(#XMLID_00000073694445334601698360000000511080990922540209_);fill:url(#SVGID_00000013159510703574189960000017922608270503479226_);}\r\n\t\r\n\t\t.st8{clip-path:url(#XMLID_00000066476685048347465620000002864079084449036690_);fill:url(#SVGID_00000012455089619976203370000007453434771534751399_);}\r\n\t\r\n\t\t.st9{clip-path:url(#XMLID_00000143614877715745354060000006315091931008753309_);fill:url(#SVGID_00000171699480740029618480000012960916776556567947_);}\r\n\t\r\n\t\t.st10{clip-path:url(#XMLID_00000143614877715745354060000006315091931008753309_);fill:url(#SVGID_00000106856972253416274950000012971016603990542259_);}\r\n\t\r\n\t\t.st11{clip-path:url(#XMLID_00000143614877715745354060000006315091931008753309_);fill:url(#SVGID_00000127044768364688788450000009361237610561860750_);}\r\n\t\r\n\t\t.st12{clip-path:url(#XMLID_00000143614877715745354060000006315091931008753309_);fill:url(#SVGID_00000087378172036692878540000018136212275053382835_);}\r\n\t\r\n\t\t.st13{clip-path:url(#XMLID_00000143614877715745354060000006315091931008753309_);fill:url(#SVGID_00000106145650060982168210000006994300453298095801_);}\r\n\t\r\n\t\t.st14{clip-path:url(#XMLID_00000165206159935099631010000003783029218689539236_);fill:url(#XMLID_00000163063475315651553190000013148394826301989796_);}\r\n\t.st15{clip-path:url(#XMLID_00000165206159935099631010000003783029218689539236_);fill:#B54331;}\r\n\t.st16{clip-path:url(#XMLID_00000095310938464953176470000003881879409369766846_);}\r\n\t\r\n\t\t.st17{clip-path:url(#XMLID_00000026164134613548273850000005096799670035433913_);fill:url(#XMLID_00000140721558113536236340000015198811526036690860_);}\r\n\t\r\n\t\t.st18{clip-path:url(#XMLID_00000156552680900811316000000017169618669249669055_);fill:url(#SVGID_00000181069860223871653020000008927939443330694830_);}\r\n\t\r\n\t\t.st19{clip-path:url(#XMLID_00000156552680900811316000000017169618669249669055_);fill:url(#SVGID_00000076579396544184575540000014864380507320654783_);}\r\n\t\r\n\t\t.st20{clip-path:url(#XMLID_00000156552680900811316000000017169618669249669055_);fill:url(#SVGID_00000172433555873333945710000002656834033878621622_);}\r\n\t\r\n\t\t.st21{clip-path:url(#XMLID_00000068639581163657735290000002590404408116784261_);fill:url(#SVGID_00000128464649122216162420000010765464115650694293_);}\r\n\t.st22{fill:#968681;}\r\n\t.st23{display:none;opacity:0.13;}\r\n\t.st24{display:inline;fill:#020203;}\r\n"
					}
				</style>
				<path
					className="st0"
					d="M1247.3,796.5v15.9l-35,12.4H480.2l-38.9-12.3v-16h93c-8.9,0-16.1-7.2-16.1-16.1V381.7 c0-8.9,7.2-16.1,16.1-16.1h620.9c8.9,0,16.1,7.2,16.1,16.1v398.7c0,8.9-7.2,16.1-16.1,16.1H1247.3z"
				/>
				<rect x={537.7} y={392} className="st1" width={612.3} height={386} />
				<rect x={537.7} y={427.1} className="st2" width={612.3} height={324.5} />
				<g id="site_carres_gris">
					<rect x={860.7} y={406} className="st3" width={66} height={8.5} />
					<rect x={595.5} y={524.6} className="st3" width={115.1} height={16.6} />
					<rect x={595.5} y={549.6} className="st3" width={159.3} height={16.3} />
					<rect x={595.5} y={581} className="st3" width={142} height={8.5} />
					<rect x={595.5} y={595.9} className="st3" width={142} height={8.5} />
					<rect x={595.5} y={610.7} className="st3" width={94.3} height={8.5} />
					<rect x={595.5} y={637.1} className="st3" width={107.3} height={20.2} />
					<rect x={934.9} y={489.2} className="st3" width={156} height={198.3} />
				</g>
				<path
					className="st3"
					d="M1155.3,365.5H534.4c-8.9,0-16.1,7.2-16.1,16.1v398.7c0,8.9,7.2,16.1,16.1,16.1h620.9c8.9,0,16.1-7.2,16.1-16.1 V381.7C1171.4,372.8,1164.2,365.5,1155.3,365.5z M1150.1,778H537.7V392h612.3V778z"
				/>
				<g>
					<defs>
						<polygon
							id="XMLID_00000072990903776400963220000000474120719055956891_"
							points="1501.5,57.9 1260.7,59 848.5,471.1 436.4,59  195.1,57.9 728.8,590.9 195.1,1123.8 436.4,1122.8 848.5,710.6 1260.7,1122.8 1501.5,1123.8 968.3,590.9  "
						/>
					</defs>
					<use
						xlinkHref="#XMLID_00000072990903776400963220000000474120719055956891_"
						style={{
							overflow: "visible",
							fill: "#F1B3A3",
						}}
					/>
					<clipPath id="XMLID_00000005961332758738505880000016063581115371982995_">
						<use
							xlinkHref="#XMLID_00000072990903776400963220000000474120719055956891_"
							style={{
								overflow: "visible",
							}}
						/>
					</clipPath>
					<linearGradient
						id="SVGID_1_"
						gradientUnits="userSpaceOnUse"
						x1={920.0935}
						y1={367.2318}
						x2={920.0935}
						y2={567.6578}
						gradientTransform="matrix(1 0 0 -1 0 1192)"
					>
						<stop
							offset={0}
							style={{
								stopColor: "#F7B5A3",
							}}
						/>
						<stop
							offset={1}
							style={{
								stopColor: "#FFFFFF",
							}}
						/>
					</linearGradient>
					<path
						className="fumer-1"
						style={{
							clipPath: "url(#XMLID_00000005961332758738505880000016063581115371982995_)",
							fill: "url(#SVGID_1_)",
						}}
						d="M1060.6,824.8 h-281V723.1c2.5-1.6,5.4-2.5,8.3-2.8s5.9,0.3,8.6,1.5c2.7,1.2,5.1,3.1,6.9,5.4c1.8,2.4,3,5.1,3.5,8c7.6-7.9,18-22.5,21.9-46 c6.5-39.2,7.1-52.1,7.1-52.1h24.8c0,0-0.4,14.5,5.1,44c2.5,13.3,8.5,26.5,14.2,37c2.5-4.3,6-7.8,10.3-10.3c4.3-2.5,9.1-3.8,14-3.8 c1.2,0,2.3,0.1,3.4,0.2c-0.4-2.5-0.2-5,0.6-7.3c0.8-2.4,2.2-4.5,4.1-6.1c1.9-1.6,4.1-2.8,6.6-3.3c2.4-0.5,5-0.4,7.3,0.4 c1.8-6,4.9-11.5,9.2-16.1c4.3-4.5,9.7-8,15.6-10c5.9-2,12.3-2.6,18.5-1.7c6.2,0.9,12.1,3.3,17.2,7c3.3-1,6.9-1.2,10.3-0.7 c3.5,0.5,6.8,1.7,9.7,3.6c1.6-3.4,3.9-6.3,6.8-8.7c2.9-2.3,6.3-4,9.9-4.8c1.2-9,5.6-17.2,12.4-23.2c6.8-6,15.5-9.3,24.6-9.3h0.1 c9.2,0,18.2,3.5,25,9.7s11.2,14.8,12.1,24c0.1,0,0.1,0,0.2,0c4.6,0,9,1.7,12.4,4.8c3.4,3.1,5.4,7.4,5.8,11.9 c4-1.1,8.2-1.2,12.3-0.5c4.1,0.8,8,2.4,11.4,4.9c3.4,2.4,6.2,5.6,8.2,9.3c2,3.7,3.2,7.7,3.4,11.9c2.4-1,5.1-1.6,7.7-1.6 c2.6,0,5.3,0.5,7.7,1.5c2.3-3.7,5.5-6.9,9.3-9.1s8-3.6,12.4-3.9c4.4-0.3,8.8,0.4,12.9,2.1c4.1,1.7,7.7,4.3,10.5,7.7 c3-5.2,7.5-9.3,13-11.7c5.5-2.4,11.5-3.1,17.4-1.8c5.8,1.3,11.1,4.3,15.1,8.8c4,4.5,6.4,10.1,7,16c1.1-0.2,2.2-0.3,3.2-0.3 c2.9,0,5.7,0.6,8.3,1.8c2.6,1.2,5,2.9,6.9,5c4.4-1.1,9-0.8,13.1,1c3.2-2.9,7.1-5,11.3-6.1c4.2-1.1,8.6-1.3,12.8-0.5 s8.2,2.6,11.7,5.3c3.4,2.6,6.2,6,8.1,9.9c0.5-0.4,1.1-0.9,1.7-1.2v101.6H1060.6z M498.5,824.8V624.3c9.3,0,18.2,3.4,25.1,9.7 c6.9,6.2,11.2,14.8,12.1,24c0.1,0,0.1,0,0.2,0c4.6,0,9,1.7,12.4,4.8c3.4,3.1,5.4,7.4,5.8,11.9c4-1.1,8.3-1.2,12.4-0.5 c4.1,0.8,8,2.4,11.4,4.9c3.4,2.4,6.2,5.6,8.2,9.3c2,3.7,3.2,7.7,3.4,11.9c2.4-1,5.1-1.6,7.7-1.6c2.7,0,5.3,0.5,7.7,1.5 c2.4-3.7,5.5-6.9,9.3-9.1c3.8-2.3,8-3.6,12.4-3.9c4.4-0.3,8.8,0.4,12.9,2.1c4.1,1.7,7.7,4.3,10.5,7.7c3-5.2,7.5-9.3,13-11.7 c5.5-2.4,11.5-3.1,17.4-1.8c5.8,1.3,11.1,4.3,15.1,8.8c4,4.5,6.4,10.1,7,16c1.1-0.2,2.2-0.3,3.2-0.3c2.9,0,5.7,0.6,8.3,1.8 c2.6,1.2,5,2.9,6.9,5c4.3-1.1,9-0.8,13.1,1c3.2-2.9,7.1-5,11.3-6.1c4.2-1.1,8.6-1.3,12.8-0.5s8.2,2.6,11.7,5.3 c3.4,2.6,6.2,6,8.1,9.9c0.5-0.4,1.1-0.9,1.7-1.2v101.6L498.5,824.8z"
					/>
					<linearGradient
						id="SVGID_00000081615861224283881590000008411778468949721996_"
						gradientUnits="userSpaceOnUse"
						x1={919.3565}
						y1={367.2318}
						x2={919.3565}
						y2={554.3387}
						gradientTransform="matrix(1 0 0 -1 0 1192)"
					>
						<stop
							offset={0}
							style={{
								stopColor: "#F08365",
							}}
						/>
						<stop
							offset={0.844}
							style={{
								stopColor: "#FFFFFF",
							}}
						/>
						<stop
							offset={1}
							style={{
								stopColor: "#FFFFFF",
							}}
						/>
					</linearGradient>
					<path
						className="fumer-2"
						style={{
							clipPath: "url(#XMLID_00000005961332758738505880000016063581115371982995_)",
							fill: "url(#SVGID_00000081615861224283881590000008411778468949721996_)",
						}}
						d=" M1059.6,824.8V655.3c9.7,0,19.2,3.1,27,8.7c7.9,5.7,13.8,13.7,16.9,22.9c2.6-0.7,5.4-0.9,8.1-0.4c2.7,0.5,5.2,1.6,7.5,3.2 c2.2,1.6,4.1,3.7,5.4,6.1c1.3,2.4,2,5.1,2.1,7.8c6.7-0.8,13.5,0.8,19.1,4.6c0.7-2.2,1.8-4.3,3.3-6c1.5-1.8,3.4-3.2,5.5-4.1 c2.1-1,4.4-1.5,6.7-1.5c2.3,0,4.6,0.4,6.7,1.4c4.1-6.4,10.2-11.4,17.3-14.1c7.2-2.7,15-3,22.3-0.9c7.3,2.1,13.8,6.6,18.3,12.7 c4.6,6.1,7,13.5,7,21.2c0,0.7,0,1.4-0.1,2.1c3.6,0.3,7,1.6,10,3.7c2.9,2.1,5.3,4.9,6.8,8.2c3.1-1.3,6.5-1.8,9.8-1.5 c3.3,0.3,6.6,1.4,9.3,3.3c2.8,1.8,5.1,4.4,6.7,7.3c1.6,3,2.4,6.2,2.4,9.6c0,0.1,0,0.2,0,0.3c3.3,0.5,6.4,1.8,9.1,3.8 c2.7,2,4.8,4.6,6.2,7.6c3.4-2.7,7.4-4.6,11.7-5.5c4.3-0.9,8.7-0.8,12.9,0.4c4.2,1.1,8.1,3.2,11.4,6.1c3.3,2.9,5.8,6.5,7.4,10.6 c1.1-0.5,2.3-1,3.4-1.3v53.2H1059.6z M779.1,824.8v-53.2c4.6-1.3,9.5-0.9,13.8,1c1.9-3.3,4.6-6,7.8-7.9c3.3-1.9,7-2.9,10.7-2.9 c0.5,0,1.1,0,1.6,0.1c2.4-2.5,6.9-7.8,10.8-16.1c6.5-13.6,12.4-39.4,13.9-59.5c2.9-38.3,2.8-48.7,2.8-48.7h14.6 c0,0,0,11.1,2.8,50.8c1.6,23,8.6,46.8,18,62.8c0.5,0.9,1.1,1.7,1.6,2.6c1.4-2.5,3.5-4.6,6-6c2.5-1.4,5.3-2.2,8.2-2.2 c0.9,0,1.9,0.1,2.8,0.2c-1.2-3.5-1.4-7.3-0.5-10.9c0.9-3.6,2.8-6.9,5.4-9.4c2.7-2.6,6-4.3,9.7-5c3.6-0.7,7.4-0.3,10.8,1 c-1.4-6.2-0.8-12.6,1.7-18.5c2.5-5.8,6.7-10.7,12.1-14c5.4-3.3,11.7-4.8,18-4.3c6.3,0.5,12.3,2.9,17.2,7c0.4-4.1,2.1-7.9,4.7-11.1 c2.7-3.1,6.2-5.4,10.2-6.4s8.2-0.9,12,0.5s7.2,3.9,9.6,7.2c1.4-2.9,3.7-5.2,6.7-6.4c3-1.2,6.2-1.3,9.3-0.3 c4.3-6.1,10-11.2,16.6-14.6c6.6-3.5,14-5.3,21.5-5.3v169.5L779.1,824.8z M498.5,824.8V655.3c9.7,0,19.2,3.1,27.1,8.7 c7.9,5.7,13.8,13.7,16.9,22.9c2.6-0.7,5.4-0.9,8.1-0.4c2.7,0.5,5.3,1.6,7.5,3.2c2.2,1.6,4,3.7,5.3,6.1c1.3,2.4,2,5.1,2.2,7.8 c6.7-0.8,13.5,0.8,19.1,4.6c0.7-2.2,1.8-4.3,3.3-6c1.5-1.8,3.4-3.2,5.5-4.1c2.1-1,4.4-1.5,6.7-1.5s4.6,0.4,6.7,1.4 c4.1-6.4,10.2-11.4,17.3-14.1c7.1-2.7,15-3,22.3-0.9c7.3,2.1,13.8,6.6,18.3,12.7c4.6,6.1,7.1,13.5,7.1,21.2c0,0.7,0,1.4-0.1,2.1 c3.6,0.3,7,1.6,10,3.7c2.9,2.1,5.3,4.9,6.8,8.2c3.1-1.3,6.4-1.8,9.8-1.5c3.3,0.3,6.5,1.4,9.3,3.3c2.8,1.8,5.1,4.4,6.7,7.3 c1.6,3,2.4,6.2,2.4,9.6c0,0.1,0,0.2,0,0.3c3.3,0.5,6.4,1.8,9.1,3.8c2.7,2,4.8,4.6,6.2,7.6c3.4-2.7,7.4-4.6,11.7-5.5 c4.3-0.9,8.7-0.8,12.9,0.4c4.2,1.1,8.1,3.2,11.4,6.1c3.3,2.9,5.8,6.5,7.4,10.6c1.1-0.5,2.3-1,3.4-1.3v53.2H498.5z"
					/>
					<path
						style={{
							clipPath: "url(#XMLID_00000005961332758738505880000016063581115371982995_)",
							fill: "#010202",
						}}
						d="M1155.3,365.6H534.4 c-8.9,0-16.1,7.2-16.1,16.1v398.7c0,8.9,7.2,16.1,16.1,16.1h620.9c8.9,0,16.1-7.2,16.1-16.1V381.7 C1171.4,372.8,1164.2,365.6,1155.3,365.6z M1150.1,778H537.7V392h612.3V778z"
					/>
					<linearGradient
						id="SVGID_00000021829049057309141760000016973889528123025280_"
						gradientUnits="userSpaceOnUse"
						x1={911.3113}
						y1={535.0912}
						x2={792.3549}
						y2={654.0478}
					>
						<stop
							offset={0}
							style={{
								stopColor: "#FCFCFC",
							}}
						/>
						<stop
							offset={0.06599677}
							style={{
								stopColor: "#FDFDFD",
							}}
						/>
						<stop
							offset={0.4958}
							style={{
								stopColor: "#FFFFFF",
							}}
						/>
						<stop
							offset={0.948}
							style={{
								stopColor: "#FDFDFD",
							}}
						/>
						<stop
							offset={1}
							style={{
								stopColor: "#FCFCFC",
							}}
						/>
					</linearGradient>
					<path
						style={{
							clipPath: "url(#XMLID_00000005961332758738505880000016063581115371982995_)",
							fill: "url(#SVGID_00000021829049057309141760000016973889528123025280_)",
						}}
						d=" M175.1,5.5v1181.2h1350.3V5.5H175.1z M1247.3,812.4l-35,12.4H480.2l-38.9-12.3v-16h93c-8.9,0-16.1-7.2-16.1-16.1V381.7 c0-8.9,7.2-16.1,16.1-16.1h620.9c8.9,0,16.1,7.2,16.1,16.1v398.7c0,8.9-7.2,16.1-16.1,16.1h92V812.4z"
					/>
				</g>
				<polygon
					className="st3"
					points="1247.3,796.5 1247.3,812.4 1212.3,824.8 480.2,824.8 441.4,812.5 441.4,796.5 "
				/>
				<g id="fusee">
					<g id="reste_fusee">
						<g>
							<defs>
								<path
									id="XMLID_00000077285813539417274440000016175291641790802078_"
									d="M850,514.5c9.6,6.4,48.5,38.7,12.1,122.2 c-0.5,1.2-1.7,2-3.1,2h-22.1c-1.3,0-2.5-0.8-3-2c-5.9-12.9-36.4-86,12.3-122.1C847.2,513.7,848.8,513.7,850,514.5z"
								/>
							</defs>
							<use
								xlinkHref="#XMLID_00000077285813539417274440000016175291641790802078_"
								style={{
									overflow: "visible",
									fill: "#FFFFFF",
								}}
							/>
							<clipPath id="XMLID_00000016071667853363147770000004752998036586343820_">
								<use
									xlinkHref="#XMLID_00000077285813539417274440000016175291641790802078_"
									style={{
										overflow: "visible",
									}}
								/>
							</clipPath>
							<linearGradient
								id="SVGID_00000181792658300328665380000000755643320393162413_"
								gradientUnits="userSpaceOnUse"
								x1={820.7183}
								y1={576.2782}
								x2={875.6998}
								y2={576.2782}
							>
								<stop
									offset={0.3563}
									style={{
										stopColor: "#FFFFFF",
									}}
								/>
								<stop
									offset={1}
									style={{
										stopColor: "#BBBBBC",
									}}
								/>
							</linearGradient>
							<path
								style={{
									clipPath:
										"url(#XMLID_00000016071667853363147770000004752998036586343820_)",
									fill: "url(#SVGID_00000181792658300328665380000000755643320393162413_)",
								}}
								d=" M850,514.5c9,6.4,45.6,38.7,11.4,122.2c-0.5,1.2-0.6,2-1.9,2h-22.8c-1.2,0-1.3-0.8-1.9-2c-5.5-12.9-34.5-86,11.2-122.1 C847.1,513.7,848.8,513.7,850,514.5z"
							/>
						</g>
						<g>
							<defs>
								<path
									id="XMLID_00000028302512782097803430000012929388429436358065_"
									d="M859,638.6c0,0,3.6-0.6,3.9,3.2 c0.1,2.3-0.9,3.3-2.3,3.3s-24.5,0-24.5,0s-2.2,0-2.2-3.3c0-3.2,3.1-3.2,3.1-3.2H859z"
								/>
							</defs>
							<use
								xlinkHref="#XMLID_00000028302512782097803430000012929388429436358065_"
								style={{
									overflow: "visible",
									fill: "#4A4C4C",
								}}
							/>
							<clipPath id="XMLID_00000096740861356804835230000008243847472234099112_">
								<use
									xlinkHref="#XMLID_00000028302512782097803430000012929388429436358065_"
									style={{
										overflow: "visible",
									}}
								/>
							</clipPath>
							<radialGradient
								id="SVGID_00000114060283267377430540000010002320119801807760_"
								cx={798.6758}
								cy={478.591}
								r={18.8209}
								fx={785.1003}
								fy={478.8467}
								gradientTransform="matrix(-8.600000e-14 -1.2208 0.1764 -5.460000e-13 749.303 1620.8617)"
								gradientUnits="userSpaceOnUse"
							>
								<stop
									offset={0.1827}
									style={{
										stopColor: "#F9EDE4",
									}}
								/>
								<stop
									offset={0.7402}
									style={{
										stopColor: "#4A4C4C",
									}}
								/>
							</radialGradient>
							<ellipse
								style={{
									clipPath:
										"url(#XMLID_00000096740861356804835230000008243847472234099112_)",
									fill: "url(#SVGID_00000114060283267377430540000010002320119801807760_)",
								}}
								cx={833.7}
								cy={645.9}
								rx={2.3}
								ry={14.6}
							/>
							<radialGradient
								id="SVGID_00000027595361525550051790000000467292913417424831_"
								cx={798.7827}
								cy={511.3652}
								r={18.8209}
								fx={785.2072}
								fy={511.6209}
								gradientTransform="matrix(-6.100000e-14 -1.4551 0.1255 -6.500000e-13 774.674 1805.2103)"
								gradientUnits="userSpaceOnUse"
							>
								<stop
									offset={0.1827}
									style={{
										stopColor: "#F9EDE4",
									}}
								/>
								<stop
									offset={0.7402}
									style={{
										stopColor: "#4A4C4C",
									}}
								/>
							</radialGradient>
							<ellipse
								style={{
									clipPath:
										"url(#XMLID_00000096740861356804835230000008243847472234099112_)",
									fill: "url(#SVGID_00000027595361525550051790000000467292913417424831_)",
								}}
								cx={838.9}
								cy={642.9}
								rx={1.7}
								ry={17.4}
							/>
							<radialGradient
								id="SVGID_00000079458123282893387030000014193729933261351319_"
								cx={798.2448}
								cy={648.5437}
								r={18.8209}
								fx={784.6693}
								fy={648.7994}
								gradientTransform="matrix(-6.100000e-14 -1.4551 0.1255 -6.500000e-13 774.674 1805.2103)"
								gradientUnits="userSpaceOnUse"
							>
								<stop
									offset={0.1827}
									style={{
										stopColor: "#8A664E",
									}}
								/>
								<stop
									offset={0.7402}
									style={{
										stopColor: "#4A4C4C",
									}}
								/>
							</radialGradient>
							<ellipse
								style={{
									clipPath:
										"url(#XMLID_00000096740861356804835230000008243847472234099112_)",
									fill: "url(#SVGID_00000079458123282893387030000014193729933261351319_)",
								}}
								cx={856.1}
								cy={643.7}
								rx={1.7}
								ry={17.4}
							/>
							<radialGradient
								id="SVGID_00000028288744317577784020000010372514420804665515_"
								cx={798.861}
								cy={699.8863}
								r={18.8209}
								fx={785.2855}
								fy={700.142}
								gradientTransform="matrix(-6.100000e-14 -1.4551 0.1255 -6.500000e-13 774.674 1805.2103)"
								gradientUnits="userSpaceOnUse"
							>
								<stop
									offset={0.1827}
									style={{
										stopColor: "#F9EDE4",
									}}
								/>
								<stop
									offset={0.7402}
									style={{
										stopColor: "#4A4C4C",
									}}
								/>
							</radialGradient>
							<ellipse
								style={{
									clipPath:
										"url(#XMLID_00000096740861356804835230000008243847472234099112_)",
									fill: "url(#SVGID_00000028288744317577784020000010372514420804665515_)",
								}}
								cx={862.5}
								cy={642.8}
								rx={1.7}
								ry={17.4}
							/>
							<radialGradient
								id="SVGID_00000149367586768034571480000015224133189447428484_"
								cx={842.5576}
								cy={641.9306}
								r={5.5573}
								gradientTransform="matrix(0 -1 3.044 0 -1105.8351 1488.235)"
								gradientUnits="userSpaceOnUse"
							>
								<stop
									offset={0.05976578}
									style={{
										stopColor: "#E0D3B9",
									}}
								/>
								<stop
									offset={1}
									style={{
										stopColor: "#4A4C4C",
										stopOpacity: 0,
									}}
								/>
							</radialGradient>
							<ellipse
								style={{
									clipPath:
										"url(#XMLID_00000096740861356804835230000008243847472234099112_)",
									fill: "url(#SVGID_00000149367586768034571480000015224133189447428484_)",
								}}
								cx={848.2}
								cy={645.7}
								rx={18.9}
								ry={4.8}
							/>
						</g>
						<g>
							<defs>
								<path
									id="XMLID_00000074414162573863307300000016862461760101943969_"
									d="M868.3,596.9c-1.2,4.7-4.6,19.1-7.3,41.2 c0,0,3.3,11.2,9.1,17.7c0.5,0.5,1.2,0.8,1.9,0.8c1.5,0,4.3-0.5,6.2-3c0.3-0.4,0.5-1,0.5-1.6c0-4.4,0-26.3,0-31.8 c0-0.9-0.1-1.7-0.4-2.6c-1-3.1-3.9-11.4-8.8-20.8C869.2,596.2,868.4,596.3,868.3,596.9z"
								/>
							</defs>
							<use
								xlinkHref="#XMLID_00000074414162573863307300000016862461760101943969_"
								style={{
									overflow: "visible",
									fill: "#B54430",
								}}
							/>
							<clipPath id="XMLID_00000125592229198367164690000011929697169921293464_">
								<use
									xlinkHref="#XMLID_00000074414162573863307300000016862461760101943969_"
									style={{
										overflow: "visible",
									}}
								/>
							</clipPath>
							<linearGradient
								id="XMLID_00000096741771247740870290000003699794067316834983_"
								gradientUnits="userSpaceOnUse"
								x1={858.6094}
								y1={628.8652}
								x2={875.0684}
								y2={625.8157}
							>
								<stop
									offset={0.191}
									style={{
										stopColor: "#B54331",
									}}
								/>
								<stop
									offset={0.3074}
									style={{
										stopColor: "#B64737",
									}}
								/>
								<stop
									offset={0.4987}
									style={{
										stopColor: "#BA5147",
									}}
								/>
								<stop
									offset={0.7395}
									style={{
										stopColor: "#BE6161",
									}}
								/>
								<stop
									offset={0.9718}
									style={{
										stopColor: "#C37481",
									}}
								/>
							</linearGradient>
							<path
								id="XMLID_00000025412274787771156620000013418924374049164181_"
								style={{
									clipPath:
										"url(#XMLID_00000125592229198367164690000011929697169921293464_)",
									fill: "url(#XMLID_00000096741771247740870290000003699794067316834983_)",
								}}
								d=" M868.3,596.9c-1.2,4.7-4.6,19.1-7.3,41.2c0,0,3.3,11.2,9.1,17.7c0.5,0.5,1.2,0.8,1.9,0.8c1.5,0,3.3-0.5,5.2-3 c0.3-0.4,0.5-1,0.5-1.6c0-4.4,0-26.3,0-31.8c0-0.9-0.1-1.8-0.4-2.6c-4.1-10.5-4.3-11.4-8.8-20.8 C868.5,596.7,868.4,596.7,868.3,596.9z"
							/>
							<path
								style={{
									clipPath:
										"url(#XMLID_00000125592229198367164690000011929697169921293464_)",
									fill: "#B54331",
								}}
								d="M866.1,590.7l4.8,1 c0,0-6.6,28.9-9,49.1c-0.6,5.2-6-0.9-6-0.9L866.1,590.7z"
							/>
						</g>
						<g>
							<defs>
								<path
									id="XMLID_00000031182253483417724390000016410849175387539630_"
									d="M828,596.9c1.2,4.7,4.6,19.1,7.3,41.2 c0,0-3.3,11.1-9,17.6c-0.5,0.6-1.3,0.9-2.1,0.9c-1.6,0-4.2-0.5-6.1-3c-0.3-0.4-0.5-1-0.5-1.6v-31.8c0-0.9,0.1-1.8,0.4-2.6 c1-3.1,3.9-11.4,8.8-20.8C827.1,596.2,827.9,596.3,828,596.9z"
								/>
							</defs>
							<use
								xlinkHref="#XMLID_00000031182253483417724390000016410849175387539630_"
								style={{
									overflow: "visible",
									fill: "#C67057",
								}}
							/>
							<clipPath id="XMLID_00000058558217298961284150000013313852281579422380_">
								<use
									xlinkHref="#XMLID_00000031182253483417724390000016410849175387539630_"
									style={{
										overflow: "visible",
									}}
								/>
							</clipPath>
							<g
								style={{
									clipPath:
										"url(#XMLID_00000058558217298961284150000013313852281579422380_)",
								}}
							>
								<defs>
									<path
										id="XMLID_00000116945757859767573410000003454880185084023175_"
										d="M828,596.9c1.2,4.7,4.6,19.1,7.3,41.2 c0,0-3.3,11.1-9,17.6c-0.5,0.6-1.3,0.9-2.1,0.9c-1.6,0-4.2-0.5-6.1-3c-0.3-0.4-0.5-1-0.5-1.6v-31.8c0-0.9,0.1-1.8,0.4-2.6 c1-3.1,3.9-11.4,8.8-20.8C827.1,596.2,827.9,596.3,828,596.9z"
									/>
								</defs>
								<use
									xlinkHref="#XMLID_00000116945757859767573410000003454880185084023175_"
									style={{
										overflow: "visible",
										fill: "#C67057",
									}}
								/>
								<clipPath id="XMLID_00000010280906079456737080000009877751312777726395_">
									<use
										xlinkHref="#XMLID_00000116945757859767573410000003454880185084023175_"
										style={{
											overflow: "visible",
										}}
									/>
								</clipPath>
								<linearGradient
									id="XMLID_00000049180824605251429290000003163249260420029060_"
									gradientUnits="userSpaceOnUse"
									x1={819.5381}
									y1={608.8014}
									x2={827.7539}
									y2={641.0873}
								>
									<stop
										offset={0.1827}
										style={{
											stopColor: "#B54331",
										}}
									/>
									<stop
										offset={1}
										style={{
											stopColor: "#7A3728",
										}}
									/>
								</linearGradient>
								<path
									id="XMLID_00000120551572297259922260000012006043354356809602_"
									style={{
										clipPath:
											"url(#XMLID_00000010280906079456737080000009877751312777726395_)",
										fill: "url(#XMLID_00000049180824605251429290000003163249260420029060_)",
									}}
									d=" M828.9,597.4c1.2,4.7,4.6,19.1,7.3,41.2c0,0-3.3,11.1-9,17.6c-0.5,0.6-1.3,0.9-2.1,0.9c-1.6,0-4.2-0.5-6.1-3 c-0.3-0.4-0.5-1-0.5-1.6v-31.8c0-0.9,0.1-1.8,0.4-2.6c1-3.1,3.9-11.4,8.8-20.8C828,596.8,828.8,596.9,828.9,597.4z"
								/>
							</g>
						</g>
					</g>
					<g id="hublot">
						<g>
							<defs>
								<ellipse
									id="XMLID_00000181055363243491522300000014668125726384211094_"
									cx={848.4}
									cy={552.9}
									rx={15.8}
									ry={14.2}
								/>
							</defs>
							<use
								xlinkHref="#XMLID_00000181055363243491522300000014668125726384211094_"
								style={{
									overflow: "visible",
									fill: "#4A4C4C",
								}}
							/>
							<clipPath id="XMLID_00000051359837855689820620000015804766162741070760_">
								<use
									xlinkHref="#XMLID_00000181055363243491522300000014668125726384211094_"
									style={{
										overflow: "visible",
									}}
								/>
							</clipPath>
							<linearGradient
								id="SVGID_00000104678319080701561160000013985017276980363662_"
								gradientUnits="userSpaceOnUse"
								x1={832.6405}
								y1={553.3111}
								x2={844.7598}
								y2={553.3111}
							>
								<stop
									offset={0.1827}
									style={{
										stopColor: "#F9EDE4",
									}}
								/>
								<stop
									offset={0.7402}
									style={{
										stopColor: "#4A4C4C",
									}}
								/>
							</linearGradient>
							<ellipse
								style={{
									clipPath:
										"url(#XMLID_00000051359837855689820620000015804766162741070760_)",
									fill: "url(#SVGID_00000104678319080701561160000013985017276980363662_)",
								}}
								cx={837.5}
								cy={553.3}
								rx={4.8}
								ry={22.5}
							/>
							<radialGradient
								id="SVGID_00000127008576501986148180000005107046247111658927_"
								cx={854.517}
								cy={580.7436}
								r={18.8209}
								fx={840.9415}
								fy={580.9993}
								gradientTransform="matrix(-0.4975 -1.1148 0.6039 -0.2695 928.627 1678.0629)"
								gradientUnits="userSpaceOnUse"
							>
								<stop
									offset={0.1827}
									style={{
										stopColor: "#F9EDE4",
									}}
								/>
								<stop
									offset={0.7402}
									style={{
										stopColor: "#4A4C4C",
									}}
								/>
							</radialGradient>
							<path
								style={{
									clipPath:
										"url(#XMLID_00000051359837855689820620000015804766162741070760_)",
									fill: "url(#SVGID_00000127008576501986148180000005107046247111658927_)",
								}}
								d=" M848.3,555.6c4.4-2,10.6,2.4,13.9,9.8s2.4,14.9-2,16.9c-4.4,2-10.6-2.4-13.9-9.8C843,565.1,843.9,557.5,848.3,555.6z"
							/>
							<radialGradient
								id="SVGID_00000122709118224036894610000002727733917900724362_"
								cx={869.8108}
								cy={600.7903}
								r={18.8209}
								fx={856.2353}
								fy={601.046}
								gradientTransform="matrix(-0.9785 0.73 -0.2716 -0.3641 1876.0864 128.4918)"
								gradientUnits="userSpaceOnUse"
							>
								<stop
									offset={0.1827}
									style={{
										stopColor: "#F9EDE4",
									}}
								/>
								<stop
									offset={0.7402}
									style={{
										stopColor: "#4A4C4C",
									}}
								/>
							</radialGradient>
							<path
								style={{
									clipPath:
										"url(#XMLID_00000051359837855689820620000015804766162741070760_)",
									fill: "url(#SVGID_00000122709118224036894610000002727733917900724362_)",
								}}
								d=" M850.1,553.4c-2-2.7,1.7-8.7,8.1-13.5s13.3-6.6,15.3-3.9c2,2.7-1.7,8.7-8.1,13.5S852.1,556.1,850.1,553.4z"
							/>
						</g>
						<g>
							<defs>
								<ellipse
									id="XMLID_00000131367605436152826300000014522978662940348089_"
									cx={848.4}
									cy={552.9}
									rx={11.6}
									ry={10.1}
								/>
							</defs>
							<use
								xlinkHref="#XMLID_00000131367605436152826300000014522978662940348089_"
								style={{
									overflow: "visible",
									fill: "#71645F",
								}}
							/>
							<clipPath id="XMLID_00000101085774160810574510000008029880828975853197_">
								<use
									xlinkHref="#XMLID_00000131367605436152826300000014522978662940348089_"
									style={{
										overflow: "visible",
									}}
								/>
							</clipPath>
							<linearGradient
								id="SVGID_00000008836928605600403450000012180338691559884931_"
								gradientUnits="userSpaceOnUse"
								x1={836.8459}
								y1={552.9421}
								x2={860.0002}
								y2={552.9421}
							>
								<stop
									offset={0.1827}
									style={{
										stopColor: "#A78E78",
									}}
								/>
								<stop
									offset={0.7402}
									style={{
										stopColor: "#50545A",
									}}
								/>
							</linearGradient>
							<ellipse
								style={{
									clipPath:
										"url(#XMLID_00000101085774160810574510000008029880828975853197_)",
									fill: "url(#SVGID_00000008836928605600403450000012180338691559884931_)",
								}}
								cx={848.4}
								cy={552.9}
								rx={11.6}
								ry={10.1}
							/>
						</g>
						<circle className="st22" cx={848.4} cy={565.1} r={0.4} />
						<circle className="st22" cx={848.4} cy={540.8} r={0.4} />
						<circle className="st22" cx={862.2} cy={552.9} r={0.4} />
						<circle className="st22" cx={834.7} cy={552.9} r={0.4} />
						<circle className="st22" cx={839} cy={544.3} r={0.4} />
						<circle className="st22" cx={857.9} cy={544.3} r={0.4} />
						<circle className="st22" cx={857.9} cy={561.9} r={0.4} />
						<circle className="st22" cx={839} cy={561.9} r={0.4} />
					</g>
				</g>
				<g className="st23">
					<path
						className="st24"
						d="M1501.5,57.9h-241L848.3,470.3L436.1,57.9h-241l532.7,532.9l-532.7,532.9h241l412.2-412.4l412.2,412.4h241 L968.8,590.9L1501.5,57.9z"
					/>
				</g>
			</svg>
		</>
	);
};
export default SvgComponent;