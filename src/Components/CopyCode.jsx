import React, { useState } from 'react';
import { Clipboard } from 'lucide-react';

export default function CopyCode() {
  const textObject = { text: `

    import React from "react"
    import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react"
    import { motion } from "framer-motion"
    import CopyCode from "./Components/CopyCode"
    
    const Resume = () => {
      const projects = [
        {
          name: "45Days LMS",
          link: "#",
          description: "Platform for learning English with AI-powered practice and user interaction features.",
         },
        {
          name: "WasSender",
          link: "https://hamdymohamedak.github.io/WasSender/",
          description: "Portfolio website for WaSender App.",
        },
        {
          name: "Marvelous Egypt Tours",
          link: "https://mervelous-travel.vercel.app/",
          description: "Integrated website for booking tourist trips across Egypt.",
        },
        {
          name: "Rsto",
          link: "https://rsto.vercel.app",
          description: "E-commerce platform for medical protective equipment like N95 masks and PPE kits.",
        },
        {
          name: "CSS-Vita",
          link: "https://github.com/hamdymohamedak/css-vita",
          description: "A framework to help Rust developers write CSS with programming language logic.",
        },
        {
          name: "AMT",
          link: "https://amt-egypt.vercel.app",
          description: "Portfolio for freelancer team.",
        },
        {
          name: "Magia-chat",
          link: "https://magia-chat.vercel.app",
          description: "An AI chatbot using Google Gemini API and React Larose Library.",
        },
        {
          name: "LaRose js",
          link: "https://larose.vercel.app",
          description: "React.js snippet toolkit for animated components and hooks.",
        },
        {
          name: "SES",
          link: "https://ses-pi.vercel.app/",
          description: "Portfolio website for SES company.",
        },
        {
          name: "Elmaram",
          link: "https://elmaram.vercel.app",
          description: "React Native application for ordering medications.",
        },
        {
          name: "Vithub",
          link: "https://hamdymohamedak.github.io/vithub/",
          description: "Community platform for pets to book vet appointments and discuss symptoms.",
        },
        {
          name: "AK Macros",
          link: "https://ak-macros.vercel.app",
          description: "Rust library with frequently used macros.",
        },
    
      ]
    
      const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "TailwindCSS",
        "Sass",
        "TypeScript",
        "React.js",
        "React Native",
        "MUI",
        "Electron.js",
      ]
    
      const experiences = [
        {
          title: "Front End Developer",
          company: "Inmotion Production",
          location: "Cairo",
          period: "",
          description: "Worked as a Front End Developer using React.js and React Native at Inmotion Production company.",
        },
        {
          title: "Front End Developer",
          company: "Google DevFest",
          location: "Alexandria",
          period: "",
          description:
            "Participated in intensive code camp focusing on Front End development with React.js during Google DevFests.",
        },
    
        {
          title: "Front End Developer",
          company: "Marvelous Egypt Travel",
          location: "Remote",
          period: "",
          description: "Responsible for developing websites and optimizing their visibility in search results.",
        },
      ]
    
      const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }
    
      const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }
    
      return (
        <div style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)',
          padding: '2rem 1rem',
        }}>
          <div style={{
            maxWidth: '896px',
            margin: '0 auto',
          }}>
            <div style={{
              background: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              padding: '2rem',
            }}>
              {/* Header Section */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  textAlign: 'center',
                  marginBottom: '2rem',
                }}
              >
                <h1 style={{
                  fontSize: '2.25rem',
                  fontWeight: 700,
                  color: '#1e293b',
                  marginBottom: '0.5rem',
                }}>
                  Hamdy Mohamed
                </h1>
                <p style={{
                  fontSize: '1.25rem',
                  color: '#475569',
                  marginBottom: '1rem',
                }}>
                  Front End Developer
                </p>
    
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '1rem',
                  marginTop: '1rem',
                }}>
                  <a
                    href="mailto:mohameddhamdy407@gmail.com"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      color: '#475569',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                    }}
                    onMouseOver={e => e.currentTarget.style.color = '#1e293b'}
                    onMouseOut={e => e.currentTarget.style.color = '#475569'}
                  >
                    <Mail size={16} />
                    <span>mohameddhamdy407@gmail.com</span>
                  </a>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: '#475569',
                    fontSize: '0.875rem',
                  }}>
                    <Phone size={16} />
                    <span>+20 12788 59768</span>
                  </span>
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    color: '#475569',
                    fontSize: '0.875rem',
                  }}>
                    <MapPin size={16} />
                    <span>Alexandria, Egypt</span>
                  </span>
                </div>
    
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '1rem',
                  marginTop: '1rem',
                }}>
                  <a
                    href="https://askander.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      color: '#475569',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                    }}
                    onMouseOver={e => e.currentTarget.style.color = '#1e293b'}
                    onMouseOut={e => e.currentTarget.style.color = '#475569'}
                  >
                    <ExternalLink size={16} />
                    <span>Portfolio</span>
                  </a>
                  <a
                    href="https://github.com/hamdymohamedak"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      color: '#475569',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                    }}
                    onMouseOver={e => e.currentTarget.style.color = '#1e293b'}
                    onMouseOut={e => e.currentTarget.style.color = '#475569'}
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/hamdy-askander"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      color: '#475569',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                    }}
                    onMouseOver={e => e.currentTarget.style.color = '#1e293b'}
                    onMouseOut={e => e.currentTarget.style.color = '#475569'}
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.div>
    
              <div style={{
                borderTop: '1px solid #e5e7eb',
                margin: '1.5rem 0',
              }} />
    
              {/* Summary Section */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                  marginBottom: '2rem',
                }}
              >
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1e293b',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <span style={{
                    background: '#f1f5f9',
                    padding: '0.25rem',
                    borderRadius: '0.25rem',
                  }}>📝</span>
                  Summary
                </h2>
                <p style={{
                  color: '#475569',
                }}>
                  Seeking a position as a Front-End Developer in a reputable company where my skills, educational
                  background, and experience can be fully utilized and enhanced.
                </p>
              </motion.section>
    
              {/* Professional Experience */}
              <motion.section
                variants={container}
                initial="hidden"
                animate="show"
                style={{
                  marginBottom: '2rem',
                }}
              >
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1e293b',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <span style={{
                    background: '#f1f5f9',
                    padding: '0.25rem',
                    borderRadius: '0.25rem',
                  }}>💼</span>
                  Professional Experience
                </h2>
    
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}>
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      style={{
                        background: 'white',
                        padding: '1rem',
                        borderRadius: '0.375rem',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                        transition: 'box-shadow 0.2s',
                      }}
                      onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
                      onMouseOut={e => e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)'}
                    >
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem',
                      }}>
                        <h3 style={{
                          fontWeight: 500,
                          color: '#1e293b',
                        }}>
                          {exp.title}, {exp.company}
                        </h3>
                        <span style={{
                          color: '#6b7280',
                          fontSize: '0.875rem',
                        }}>
                          {exp.location} - {exp.period}
                        </span>
                      </div>
                      <p style={{
                        color: '#475569',
                        fontSize: '0.875rem',
                      }}>
                        {exp.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
    
              {/* Projects Section */}
              <motion.section
                variants={container}
                initial="hidden"
                animate="show"
                style={{
                  marginBottom: '2rem',
                }}
              >
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1e293b',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <span style={{
                    background: '#f1f5f9',
                    padding: '0.25rem',
                    borderRadius: '0.25rem',
                  }}>🚀</span>
                  Projects
                </h2>
    
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth > 768 ? 'repeat(2, 1fr)' : '1fr',
                  gap: '1rem',
                }}>
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      variants={item}
                      style={{
                        background: 'white',
                        padding: '1rem',
                        borderRadius: '0.375rem',
                        border: '1px solid #e5e7eb',
                        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                        transition: 'box-shadow 0.2s',
                      }}
                      onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'}
                      onMouseOut={e => e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)'}
                    >
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                      }}>
                        <h3 style={{
                          fontWeight: 500,
                          color: '#1e293b',
                        }}>
                          {project.name}
                        </h3>
                        {project.link !== "#" && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.25rem',
                              color: '#6b7280',
                              textDecoration: 'none',
                              fontSize: '0.875rem',
                            }}
                            onMouseOver={e => e.currentTarget.style.color = '#1e293b'}
                            onMouseOut={e => e.currentTarget.style.color = '#6b7280'}
                          >
                            <ExternalLink size={14} />
                            <span>View</span>
                          </a>
                        )}
                      </div>
                      <p style={{
                        color: '#475569',
                        fontSize: '0.875rem',
                        marginTop: '0.25rem',
                      }}>
                        {project.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
    
              {/* Skills Section */}
              <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{
                  marginBottom: '2rem',
                }}
              >
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#1e293b',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <span style={{
                    background: '#f1f5f9',
                    padding: '0.25rem',
                    borderRadius: '0.25rem',
                  }}>🛠️</span>
                  Skills
                </h2>
    
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}>
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      style={{
                        background: '#f1f5f9',
                        color: '#475569',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem',
                        transition: 'background 0.2s',
                      }}
                      onMouseOver={e => e.currentTarget.style.background = '#e2e8f0'}
                      onMouseOut={e => e.currentTarget.style.background = '#f1f5f9'}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.section>
    
              {/* Education & Languages Section */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth > 768 ? '1fr 1fr' : '1fr',
                gap: '2rem',
              }}>
                <motion.section
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1e293b',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <span style={{
                      background: '#f1f5f9',
                      padding: '0.25rem',
                      borderRadius: '0.25rem',
                    }}>🎓</span>
                    Education
                  </h2>
                  <div style={{
                    background: 'white',
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #e5e7eb',
                  }}>
                    <p style={{
                      color: '#475569',
                    }}>
                      Diploma in Electronics
                    </p>
                  </div>
                </motion.section>
    
                <motion.section
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h2 style={{
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#1e293b',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}>
                    <span style={{
                      background: '#f1f5f9',
                      padding: '0.25rem',
                      borderRadius: '0.25rem',
                    }}>🌐</span>
                    Languages
                  </h2>
                  <div style={{
                    background: 'white',
                    padding: '0.75rem',
                    borderRadius: '0.375rem',
                    border: '1px solid #e5e7eb',
                  }}>
                    <p style={{
                      color: '#475569',
                    }}>
                      Arabic (Native)
                    </p>
                    <p style={{
                      color: '#475569',
                    }}>
                      English (Professional Working Proficiency)
                    </p>
                  </div>
                </motion.section>
              </div>
            </div>
    
            <div style={{
              textAlign: 'center',
              color: '#6b7280',
              fontSize: '0.875rem',
              marginTop: '1.5rem',
            }}>
              © {new Date().getFullYear()} Hamdy Mohamed
            </div>
          </div>
          <CopyCode/>
        </div>
      )
    }
    
    export default Resume
  ` };

  const [copied, setCopied] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textObject.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <>
      {/* View Source Code Button */}
      <button
        onClick={() => setIsPopupOpen(true)}
        style={{
          background: '#1e293b',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '0.375rem',
          border: 'none',
          cursor: 'pointer',
          fontSize: '0.875rem',
          margin: '1rem auto',
          display: 'block',
          transition: 'background 0.2s',
        }}
        onMouseOver={(e) => (e.currentTarget.style.background = '#334155')}
        onMouseOut={(e) => (e.currentTarget.style.background = '#1e293b')}
      >
        View Source Code
      </button>

      {/* Popup */}
      {isPopupOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={() => setIsPopupOpen(false)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '0.5rem',
              padding: '1.5rem',
              maxWidth: '90vw',
              maxHeight: '80vh',
              width: '800px',
              position: 'relative',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsPopupOpen(false)}
              style={{
                position: 'absolute',
                top: '0.5rem',
                right: '0.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
                color: '#475569',
              }}
            >
              ✕
            </button>

            {/* Code Content */}
            <div
              style={{
                maxHeight: '60vh',
                overflowY: 'auto',
                background: '#f1f5f9',
                padding: '1rem',
                borderRadius: '0.375rem',
                position: 'relative',
              }}
            >
              <pre
                style={{
                  fontFamily: 'monospace',
                  color: '#1e293b',
                  fontSize: '0.875rem',
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}
              >
                {textObject.text}
              </pre>

              {/* Copy Button */}
              <button
                onClick={handleCopy}
                style={{
                  position: 'absolute',
                  top: '0.5rem',
                  right: '0.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#475569',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = '#1e293b')}
                onMouseOut={(e) => (e.currentTarget.style.color = '#475569')}
                aria-label="Copy to clipboard"
              >
                <Clipboard size={16} />
              </button>

              {/* Copied Notification */}
              {copied && (
                <span
                  style={{
                    position: 'absolute',
                    top: '2rem',
                    right: '0.5rem',
                    background: '#1e293b',
                    color: 'white',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '0.25rem',
                    fontSize: '0.75rem',
                    zIndex: 10,
                  }}
                >
                  Copied!
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}