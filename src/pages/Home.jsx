/** @format */

import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaCss3Alt,
	FaBootstrap,
	FaGithub,
	FaLinkedin,
	FaTools,
} from "react-icons/fa";
import {
	SiJavascript,
	SiTailwindcss,
	SiMongodb,
	SiExpress,
	SiVite,
	SiPostman,
	SiNpm,
} from "react-icons/si";
import {
	MdOutlineWeb,
	MdOutlineDesignServices,
	MdAccessibility,
} from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import {
	heroSection,
	heroCard,
	ctaRow,
	ctaBtn,
	ctaBtnAlt,
	gradientKeyframes,
} from "./style";

/**
 * Home.jsx
 * Responsive hero section for Thato Mchunu's portfolio homepage.
 * - Modern, animated, and mobile-friendly.
 * - Uses inline styles and shared style.js for consistency.
 * - All layout and buttons are fully responsive.
 */

const Home = () => {
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
			id="home"
			style={{
				...heroSection,
				background:
					"linear-gradient(270deg, #e0f2fe, #bae6fd 60%, #0ea5e9 100%)",
				minHeight: "100vh",
				paddingTop: 32,
				paddingLeft: 4,
				paddingRight: 4,
			}}>
			{/* Responsive hero card container with mobile adjustments */}
			<motion.div
				style={{
					...heroCard,
					padding: "20px 6px",
					maxWidth: 650,
					fontFamily: "Inter, sans-serif",
					background: "#fff",
					borderRadius: 14,
					width: "100%",
					boxSizing: "border-box",
					margin: "0 auto",
					boxShadow: "none", // Ensure no shadow
					border: "none", // Ensure no border
				}}
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="w-full">
				{/* Main heading with mobile font size */}
				<h1
					style={{
						fontFamily: "Poppins, sans-serif",
						fontWeight: 900,
						fontSize: "clamp(2.1rem, 7vw, 2.7rem)",
						letterSpacing: 1,
						color: "#111",
						marginBottom: 8,
						textShadow: "0 2px 8px #e0f2fe",
						textAlign: "center",
					}}>
					Hi, I'm Thato Mchunu
				</h1>
				{/* Typewriter subheading with mobile font size */}
				<h2
					style={{
						fontFamily: "Poppins, sans-serif",
						fontWeight: 700,
						fontSize: "clamp(1.1rem, 4vw, 1.7rem)",
						color: "#0ea5e9",
						marginBottom: 8,
						letterSpacing: 0.5,
						textShadow: "0 1px 4px #e0f2fe",
						textAlign: "center",
					}}>
					<Typewriter
						options={{
							strings: [
								"A freelance Web designer & developer.",
								"Transforming ideas into scalable web solutions.",
							],
							autoStart: true,
							loop: true,
							delay: 60,
							deleteSpeed: 30,
							pauseFor: 1800,
						}}
					/>
				</h2>
				{/* Description */}
				<p
					style={{
						fontSize: "clamp(1rem, 3.5vw, 1.2rem)",
						color: "#222",
						marginBottom: 8,
						lineHeight: 1.5,
						fontFamily: "Inter, sans-serif",
						textAlign: "center",
					}}>
					Full-stack developer crafting elegant web apps with clean UI &
					seamless UX.
				</p>
				{/* Responsive action buttons row with tighter spacing */}
				<motion.div
					style={{
						...ctaRow,
						flexDirection: "column",
						alignItems: "center",
						gap: 8,
						width: "100%",
						maxWidth: 400,
						margin: "0 auto",
					}}
					className="flex flex-col sm:flex-row flex-wrap gap-2 justify-center items-center w-full max-w-xl mx-auto mb-2">
					{/* Each button is full width on mobile, inline on desktop */}
					<motion.a
						whileHover={{ scale: 1.07 }}
						whileTap={{ scale: 0.97 }}
						href="/projects"
						style={{
							...ctaBtn,
							background: "linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)",
							color: "#fff",
							border: "none",
							outline: "2px solid transparent",
							minWidth: 120,
							width: "100%",
							textAlign: "center",
							boxShadow: "none",
							marginBottom: 6,
						}}
						className="transition-colors duration-200 hover:bg-blue-700 focus:outline-blue-400 mb-2 sm:mb-0"
						aria-label="View Portfolio Projects">
						View Portfolio Projects
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.07 }}
						whileTap={{ scale: 0.97 }}
						href="/contact"
						style={{
							...ctaBtnAlt,
							color: "#0ea5e9",
							border: "2px solid #0ea5e9",
							outline: "2px solid transparent",
							minWidth: 120,
							width: "100%",
							textAlign: "center",
							boxShadow: "none",
							marginBottom: 6,
						}}
						className="transition-colors duration-200 hover:bg-blue-50 focus:outline-blue-400 mb-2 sm:mb-0"
						aria-label="Contact Me">
						Contact Me
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.07 }}
						whileTap={{ scale: 0.97 }}
						href="/Thato%20S%20Mchunu-CV.docx"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							...ctaBtnAlt,
							color: "#0ea5e9",
							border: "2px solid #0ea5e9",
							outline: "2px solid transparent",
							minWidth: 120,
							width: "100%",
							textAlign: "center",
							boxShadow: "none",
							marginBottom: 6,
						}}
						className="transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-blue-400 mb-2 sm:mb-0"
						aria-label="View CV">
						View CV
					</motion.a>
					<motion.a
						whileHover={{ scale: 1.07 }}
						whileTap={{ scale: 0.97 }}
						href="/ThatoMchunu-CoverLetter.pdf"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							...ctaBtnAlt,
							color: "#0ea5e9",
							border: "2px solid #0ea5e9",
							outline: "2px solid transparent",
							minWidth: 120,
							width: "100%",
							textAlign: "center",
							boxShadow: "none",
							marginBottom: 0,
						}}
						className="transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 focus:outline-blue-400"
						aria-label="View Cover Letter">
						View Cover Letter
					</motion.a>
				</motion.div>
			</motion.div>
			{/* Wavy SVG section separator */}
			<div
				aria-hidden="true"
				style={{
					width: "100%",
					overflow: "hidden",
					lineHeight: 0,
					marginBottom: 32,
				}}>
				<svg
					viewBox="0 0 1440 60"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style={{ minWidth: "100%", height: 60 }}>
					<path
						fill="#ede9fe"
						d="M0,30 C360,90 1080,0 1440,30 L1440,60 L0,60 Z"
					/>
				</svg>
			</div>
			{/* --- Animated Blobs/Glassmorphism Overlay for Hero --- */}
			<div
				aria-hidden="true"
				className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 0.5, scale: 1 }}
					transition={{ duration: 1.2, delay: 0.2 }}
					className="absolute top-[-60px] left-[-60px] w-[300px] h-[300px] bg-gradient-to-tr from-indigo-400 via-purple-300 to-pink-200 rounded-full filter blur-3xl opacity-60 animate-pulse"
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 0.4, scale: 1 }}
					transition={{ duration: 1.4, delay: 0.5 }}
					className="absolute bottom-[-80px] right-[-80px] w-[320px] h-[320px] bg-gradient-to-br from-pink-300 via-indigo-200 to-indigo-400 rounded-full filter blur-3xl opacity-50 animate-pulse"
				/>
			</div>
			{/* --- Floating SVG/Lottie Accent & Tech Icons --- */}
			<div
				aria-hidden="true"
				className="relative w-full flex justify-center mb-[-60px] z-20">
				<svg
					width="220"
					height="80"
					viewBox="0 0 220 80"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="animate-bounce-slow">
					<ellipse
						cx="110"
						cy="40"
						rx="100"
						ry="30"
						fill="url(#paint0_radial)"
						fillOpacity="0.5"
					/>
				</svg>
				<div className="absolute left-8 top-2 animate-float-slow">
					<FaReact className="text-blue-400 text-3xl opacity-80" />
				</div>
				<div className="absolute right-8 top-6 animate-float-slower">
					<FaNodeJs className="text-green-600 text-2xl opacity-80" />
				</div>
				<div className="absolute left-1/2 -translate-x-1/2 top-12 animate-float">
					<SiTailwindcss className="text-cyan-400 text-2xl opacity-80" />
				</div>
			</div>
			{/* --- Why Work With Me Section --- */}
			<motion.section
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="relative z-10 max-w-4xl mx-auto mt-32 mb-20 px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1, duration: 0.6 }}
					className="text-3xl sm:text-4xl font-extrabold mb-10 text-black flex items-center gap-2 justify-center drop-shadow-xl bg-white px-8 py-3 rounded-xl border-0 shadow-lg"
					style={{ letterSpacing: 0.5, boxShadow: "0 8px 32px 0 #0ea5e944" }}>
					<span role="img" aria-label="Why Work With Me">
						💡
					</span>{" "}
					Why Work With Me?
				</motion.h2>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
					{[
						{
							icon: (
								<motion.div
									initial={{ filter: "blur(4px)", scale: 0.8 }}
									whileInView={{ filter: "blur(0px)", scale: 1 }}
									transition={{ duration: 0.7 }}
									className="relative flex items-center justify-center mb-2">
									<MdOutlineWeb className="text-blue-500 drop-shadow-glow text-5xl animate-float" />
									<span className="absolute -top-2 -right-2 w-6 h-6 bg-blue-200 rounded-full blur-md opacity-60 animate-pulse"></span>
								</motion.div>
							),
							title: "Modern Web Development",
							desc: "I use the latest frameworks and best practices to build fast, scalable, and beautiful web apps.",
						},
						{
							icon: (
								<motion.div
									initial={{ filter: "blur(4px)", scale: 0.8 }}
									whileInView={{ filter: "blur(0px)", scale: 1 }}
									transition={{ duration: 0.7 }}
									className="relative flex items-center justify-center mb-2">
									<MdOutlineDesignServices className="text-cyan-400 drop-shadow-glow text-5xl animate-float-slow" />
									<span className="absolute -bottom-2 -left-2 w-6 h-6 bg-cyan-100 rounded-full blur-md opacity-60 animate-pulse"></span>
								</motion.div>
							),
							title: "Design-Driven Approach",
							desc: "I care about clean UI, seamless UX, and accessibility for every user.",
						},
						{
							icon: (
								<motion.div
									initial={{ filter: "blur(4px)", scale: 0.8 }}
									whileInView={{ filter: "blur(0px)", scale: 1 }}
									transition={{ duration: 0.7 }}
									className="relative flex items-center justify-center mb-2">
									<FaTools className="text-blue-400 drop-shadow-glow text-5xl animate-float-slower" />
									<span className="absolute -top-2 -left-2 w-6 h-6 bg-blue-100 rounded-full blur-md opacity-60 animate-pulse"></span>
								</motion.div>
							),
							title: "Collaborative & Reliable",
							desc: "I communicate clearly, deliver on time, and love working with others to solve real problems.",
						},
					].map((item, i) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 30, scale: 0.95 }}
							whileInView={{ opacity: 1, y: 0, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 + i * 0.15, duration: 0.6 }}
							className="bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center border-0 relative group overflow-hidden hover:scale-105 hover:shadow-blue-300 transition-all duration-300"
							style={{
								boxShadow: "0 8px 32px 0 #0ea5e933, 0 0 0 4px #fff4",
								border: "2px solid #e0f2fecc",
								background:
									"linear-gradient(135deg, #fff8 60%, #e0f2fecc 100%)",
							}}>
							{/* Animated floating accent blob */}
							<div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-100 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-all duration-300"></div>
							{item.icon}
							<h3 className="font-bold text-lg mb-2 text-black drop-shadow-sm group-hover:text-blue-600 transition-colors duration-200">
								{item.title}
							</h3>
							<p className="text-gray-700 text-base leading-relaxed group-hover:text-blue-700 transition-colors duration-200">
								{item.desc}
							</p>
						</motion.div>
					))}
				</div>
				{/* Subtle gradient accent below cards */}
				<div
					aria-hidden="true"
					className="w-full h-4 mt-10 mb-2 bg-gradient-to-r from-blue-100 via-cyan-50 to-blue-100 rounded-full blur-sm opacity-60"></div>
			</motion.section>
			{/* --- Featured Project Section --- */}
			<motion.section
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7 }}
				className="relative z-10 max-w-3xl mx-auto mb-24 px-4">
				{/* Animated floating accent for depth, blue theme */}
				<div
					aria-hidden="true"
					className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-100 rounded-full blur-2xl opacity-30 animate-pulse -z-10"></div>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1, duration: 0.6 }}
					className="text-2xl sm:text-3xl font-bold mb-6 text-black flex items-center gap-2 justify-center drop-shadow-xl bg-white px-8 py-3 rounded-xl border-0 shadow-lg"
					style={{
						letterSpacing: 0.5,
						boxShadow: "0 8px 32px 0 #0ea5e944",
					}}>
					<span role="img" aria-label="Featured Project">
						🚀
					</span>{" "}
					Featured Project
				</motion.h2>
				<motion.div
					initial={{ opacity: 0, y: 30, scale: 0.97 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.7 }}
					whileHover={{ scale: 1.03, boxShadow: "0 0 32px 0 #0ea5e977" }}
					className="bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 flex flex-col sm:flex-row items-center gap-8 border-0 relative overflow-hidden group hover:shadow-blue-400 transition-all duration-300"
					style={{
						boxShadow: "0 8px 32px 0 #0ea5e933, 0 0 0 4px #fff4",
						border: "2px solid #e0f2fecc",
					}}>
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.2, duration: 0.7 }}
						className="flex-1 mb-4 sm:mb-0">
						<h3 className="font-bold text-xl mb-2 text-black">
							Portfolio Website
						</h3>
						<p className="text-gray-700 text-base mb-3">
							A modern, responsive portfolio built with React, Vite, and
							Tailwind CSS. Features an animated hero, clean design, and
							accessible layout.
						</p>
						<a
							href="/projects"
							className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-all text-sm font-semibold relative overflow-hidden group"
							aria-label="View Projects">
							<FaReact className="inline-block text-lg mb-0.5 animate-spin-slow" />
							<span className="relative z-10">View Projects</span>
							<span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 opacity-0 group-hover:opacity-20 transition-all duration-300 animate-shine"></span>
						</a>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.3, duration: 0.7 }}
						className="flex-1 flex justify-center items-center">
						<div className="relative w-[160px] h-[120px] group [perspective:600px]">
							<motion.div
								whileHover={{ rotateY: 12, rotateX: 8, scale: 1.05 }}
								transition={{ type: "spring", stiffness: 200, damping: 15 }}
								className="relative w-full h-full rounded-2xl shadow-lg bg-gradient-to-br from-blue-100 via-white to-cyan-100 overflow-hidden border-2 border-blue-200">
								<svg
									width="160"
									height="120"
									viewBox="0 0 160 120"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									aria-label="Project Preview"
									className="rounded-xl shadow-lg">
									<rect width="160" height="120" rx="22" fill="#e0f2fe" />
									<rect
										x="45"
										y="45"
										width="70"
										height="30"
										rx="8"
										fill="#fff"
										stroke="#0ea5e9"
										strokeWidth="2"
									/>
									<rect
										x="60"
										y="65"
										width="40"
										height="12"
										rx="4"
										fill="#38bdf8"
									/>
									<circle cx="80" cy="70" r="10" fill="#38bdf8" />
								</svg>
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/30 to-cyan-200/20 opacity-0 group-hover:opacity-80 transition-all duration-300 flex items-center justify-center">
									<a
										href="/projects"
										className="px-4 py-2 bg-white/90 text-blue-700 rounded shadow font-semibold hover:bg-blue-50 transition-all animate-pulse">
										View Live
									</a>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</motion.div>
			</motion.section>
			<footer
				style={{
					width: "100%",
					background: "#e0f2fe",
					padding: "24px 0 12px 0",
					marginTop: 48,
					textAlign: "center",
					fontSize: 15,
					color: "#111", // black text
					borderTop: "1px solid #bae6fd",
				}}
				className="mt-12">
				<div className="flex flex-col items-center gap-2">
					<div>
						&copy; {new Date().getFullYear()} Thato Mchunu. Built with React.
						All rights reserved.
					</div>
					<div className="flex gap-8 justify-center mt-1">
						<a
							href="#home"
							aria-label="Back to Top"
							style={{
								color: "#0ea5e9",
								fontSize: 18,
								textDecoration: "underline",
								marginRight: 12,
							}}
							className="hover:text-blue-700 focus:text-blue-900">
							Back to Top
						</a>
						<a
							href="https://github.com/yourname"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
							title="GitHub"
							style={{
								color: "#222",
								fontSize: 22,
								transition: "color 0.2s",
							}}
							className="hover:text-blue-500 focus:text-blue-700">
							<FaGithub />
						</a>
						<a
							href="https://linkedin.com/in/yourname"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
							title="LinkedIn"
							style={{
								color: "#0A66C2",
								fontSize: 22,
								transition: "color 0.2s",
							}}
							className="hover:text-blue-500 focus:text-blue-700">
							<FaLinkedin />
						</a>
					</div>
				</div>
			</footer>
		</section>
	);
};

export default Home;
