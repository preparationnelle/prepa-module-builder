import { getAllRoutePaths } from '@/config/routes';

export interface LinkValidationResult {
  isValid: boolean;
  invalidLinks: string[];
  suggestions: string[];
}

/**
 * Validates if a given path exists in the route configuration
 */
export const isValidRoute = (path: string): boolean => {
  const allPaths = getAllRoutePaths();
  
  // Allow external links and anchors
  if (path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return true;
  }
  
  // Check exact match
  if (allPaths.includes(path)) {
    return true;
  }
  
  // Check if it's a dynamic route (contains parameters)
  const pathWithoutParams = path.split('?')[0].split('#')[0];
  if (allPaths.includes(pathWithoutParams)) {
    return true;
  }
  
  return false;
};

/**
 * Find similar routes for suggestions
 */
export const findSimilarRoutes = (invalidPath: string): string[] => {
  const allPaths = getAllRoutePaths();
  const suggestions: string[] = [];
  
  // Simple similarity check - routes that contain similar words
  const pathWords = invalidPath.toLowerCase().split(/[/-]/).filter(Boolean);
  
  allPaths.forEach(path => {
    const routeWords = path.toLowerCase().split(/[/-]/).filter(Boolean);
    const commonWords = pathWords.filter(word => routeWords.includes(word));
    
    if (commonWords.length > 0) {
      suggestions.push(path);
    }
  });
  
  return suggestions.slice(0, 3); // Return top 3 suggestions
};

/**
 * Scan component code for Link components and validate their 'to' props
 */
export const validateLinksInCode = (componentCode: string): LinkValidationResult => {
  const linkRegex = /<Link\s+to=["']([^"']+)["']/g;
  const routerLinkRegex = /<router-link\s+to=["']([^"']+)["']/g;
  
  const invalidLinks: string[] = [];
  const allLinks: string[] = [];
  
  let match;
  
  // Check React Router Links
  while ((match = linkRegex.exec(componentCode)) !== null) {
    const path = match[1];
    allLinks.push(path);
    
    if (!isValidRoute(path)) {
      invalidLinks.push(path);
    }
  }
  
  // Check router-link (Vue style, if any)
  while ((match = routerLinkRegex.exec(componentCode)) !== null) {
    const path = match[1];
    allLinks.push(path);
    
    if (!isValidRoute(path)) {
      invalidLinks.push(path);
    }
  }
  
  const suggestions = invalidLinks.flatMap(link => findSimilarRoutes(link));
  
  return {
    isValid: invalidLinks.length === 0,
    invalidLinks: [...new Set(invalidLinks)], // Remove duplicates
    suggestions: [...new Set(suggestions)] // Remove duplicates
  };
};

/**
 * Get all available routes for debugging
 */
export const getAvailableRoutes = () => {
  return getAllRoutePaths().sort();
};

/**
 * Audit function to check all routes are accessible
 */
export const auditRoutes = () => {
  const routes = getAllRoutePaths();
  console.group('🔍 Route Audit');
  console.log('Total routes configured:', routes.length);
  console.log('Available routes:', routes);
  console.groupEnd();
  
  return {
    totalRoutes: routes.length,
    routes: routes
  };
};