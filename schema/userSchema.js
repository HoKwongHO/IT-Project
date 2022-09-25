const {string, number, object} = require("zod");

const registerUserSchema = object({ //规定注册接口的参数格式
    body: object({
        nickname: string({
        }),
        email: string({
            required_error: "",
            invalid_type_error: "号码格式错误"
        }).email({ message: "Invalid email address" }),
        password: string({
            required_error: "缺少密码字段"
        }).min(5, { message: "密码长度不能小于5" })
        .max(10, { message: "密码长度不能大于10" }),
    })
})

module.exports = registerUserSchema;