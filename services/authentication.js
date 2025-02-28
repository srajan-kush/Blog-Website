const JwT = require('jsonwebtoken');

const secret = "$rajan@123";

function createTokenForUser(user){
    const payload = {
        _id: user._id,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role,
    };

    const token = JwT.sign(payload, secret);

    return token;
}

function validateToken(token){
    const payload = JwT.verify(token, secret);
    return payload;
}

module.exports = {
    createTokenForUser,
    validateToken,
};