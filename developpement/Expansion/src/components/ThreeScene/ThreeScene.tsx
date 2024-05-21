import "./ThreeScene.scss";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { gsap } from "gsap";

const ThreeScene: React.FC = () => {
	const mountRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const currentMountRef = mountRef.current;

		// Configuration de la scène et du rendu
		const scene = new THREE.Scene();
		const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

		// Définir la taille initiale du renderer pour correspondre au conteneur
		const setRendererSize = () => {
			if (currentMountRef) {
				const { clientWidth } = currentMountRef;
				renderer.setSize(clientWidth, 800, false); // Fixer la hauteur à 800px
			}
		};
		setRendererSize();

		// Assurez-vous de nettoyer les enfants précédents
		if (currentMountRef) {
			while (currentMountRef.firstChild) {
				currentMountRef.removeChild(currentMountRef.firstChild);
			}
			currentMountRef.appendChild(renderer.domElement);
		} else {
			console.error("mountRef.current is null");
			return;
		}

		// Fonction pour lister tous les noms des objets 3D, y compris les collections
		const listObjectNames = (object: THREE.Object3D) => {
			console.log(object.name || "(no name)", object);
			object.children.forEach(child => listObjectNames(child));
		};

		// Charger le modèle GLTF/GLB
		const loader = new GLTFLoader();
		loader.load(
			"../../assets/3D/expansion6-4.glb", // Chemin vers votre fichier GLB
			gltf => {
				const loadedScene = gltf.scene;
				scene.add(loadedScene);
				console.log("Scene loaded", loadedScene);

				// Lister tous les noms des objets dans la scène
				listObjectNames(loadedScene);

				// Ajouter une lumière directionnelle
				const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
				directionalLight.position.set(20, 14, 2); // Position modifiée
				directionalLight.castShadow = true; // Optionnel : ajouter des ombres
				scene.add(directionalLight);

				// Trouver la caméra dans la scène chargée
				let camera = loadedScene.getObjectByName("Camera") as THREE.PerspectiveCamera;
				if (!camera) {
					console.log("Camera not found in the loaded scene. Adding a default camera.");
					camera = new THREE.PerspectiveCamera(
						75,
						currentMountRef.clientWidth / 800, // Ajuster l'aspect ratio en fonction de la hauteur fixe
						0.1,
						1000,
					);
					camera.position.set(0, 2, 5);
					scene.add(camera);
				} else {
					console.log("Camera found", camera);
					camera.aspect = currentMountRef.clientWidth / 800; // Ajuster l'aspect ratio en fonction de la hauteur fixe
					camera.updateProjectionMatrix();
				}

				// Gérer le redimensionnement de la fenêtre
				const handleResize = () => {
					if (currentMountRef) {
						const { clientWidth } = currentMountRef;
						camera.aspect = clientWidth / 800; // Ajuster l'aspect ratio en fonction de la hauteur fixe
						camera.updateProjectionMatrix();
						renderer.setSize(clientWidth, 800, false); // Fixer la hauteur à 800px
					}
				};

				window.addEventListener("resize", handleResize);

				// Appel initial pour ajuster la taille
				handleResize();

				// Animer la scène
				const animate = () => {
					requestAnimationFrame(animate);
					renderer.render(scene, camera);
				};

				animate();

				// Fonction pour animer les objets sauf la caméra
				const animateObjects = (object: THREE.Object3D) => {
					if (object !== camera) {
						gsap.to(object.rotation, {
							y: "+=0.2", // Pivoter légèrement sur l'axe Y
							repeat: -1, // Répéter indéfiniment
							yoyo: true, // Revenir à la position initiale
							duration: 2.5, // Durée de l'animation
							ease: "power1.inOut", // Courbe d'animation douce
						});
					}
					object.children.forEach(child => animateObjects(child));
				};

				// Appliquer l'animation à tous les objets de la scène sauf la caméra
				animateObjects(loadedScene);

				// Nettoyage lors du démontage du composant
				return () => {
					if (currentMountRef) {
						currentMountRef.removeChild(renderer.domElement);
					}
					window.removeEventListener("resize", handleResize);
				};
			},
			undefined,
			error => {
				console.error("An error happened", error);
			},
		);
	}, []);

	return <div className="three" ref={mountRef} />;
};

export default ThreeScene;
