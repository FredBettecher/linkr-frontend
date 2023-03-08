import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { Form } from "./style"
import axios from "axios"
import { useState, useContext} from "react"
import { ThreeDots } from 'react-loader-spinner'
import { UserContext } from "../../contexts/UserContext"
 
function LogIn() {

    const { setInfo, setHistoric} = useContext(UserContext)
    const goTo =  useNavigate()
    const [userEmail, setEmail] = useState('')
    const [sentRequest, setSentRequest] = useState(false)
    const [userPassword, setPassword] = useState('')

    async function sendLogin(e) {
        e.preventDefault()

        setSentRequest(true)
        setInfo({})
        setHistoric([])

        const post = {
            email: userEmail,
            password: userPassword
        }

        try {
            const signIn = await axios.post(`${process.env.REACT_APP_API_URL}/signin`, post)
            console.log(signIn.status)
            
            const token = signIn.data.token.replace("Bearer ", "")
            const name = signIn.data.name

            if (signIn.status === 200) { setInfo({ name, token })}
            goTo('/timeline')

        } catch (error) {
            if (error.name === "AxiosError") alert("We couldn't find an account with this data!")
            setSentRequest(false)
        }
    }

    return (
        <Form>
            <section>
                <h1>Linkr</h1>
                <p>save, share and discover <br></br> the best links on the web</p>
            </section>
            <input data-test="email" type="email" name="email" placeholder="email" disabled={sentRequest} onChange={(e) => setEmail(e.currentTarget.value)}/>
            <input test="password" type="password" name="password" placeholder="password" disabled={sentRequest} onChange={(e) => setPassword(e.currentTarget.value)}/>
            <button data-test="sign-in-submit" type='submit' disabled={sentRequest}  onClick={(e) => sendLogin(e)}>{sentRequest ? <ThreeDots height="18" width="30" color="white" ariaLabel="loading" wrapperStyle={{}} wrapperClassName=""/> : "Log In" }</button>
            <Link to="/sign-up">
                First time? Create an account
            </Link>
        </Form>
    )
}

export default LogIn