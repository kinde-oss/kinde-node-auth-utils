const authToken = require('./utils/authToken/authToken');
const getPem = require('./utils/getPem/getPem');

const kindeNode = async (domain) => {
  const pem = await getPem(domain);

  return (req, callback) => {
    const authHeader = req.headers.authorization;
    // Remove 'Bearer ' prefix
    const token = authHeader && authHeader.split(' ')[1];

    return authToken(token, pem, (err, userString) => {
      const user = err ? {} : JSON.parse(userString);
      return callback(err, user);
    });
  };
};

module.exports = kindeNode;
