const jwt = require('jsonwebtoken');
const secret = 'asasijij8yerbwe124@$!@$dgsdg8bc8sfafnoaaguasg';

exports.checkUserAuthorization = async function (req, res, next) {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                console.error(`Something went wrong: ${err}`);
                return;
            } else if (decoded) {
                console.log('Authorization has been completed');
                return next();
            }
        });
    } catch (error) {
        console.error(`Something went wrong: ${error}`);
        return res.status(401).json({
            message: 'Unauthorized'
        })
    }

};