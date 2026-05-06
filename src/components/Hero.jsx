import { motion } from "framer-motion"

import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa"

import profile from "../assets/profile.jpg"
import resume from "../assets/resume.pdf"

export default function Hero() {

  return (

    <motion.section
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center px-6"
    >

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p className="text-cyan-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">

            Keerthanaraj <br />

            <span className="text-cyan-400">
              C H
            </span>

          </h1>

          <h2 className="mt-6 text-2xl md:text-3xl text-gray-300">

            AI & Machine Learning Enthusiast

          </h2>

          <div className="flex gap-6 mt-10">

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Keerthanarajch"
              target="_blank"
              className="text-3xl text-cyan-400 hover:text-cyan-300"
            >

              <FaGithub />

            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://linkedin.com/keerthanarajch"
              target="_blank"
              className="text-3xl text-cyan-400 hover:text-cyan-300"
            >

              <FaLinkedin />
            </motion.a>

            <motion.a
                whileHover={{ scale: 1.2 }}
                href="https://instagram.com/___keerthana___raj___"
                target="_blank"
                className="text-3xl text-cyan-400 hover:text-pink-400 transition"
                >

                <FaInstagram />

                </motion.a>

          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={resume}
            download
            className="inline-block mt-10 bg-cyan-500 text-black px-8 py-3 rounded-2xl font-semibold hover:bg-cyan-400 transition duration-300"
          >

            Download Resume

          </motion.a>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-3xl"></div>

            <img
            src={profile}
            alt="profile"
            className="relative w-[380px] md:w-[450px] h-[500px] md:h-[580px] object-cover rounded-3xl border border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.4)]"
            />

          </div>

        </motion.div>

      </div>

    </motion.section>

  )
}