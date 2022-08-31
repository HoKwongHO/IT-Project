
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
            status: 40,
            data: {
                msg: e.issues[0].message || "信息格式错误", 
            }
        })
    }
}

module.exports = validate;