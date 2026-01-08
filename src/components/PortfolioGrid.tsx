import React, { useState } from 'react';
import IconTile from './IconTile';
import ContentTile from './ContentTile';
import Modal from './Modal';
import ContactForm from './ContactForm';

export default function PortfolioGrid() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const handleContactSubmit = (data: { name: string; email: string; message: string }) => {
    console.log('Contact form submitted:', data);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! I\'ll get back to you soon.');
    setIsContactModalOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 auto-rows-fr max-w-7xl mx-auto p-4">
        {/* Header/Welcome Tile */}
        <ContentTile size="wide" className="md:col-span-4">
          <div className="text-center">
            <h1 className="font-quicksand font-bold text-3xl md:text-4xl text-slate-100 uppercase tracking-wide mb-2">
              Patrick Kollitsch
            </h1>
            <p className="text-slate-300 text-lg">Full-Stack Developer & Digital Creator</p>
          </div>
        </ContentTile>

        {/* Navigation Tiles */}
        <IconTile 
          icon="person-circle" 
          title="About" 
          color="text-blue-400"
          onClick={() => setIsAboutModalOpen(true)}
        />
        
        <IconTile 
          icon="envelope" 
          title="Contact" 
          color="text-green-400"
          onClick={() => setIsContactModalOpen(true)}
        />

        {/* Skills Overview */}
        <ContentTile size="medium" title="Technical Skills">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-slate-300 text-sm">Frontend Development</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-slate-300 text-sm">Backend Systems</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-slate-300 text-sm">Cloud Architecture</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-slate-300 text-sm">DevOps & Automation</span>
            </div>
          </div>
        </ContentTile>

        {/* Social Media Tiles */}
        <IconTile 
          icon="github" 
          title="GitHub" 
          color="text-slate-300"
          href="https://github.com"
          external={true}
        />

        <IconTile 
          icon="linkedin" 
          title="LinkedIn" 
          color="text-blue-500"
          href="https://linkedin.com"
          external={true}
        />

        <IconTile 
          icon="twitter" 
          title="Twitter" 
          color="text-blue-400"
          href="https://twitter.com"
          external={true}
        />

        <IconTile 
          icon="medium" 
          title="Blog" 
          color="text-white"
          href="https://medium.com"
          external={true}
        />

        {/* Experience Summary */}
        <ContentTile size="wide" title="Current Focus">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-200 font-semibold">Senior Full-Stack Developer</p>
              <p className="text-slate-400 text-sm">Building scalable web applications</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-400">5+</p>
              <p className="text-slate-400 text-xs uppercase tracking-wide">Years</p>
            </div>
          </div>
        </ContentTile>

        {/* Technology Stack */}
        <IconTile icon="code-slash" title="React" color="text-cyan-400" />
        <IconTile icon="braces" title="Node.js" color="text-green-500" />
        <IconTile icon="database" title="PostgreSQL" color="text-blue-600" />
        <IconTile icon="cloud" title="AWS" color="text-orange-400" />

        {/* Project Showcase */}
        <ContentTile size="medium" title="Featured Project">
          <div>
            <h4 className="font-quicksand font-semibold text-slate-200 mb-2">E-Commerce Platform</h4>
            <p className="text-slate-400 text-sm mb-3">
              Full-stack application with React, Node.js, and microservices architecture.
            </p>
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full">React</span>
              <span className="px-2 py-1 bg-green-600/20 text-green-300 text-xs rounded-full">Node.js</span>
            </div>
          </div>
        </ContentTile>

        {/* Stats */}
        <ContentTile size="small" title="Projects">
          <div className="text-center">
            <p className="text-3xl font-bold text-green-400">24+</p>
            <p className="text-slate-400 text-xs uppercase tracking-wide">Completed</p>
          </div>
        </ContentTile>

        <ContentTile size="small" title="Clients">
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-400">12</p>
            <p className="text-slate-400 text-xs uppercase tracking-wide">Satisfied</p>
          </div>
        </ContentTile>

        {/* Additional Tools */}
        <IconTile icon="git" title="Git" color="text-orange-500" />
        <IconTile icon="docker" title="Docker" color="text-blue-500" />
      </div>

      {/* Contact Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Get In Touch"
      >
        <ContactForm onSubmit={handleContactSubmit} />
      </Modal>

      {/* About Modal */}
      <Modal
        isOpen={isAboutModalOpen}
        onClose={() => setIsAboutModalOpen(false)}
        title="About Me"
      >
        <div className="space-y-4 text-slate-300">
          <p>
            I'm a passionate full-stack developer with over 5 years of experience building 
            scalable web applications and leading development teams.
          </p>
          <p>
            My expertise spans modern frontend frameworks like React and Vue.js, backend 
            technologies including Node.js and Python, and cloud platforms such as AWS and Azure.
          </p>
          <p>
            I'm committed to writing clean, maintainable code and staying current with 
            the latest industry trends and best practices.
          </p>
          <div className="pt-4 border-t border-slate-600">
            <h4 className="font-quicksand font-semibold text-slate-200 uppercase tracking-wide text-sm mb-2">
              Current Interests
            </h4>
            <ul className="text-sm space-y-1">
              <li>• Serverless Architecture</li>
              <li>• Machine Learning Integration</li>
              <li>• Web Performance Optimization</li>
              <li>• Developer Experience Tools</li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
}