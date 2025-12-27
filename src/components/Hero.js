import React, { useState, useEffect } from 'react';

const TypingText = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hello, my name is Om.\nI specialize in Computer Science and Cybersecurity, always curious to explore and solve challenges.\nIt's great to have you here!";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Fast typing speed

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div>
      {displayedText}
      <span className={`inline-block w-1 h-6 bg-white ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}></span>
    </div>
  );
};

const Hero = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavClick = (section) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSection(section);
    
    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section - Full Screen Image */}
      {currentSection === 'home' && (
        <section id="home" className="min-h-screen relative animate-fadeIn">
        {/* Full Screen Image */}
        <div className="absolute inset-0">
          <img 
            src="/one-piece-5k-5120x2880-10913.jpg" 
            alt="One Piece Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Typing Animation Text */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
          <div className="text-white font-pixel text-lg md:text-xl lg:text-2xl leading-relaxed max-w-md">
            <TypingText />
          </div>
        </div>
        
        {/* DarCy Text - Upper Right Corner */}
        <div className="absolute top-8 right-8 z-10 animate-fadeIn">
          <div className="text-white font-pixel text-xl md:text-2xl lg:text-3xl font-bold">
            DarCy
          </div>
        </div>
        
        {/* Download Resume Button */}
        <div className="absolute bottom-20 right-8 z-10">
          <a 
            href="/Om Sable Resume.pdf" 
            download="Om Sable Resume.pdf"
            className="bg-black/50 text-white font-pixel text-sm md:text-base px-4 py-3 hover:bg-black/70 hover:scale-105 transition-all duration-300 group inline-block" 
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)`,
              backgroundPosition: '0px 0px'
            }}
          >
            Download Resume!
          </a>
        </div>
        </section>
      )}

      {/* About Section */}
      {currentSection === 'about' && (
        <section id="about" className="h-screen overflow-y-auto py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-fadeIn">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-pixel">About Me</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-3xl font-bold text-white mb-6 font-pixel">Who I Am</h3>
                  <p className="text-gray-300 leading-relaxed text-lg mb-6">
                    I'm a passionate <span className="text-blue-400 font-semibold">BTech Computer Science</span> student with a deep interest in 
                    <span className="text-green-400 font-semibold"> Cybersecurity</span> and 
                    <span className="text-purple-400 font-semibold"> Full-Stack Development</span>. 
                    I love solving complex problems and building secure, innovative solutions.
                  </p>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    When I'm not coding, you'll find me exploring the latest in cybersecurity, 
                    playing games, or working on creative projects that challenge my skills.
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl text-center">
                    <div className="text-2xl mb-2">🧠</div>
                    <div className="text-white font-semibold text-sm">Problem Solver</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-xl text-center">
                    <div className="text-2xl mb-2">👥</div>
                    <div className="text-white font-semibold text-sm">Team Player</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl text-center">
                    <div className="text-2xl mb-2">💡</div>
                    <div className="text-white font-semibold text-sm">Innovative</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative">
                  <div className="w-64 h-64 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-4 border-blue-500 shadow-2xl">
                    <div className="text-center">
                      <div className="text-white font-pixel text-3xl mb-1 tracking-wider">OM</div>
                      <div className="text-blue-400 font-pixel text-sm mb-1 opacity-80">AKA</div>
                      <div className="text-red-400 font-pixel text-2xl tracking-wider font-bold">DarCy</div>
                      <div className="mt-3 w-16 h-0.5 bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 mx-auto"></div>
                    </div>
                  </div>
                  
                  {/* Floating Tech Icons - Optimized for Performance */}
                  <div className="absolute -top-6 -right-6 w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-lg">🔒</span>
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <span className="text-lg">💻</span>
                  </div>
                  <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded flex items-center justify-center shadow-lg">
                    <span className="text-sm">⚡</span>
                  </div>
                  <div className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded flex items-center justify-center shadow-lg">
                    <span className="text-sm">🚀</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                  <h3 className="text-3xl font-bold text-white mb-6 font-pixel">🚀 My Journey</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🎓</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-2">Education</h4>
                        <p className="text-gray-300">Currently pursuing B.Tech in Computer Science, with a focus on Cybersecurity and Software Development.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">🔒</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-2">Passion</h4>
                        <p className="text-gray-300">A self-taught cybersecurity enthusiast, exploring ethical hacking, network security, and penetration testing.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">💻</span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-lg mb-2">Development</h4>
                        <p className="text-gray-300">Hands-on experience in building full-stack applications and developing security tools using modern technologies.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {currentSection === 'skills' && (
        <section id="skills" className="h-screen overflow-y-auto py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black animate-fadeIn">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-pixel">Skills & Expertise</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded"></div>
              <p className="text-gray-400 text-xl mt-6">Technologies I work with</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🐍</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-pixel">Python Programming</h3>
                <p className="text-gray-300 text-center mb-6">Scripting, Automation, Data Analysis, Security Tools</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Scripting</span>
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Automation</span>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-pixel">Networking</h3>
                <p className="text-gray-300 text-center mb-6">Network Protocols, TCP/IP, Network Security, Infrastructure</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">TCP/IP</span>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Network Security</span>
                  <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">Infrastructure</span>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🐧</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-pixel">Linux Administration</h3>
                <p className="text-gray-300 text-center mb-6">System Administration, Command Line, Server Management</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Linux</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">Bash</span>
                  <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">CLI</span>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🔐</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-pixel">Cryptography</h3>
                <p className="text-gray-300 text-center mb-6">Encryption, Digital Signatures, Hash Functions, PKI</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Encryption</span>
                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">PKI</span>
                  <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-sm">Hash Functions</span>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-pixel">Red Teaming</h3>
                <p className="text-gray-300 text-center mb-6">Penetration Testing, Vulnerability Assessment, Security Testing</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Pen Testing</span>
                  <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Vulnerability Assessment</span>
                  <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">Security Testing</span>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-indigo-500 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-pixel">Web Development</h3>
                <p className="text-gray-300 text-center mb-6">React, Node.js, HTML/CSS, JavaScript, Tailwind</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-pixel">Cybersecurity</h3>
                <p className="text-gray-300 text-center mb-6">Ethical Hacking, Network Security, Penetration Testing</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Ethical Hacking</span>
                  <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Network Security</span>
                  <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm">Pen Testing</span>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-pixel">Artificial Intelligence</h3>
                <p className="text-gray-300 text-center mb-6">Machine Learning, Deep Learning, AI Security, Neural Networks</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                  <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">Deep Learning</span>
                  <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm">AI Security</span>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-pixel">Web Security</h3>
                <p className="text-gray-300 text-center mb-6">OWASP Top 10, Web App Security, API Security, XSS Prevention</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">OWASP</span>
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">API Security</span>
                  <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm">XSS Prevention</span>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🛠️</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-pixel">Security Tools & Frameworks</h3>
                <p className="text-gray-300 text-center mb-6">Burp Suite, Metasploit, Wireshark, NIST, ISO 27001</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">Burp Suite</span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">Metasploit</span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">NIST</span>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-violet-500 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-pixel">Mobile Security</h3>
                <p className="text-gray-300 text-center mb-6">Android/iOS Security, Mobile Pen Testing, Reverse Engineering</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm">Android Security</span>
                  <span className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm">iOS Security</span>
                  <span className="bg-violet-500/20 text-violet-300 px-3 py-1 rounded-full text-sm">Reverse Engineering</span>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-amber-500 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🚨</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-pixel">Incident Response</h3>
                <p className="text-gray-300 text-center mb-6">Digital Forensics, Malware Analysis, SOC Operations, Threat Hunting</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">Digital Forensics</span>
                  <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">Malware Analysis</span>
                  <span className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm">SOC Operations</span>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700 hover:border-teal-500 transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center font-pixel">Soft Skills</h3>
                <p className="text-gray-300 text-center mb-6">Communication, Documentation, Risk Assessment, Team Leadership</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">Communication</span>
                  <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">Risk Assessment</span>
                  <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-sm">Team Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {currentSection === 'projects' && (
        <section id="projects" className="h-screen overflow-y-auto py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-fadeIn">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-pixel">Featured Projects</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded"></div>
              <p className="text-gray-400 text-xl mt-6">My latest work and creations</p>
              <p className="text-gray-500 text-lg mt-4 font-pixel">Visit my GitHub profile to see code or more projects if interested</p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-102 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-5xl">🌐</span>
                    <span className="text-5xl">🔍</span>
                  </div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Live
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 font-pixel">NetHawk</h3>
                  <p className="text-gray-300 text-base mb-4 leading-relaxed">
                    Advanced network reconnaissance toolkit with passive and active scanning capabilities. If used for active scanning, can perform various network attacks and penetration testing techniques for comprehensive security assessment.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">Python</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">Network Security</span>
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-semibold">Penetration Testing</span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold">Nmap</span>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-gray-700/50 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600/50 transition-all duration-300 text-sm border border-gray-600">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:scale-102 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
                  <span className="text-6xl">🤖</span>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    AI Platform
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 font-pixel">SkillBuddy</h3>
                  <p className="text-gray-300 text-base mb-4 leading-relaxed">
                    AI-powered learning platform with intelligent chatbot for career guidance, interactive study modules, and hands-on CTF challenges. Features personalized learning paths and skill development tracking.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">AI Chatbot</span>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-xs font-semibold">Career Guidance</span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold">CTF Challenges</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">Learning Modules</span>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-gray-700/50 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600/50 transition-all duration-300 text-sm border border-gray-600">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-102 overflow-hidden lg:col-span-2">
                <div className="relative h-48 bg-gradient-to-br from-green-500 via-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-6xl">🌐</span>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Portfolio
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 font-pixel">Portfolio Website</h3>
                  <p className="text-gray-300 text-base mb-4 leading-relaxed">
                    Modern, responsive portfolio with terminal-style landing page, dynamic animations, and interactive sections. Built with React.js, Tailwind CSS, and optimized for performance.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">React</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">Tailwind CSS</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">JavaScript</span>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-gray-700/50 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600/50 transition-all duration-300 text-sm border border-gray-600">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-102 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 flex items-center justify-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-5xl">🐺</span>
                    <span className="text-5xl">🔒</span>
                  </div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Security
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 font-pixel">PassWolf</h3>
                  <p className="text-gray-300 text-base mb-4 leading-relaxed">
                    End-to-end encrypted password manager with biometric authentication, secure key generation, and zero-knowledge architecture for maximum security.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-semibold">Encryption</span>
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-semibold">Biometric Auth</span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold">Zero-Knowledge</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">React Native</span>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-gray-700/50 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600/50 transition-all duration-300 text-sm border border-gray-600">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-102 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-500 flex items-center justify-center">
                  <span className="text-6xl">🤖</span>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    AI/ML
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 font-pixel">ThreatDetector AI</h3>
                  <p className="text-gray-300 text-base mb-4 leading-relaxed">
                    Machine learning-powered threat detection system using neural networks to identify and classify cybersecurity threats in real-time with 95% accuracy.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-semibold">TensorFlow</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">Python</span>
                    <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold">Neural Networks</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">Real-time</span>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-gray-700/50 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600/50 transition-all duration-300 text-sm border border-gray-600">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-102 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">#</span>
                  </div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Security
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 font-pixel">Hash Analyzer</h3>
                  <p className="text-gray-300 text-base mb-4 leading-relaxed">
                    Advanced cryptographic hash analysis tool that identifies hash types, performs rainbow table lookups, and supports multiple hash algorithms for password recovery and security research.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-xs font-semibold">Python</span>
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-xs font-semibold">Cryptography</span>
                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-xs font-semibold">Hash Cracking</span>
                    <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold">Security Research</span>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-gray-700/50 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600/50 transition-all duration-300 text-sm border border-gray-600">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:scale-102 overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">📝</span>
                  </div>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Security
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 font-pixel">Wordlist Creator</h3>
                  <p className="text-gray-300 text-base mb-4 leading-relaxed">
                    Advanced wordlist generation tool for password cracking and security testing. Creates custom wordlists based on target information, social media data, and common patterns for comprehensive penetration testing.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-semibold">Python</span>
                    <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-xs font-semibold">Password Cracking</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">Penetration Testing</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">Data Mining</span>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-gray-700/50 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600/50 transition-all duration-300 text-sm border border-gray-600">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-20">
              <p className="text-gray-500 text-lg font-pixel">Visit my GitHub profile to see code or more projects if interested</p>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {currentSection === 'contact' && (
        <section id="contact" className="h-screen overflow-y-auto py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black animate-fadeIn">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-pixel">Get In Touch</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded"></div>
              <p className="text-gray-400 text-xl mt-6">Let's create something amazing together</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
                  <h3 className="text-3xl font-bold text-white mb-6 font-pixel">Let's Connect!</h3>
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    I'm always excited to work on new projects and collaborate with fellow developers. 
                    Whether you have a question, want to discuss an idea, or just want to say hi, I'd love to hear from you!
                  </p>
                  
                  <div className="space-y-6">
                    <a href="mailto:omsablee@gmail.com" className="flex items-center space-x-6 p-4 bg-gray-700/30 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 cursor-pointer">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">Email</p>
                        <p className="text-gray-300">omsablee@gmail.com</p>
                      </div>
                    </a>
                    
                    <a href="https://linkedin.com/in/om-sable-darcy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 p-4 bg-gray-700/30 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 cursor-pointer">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">💼</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">LinkedIn</p>
                        <p className="text-gray-300">linkedin.com/in/om-sable-darcy</p>
                      </div>
                    </a>
                    
                    <a href="https://github.com/darky-boy" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 p-4 bg-gray-700/30 rounded-2xl hover:bg-gray-700/50 transition-all duration-300 cursor-pointer">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center">
                        <span className="text-2xl">🐙</span>
                      </div>
                      <div>
                        <p className="text-white font-semibold text-lg">GitHub</p>
                        <p className="text-gray-300">github.com/darky-boy</p>
                      </div>
                    </a>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
                  <h3 className="text-3xl font-bold text-white mb-6 font-pixel">Quick Response</h3>
                  <p className="text-gray-300 text-lg mb-6">
                    I typically respond within 24 hours. For urgent matters, feel free to reach out directly!
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="text-green-300 font-semibold">Fast Response</div>
                    </div>
                    <div className="text-center p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                      <div className="text-2xl mb-2">🤝</div>
                      <div className="text-blue-300 font-semibold">Always Open</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Dynamic Navigation */}
      <nav className={`fixed z-50 left-0 right-0 transition-all duration-800 ${
        currentSection === 'home' 
          ? 'bottom-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-sm' 
          : 'top-0 bg-transparent'
      }`}>
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex justify-around items-center">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`transition font-medium text-lg ${
                currentSection === 'home' 
                  ? 'text-white/80 hover:text-white' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              Hero
            </button>
            
            <button 
              onClick={() => handleNavClick('about')} 
              className={`transition font-medium text-lg ${
                currentSection === 'about' 
                  ? 'text-white/80 hover:text-white' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              About
            </button>
            
            <button 
              onClick={() => handleNavClick('skills')} 
              className={`transition font-medium text-lg ${
                currentSection === 'skills' 
                  ? 'text-white/80 hover:text-white' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              Skills
            </button>
            
            <button 
              onClick={() => handleNavClick('projects')} 
              className={`transition font-medium text-lg ${
                currentSection === 'projects' 
                  ? 'text-white/80 hover:text-white' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              Projects
            </button>
            
            <button 
              onClick={() => handleNavClick('contact')} 
              className={`transition font-medium text-lg ${
                currentSection === 'contact' 
                  ? 'text-white/80 hover:text-white' 
                  : 'text-white/60 hover:text-white/80'
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Footer */}
      {currentSection !== 'home' && (
        <footer className="py-8 px-6 bg-gray-900 pb-20">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">&copy; 2024 Om. Built with passion for cybersecurity and web development.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Hero;
