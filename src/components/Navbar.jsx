export default function Navbar() {

    return (
  
      <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md text-white z-50 border-b border-gray-800">
  
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
  
          <h1 className="text-2xl font-bold text-cyan-400">
            Keerthanaraj
          </h1>
  
          <div className="flex gap-6 text-sm md:text-base">
  
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
  
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
  
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
  
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#achievements" className="hover:text-cyan-400 transition">
              Achievements
              </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
                Contact
            </a>
  
          </div>
  
        </div>
  
      </nav>
  
    )
  }