import React, { useState } from 'react';
import { Clipboard } from 'lucide-react';

export default function CopyCode() {
  const textObject = { text: `
    // Your existing source code here (keeping it the same)
    import React from "react"
    import { Github, Linkedin, Mail, MapPin, Phone, ExternalLink } from "lucide-react"
    import { motion } from "framer-motion"
    import CopyCode from "./Components/CopyCode"
    // ... rest of the Resume component code ...
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