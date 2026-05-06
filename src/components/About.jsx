import { motion } from "framer-motion"

export default function About() {

  return (

    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-950 text-white py-24 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 text-center">

          About Me

        </h2>

        <div className="grid md:grid-cols-2 gap-14 mt-16 items-center">

          {/* LEFT CONTENT */}

          <div>

            <p className="text-gray-300 leading-8 text-lg">

              I am a Final-year Integrated M.Sc. Computer Science student specializing in
              Artificial Intelligence and Machine Learning with a strong passion for
              building intelligent systems that solve real-world problems.

            </p>

            <p className="mt-6 text-gray-400 leading-8">

              My primary interests include Deep Learning, Explainable AI,
              Graph Neural Networks, Computer Vision, and AI-powered Web Applications.
              I enjoy exploring how modern AI technologies can improve accessibility,
              automation, and human-computer interaction.

            </p>

            <p className="mt-6 text-gray-400 leading-8">

              I have developed multiple AI-based applications including real-time
              Indian Sign Language recognition systems, Explainable GNN models,
              nutrition prediction systems, and full-stack web applications using
              Django and Streamlit.

            </p>

            {/* QUOTE */}

            <div className="mt-10 border-l-4 border-cyan-400 pl-6">

              <p className="text-xl italic text-gray-300">

                “Passionate about building AI systems that create meaningful real-world impact.”

              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="grid gap-6">

            <div className="bg-black border border-gray-800 p-6 rounded-3xl hover:border-cyan-400 transition">

              <h3 className="text-2xl font-semibold text-cyan-400">

                Areas of Interest

              </h3>

              <ul className="mt-4 space-y-3 text-gray-400">

                <li>• Artificial Intelligence</li>
                <li>• Machine Learning</li>
                <li>• Graph Neural Networks</li>
                <li>• Explainable AI</li>
                <li>• Computer Vision</li>
                <li>• Generative AI</li>

              </ul>

            </div>

            <div className="bg-black border border-gray-800 p-6 rounded-3xl hover:border-cyan-400 transition">

              <h3 className="text-2xl font-semibold text-cyan-400">

                Strengths

              </h3>

              <ul className="mt-4 space-y-3 text-gray-400">

                <li>• Problem Solving</li>
                <li>• Critical Thinking</li>
                <li>• Team Leadership</li>
                <li>• Communication Skills</li>
                <li>• Research Mindset</li>
                <li>• Fast Learner</li>

              </ul>

            </div>

          </div>

        </div>

      </div>

    </motion.section>

  )
}