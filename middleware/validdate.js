
const validate = ( schema ) => ( req,res,next) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query
        })
        next()
    } catch(e) {
        res.status(201).json({
            status: 400,
            data: {
                msg: e.issues[0].message || "wrong format", 
            }
        })
    }
}

module.exports = validate;