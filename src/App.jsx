import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar.jsx';
import { Header } from './components/Header.jsx';
import { DashboardPage } from './pages/DashboardPage.jsx';
import { DevicesPage } from './pages/DevicesPage.jsx';
import { CommandsPage } from './pages/CommandsPage.jsx';
import { MediaPage } from './pages/MediaPage.jsx';
import { SettingsPage } from './pages/SettingsPage.jsx';
import { Router, Routes, Route } from './router/Router.jsx';
import { devices as devicesData } from './data/devices.js';
import { SignIn, SignUp, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [devices] = useState(devicesData);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || '/';
      const sectionMap = {
        '/': 'dashboard',
        '/devices': 'devices',
        '/commands': 'commands',
        '/media': 'media',
        '/settings': 'settings',
      };
      setActiveSection(sectionMap[hash] || 'dashboard');
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <Router>
      <Routes>
        {/* Clerk Auth Pages */}
        <Route path="/sign-in">
          <SignIn routing="hash" path="/sign-in" signUpUrl="#/sign-up" />
        </Route>
        <Route path="/sign-up">
          <SignUp routing="hash" path="/sign-up" signInUrl="#/sign-in" />
        </Route>

        {/* Protected App */}
        <Route path="/">
          <SignedIn>
            <div className="flex h-screen bg-slate-900 text-slate-100">
              <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
              <div className="flex-1 flex flex-col overflow-hidden">
                <Header />
                <Routes>
                  <Route path="/"><DashboardPage devices={devices} /></Route>
                  <Route path="/devices"><DevicesPage devices={devices} /></Route>
                  <Route path="/commands"><CommandsPage /></Route>
                  <Route path="/media"><MediaPage /></Route>
                  <Route path="/settings"><SettingsPage /></Route>
                </Routes>
              </div>
            </div>
          </SignedIn>

          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </Route>
      </Routes>
    </Router>
  );
}
