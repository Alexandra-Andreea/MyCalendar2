import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../schemas/userModel';
import config from "../../config";

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")) {
        try {
            token.headers.authorization.split(" ")[1];

            //decode token id
            const decoded = jwd.verify(token, config.jwtSecret);

            req.user = await User.findById(decoded.id).select("-password");

            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
})

module.exports = { protect };