const base64 = require("base64url");
const crypto = require("crypto");
const splitToken = require("../splitToken/splitToken");

const verifyToken = (JWT, pem) => {
  const { header, payload, signature } = splitToken(JWT);

  const verifyFunction = crypto.createVerify("SHA256");

  verifyFunction.write(header + "." + payload);
  verifyFunction.end();

  const jwtSignatureBase64 = base64.toBase64(signature);
  try {
    const isSignatureValid = verifyFunction.verify(
      pem,
      jwtSignatureBase64,
      "base64"
    );

    return isSignatureValid;
  } catch (err) {
    console.log(err);
  }
};

module.exports = verifyToken;
