import { motion } from "framer-motion"

import {
  FaAward,
  FaMedal,
  FaStar
} from "react-icons/fa"

export default function Achievements() {

  const achievements = [

    {
      title: "UGC NET Qualified – Computer Science",

      description:
        "Qualified UGC NET in Computer Science and Applications and became eligible for Assistant Professor positions.",

      icon: <FaAward />
    },

    {
      title: "Ph.D Admission Qualified",

      description:
        "Qualified through UGC NET for Ph.D admission in Computer Science and Applications.",

      icon: <FaMedal />
    },

    {
      title: "Best Volunteer Award",

      description:
        "Received Best Volunteer Award from National Service Scheme Unit for leadership, volunteering, and community service activities.",

      icon: <FaStar />
    }

  ]

  return (

    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-black text-white py-24 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center">

          Achievements

        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {
            achievements.map((achievement, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-900 border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] transition duration-300"
              >

                <div className="text-5xl text-cyan-400">

                  {achievement.icon}

                </div>

                <h3 className="mt-6 text-2xl font-semibold">

                  {achievement.title}

                </h3>

                <p className="mt-4 text-gray-400 leading-7">

                  {achievement.description}

                </p>

              </motion.div>

            ))
          }

        </div>

      </div>

    </motion.section>

  )
}