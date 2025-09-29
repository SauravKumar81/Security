import React from 'react';
import { Shield, Smartphone, Command, Image, Settings } from 'lucide-react';
import { Link } from '../router/Router.jsx';

export const Sidebar = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', icon: Smartphone, label: 'Dashboard', path: '/' },
    { id: 'devices', icon: Smartphone, label: 'Devices', path: '/devices' },
    { id: 'commands', icon: Command, label: 'Commands', path: '/commands' },
    { id: 'media', icon: Image, label: 'Media', path: '/media' },
    { id: 'settings', icon: Settings, label: 'Settings', path: '/settings' }
  ];

  return (
    <div className="w-64 bg-slate-800 border-r border-slate-700 flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-blue-400" />
          <h1 className="text-xl font-bold">Project SHIELD</h1>
        </div>
      </div>

      <nav className="flex-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-slate-700 text-white shadow-lg'
                  : 'text-slate-400 hover:bg-slate-700/50 hover:text-slate-200'
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};
