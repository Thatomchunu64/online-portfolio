/** @format */

import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { heroSection, gradientKeyframes } from "./style";

const Contact = () => {
	const [form, setForm] = useState({ name: "", email: "", message: "" });
	const [loading, setLoading] = useState(false); // <-- loading state added

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true); // <-- disable button

		try {
			const response = await fetch("https://formspree.io/f/mnnvevjd", {
				method: "POST",
				headers: {
					Accept: "application/json",
				},
				body: new FormData(e.target),
			});

			if (response.ok) {
				toast.success("Message sent successfully!");
				setForm({ name: "", email: "", message: "" });
			} else {
				toast.error("❌ Failed to send message. Please try again.");
			}
		} catch (error) {
			console.error(error);
			toast.warning("⚠️ Network error. Please try again later.");
		} finally {
			setLoading(false); // <-- re-enable button
		}
	};

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
			<ToastContainer position="top-center" />
			<div
				style={{
					background: "rgba(255,255,255,0.85)",
					borderRadius: 18,
					maxWidth: 600,
					margin: "40px auto 0 auto",
					padding: "32px 16px",
					width: "100%",
					boxSizing: "border-box",
				}}>
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
						disabled={loading} // disable while loading
						style={{
							background: loading
								? "#9dd2f4"
								: "linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)",
							color: "#fff",
							fontWeight: 700,
							fontSize: 16,
							padding: "12px 28px",
							borderRadius: 8,
							border: "none",
							marginTop: 6,
							cursor: loading ? "not-allowed" : "pointer",
							width: "100%",
							boxSizing: "border-box",
						}}>
						{loading ? "Sending..." : "Send Message"}
					</button>
				</form>

				<div
					style={{
						display: "flex",
						gap: 18,
						justifyContent: "center",
						marginTop: 24,
						flexWrap: "wrap",
					}}>
					<a
						href="https://github.com/IvarRotg64"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "#222", fontSize: 28 }}>
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/thato-mchunu-42b053308"
						target="_blank"
						rel="noopener noreferrer"
						style={{ color: "#0A66C2", fontSize: 28 }}>
						<FaLinkedin />
					</a>
					<a
						href="https://wa.me/27782764255"
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
