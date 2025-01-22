import { useEffect } from 'react';

export const AccessibilityWidget = () => {
  useEffect(() => {
    // Add UserWay widget script
    const script = document.createElement('script');
    script.src = 'https://cdn.userway.org/widget.js';
    script.async = true;
    script.setAttribute('data-account', 'YOUR_ACCOUNT'); // Replace with actual account when user signs up
    script.setAttribute('data-position', 'bottom');
    script.setAttribute('data-language', 'he');
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};