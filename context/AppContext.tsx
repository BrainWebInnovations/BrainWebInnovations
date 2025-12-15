import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project, Service, TeamMember, Enquiry, SiteSettings, AuthState, UserRole } from '../types';
import { MOCK_PROJECTS, MOCK_SERVICES, MOCK_TEAM, MOCK_ENQUIRIES, DEFAULT_SETTINGS } from '../constants';

interface AppContextType {
  // Auth
  auth: AuthState;
  login: (email: string) => void;
  logout: () => void;
  
  // Data
  projects: Project[];
  services: Service[];
  team: TeamMember[];
  enquiries: Enquiry[];
  settings: SiteSettings;

  // Actions
  addEnquiry: (enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => void;
  deleteEnquiry: (id: string) => void;
  updateSettings: (settings: SiteSettings) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [services, setServices] = useState<Service[]>(MOCK_SERVICES);
  const [team, setTeam] = useState<TeamMember[]>(MOCK_TEAM);
  const [enquiries, setEnquiries] = useState<Enquiry[]>(MOCK_ENQUIRIES);
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);

  const login = (email: string) => {
    setAuth({
      isAuthenticated: true,
      user: { name: 'Admin User', email, role: UserRole.SUPER_ADMIN },
    });
  };

  const logout = () => {
    setAuth({ isAuthenticated: false, user: null });
  };

  const addEnquiry = (newEnquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>) => {
    const enquiry: Enquiry = {
      ...newEnquiry,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString().split('T')[0],
      status: 'New',
    };
    setEnquiries(prev => [enquiry, ...prev]);
  };

  const deleteEnquiry = (id: string) => {
    setEnquiries(prev => prev.filter(e => e.id !== id));
  };

  const updateSettings = (newSettings: SiteSettings) => {
    setSettings(newSettings);
  };

  return (
    <AppContext.Provider value={{
      auth,
      login,
      logout,
      projects,
      services,
      team,
      enquiries,
      settings,
      addEnquiry,
      deleteEnquiry,
      updateSettings
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};