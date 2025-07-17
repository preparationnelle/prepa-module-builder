
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Component that automatically scrolls to top when navigating to a new route.
 * This fixes the issue where clicking on a new page would maintain the scroll position from the previous page.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL (e.g. #section), let the browser handle the scrolling
    if (hash) {
      // Small timeout to ensure the DOM has updated
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Otherwise, scroll to the top of the page
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Trigger on route change or hash change

  return null; // This component doesn't render anything
};

export default ScrollToTop;
