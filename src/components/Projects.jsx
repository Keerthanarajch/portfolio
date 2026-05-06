import { motion } from "framer-motion"
import { useState } from "react"

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null)

  const projects = [

    {
      title: "SignBridge",

      description:
        "Bidirectional Indian Sign Language recognition system using Graph Attention Networks and Explainable AI.",
        details: (

            <div className="space-y-6">
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Overview
                </h3>
          
                <p className="mt-3 text-gray-300 leading-8">
          
                  SignBridge is a real-time Indian Sign Language recognition and speech conversion system designed to bridge communication gaps between hearing-impaired individuals and non-sign language users.
          
                </p>
          
              </div>
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Key Features
                </h3>
          
                <ul className="mt-3 space-y-2 text-gray-300">
          
                  <li>• Real-time hand gesture recognition</li>
                  <li>• Sign-to-text and speech conversion</li>
                  <li>• MediaPipe hand landmark extraction</li>
                  <li>• Explainable AI visualization using GNNExplainer</li>
                  <li>• Offline Streamlit deployment</li>
          
                </ul>
          
              </div>
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Technologies Used
                </h3>
          
                <p className="mt-3 text-gray-300">
          
                  PyTorch, PyTorch Geometric, MediaPipe, OpenCV,
                  TensorFlow/Keras, Streamlit, Plotly
          
                </p>
          
              </div>
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Challenges
                </h3>
          
                <ul className="mt-3 space-y-2 text-gray-300">
          
                  <li>• Handling varying lighting conditions</li>
                  <li>• Improving accuracy for similar gestures</li>
                  <li>• Reducing real-time prediction latency</li>
                  <li>• Managing dataset imbalance</li>
          
                </ul>
          
              </div>
          
            </div>
          
          ),
          tech: [
        "PyTorch",
        "GNN",
        "MediaPipe",
        "OpenCV",
        "Streamlit"
      ],

      github: "https://github.com/Keerthanarajch/signbridge",
      demo: "#"
    },

    {
      title: "ISL Gesture Recognition",

      description:
        "Real-time Indian Sign Language recognition and speech conversion system using Deep Learning.",
        details: (

            <div className="space-y-6">
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Overview
                </h3>
          
                <p className="mt-3 text-gray-300 leading-8">
          
                  This project focuses on real-time Indian Sign Language gesture recognition using computer vision and deep learning techniques. The system captures webcam video streams, processes hand gestures, and converts recognized signs into text and speech output.
          
                </p>
          
              </div>
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Key Features
                </h3>
          
                <ul className="mt-3 space-y-2 text-gray-300">
          
                  <li>• Real-time webcam-based gesture recognition</li>
                  <li>• CNN-based classification pipeline</li>
                  <li>• Hand landmark extraction using MediaPipe</li>
                  <li>• Speech synthesis integration</li>
                  <li>• Live prediction visualization</li>
          
                </ul>
          
              </div>
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Technologies Used
                </h3>
          
                <p className="mt-3 text-gray-300">
          
                  Python, TensorFlow/Keras, OpenCV,
                  MediaPipe, NumPy, gTTS
          
                </p>
          
              </div>
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Technical Highlights
                </h3>
          
                <ul className="mt-3 space-y-2 text-gray-300">
          
                  <li>• Built real-time gesture classification pipeline</li>
                  <li>• Applied image preprocessing and augmentation</li>
                  <li>• Optimized gesture detection robustness</li>
                  <li>• Improved live prediction responsiveness</li>
          
                </ul>
          
              </div>
          
            </div>
          
          ),
          tech: [
        "TensorFlow",
        "OpenCV",
        "MediaPipe"
      ],

      github: "https://github.com/Keerthanarajch/Indian-sign-language-recognition",
      demo: "#"
    },

    {
      title: "Food Nutrition Prediction",

      description:
        "Machine learning system for calorie prediction and meal-time classification.",
        ddetails: (

            <div className="space-y-6">
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Overview
                </h3>
          
                <p className="mt-3 text-gray-300 leading-8">
          
                  Food Nutrition Predictor is an AI-powered application designed to estimate calorie and nutritional information using machine learning and nutrition analytics techniques.
          
                </p>
          
              </div>
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Key Features
                </h3>
          
                <ul className="mt-3 space-y-2 text-gray-300">
          
                  <li>• Calorie prediction system</li>
                  <li>• Meal-time classification</li>
                  <li>• Nutritional analytics dashboard</li>
                  <li>• Interactive Streamlit interface</li>
                  <li>• Real-time prediction support</li>
          
                </ul>
          
              </div>
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Technologies Used
                </h3>
          
                <p className="mt-3 text-gray-300">
          
                  Python, Streamlit, Scikit-learn,
                  Pandas, NumPy, Matplotlib
          
                </p>
          
              </div>
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Challenges
                </h3>
          
                <ul className="mt-3 space-y-2 text-gray-300">
          
                  <li>• Handling inconsistent nutrition datasets</li>
                  <li>• Accurate calorie estimation</li>
                  <li>• Feature engineering for better predictions</li>
                  <li>• Improving model generalization</li>
          
                </ul>
          
              </div>
          
            </div>
          
          ),
          tech: [
        "Scikit-learn",
        "Streamlit",
        "Pandas"
      ],

      github: "https://github.com/Keerthanarajch/food-nutrition-predictor",
      demo: "#"
    },

    {
      title: "NSS Management System",

      description:
        "Role-based web application developed for managing NSS activities and volunteer tracking.",
        details: (

            <div className="space-y-6">
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Overview
                </h3>
          
                <p className="mt-3 text-gray-300 leading-8">
          
                  The NSS Management System is a role-based web application developed to digitally manage National Service Scheme activities across multiple user roles including Admin, Programme Officer, and Volunteer Secretary.
          
                </p>
          
              </div>
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Key Features
                </h3>
          
                <ul className="mt-3 space-y-2 text-gray-300">
          
                  <li>• Secure role-based authentication</li>
                  <li>• Volunteer activity tracking</li>
                  <li>• Event approval management</li>
                  <li>• Automated administrative workflows</li>
                  <li>• Centralized activity management</li>
          
                </ul>
          
              </div>
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Technologies Used
                </h3>
          
                <p className="mt-3 text-gray-300">
          
                  Python, Django, MySQL,
                  HTML, CSS, Bootstrap
          
                </p>
          
              </div>
          
              <div>
          
                <h3 className="text-xl font-semibold text-cyan-400">
                  Impact
                </h3>
          
                <ul className="mt-3 space-y-2 text-gray-300">
          
                  <li>• Reduced manual administrative workload</li>
                  <li>• Improved volunteer coordination</li>
                  <li>• Streamlined event approval process</li>
                  <li>• Enhanced digital record management</li>
          
                </ul>
          
              </div>
          
            </div>
          
          ),
          tech: [
        "Django",
        "MySQL",
        "Bootstrap"
      ],

      github: "https://github.com/Keerthanarajch/nssms_new",
      demo: "#"
    }

  ]

  return (

    <section
      id="projects"
      className="bg-gray-950 text-white py-20 px-6"
    >

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-14">

          {
            projects.map((project, index) => (

              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-black border border-gray-800 p-8 rounded-3xl hover:border-cyan-400 transition duration-300 shadow-lg"
              >

                <h3 className="text-2xl font-bold text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-5 text-gray-400 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {
                    project.tech.map((item, techIndex) => (

                      <span
                        key={techIndex}
                        className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-xl text-sm border border-cyan-500/20"
                      >

                        {item}

                      </span>

                    ))
                  }

                </div>

                <div className="flex gap-4 mt-8">

                  <a
                    href={project.github}
                    target="_blank"
                    className="bg-cyan-500 text-black px-5 py-2 rounded-xl font-semibold hover:bg-cyan-400 transition"
                  >

                    GitHub

                  </a>

                  <button
                onClick={() => setSelectedProject(project)}
                className="border border-cyan-500 text-cyan-400 px-5 py-2 rounded-xl hover:bg-cyan-500 hover:text-black transition"
                >

                More Details

                </button>

                </div>

              </motion.div>

            ))
          }

        </div>

      </div>
      {
  selectedProject && (

    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-6">

      <div className="bg-gray-900 max-w-2xl w-full p-8 rounded-3xl border border-cyan-400 relative">

        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white"
        >

          ×

        </button>

        <h2 className="text-3xl font-bold text-cyan-400">

          {selectedProject.title}

        </h2>

        <div className="mt-6">

            {selectedProject.details}

            </div>

        <div className="flex flex-wrap gap-3 mt-8">

          {
            selectedProject.tech.map((tech, index) => (

              <span
                key={index}
                className="bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-xl border border-cyan-500/20"
              >

                {tech}

              </span>

            ))
          }

        </div>

      </div>

    </div>

  )
}

    </section>

  )
}