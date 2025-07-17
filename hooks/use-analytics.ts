
import { posthog } from '@/integrations/posthog/client';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useAnalytics() {
  const location = useLocation();
  
  // Track page views when the route changes
  useEffect(() => {
    const url = window.location.href;
    
    posthog.capture('$pageview', {
      path: location.pathname,
      url: url,
      referrer: document.referrer,
      $current_url: url
    });
  }, [location.pathname]);
  
  return {
    trackEvent: (eventName: string, properties?: Record<string, any>) => {
      posthog.capture(eventName, properties);
    },
    
    // Identify user with their ID and optional properties
    identify: (userId: string, properties?: Record<string, any>) => {
      posthog.identify(userId, properties);
    },
    
    // Reset user identification (e.g., on logout)
    reset: () => {
      posthog.reset();
    },
    
    // Group users (for B2B applications)
    group: (groupType: string, groupKey: string, groupProperties?: Record<string, any>) => {
      posthog.group(groupType, groupKey, groupProperties);
    },
    
    // Get distinct ID for the current user
    getDistinctId: () => {
      return posthog.get_distinct_id();
    }
  };
}
