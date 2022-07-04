import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext} from 'react';
import DataContext from '../contexts/DataContext';

export default function SignUp(){
    const {setToken} = useContext(DataContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const API = 'http://localhost:5000/sign-in';

    function Send(event){
        event.preventDefault();
        const body = {email, password}
        const promise = axios.post(API, body);
        promise.then(response => {
            console.log(response.data);
            setToken(response.data.token);
            navigate('/main');
        })
        promise.catch((error) => {console.log(error.response.data)})
    }

    return(
        <Container>
            <form onSubmit={Send}>
                <p>My Wallet</p>
                <input type='email' placeholder='Email' value={email} onChange={(e) => {setEmail(e.target.value)}} required/>
                <input type='password' placeholder='Senha' value={password} onChange={(e) => {setPassword(e.target.value)}} required/>
                <button type='submit'>
                    <h3>Entrar</h3>
                </button>
            </form>
            <Link to="/sign-up" style={{textDecoration: "none"}}>
                <h4>Primeira vez? Cadastre-se!</h4>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    p {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
        margin-top: 160px;
    }

    input {
        width: 326px;
        height: 58px;
        border: none;
        border-radius: 5px;
        margin-bottom: 14px;
        outline: none;
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #000000;
        padding-left: 15px;
        padding-right: 15px;
    }

    input::placeholder {
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #000000;
    }

    button {
        width: 326px;
        height: 46px;
        background-color: #a328d6;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
    }

    button:hover {
        cursor: pointer;
    }

    button h3 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
    }

    h4 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
        margin-top: 32px;
    }

    h4:hover {
        cursor: pointer;
    }
`