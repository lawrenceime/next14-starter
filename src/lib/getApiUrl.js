export const getApiUrl = (path) => {
    // Check if the code is running in the browser (client-side)
    if (typeof window !== 'undefined') {
      const currentPort = window.location.port || '3000'; // Get the current port in the browser
     
      
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || `http://localhost:${currentPort}`;
      return `${baseUrl}${path}`;
    } else {
      // When on the server, fall back to the default or environment variable port
      const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
      return `${baseUrl}${path}`;
    }
  };
  