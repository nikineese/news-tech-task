const getEnvVar = (key: string) => {
  if (process.env[key] === undefined) {
    throw new Error(`Env variable ${key} is required`);
  }
  return process.env[key] || "";
};
export const USERNAME = getEnvVar("REACT_APP_USER_NAME");
export const PASSWORD = getEnvVar("REACT_APP_PASSWORD");
export const BASE_URL = getEnvVar("REACT_APP_API_URL");
export const API_KEY = getEnvVar("REACT_APP_API_KEY");
