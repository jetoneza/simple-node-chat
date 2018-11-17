const protectedConfig = {
  // Add unoverridable configs here.
};

let config = {
  host: 'localhost' ,
  port: '3001',
  ...protectedConfig,
};

const setConfig = (key, value) => {
  config = {
    ...config,

    [key]: value,

    ...protectedConfig,
  };
}

const getConfig = (key) => {
  return config[key];
}

const getAllConfig = () => {
  return config;
}

module.exports = {
  setConfig,
  getConfig,
  getAllConfig,
};

