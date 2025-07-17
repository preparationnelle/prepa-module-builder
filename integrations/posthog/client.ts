
import posthog from 'posthog-js';

// Initialize PostHog with project API key
export const initPostHog = () => {
  if (typeof window !== 'undefined' && !posthog.__loaded) {
    posthog.init(
      'phc_pGAwikZ7KdqjbuCuY4f9FijQ959CiQGjc9PgH88b4vR',
      {
        api_host: 'https://eu.i.posthog.com',
        capture_pageview: false,
        persistence: 'localStorage',
        person_profiles: 'identified_only',
        autocapture: true,
        loaded: (posthog) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('PostHog loaded successfully');
            posthog.debug();
          }
        }
      }
    );
  }
  
  return posthog;
};

// Export the PostHog instance
export { posthog };
