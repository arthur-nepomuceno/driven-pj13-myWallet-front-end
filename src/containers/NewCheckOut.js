import styled from 'styled-components';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DataContext from '../contexts/DataContext';

export default function NewCheckIn(){
    const {user} = useContext(DataContext);
    const token = user.token;
    const [value, setValue] = useState(null);
    const [description, setDescription] = useState(null);
    const API = 'http://localhost:5000/transactions';
    const navigate = useNavigate();

    function Send(event){
        event.preventDefault();
        const body = {value, description, type: 'withdraw'};
        const config = {headers: {Authorization: `Bearer ${token}`}};

        const promise = axios.post(API, body, config);
        promise.then(response => {
            setValue(null);
            setDescription(null);
            navigate('/main');
        });
        promise.catch(error => console.log(error.response.data));
    }

    return (
        <Container>
            <form onSubmit={Send}>
                <div id='title'>
                    <h3>Nova saída</h3>
                </div>
                <input type='number' placeholder='Valor' value={value} onChange={(e) => {setValue(e.target.value)}} required/>
                <input type='text' placeholder='Descrição' value={description} onChange={(e) => {setDescription(e.target.value)}} required/>
                <button type='submit'>
                    <h3>Salvar saída</h3>
                </button>
            </form>
            <Link to="/main" style={{textDecoration: "none"}}>
                <h4>Retornar</h4>
            </Link>
        </Container>
    );
}

const Container = styled.div`

    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div#title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    div#title h3 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        margin-bottom: 22px;
        color: #FFFFFF;
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