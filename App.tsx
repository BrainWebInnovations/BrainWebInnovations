import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { PublicLayout, AdminLayout } from './components/Layouts';
import { Home, About, Services, Portfolio, Contact } from './pages/PublicPages';
import { Dashboard, Login, EnquiriesManager } from './pages/AdminPages';

function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="enquiries" element={<EnquiriesManager />} />
            {/* Placeholders for other admin modules */}
            <Route path="projects" element={<div className="p-8 text-slate-500">Projects Module (Coming Soon)</div>} />
            <Route path="services" element={<div className="p-8 text-slate-500">Services Module (Coming Soon)</div>} />
            <Route path="team" element={<div className="p-8 text-slate-500">Team Module (Coming Soon)</div>} />
            <Route path="settings" element={<div className="p-8 text-slate-500">Settings Module (Coming Soon)</div>} />
          </Route>

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </AppProvider>
  );
}

export default App;