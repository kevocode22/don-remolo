import React, { useEffect } from "react"
import jwt_decode from "jwt-decode"
import { useDispatch } from "react-redux"
import usersActions from "../redux/actions/userActions"
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'

export default function LoginGoogle() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    async function handleCallBackResponse(response) {
        // console.log(response.credential);
        let userObject = jwt_decode(response.credential);
        // console.log(userObject);
        // console.log(props)
        // eslint-disable-next-line
        const res = await dispatch(usersActions.register({
            nombre: userObject.given_name,
            apellido: userObject.family_name,
            email: userObject.email,
            contraseña: userObject.sub,
            imagen: userObject.picture,
            from: "GOOGLE"
        }))
        if (res.data.success) {
            toast.success(res.data.message)
            navigate('/login')
        } else {
            toast.error(res.data.message)
        }



    }

    useEffect(() => {
        /*global google*/
        google.accounts.id.initialize({
            client_id: '303451090352-ale84rv1ngpcuoe0umfm9chtcn6hlnaf.apps.googleusercontent.com',
            callback: handleCallBackResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "filled_black", size: "small", locale: 'en', text: 'signup_with', shape: "pill" }
        )
    });

    return (
        <div>
            <div id="buttonDiv"></div>
        </div>
    )





}