const jwkToPem = require('jwk-to-pem');
const axios = require('axios');

const getPem = async (domain) => {
  const keyUrl = `${domain}/.well-known/jwks.json`;
  const {data} = await axios.get(keyUrl);

  if (data && data.keys) {
    const [firstKey] = data.keys;
    return jwkToPem(firstKey);
  }
  return undefined;
};

module.exports = getPem;
