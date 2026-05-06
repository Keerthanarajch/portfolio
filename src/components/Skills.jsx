import { motion } from "framer-motion"

import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub
} from "react-icons/fa"

import {
  SiPytorch,
  SiTensorflow,
  SiOpencv,
  SiDjango,
  SiMysql,
  SiTailwindcss
} from "react-icons/si"

export default function Skills() {

  const skills = [

    { name: "Python", icon: <FaPython /> },

    { name: "Java", icon: <FaJava /> },

    { name: "React", icon: <FaReact /> },

    { name: "PyTorch", icon: <SiPytorch /> },

    { name: "TensorFlow", icon: <SiTensorflow /> },

    { name: "OpenCV", icon: <SiOpencv /> },

    { name: "Django", icon: <SiDjango /> },

    { name: "MySQL", icon: <SiMysql /> },

    { name: "Tailwind", icon: <SiTailwindcss /> },

    { name: "Git", icon: <FaGitAlt /> },

    { name: "GitHub", icon: <FaGithub /> }

  ]

  return (

    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white py-24 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center">

          Skills & Technologies

        </h2>

        <div className="mt-16 relative overflow-hidden">

          <motion.div
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear"
            }}
            className="flex gap-8 whitespace-nowrap"
          >

            {
              [...skills, ...skills].map((skill, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4 bg-gray-900 border border-gray-800 px-8 py-5 rounded-2xl min-w-fit hover:border-cyan-400 transition"
                >

                  <span className="text-3xl text-cyan-400">

                    {skill.icon}

                  </span>

                  <span className="text-lg text-gray-300">

                    {skill.name}

                  </span>

                </div>

              ))
            }

          </motion.div>

        </div>

      </div>

    </motion.section>

  )
}