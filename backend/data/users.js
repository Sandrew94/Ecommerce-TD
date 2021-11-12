import bcrypt from "bcryptjs"

const users = [{
    name: "Admin",
    email:"admin@admin.com",
    password: bcrypt.hashSync("1234"),
    isAdmin: true
},
{
    name: "Try",
    email:"try@try.com",
    password: bcrypt.hashSync("1234"),
},
{
    name: "Try2",
    email:"try2@try.com",
    password: bcrypt.hashSync("12342"),
}
];

export default users