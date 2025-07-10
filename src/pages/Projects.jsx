/** @format */

import React, { useEffect } from "react";
import projects from "../data/projects.json";
import { gradientKeyframes } from "./style";

const techColors = {
	React: "#61dafb",
	"Node.js": "#3c873a",
	MongoDB: "#47a248",
	Tailwind: "#06b6d4",
};

const Projects = () => {
	useEffect(() => {
		const style = document.createElement("style");
		style.innerHTML = gradientKeyframes;
		document.head.appendChild(style);
		return () => {
			document.head.removeChild(style);
		};
	}, []);

	return (
		<section
			id="projects"
			style={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				background:
					"linear-gradient(270deg, #e0f2fe, #bae6fd 60%, #0ea5e9 100%)",
				backgroundSize: "600% 600%",
				animation: "gradientBG 12s ease infinite",
				padding: "60px 0 40px 0",
				paddingLeft: 8,
				paddingRight: 8,
			}}>
			<h2
				style={{
					fontFamily: "Poppins, sans-serif",
					fontWeight: 900,
					fontSize: 32,
					color: "#fff",
					textShadow: "0 2px 12px #0ea5e955, 0 1px 0 #2222",
					marginBottom: 18,
					textAlign: "center",
					letterSpacing: 1,
				}}>
				Projects
			</h2>

			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: 24,
					justifyContent: "center",
					maxWidth: 1200,
					width: "100%",
				}}>
				{projects.map((project, idx) => (
					<div
						key={project.title}
						style={{
							background: "rgba(255,255,255,0.92)",
							borderRadius: 22,
							padding: "28px 12px 22px 12px",
							minWidth: 220,
							maxWidth: 340,
							flex: "1 1 260px",
							margin: 8,
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							transition: "transform 0.25s",
							animation: `fadeInUp 0.7s ${0.1 + idx * 0.1}s both`,
							boxSizing: "border-box",
						}}>
						{/* Project image from JSON */}
						<img
							src={project.image}
							alt={project.title}
							style={{
								width: "100%",
								maxWidth: 260,
								height: 140,
								objectFit: "cover",
								borderRadius: 14,
								marginBottom: 14,
								background: "#e0f2fe",
							}}
						/>

						{/* Title */}
						<h3
							style={{
								color: "#0ea5e9",
								fontWeight: 700,
								fontSize: 20,
								marginBottom: 8,
								textAlign: "center",
							}}>
							{project.title}
						</h3>

						{/* Description */}
						<p
							style={{
								color: "#222",
								fontSize: 15.5,
								textAlign: "center",
								marginBottom: 10,
							}}>
							{project.description}
						</p>

						{/* Tech stack badges */}
						<div
							style={{
								display: "flex",
								gap: 8,
								flexWrap: "wrap",
								marginBottom: 12,
								justifyContent: "center",
							}}>
							{project.tech.map((t, i) => (
								<span
									key={i}
									style={{
										background: techColors[t] || "#bae6fd",
										color: "#fff",
										fontWeight: 600,
										fontSize: 13,
										borderRadius: 8,
										padding: "4px 10px",
										letterSpacing: 0.5,
									}}>
									{t}
								</span>
							))}
						</div>

						{/* Only live button */}
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								width: "100%",
							}}>
							<a
								href={project.live}
								target="_blank"
								rel="noopener noreferrer"
								style={{
									background:
										"linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)",
									color: "#fff",
									fontWeight: 700,
									fontSize: 14,
									padding: "8px 16px",
									borderRadius: 7,
									textDecoration: "none",
									border: "none",
									boxShadow: "none",
									transition: "background 0.2s, transform 0.2s",
									marginBottom: 4,
									width: 100,
								}}>
								Live
							</a>
						</div>
					</div>
				))}
			</div>

			<style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
		</section>
	);
};

export default Projects;
