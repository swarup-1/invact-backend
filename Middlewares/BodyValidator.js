const validateRequestBody=(req, res, next)=>{
    console.log('req.body:', req.body)
    if (Object.keys(req.body).length === 0) {
        return res.send({ error: "Request body must be there" });
    }
    next();
}


module.exports = {
    validateRequestBody
}