import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Button, Card, Input, Textarea } from '../components/UI';
import { ArrowRight, CheckCircle, Code, Smartphone, Globe, TrendingUp, Zap, Shield, Users, Rocket, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- HOME PAGE ---
export const Home: React.FC = () => {
  const { settings, services, projects } = useApp();

  return (
    <div className="space-y-20 pb-20">
      {/* Hero */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-200 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -left-24 w-72 h-72 bg-accent-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-block mb-6 px-4 py-1.5 bg-brand-100 text-brand-700 rounded-full text-sm font-semibold tracking-wide">
            Transforming Digital Experiences
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            {settings.heroHeadline}
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We are a premium digital agency crafting world-class web applications, mobile experiences, and digital strategies for forward-thinking companies.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
               <Button size="lg" className="w-full sm:w-auto">Book a Strategy Call</Button>
            </Link>
            <Link to="/portfolio">
               <Button variant="outline" size="lg" className="w-full sm:w-auto">View Our Work</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We deliver end-to-end digital solutions tailored to scale your business.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.slice(0, 3).map((s) => (
            <Card key={s.id} className="p-8 hover:shadow-xl transition-shadow border-t-4 border-t-brand-500">
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-6 text-brand-600">
                {s.icon === 'Code' ? <Code /> : s.icon === 'Palette' ? <Smartphone /> : <TrendingUp />}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-slate-600 mb-6">{s.shortDescription}</p>
              <Link to="/services" className="text-brand-600 font-semibold flex items-center hover:text-brand-800">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Card>
          ))}
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
              <p className="text-slate-400">Award-winning solutions delivered for global clients.</p>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center text-brand-400 hover:text-white transition">
              View all projects <ArrowRight className="ml-2" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).map((p) => (
              <div key={p.id} className="group relative overflow-hidden rounded-xl cursor-pointer">
                <img src={p.imageUrl} alt={p.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-brand-400 text-sm font-bold mb-1">{p.category}</span>
                  <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    {p.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 text-center">
         <h2 className="text-3xl font-bold text-slate-900 mb-16">How We Work</h2>
         <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Discover', desc: 'We dive deep into your goals.', icon: <Users /> },
              { title: 'Design', desc: 'Crafting intuitive interfaces.', icon: <Smartphone /> },
              { title: 'Develop', desc: 'Robust engineering.', icon: <Code /> },
              { title: 'Launch', desc: 'Deploy and optimize.', icon: <Rocket /> }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-700 mb-4 text-xl font-bold">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
                {idx < 3 && <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 -z-10"></div>}
              </div>
            ))}
         </div>
      </section>
    </div>
  );
};

// --- ABOUT PAGE ---
export const About: React.FC = () => {
  const { team } = useApp();
  return (
    <div className="pb-20">
      <div className="bg-slate-900 text-white py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Brain WebInnovations</h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">We are a collective of digital craftsmen building the future of the web.</p>
      </div>
      
      <div className="container mx-auto px-4 mt-20 grid md:grid-cols-2 gap-16 items-center">
        <div>
           <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
           <p className="text-slate-600 text-lg leading-relaxed mb-6">
             At Brain WebInnovations, we believe that technology should serve humanity, not the other way around. Our mission is to empower businesses with digital tools that are intuitive, powerful, and accessible.
           </p>
           <p className="text-slate-600 text-lg leading-relaxed">
             Founded in 2020, we have grown from a small design studio into a full-service digital agency, partnering with startups and Fortune 500 companies alike to drive innovation.
           </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <div className="bg-brand-50 p-6 rounded-2xl text-center">
             <div className="text-4xl font-bold text-brand-600 mb-2">50+</div>
             <div className="text-slate-600 font-medium">Projects Delivered</div>
           </div>
           <div className="bg-accent-50 p-6 rounded-2xl text-center">
             <div className="text-4xl font-bold text-accent-600 mb-2">98%</div>
             <div className="text-slate-600 font-medium">Client Retention</div>
           </div>
           <div className="bg-blue-50 p-6 rounded-2xl text-center col-span-2">
             <div className="text-4xl font-bold text-blue-600 mb-2">5 Years</div>
             <div className="text-slate-600 font-medium">Of Excellence</div>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
             <Card key={member.id} className="text-center p-6">
               <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-slate-50" />
               <h3 className="text-xl font-bold">{member.name}</h3>
               <p className="text-brand-600 font-medium mb-3">{member.role}</p>
               <p className="text-slate-500 text-sm">{member.bio}</p>
             </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- SERVICES PAGE ---
export const Services: React.FC = () => {
  const { services } = useApp();
  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Our Services</h1>
          <p className="text-lg text-slate-600">Comprehensive digital solutions designed to help your business grow and compete in the modern economy.</p>
        </div>

        <div className="grid gap-8">
          {services.map((service, idx) => (
            <div key={service.id} className={`bg-white rounded-2xl shadow-sm p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-100 text-brand-600 mb-6">
                   {service.icon === 'Code' ? <Code size={32} /> : service.icon === 'Palette' ? <Smartphone size={32} /> : <TrendingUp size={32} />}
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-6">{service.fullDescription}</p>
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Features:</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {service.features.map(f => (
                      <li key={f} className="flex items-center text-slate-600">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold text-slate-900">{service.price}</span>
                  <span className="text-slate-500 text-sm">/ project starting at</span>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl h-80 w-full flex items-center justify-center text-slate-400">
                  {/* Placeholder for service illustration */}
                  <Globe size={64} className="opacity-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- PORTFOLIO PAGE ---
export const Portfolio: React.FC = () => {
  const { projects } = useApp();
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="py-20 container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Our Work</h1>
      
      {/* Filters */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? 'bg-brand-600 text-white shadow-lg' 
                : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <Card key={project.id} className="group cursor-pointer hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800">
                {project.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-brand-600 transition-colors">{project.title}</h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map(t => (
                  <span key={t} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

// --- CONTACT PAGE ---
export const Contact: React.FC = () => {
  const { addEnquiry } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    interest: 'Web Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addEnquiry(formData);
    setSubmitted(true);
    // Reset after delay or keep message
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={40} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
        <p className="text-slate-600 max-w-md mb-8">
          Thank you for contacting Brain WebInnovations. Our team will review your enquiry and get back to you within 24 hours.
        </p>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-10 md:p-14 bg-slate-900 text-white flex flex-col justify-between">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">Let's build something great together.</h1>
              <p className="text-slate-400 mb-12 text-lg">
                Ready to transform your digital presence? Fill out the form, and we'll be in touch to discuss your vision.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-brand-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Email us</div>
                    <div className="font-medium">hello@brainweb.dev</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-brand-400">
                    <Globe size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Visit us</div>
                    <div className="font-medium">123 Innovation Blvd, Tech City</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800">
              <div className="flex gap-4">
                 {/* Social icons placeholder */}
              </div>
            </div>
          </div>
          
          <div className="p-10 md:p-14">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Name" name="name" required placeholder="John Doe" value={formData.name} onChange={handleChange} />
                <Input label="Email" name="email" type="email" required placeholder="john@example.com" value={formData.email} onChange={handleChange} />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Input label="Company" name="company" placeholder="Your Company" value={formData.company} onChange={handleChange} />
                <Input label="Budget Range" name="budget" placeholder="$10k - $50k" value={formData.budget} onChange={handleChange} />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">I'm interested in...</label>
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none bg-white"
                >
                  <option>Web Development</option>
                  <option>Mobile App</option>
                  <option>UI/UX Design</option>
                  <option>Consulting</option>
                </select>
              </div>
              <Textarea label="Message" name="message" rows={4} required placeholder="Tell us about your project..." value={formData.message} onChange={handleChange} />
              <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
