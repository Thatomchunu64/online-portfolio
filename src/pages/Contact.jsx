/** @format */

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { heroSection, heroCard, gradientKeyframes } from "./style";

/**
 * Contact.jsx
 * Responsive contact page for Thato Mchunu's portfolio.
 * - Modern, animated, and mobile-friendly.
 * - Uses inline styles and shared style.js for consistency.
 * - All layout and form elements adapt to mobile and desktop.
 * - Well-commented for maintainability.
 */

const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Message sent! (Demo)");
		setForm({ name: "", email: "", message: "" });
	};

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
			id="contact"
			style={{
				...heroSection,
				background:
					"linear-gradient(270deg, #e0f2fe, #bae6fd 60%, #0ea5e9 100%)",
				minHeight: "100vh",
				paddingLeft: 8,
				paddingRight: 8,
			}}
			className="px-2 sm:px-4 md:px-8 lg:px-0">
			{/* Responsive contact card container */}
			<div
				style={{
					background: "rgba(255,255,255,0.85)",
					borderRadius: 18,
					maxWidth: 600,
					margin: "40px auto 0 auto",
					padding: "32px 16px",
					width: "100%",
					boxSizing: "border-box",
				}}
				className="w-full">
				{/* Main heading */}
				<h2
					style={{
						fontFamily: "Poppins, sans-serif",
						fontWeight: 900,
						fontSize: 30,
						letterSpacing: 1,
						color: "#0ea5e9",
						marginBottom: 8,
						textShadow: "0 2px 8px #e0f2fe",
						textAlign: "center",
					}}>
					Contact Me
				</h2>
				<p
					style={{
						textAlign: "center",
						color: "#444",
						marginBottom: 18,
						fontSize: 17,
					}}>
					Let's connect! Whether you have a project, question, or just want to
					say hi, my inbox is always open.
				</p>
				{/* Responsive contact form */}
				<form
					onSubmit={handleSubmit}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: 14,
						width: "100%",
						maxWidth: 420,
						margin: "0 auto",
					}}>
					<input
						type="text"
						name="name"
						placeholder="Your Name"
						value={form.name}
						onChange={handleChange}
						required
						style={{
							borderRadius: 10,
							border: "1.5px solid #bae6fd",
							padding: "12px 16px",
							fontSize: 16,
							marginBottom: 6,
							background: "#fff",
							width: "100%",
							boxSizing: "border-box",
						}}
					/>
					<input
						type="email"
						name="email"
						placeholder="Your Email"
						value={form.email}
						onChange={handleChange}
						required
						style={{
							borderRadius: 10,
							border: "1.5px solid #bae6fd",
							padding: "12px 16px",
							fontSize: 16,
							marginBottom: 6,
							background: "#fff",
							width: "100%",
							boxSizing: "border-box",
						}}
					/>
					<textarea
						name="message"
						placeholder="Your Message"
						value={form.message}
						onChange={handleChange}
						rows={5}
						required
						style={{
							borderRadius: 10,
							border: "1.5px solid #bae6fd",
							padding: "12px 16px",
							fontSize: 16,
							marginBottom: 6,
							background: "#fff",
							resize: "none",
							width: "100%",
							boxSizing: "border-box",
						}}
					/>
					<button
						type="submit"
						style={{
							background: "linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)",
							color: "#fff",
							fontWeight: 700,
							fontSize: 16,
							padding: "12px 28px",
							borderRadius: 8,
							border: "none",
							marginTop: 6,
							cursor: "pointer",
							width: "100%",
							boxSizing: "border-box",
						}}>
						Send Message
					</button>
				</form>
				{/* Social icons row, responsive */}
				<div
					style={{
						display: "flex",
						gap: 18,
						justifyContent: "center",
						marginTop: 24,
						flexWrap: "wrap",
					}}>
					<a
						href="https://github.com/yourname"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "#222", fontSize: 28 }}>
						<FaGithub />
					</a>
					<a
						href="https://linkedin.com/in/yourname"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "#0A66C2", fontSize: 28 }}>
						<FaLinkedin />
					</a>
					<a
						href="https://twitter.com/yourname"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "#1DA1F2", fontSize: 28 }}>
						<FaTwitter />
					</a>
					<a
						href="https://wa.me/yourwhatsappphonenumber"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "#25D366", fontSize: 28 }}
						title="WhatsApp">
						<FaWhatsapp />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
