const PROXY_URL = "https://secret-ocean-49799.herokuapp.com/";

const enhanceWithCorsProxy = (url: string) => `${PROXY_URL}${url}`;

const CORSProxy = {
  enhance: enhanceWithCorsProxy,
};

export default CORSProxy;
