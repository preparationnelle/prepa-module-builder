
import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { posthog, initPostHog } from '@/integrations/posthog/client';
import { useLocation } from 'react-router-dom';

/**
 * PostHogProvider integrates PostHog analytics with auth state and route changes
 */
const PostHogProvider: React.FC<{}> = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  // Initialize PostHog on component mount
  useEffect(() => {
    initPostHog();
  }, []);

  // Identify user when auth state changes
  useEffect(() => {
    if (currentUser && posthog.__loaded) {
      // Identify logged-in user
      posthog.identify(currentUser.id, {
        email: currentUser.email,
        name: currentUser.user_metadata?.first_name || 'Unknown User',
        $set_once: {
          first_seen_at: new Date().toISOString(),
        }
      });
    } else if (!currentUser && posthog.__loaded) {
      // Reset for anonymous users
      posthog.reset();
    }
  }, [currentUser]);

  // Track page views when route changes
  useEffect(() => {
    if (posthog.__loaded) {
      let url = window.origin + location.pathname;
      if (location.search) {
        url = url + location.search;
      }
      
      posthog.capture('$pageview', {
        $current_url: url,
        path: location.pathname,
        url: url,
        referrer: document.referrer
      });
    }
  }, [location.pathname, location.search]);

  return null; // This component doesn't render anything
};

export default PostHogProvider;
