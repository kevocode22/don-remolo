const User = require('../models/users')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendVerification = require('./sendVerification');
const crypto = require('crypto');

const userControllers = {
    register: async (req, res) => {
        console.log(req.body);
        const { fullName, email, password, image, from } = req.body.data; //utilizo "data" en la action de logueo
        try {
            const userExists = await User.findOne({ email });  //si el usuario existe
            const verification = false;
            const uniqueString = crypto.randomBytes(15).toString("hex");
            if (userExists) {
                if (userExists.from.indexOf(from) !== -1) { //si es true no le permitiremos volver a registrarse por este medio
                    res.json({
                        success: false,
                        from: from,
                        message: `${email} allready registered, please Login`,
                    });
                } else { //sino significa que se registro por al menos 1 medio
                    const passwordhashed = bcryptjs.hashSync(password, 10);
                    userExists.password.push(passwordhashed);
                    userExists.from.push(from);
                    userExists.verification = true; //estaba verificarion xd
                    await userExists.save();
                    res.json({
                        success: true,
                        from: from,
                        message: `Please signup`
                    });
                }
            } else { //si el usuario no existe
                const passwordhashed = bcryptjs.hashSync(password, 10);
                const newUser = await new User({ //creare uno con los requerimientos del modelo users
                    fullName,
                    email,
                    password: [passwordhashed],
                    image,
                    from: [from],
                    uniqueString: uniqueString,
                    verification
                });
                if (from !== "formulario-registro") { //formulario de registro
                    newUser.verification = true;
                    await newUser.save();
                    res.json({
                        success: true,
                        from: from,
                        message: `You registered successfully, now you can login now!`,
                    });

                } else {
                    await newUser.save();
                    await sendVerification(email, uniqueString);
                    res.json({
                        success: true,
                        from: from,
                        message: `We send you an email to ${email} for finish the verification process`,
                    });
                }
            }
        } catch (error) {
            res.json({
                success: false,
                from: from,
                message: error,
            });
            console.log(error)
        }
    },
    login: async (req, res) => { //para iniciar sesion
        const { email, password, from } = req.body.loginUser;
        console.log(req.body.loginUser)
        try {
            const userExists = await User.findOne({ email });
            if (!userExists) {
                res.json({
                    success: false,
                    from: "no from",
                    message: "This user doesn´t exist, please register"
                });
            } else if (userExists.verification) {
                let passwordMatch = userExists.password.filter((pass) => bcryptjs.compareSync(password, pass));

                if (from === "form-index") { //formulario de inicio de sesion
                    if (passwordMatch.length > 0) {
                        const userData = {
                            id: userExists._id,
                            fullName: userExists.fullName,
                            email: userExists.email,
                            password: userExists.password,
                            image: userExists.image,
                            from: userExists.from,
							rol: userExists.rol,
                        };
                        await userExists.save();
                        const token = jwt.sign({ ...userData },
                            process.env.SECRET_KEY, {
                            expiresIn: 1000 * 60 * 60 * 24,
                        });
                        res.json({
                            response: { token, userData },
                            success: true,
                            from: from,
                            message: "Welcome " + userData.fullName + "!",
                        });
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: `Please check your password`,
                        });
                    }
                } else {
                    if (passwordMatch.length > 0) {
                        const userData = {
                            id: userExists._id,
                            fullName: userExists.fullName,
                            email: userExists.email,
                            password: userExists.password,
                            image: userExists.image,
                            from: userExists.from,
							rol: userExists.rol,
                        };
                        await userExists.save();
                        const token = jwt.sign({ ...userData },
                            process.env.SECRET_KEY, {
                            expiresIn: 1000 * 60 * 60 * 24,
                        }
                        );
                        res.json({
                            response: { token, userData },
                            success: true,
                            from: from,
                            message: "Hola " + userData.fullName + " 🖐️",
                        });
                    } else {
                        res.json({
                            success: false,
                            from: from,
                            message: "You are not registrered, please Sign Up"
                        });
                    }
                }
            } else {
                res.json({
                    success: false,
                    from: from,
                    message: `Check your email adress please for validate your account`,
                });
            }
        } catch (error) {
            console.log(error);
            res.json({
                success: false,
                from: from,
                message: `Something´s went wrong. Try again later😞`
            });
        }
    },
    logOut: async (req, res) => {
        const { email } = req.body
        const usuario = await User.findOne({ email })
        await usuario.save()
        res.json({
            success: true,
            message: "Come back soon " + usuario.fullName + " 🖐️"
        })
    },
    verifyToken: (req, res) => {
        console.log("REQ.USUARIO", req.user);
        if (req.user) {
            res.json({
                success: true,
                response: {
                        id: req.user.id,
                        fullName: req.user.fullName,
                        email: req.user.email,
                        image: req.user.image,
                        rol:   req.user.rol,
                        from: "token",			
                },
                message: "Hello " + req.user.fullName + " 🖐️"
            })
        } else {
            res.json({
                success: false,
                message: "Please, Login to your account"
            });
        }
    },
    verifyMail: async (req, res) => {
        const { string } = req.params
        const usuario = await User.findOne({ uniqueString: string })
        if (usuario) {
            usuario.verification = true
            await usuario.save()
            res.redirect("https://youtube.com")
        }
        else {
            res.json({
                success: false,
                message: "This email wasn´t verified, please check your email"
            });
        }
    },
}

module.exports = userControllers