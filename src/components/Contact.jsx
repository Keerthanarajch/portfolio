import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhone
  } from "react-icons/fa"
  
  export default function Contact() {
  
    return (
  
      <section
        id="contact"
        className="bg-black text-white py-20 px-6"
      >
  
        <div className="max-w-5xl mx-auto text-center">
  
          <h2 className="text-4xl font-bold text-cyan-400">
            Contact Me
          </h2>
  
          <p className="mt-6 text-gray-400">
            Feel free to connect with me for internships,
            collaborations, Job or AI/ML opportunities.
          </p>
  
          <div className="grid md:grid-cols-2 gap-8 mt-12">
  
            <div className="bg-gray-900 p-6 rounded-2xl">
  
              <FaEnvelope className="text-3xl text-cyan-400 mx-auto" />
  
              <h3 className="mt-4 text-xl font-semibold">
                Email
              </h3>
  
              <p className="mt-2 text-gray-400">
                keerthanarajch@gmail.com
              </p>
  
            </div>
  
            <div className="bg-gray-900 p-6 rounded-2xl">
  
              <FaPhone className="text-3xl text-cyan-400 mx-auto" />
  
              <h3 className="mt-4 text-xl font-semibold">
                Phone
              </h3>
  
              <p className="mt-2 text-gray-400">
                +91 9778006703
              </p>
  
            </div>
  
            <div className="bg-gray-900 p-6 rounded-2xl">
  
              <FaGithub className="text-3xl text-cyan-400 mx-auto" />
  
              <h3 className="mt-4 text-xl font-semibold">
                GitHub
              </h3>
  
              <a
                href="https://github.com/Keerthanarajch"
                target="_blank"
                className="mt-2 text-gray-400 block hover:text-cyan-400"
              >
  
                Visit Profile
  
              </a>
  
            </div>
  
            <div className="bg-gray-900 p-6 rounded-2xl">
  
              <FaLinkedin className="text-3xl text-cyan-400 mx-auto" />
  
              <h3 className="mt-4 text-xl font-semibold">
                LinkedIn
              </h3>
  
              <a
                href="https://linkedin.com/Keerthanarajch"
                target="_blank"
                className="mt-2 text-gray-400 block hover:text-cyan-400"
              >
  
                Connect With Me
  
              </a>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
  
    )
  }