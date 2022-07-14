import Config from './Config';

const config: Config = {
  PORT: process.env.PORT || '5000',
  NODE_ENV: process.env.NODE_ENV || 'develop'
};

export default config;
