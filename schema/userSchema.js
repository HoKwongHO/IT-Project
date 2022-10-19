const {string, number, object} = require("zod");

const registerUserSchema = object({ 
    body: object({
        nickname: string({
        }),
        email: string({
            required_error: "",
            invalid_type_error: "Email format incorrect"
        }).email({ message: "Invalid email address" }),
        password: string({
            required_error: "lack of password"
        }).min(5, { message: "password cannot less than 5" })
        .max(10, { message: "password cannot longer than 10" }),
    })
})

module.exports = registerUserSchema;