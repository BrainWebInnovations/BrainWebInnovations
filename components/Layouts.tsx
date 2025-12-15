import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { Menu, X, Rocket, LayoutDashboard, Users, MessageSquare, Settings, LogOut, Code, Briefcase, Mail } from 'lucide-react';

export const PublicLayout: React.FC = () => {
  const { settings } = useApp();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans">
      <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/80 border-b border-slate-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <NavLink to="/" className="flex items-center space-x-2 font-bold text-xl tracking-tight text-slate-900">
            <Rocket className="w-6 h-6 text-brand-600" />
            <span>{settings.companyName}</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-brand-600 ${
                    isActive ? 'text-brand-600' : 'text-slate-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              Get Started
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 shadow-xl p-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-base font-medium ${
                    isActive ? 'bg-brand-50 text-brand-700' : 'text-slate-600 hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 font-bold text-white text-xl mb-4">
              <Rocket className="w-6 h-6 text-brand-500" />
              <span>{settings.companyName}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering businesses with cutting-edge digital solutions. We transform ideas into reality.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/services" className="hover:text-white transition">Web Development</NavLink></li>
              <li><NavLink to="/services" className="hover:text-white transition">UI/UX Design</NavLink></li>
              <li><NavLink to="/services" className="hover:text-white transition">Consulting</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><NavLink to="/about" className="hover:text-white transition">About Us</NavLink></li>
              <li><NavLink to="/portfolio" className="hover:text-white transition">Portfolio</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-white transition">Contact</NavLink></li>
              <li><NavLink to="/admin" className="hover:text-white transition">Admin Login</NavLink></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>{settings.address}</li>
              <li>{settings.contactEmail}</li>
              <li>{settings.contactPhone}</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} {settings.companyName}. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export const AdminLayout: React.FC = () => {
  const { auth, logout } = useApp();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate('/admin/login');
    }
  }, [auth.isAuthenticated, navigate]);

  if (!auth.isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white flex-shrink-0 hidden md:flex flex-col">
        <div className="h-16 flex items-center px-6 font-bold text-lg border-b border-slate-800">
          Admin Panel
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <NavItem to="/admin" end icon={<LayoutDashboard size={20} />} label="Dashboard" />
          <NavItem to="/admin/projects" icon={<Briefcase size={20} />} label="Projects" />
          <NavItem to="/admin/services" icon={<Code size={20} />} label="Services" />
          <NavItem to="/admin/enquiries" icon={<MessageSquare size={20} />} label="Enquiries" />
          <NavItem to="/admin/team" icon={<Users size={20} />} label="Team" />
          <NavItem to="/admin/settings" icon={<Settings size={20} />} label="Settings" />
        </nav>
        <div className="p-4 border-t border-slate-800">
          <button 
            onClick={() => { logout(); navigate('/admin/login'); }}
            className="flex items-center space-x-3 w-full px-4 py-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shadow-sm">
          <h1 className="text-xl font-semibold text-slate-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
             <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center font-bold">
               {auth.user?.name.charAt(0)}
             </div>
             <span className="text-sm font-medium text-slate-600">{auth.user?.name}</span>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

const NavItem: React.FC<{ to: string; icon: React.ReactNode; label: string; end?: boolean }> = ({ to, icon, label, end }) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
        isActive ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
      }`
    }
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);