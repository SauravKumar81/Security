import React, { useState } from 'react';

export const Router = ({ children }) => children;

export const Routes = ({ children }) => {
  const [currentPath] = useState(window.location.hash || '#/');
  return React.Children.toArray(children).find(
    child => child.props.path === currentPath.slice(1)
  ) || children[0];
};

export const Route = ({ children }) => children;

export const Link = ({ to, children, className, onClick }) => (
  <a
    href={`#${to}`}
    className={className}
    onClick={(e) => {
      e.preventDefault();
      window.location.hash = to;
      window.dispatchEvent(new HashChangeEvent('hashchange'));
      if (onClick) onClick();
    }}
  >
    {children}
  </a>
);
