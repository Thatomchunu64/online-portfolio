/** @format */

import React from "react";
import {
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaCss3Alt,
	FaGithub,
	FaBootstrap,
	FaGitAlt,
} from "react-icons/fa";
import {
	SiJavascript,
	SiTailwindcss,
	SiMongodb,
	SiExpress,
	SiVite,
	SiPostman,
	SiFigma,
} from "react-icons/si";
import { gradientKeyframes } from "./style";

const profilePic = "/images/profile-pic.jpg";

/**
 * About.jsx
 * Responsive About page for Thato Mchunu's portfolio.
 * - Modern, animated, and mobile-friendly.
 * - Uses inline styles and shared style.js for consistency.
 * - All layout and content adapt to mobile and desktop.
 * - Well-commented for maintainability.
 */

const About = () => {
	React.useEffect(() => {
		// Inject keyframes for animated gradient background
		const style = document.createElement("style");
		style.innerHTML = gradientKeyframes;
		document.head.appendChild(style);
		return () => {
			document.head.removeChild(style);
		};
	}, []);

	return (
		<section
			id="about"
			style={{
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				background:
					"linear-gradient(270deg, #e0f2fe, #bae6fd 60%, #0ea5e9 100%)",
				backgroundSize: "600% 600%",
				animation: "gradientBG 12s ease infinite",
				padding: "60px 0 40px 0",
			}}>
			{/* Responsive about card container */}
			<div
				style={{
					background: "#fff",
					borderRadius: 24,
					maxWidth: 900,
					width: "100%",
					padding: 24,
					margin: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					boxSizing: "border-box",
				}}>
				{/* Profile picture, responsive */}
				<img
					src={profilePic}
					alt="Thato Mchunu profile"
					style={{
						width: 110,
						height: 110,
						borderRadius: "50%",
						objectFit: "cover",
						border: "4px solid #0ea5e9",
						marginBottom: 20,
						boxShadow: "0 4px 24px #0ea5e933",
					}}
				/>
				{/* Main heading */}
				<h2
					style={{
						fontFamily: "Poppins, sans-serif",
						fontWeight: 900,
						fontSize: 32,
						color: "#0ea5e9",
						marginBottom: 8,
						textAlign: "center",
					}}>
					About Me
				</h2>
				{/* Description paragraphs */}
				<p
					style={{
						fontSize: 18,
						color: "#222",
						marginBottom: 14,
						textAlign: "center",
						maxWidth: 700,
					}}>
					Hi, I'm Thato Mchunu, a freelance web designer & developer based in
					South Africa. I graduated from HyperionDev in 2024 and have hands-on
					experience building modern, responsive web applications. My journey in
					tech is driven by a passion for clean UI, seamless UX, and robust,
					scalable solutions.
				</p>
				<p
					style={{
						fontSize: 16,
						color: "#444",
						marginBottom: 22,
						textAlign: "center",
						maxWidth: 700,
					}}>
					I specialize in React, Node.js, and the modern JavaScript ecosystem. I
					love collaborating on projects, solving real-world problems, and
					delivering value through technology. My experience includes building
					full-stack apps, designing beautiful interfaces, and working with
					clients to bring their ideas to life.
				</p>
				{/* Tech/tool sections, responsive row */}
				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						gap: 24,
						justifyContent: "center",
						marginBottom: 24,
						width: "100%",
					}}>
					{/* Frontend, Backend, Tools columns */}
					<div style={{ minWidth: 160, flex: 1, marginBottom: 12 }}>
						<h3
							style={{
								color: "#0ea5e9",
								fontWeight: 700,
								marginBottom: 8,
								fontSize: 18,
								textAlign: "center",
							}}>
							Frontend
						</h3>
						<div
							style={{
								display: "flex",
								gap: 10,
								flexWrap: "wrap",
								justifyContent: "center",
							}}>
							<FaHtml5
								title="HTML5"
								style={{ color: "#e34c26", fontSize: 24 }}
							/>
							<FaCss3Alt
								title="CSS3"
								style={{ color: "#1572b6", fontSize: 24 }}
							/>
							<SiJavascript
								title="JavaScript"
								style={{ color: "#f7df1e", fontSize: 24 }}
							/>
							<FaReact
								title="React"
								style={{ color: "#61dafb", fontSize: 24 }}
							/>
							<SiTailwindcss
								title="Tailwind CSS"
								style={{ color: "#06b6d4", fontSize: 24 }}
							/>
							<FaBootstrap
								title="Bootstrap"
								style={{ color: "#7952b3", fontSize: 24 }}
							/>
						</div>
					</div>
					<div style={{ minWidth: 160, flex: 1, marginBottom: 12 }}>
						<h3
							style={{
								color: "#0ea5e9",
								fontWeight: 700,
								marginBottom: 8,
								fontSize: 18,
								textAlign: "center",
							}}>
							Backend
						</h3>
						<div
							style={{
								display: "flex",
								gap: 10,
								flexWrap: "wrap",
								justifyContent: "center",
							}}>
							<FaNodeJs
								title="Node.js"
								style={{ color: "#3c873a", fontSize: 24 }}
							/>
							<SiExpress
								title="Express"
								style={{ color: "#222", fontSize: 24 }}
							/>
							<SiMongodb
								title="MongoDB"
								style={{ color: "#47a248", fontSize: 24 }}
							/>
							<SiVite title="Vite" style={{ color: "#646cff", fontSize: 24 }} />
						</div>
					</div>
					<div style={{ minWidth: 160, flex: 1, marginBottom: 12 }}>
						<h3
							style={{
								color: "#0ea5e9",
								fontWeight: 700,
								marginBottom: 8,
								fontSize: 18,
								textAlign: "center",
							}}>
							Tools
						</h3>
						<div
							style={{
								display: "flex",
								gap: 10,
								flexWrap: "wrap",
								justifyContent: "center",
							}}>
							<FaGithub
								title="GitHub"
								style={{ color: "#222", fontSize: 24 }}
							/>
							<FaGitAlt
								title="Git"
								style={{ color: "#f34f29", fontSize: 24 }}
							/>
							<SiPostman
								title="Postman"
								style={{ color: "#ff6c37", fontSize: 24 }}
							/>
							<SiFigma
								title="Figma"
								style={{ color: "#a259ff", fontSize: 24 }}
							/>
						</div>
					</div>
				</div>
				{/* Download Resume button, full width on mobile, auto on desktop */}
				<a
					href="/resume.pdf"
					download
					style={{
						display: "inline-block",
						marginTop: 12,
						background: "linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)",
						color: "#fff",
						fontWeight: 700,
						fontSize: 16,
						padding: "12px 28px",
						borderRadius: 8,
						textDecoration: "none",
						width: "100%",
						maxWidth: 320,
						textAlign: "center",
						boxSizing: "border-box",
						boxShadow: "0 2px 12px #0ea5e933",
					}}
					className="sm:w-auto w-full">
					Download Resume
				</a>
			</div>
		</section>
	);
};

export default About;
