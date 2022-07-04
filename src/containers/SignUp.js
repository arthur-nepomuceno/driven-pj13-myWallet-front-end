import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function SignUp(){
    return(
        <Container>
            <p>My Wallet</p>
            <input type='text' placeholder='Nome e Sobrenome'/>
            <input type='email' placeholder='Email'/>
            <input type='password' placeholder='Senha'/>
            <input type='password' placeholder='Confirme a senha'/>
            <div>
                <h3>Cadastrar</h3>
            </div>
            <Link to="/" style={{textDecoration: "none"}}>
                <h4>Já tem uma conta? Entre agora!</h4>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 50px;
        color: #FFFFFF;
        margin-top: 95px;
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

    div {
        width: 326px;
        height: 46px;
        background-color: #a328d6;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div:hover {
        cursor: pointer;
    }

    div h3 {
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