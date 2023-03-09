import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { New } from "./style"
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'
import { useState } from "react"

function NewAccount() {

    const goTo = useNavigate()
    const now = new Date();
    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [userName, setUsername] = useState('')
    const [userPhoto, setUserPhoto] = useState('')
    const [sentRequest, setSentRequest] = useState(false)

    async function sendLogin(e) {
        e.preventDefault()
        setSentRequest(true)

        const post = {
            email: userEmail,
            password: userPassword,
            username: userName,
            pictureUrl: userPhoto,
            createdAt: now.getDay() + "/" + now.getMonth + "/" + now.getFullYear
        }

        try {
            console.log(process.env.REACT_APP_API_URL)
            const aux = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, post)
            setSentRequest(false)
            if (aux.status !== 201) return
            goTo("/")
        } catch (error) {
            alert(error)
            setSentRequest(false)
        }
    }

    return (
        <New>
            <section>
                <h1>Linkr</h1>
                <p>save, share and discover <br></br> the best links on the web</p>
            </section>
            <input data-test="email" type="email" name="email" placeholder="email" disabled={sentRequest} onChange={(e) => setEmail(e.currentTarget.value)} />
            <input data-test="password" type="password" name="password" placeholder="password" disabled={sentRequest} onChange={(e) => setPassword(e.currentTarget.value)} />
            <input data-test="username" type="username" name="username" placeholder="username" disabled={sentRequest} onChange={(e) => setUsername(e.currentTarget.value)} />
            <input data-test="photo" type="photo" name="photo" placeholder="picture url" disabled={sentRequest} onChange={(e) => setUserPhoto(e.currentTarget.value)} />
            <button data-test="sign-up-submit" type='submit' disabled={sentRequest} onClick={(e) => sendLogin(e)}>{sentRequest ? <ThreeDots height="18" width="30" color="white" ariaLabel="loading" wrapperStyle={{}} wrapperClassName="" /> : "Register"}</button>
            <Link to="/">
                Switch back to log in
            </Link>
        </New>
    )
}

export default NewAccount