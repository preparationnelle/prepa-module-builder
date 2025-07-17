import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { getAllRoutePaths } from '@/config/routes';

interface SafeLinkProps extends LinkProps {
  to: string;
  children: React.ReactNode;
  warnOnInvalid?: boolean;
}

export const SafeLink: React.FC<SafeLinkProps> = ({ 
  to, 
  children, 
  warnOnInvalid = true,
  ...props 
}) => {
  const allPaths = getAllRoutePaths();
  const isValidRoute = allPaths.includes(to) || to.startsWith('http') || to.startsWith('#');

  // In development, warn about invalid routes
  if (process.env.NODE_ENV === 'development' && warnOnInvalid && !isValidRoute) {
    console.warn(`SafeLink: Route "${to}" does not exist in route configuration. Available routes:`, allPaths);
  }

  // If it's an external link, use a regular anchor tag
  if (to.startsWith('http') || to.startsWith('#')) {
    return (
      <a href={to} {...(props as any)}>
        {children}
      </a>
    );
  }

  // If it's an invalid internal route, render as span in development or link in production
  if (!isValidRoute) {
    if (process.env.NODE_ENV === 'development') {
      return (
        <span 
          style={{ 
            color: 'red', 
            textDecoration: 'underline',
            cursor: 'pointer' 
          }}
          title={`Invalid route: ${to}`}
          {...(props as any)}
        >
          {children}
        </span>
      );
    }
  }

  return (
    <Link to={to} {...props}>
      {children}
    </Link>
  );
};

export default SafeLink;