import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Input, Badge } from '../components/UI';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Trash2, Search, Plus, Filter, Layout, Lock } from 'lucide-react';

// --- LOGIN ---
export const Login: React.FC = () => {
  const { login, auth } = useApp();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      login(email);
      navigate('/admin');
    }
  };

  if (auth.isAuthenticated) {
    navigate('/admin');
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <Card className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-brand-600 rounded-lg mx-auto mb-4 flex items-center justify-center text-white">
            <Lock size={24} />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Admin Login</h1>
          <p className="text-slate-500 text-sm">Sign in to manage Brain WebInnovations</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <Input 
            label="Email Address" 
            type="email" 
            required 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
          />
          <Input 
            label="Password" 
            type="password" 
            required 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
          />
          <Button type="submit" className="w-full" size="lg">Sign In</Button>
        </form>
        <div className="mt-6 text-center text-xs text-slate-400">
          For demo: Use any email and password.
        </div>
      </Card>
    </div>
  );
};

// --- DASHBOARD ---
export const Dashboard: React.FC = () => {
  const { enquiries, projects } = useApp();
  
  const stats = [
    { label: 'Total Enquiries', value: enquiries.length, trend: '+12%', color: 'bg-blue-500' },
    { label: 'Active Projects', value: projects.length, trend: '+5%', color: 'bg-purple-500' },
    { label: 'Conversion Rate', value: '4.2%', trend: '+0.8%', color: 'bg-green-500' },
    { label: 'Revenue (YTD)', value: '$420k', trend: '+18%', color: 'bg-indigo-500' },
  ];

  const chartData = [
    { name: 'Mon', visits: 4000, enquiries: 24 },
    { name: 'Tue', visits: 3000, enquiries: 13 },
    { name: 'Wed', visits: 2000, enquiries: 98 },
    { name: 'Thu', visits: 2780, enquiries: 39 },
    { name: 'Fri', visits: 1890, enquiries: 48 },
    { name: 'Sat', visits: 2390, enquiries: 38 },
    { name: 'Sun', visits: 3490, enquiries: 43 },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-6">
             <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-500">{stat.label}</h3>
                <span className={`w-2 h-2 rounded-full ${stat.color}`}></span>
             </div>
             <div className="flex items-end space-x-2">
               <span className="text-3xl font-bold text-slate-900">{stat.value}</span>
               <span className="text-sm font-medium text-green-600 mb-1">{stat.trend}</span>
             </div>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Traffic Overview</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Line type="monotone" dataKey="visits" stroke="#3b82f6" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Enquiries vs Conversions</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
                <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="enquiries" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Recent Enquiries Preview */}
      <Card className="overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-800">Recent Enquiries</h3>
          <Button variant="ghost" size="sm" onClick={() => window.location.hash = '#/admin/enquiries'}>View All</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 font-medium">Name</th>
                <th className="px-6 py-4 font-medium">Company</th>
                <th className="px-6 py-4 font-medium">Interest</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.slice(0, 5).map((enq) => (
                <tr key={enq.id} className="bg-white border-b border-slate-50 hover:bg-slate-50">
                  <td className="px-6 py-4 font-medium text-slate-900">{enq.name}</td>
                  <td className="px-6 py-4 text-slate-600">{enq.company}</td>
                  <td className="px-6 py-4 text-slate-600">{enq.interest}</td>
                  <td className="px-6 py-4">
                    <Badge variant={enq.status === 'New' ? 'info' : 'success'}>{enq.status}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

// --- ENQUIRIES MANAGER ---
export const EnquiriesManager: React.FC = () => {
  const { enquiries, deleteEnquiry } = useApp();
  const [search, setSearch] = useState('');

  const filtered = enquiries.filter(e => 
    e.name.toLowerCase().includes(search.toLowerCase()) || 
    e.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-800">Enquiries</h2>
        <div className="flex gap-4">
           <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
             <input 
               type="text" 
               placeholder="Search..." 
               className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
               value={search}
               onChange={e => setSearch(e.target.value)}
             />
           </div>
           <Button variant="outline" className="flex items-center gap-2">
             <Filter size={16} /> Filter
           </Button>
        </div>
      </div>

      <Card className="overflow-hidden">
        <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Contact</th>
                <th className="px-6 py-4 font-medium">Details</th>
                <th className="px-6 py-4 font-medium">Message</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((enq) => (
                <tr key={enq.id} className="bg-white hover:bg-slate-50">
                  <td className="px-6 py-4 whitespace-nowrap text-slate-500">{enq.createdAt}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-900">{enq.name}</div>
                    <div className="text-xs text-slate-500">{enq.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-slate-900">{enq.company}</div>
                    <div className="text-xs text-slate-500">{enq.interest} | {enq.budget}</div>
                  </td>
                  <td className="px-6 py-4 max-w-xs truncate text-slate-600" title={enq.message}>
                    {enq.message}
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={enq.status === 'New' ? 'info' : 'success'}>{enq.status}</Badge>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => deleteEnquiry(enq.id)}
                      className="text-slate-400 hover:text-red-600 transition-colors p-2"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="p-8 text-center text-slate-500">No enquiries found.</div>
        )}
      </Card>
    </div>
  );
};