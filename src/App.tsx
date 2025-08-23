import React, { useState, useEffect } from 'react';
import {
  Code,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
  ArrowUp
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'technologies', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }

      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const technologies = [
    { name: 'React', image: '../icons/React-Light.svg' },
    { name: 'Tailwind CSS', image: '../icons/TailwindCSS-Light.svg' },
    { name: 'Node.js', image: '../icons/NodeJS-Light.svg' },
    { name: 'Python', image: '../icons/Python-Light.svg' },
    { name: 'PostgreSQL', image: '../icons/PostgreSQL-Light.svg' },
    { name: 'Express.js', image: '../icons/ExpressJS-Light.svg' },
    { name: 'PHP', image: '../icons/PHP-Light.svg' },
    { name: 'MongoDB', image: '../icons/mongoDB.svg' },
    { name: 'Linux', image: '../icons/Linux-Light.svg' },
    { name: 'Git', image: '../icons/Git.svg' },
    { name: 'Docker', image: '../icons/Docker.svg' },
    { name: 'AWS', image: '../icons/AWS-Light.svg' },
    { name: 'JavaScript', image: '../icons/JavaScript.svg' },
    { name: 'HTML5', image: '../icons/HTML.svg' },
    { name: 'CSS3', image: '../icons/CSS.svg' },
    { name: 'C', image: '../icons/C.svg' },
    { name: 'C++', image: '../icons/CPP.svg' },
    { name: 'Scala', image: '../icons/Scala-Light.svg' },
    { name: 'Kotlin', image: '../icons/Kotlin-Light.svg' },
    { name: 'MySQL', image: '../icons/MySQL-Light.svg' },
    { name: 'Spring Boot', image: '../icons/Spring-Light.svg' },
    { name: 'Postman', image: '../icons/Postman.svg' },
    { name: 'Flutter', image: '../icons/Flutter-Light.svg' },
    { name: 'Firebase', image: '../icons/Firebase-Light.svg' },
    { name: 'Supabase', image: '../icons/Supabase-Light.svg' },
    { name: 'Three.js', image: '../icons/ThreeJS-Light.svg' },
    { name: 'Figma', image: '../icons/Figma-Light.svg' },
    { name: 'GitHub', image: '../icons/Github-Light.svg' },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL featuring payment integration, inventory management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      live: 'https://demo.com',
      hasLiveDemo: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, file sharing, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com',
      live: null,
      hasLiveDemo: false
    },
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with data visualization, reporting, and real-time metrics for business intelligence.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: 'https://github.com',
      live: 'https://demo.com',
      hasLiveDemo: true
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and PostgreSQL featuring payment integration, inventory management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      github: 'https://github.com',
      live: 'https://demo.com',
      hasLiveDemo: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, file sharing, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com',
      live: null,
      hasLiveDemo: false
    },
    {
      title: 'Analytics Dashboard',
      description: 'A comprehensive analytics dashboard with data visualization, reporting, and real-time metrics for business intelligence.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      github: 'https://github.com',
      live: 'https://demo.com',
      hasLiveDemo: true
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-cyan-400" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {['About', 'Technologies', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${activeSection === item.toLowerCase()
                      ? 'text-cyan-400 border-b-2 border-cyan-400'
                      : 'text-slate-300 hover:text-white'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['About', 'Technologies', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23334155%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Benshekniel Thayalan
              </span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-4">
              Full Stack Developer
            </p>
            <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Crafting exceptional digital experiences with modern technologies and creative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-white">
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-8 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-[4fr_1fr] gap-20 items-center">
            <div className="space-y-6 w-full">
              <h3 className="text-2xl font-semibold text-cyan-400">Hello! I'm Benshekniel</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                I am a dedicated Computer Science graduate from the University of Colombo School of Computing, with a strong foundation in modern web technologies, Machine Learning, and Data Science. With over five years of experience as a full-stack developer, I specialize in crafting innovative digital solutions that transform complex challenges into seamless, user-focused experiences.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Passionate about writing clean, scalable code, I thrive in collaborative settings and am committed to delivering elegant, high-quality designs. I enjoy mentoring aspiring tech enthusiasts, contributing to open-source projects, and staying at the forefront of emerging technologies.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <span className="px-4 py-2 bg-slate-800 rounded-full text-cyan-400 text-sm">Problem Solver</span>
                <span className="px-4 py-2 bg-slate-800 rounded-full text-cyan-400 text-sm">Innovation Driven</span>
                <span className="px-4 py-2 bg-slate-800 rounded-full text-cyan-400 text-sm">Team Player</span>
              </div>
            </div>

            <div className="relative flex justify-center md:justify-end pr-4">
              <div className="aspect-square bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 flex items-center justify-center w-80">
                <img src="../images/profile.png" width={300} />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>



      {/* Technologies Section */}
      <section id="technologies" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group flex flex-col items-center justify-center text-center min-h-[120px]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback to a placeholder if image fails to load
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzMzNDE1NSIvPgo8dGV4dCB4PSIyNCIgeT0iMjgiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzA2YjZkNCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VEVDSDwvdGV4dD4KPHN2Zz4K';
                    }}
                  />
                </div>
                <h3 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-300 mb-4 line-clamp-3">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-xs border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200 text-sm"
                    >
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                    {project.hasLiveDemo && (
                      <a
                        href={project.live ?? ''}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-lg transition-all duration-200 text-sm"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-slate-300 mb-8">
              I'm always interested in new opportunities and exciting projects.
              Let's discuss how we can bring your ideas to life!
            </p>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <a
                href="mailto:benshekniel@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <Mail className="h-8 w-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-slate-300">benshekniel@gmail.com</p>
              </a>

              <a
                href="https://wa.me/+94763263712"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <MessageCircle className="h-8 w-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
                <p className="text-slate-300">Message me</p>
              </a>

              <a
                href="https://linkedin.com/in/benshekniel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <Linkedin className="h-8 w-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                <p className="text-slate-300">Connect with me</p>
              </a>

              <a
                href="https://github.com/benshekniel"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <Github className="h-8 w-8 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200" />
                <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                <p className="text-slate-300">View my code</p>
              </a>
            </div>

            <div className="text-center">
              <a
                href="mailto:benshekniel@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
              >
                <Mail className="h-5 w-5" />
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Benshekniel. Crafted with using React & Tailwind CSS
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 z-40"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

export default App;