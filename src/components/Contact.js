import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import sanitizeHtml from 'sanitize-html'
import { useForm } from "react-hook-form"

const Contact = () => {
	const data = useStaticQuery(graphql`
		query ContactQuery {
			graphCmsSection(slug: {eq: "contact"}) {
				title
				content {
					html
				}
			}
		}
	`)

	const { register, handleSubmit, formState: { errors }, reset } = useForm();

	const encode = (data) => {
    return Object.keys(data)
			.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
			.join("&")
  }

	const onSubmit = (data, e) => {
		e.preventDefault()
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({
				"form-name": "contact-pngphotography",
				...data
			})
		})
		.then(() => {
			alert('Thanks for reaching out! I will get back to you as soon as possible.')
			reset()
		})
		.catch(() => {
			alert('Something went wrong...')
		})
	}
	
	return (
		<section id="contact">
			<h2>{data.graphCmsSection.title}</h2>
			<div dangerouslySetInnerHTML={{ __html: sanitizeHtml(data.graphCmsSection.content.html) }}/>
			<div className="row">
				{/* <div className="12u 12u$(small)"> */}
				<div className="8u 12u$(small)">
					<form data-netlify="true" name="contact-pngphotography" method="post" netlify-honeypot="bot-field" onSubmit={handleSubmit(onSubmit)}>
						<input type="hidden" name="form-name" value="contact-pngphotography" />
						<input type="hidden" name="bot-field" />
						<div className="row uniform 50%">
							<div className="6u 12u$(xsmall)">
								<input
									type="text"
									name="name"
									id="name"
									placeholder="Name"
									ref={register({ required: true })}
								/>
								{errors.name && <span className="form-error">This field is required</span>}
							</div>
							<div className="6u 12u$(xsmall)">
								<input
									type="email"
									name="email"
									id="email"
									placeholder="Email"
									ref={register({ required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
								/>
								{errors.email?.type === "required" && <span className="form-error">This field is required</span>}
								{errors.email?.type === "pattern" && <span className="form-error">This is not a valid email</span>}
							</div>
							<div className="12u">
								<textarea
									name="message"
									id="message"
									placeholder="Message"
									rows="4"
									ref={register({ required: true })}
								></textarea>
								{errors.message && <span className="form-error">This field is required</span>}
							</div>
						</div>
						<ul className="actions" style={{ marginTop: 30 }}>
							<li>
								<input type="submit" value="Send Message" />
							</li>
						</ul>
					</form>
				</div>
			</div>
		</section>
	)
}
 
export default Contact