import Constants from 'expo-constants';

const isProduction = process.env.NODE_ENV === 'production';
const isExpo = Constants.expoConfig && Constants.expoConfig.hostUri;

// Make sure we can connect to the backend if we run expo go on mobile phone
export const getUrl = () => {
  if (isExpo) {
    const host = Constants.expoConfig?.hostUri?.split(`:`).shift();
    return `http://${host}:3333`;
  }

  if (isProduction) {
    return 'https://my-app.com'; // This is just usage example should be replaced with real url
  }

  return 'http://localhost:3000';
};
