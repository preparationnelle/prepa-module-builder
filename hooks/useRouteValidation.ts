import { useEffect } from 'react';
import { auditRoutes, validateLinksInCode } from '@/utils/routeValidator';

/**
 * Development hook to validate routes and links
 */
export const useRouteValidation = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // Audit routes on app start
      auditRoutes();
      
      // You can add more validation logic here
      console.log('🔍 Route validation initialized');
    }
  }, []);
};

/**
 * Hook to validate component links in development
 */
export const useComponentLinkValidation = (componentName: string, componentCode?: string) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && componentCode) {
      const validation = validateLinksInCode(componentCode);
      
      if (!validation.isValid) {
        console.group(`⚠️ Invalid links found in ${componentName}`);
        console.log('Invalid links:', validation.invalidLinks);
        if (validation.suggestions.length > 0) {
          console.log('Suggested alternatives:', validation.suggestions);
        }
        console.groupEnd();
      }
    }
  }, [componentName, componentCode]);
};