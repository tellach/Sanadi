import jwt from "jsonwebtoken";
const JWT_SIGN_SECRET='0sf2df4d5f4sd53f45qfq5fqs5fqs5f5q3f4q';

function generateTokenForUser(userData){

    return jwt.sign({
            userId:userData.id,
        },
        JWT_SIGN_SECRET,
        {
            expiresIn: '1h'
        }
    )

}

function parseAuthorization(authorization){
    return(authorization!=null)? authorization.replace('Bearer',''):null
}

function getUserId(authorization) {
    let userId =-1;
    const token =parseAuthorization(authorization)
    if(token!=null){
        try {
            const jwtToken=jwt.verify(token,JWT_SIGN_SECRET);
            if(jwtToken!=null) userId=jwtToken.userId
        }catch (err) {
            
        }
        return userId;
    }
}
function privatekey() {
    return JWT_SIGN_SECRET
}
function verifyToken(req,res,next)
{

    const bearerHeader=req.headers['autorization']
    if (typeof bearerHeader !=='undefined')
    {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[0]
        req.token=bearerToken

        next()


    }else {
        res.sendStatus(403)
    }
}
 export {generateTokenForUser,parseAuthorization,getUserId,verifyToken,privatekey}
