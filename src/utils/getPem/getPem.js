const jwkToPem = require('jwk-to-pem');
const axios = require('axios');

const getPem = async (domain) => {
  const keyUrl = `${domain}/.well-known/jwks.json`;
  const {data} = await axios.get(keyUrl);

  if (data && data.keys) {
    console.log("Got the keys");
    const [firstKey] = data.keys;
    return jwkToPem(firstKey);
  }
  console.log("No keys found at: ", keyUrl);
  return undefined;
};

module.exports = getPem;
