import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X, Code, Palette, Smartphone, Zap } from 'lucide-react';
import mb from './assets/dark.png';
import extell from './assets/ex.png';
import jb from './assets/jb.jpeg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const skills = [
    { name: 'Vue.js', icon: <Code className="w-5 h-5" /> },
    { name: 'React/Next.js', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'Bootstrap', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'Tailwind CSS', level: 92, icon: <Palette className="w-5 h-5" /> },
    { name: 'JavaScript', level: 94, icon: <Code className="w-5 h-5" /> },
    { name: 'Node Js', level: 80, icon: <Code className="w-5 h-5" /> },
    { name: 'React/Next.js', level: 95, icon: <Code className="w-5 h-5" /> },
    { name: 'UI/UX Design', level: 90, icon: <Palette className="w-5 h-5" /> },
    { name: 'Phalcon', level: 90, icon: <Palette className="w-5 h-5" /> },
    { name: 'Responsive Design', level: 96, icon: <Smartphone className="w-5 h-5" /> },
    { name: 'Performance Optimization', level: 87, icon: <Zap className="w-5 h-5" /> },

    // @Jk20022019
    // kariukijanet58@gmail.com
  ];

  const projects = [
    {
      title: 'JamoBets',
      description: 'An iGaming platform with real-time odds and casino games, secure payment processing, and an intuitive user interface for sports and casino betting enthusiasts.',
      technologies: ['React','Bootstrap', 'Node.js'],
      image: jb,
      // image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600',
      liveUrl: 'http://jamobets.com',
      codeUrl: '#'
    },
    {
      title: 'Extell Agencies',
      description: 'A rental management system that handles multiple landlords and tenants and has a payment gateway.',
      technologies: ['Vue.js', 'Node js'],
      image: extell,
      liveUrl: 'https://extellagencies.co.ke/',
      codeUrl: '#'
    },
    {
      title: 'Lucky Nyota',
      description: 'A crash game platform that allows users to place bets on a virtual multiplier that involves cards , offering an exciting and engaging gaming experience.',
      technologies: [],
      liveUrl: 'http://luckynyota.eloise.co.ke',
      codeUrl: '#'
    },
    {
      title: 'Reporting Dashboard',
      description: 'A comprehensive reporting dashboard that provides real-time analytics and insights for business performance, with customizable reports and data visualization.',
      technologies: ['Phalcon'],
      image: mb,
      liveUrl: 'https://dashboard.maybets.com/',
      codeUrl: '#'
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-white">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-purple-300 ${
                    activeSection === item.id ? 'text-purple-300' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-purple-300 ${
                    activeSection === item.id ? 'text-purple-300' : 'text-white/80'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Janet Kariuki
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              A passionate Frontend Developer who crafts beautiful, responsive, and user-centric web experiences with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Frontend Developer & UI/UX Enthusiast</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  With over 3 years of experience in frontend development, I specialize in creating engaging, 
                  accessible, and performant web applications. I'm passionate about clean code, modern design 
                  principles, and delivering exceptional user experiences.
                </p>
                
                <div className="flex space-x-4">
                  <a href="#" className="text-white/80 hover:text-purple-400 transition-colors duration-200">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="https://www.linkedin.com/in/janet-kariuki" className="text-white/80 hover:text-purple-400 transition-colors duration-200">
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center">
                  <div className="w-60 h-60 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <Code className="w-16 h-16 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-purple-400 mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:transform hover:scale-105 transition-all duration-300 group">
  <div className="w-full h-48 bg-white/10 flex items-center justify-center overflow-hidden">
    {project.image ? (
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-contain p-4"
      />
    ) : (
      <div className="text-white/60">No Image</div>
    )}
  </div>
  <div className="p-6">
    <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
    <p className="text-white/80 mb-4 leading-relaxed">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.map((tech, techIndex) => (
        <span
          key={techIndex}
          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex space-x-4">
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
      >
        <ExternalLink className="w-4 h-4 mr-1" />
        Live Demo
      </a>
    </div>
  </div>
</div>

            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">Let's Work Together</h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  I'm always interested in new opportunities and exciting projects. 
                  Whether you're looking for a dedicated team member or need help with a specific project, 
                  I'd love to hear from you.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center text-white/80">
                    <Mail className="w-5 h-5 mr-3 text-purple-400" />
                    kariukijanet58@gmail.com
                  </div>
                  <div className="flex items-center text-white/80">
                    <Phone className="w-5 h-5 mr-3 text-purple-400" />
                    +254712276716
                  </div>
                  <div className="flex items-center text-white/80">
                    <MapPin className="w-5 h-5 mr-3 text-purple-400" />
                    Nairobi, Kenya
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-purple-400 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-purple-400 transition-colors duration-200 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="button"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
                    onClick={() => alert('Message sent! (Demo only)')}
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/60">
            © 2024 Janet Kariuki. All rights reserved. 
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;