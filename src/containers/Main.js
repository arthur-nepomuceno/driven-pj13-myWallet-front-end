import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Main(){
    return(
        <Container>
            <div id='title'>
                <h3>Olá, Fulano</h3>
                <ion-icon name="exit-outline"></ion-icon>
            </div>
            <div id='registers'>
                <h3>Não há registros de entrada ou saída.</h3>
            </div>
            <div id='options'>
                <div>
                    <Link to="/new-check-in" style={{textDecoration: "none"}}>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <h4>Nova entrada</h4>
                    </Link>
                </div>
                <div>
                    <Link to="/new-check-out" style={{textDecoration: "none"}}>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <h4>Nova saída</h4>
                    </Link>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`

    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;

    div#title {
        display: flex;
        justify-content: space-between;
    }

    div#title ion-icon {
        width: 30px;
        height: 30px;
    }

    h3 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        margin-bottom: 22px;
        color: #FFFFFF;
    }

    div#registers {
        width: 326px;
        height: 446px;
        background: #FFFFFF;
        border-radius: 5px;
        position: relative;
        margin-bottom: 13px;
    }

    div#registers h3 {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        text-align: center;        
        width: 180px;
        height: 46px;
        color: #868686;
        position: absolute;
        top: 200px;
        left: 73px;
    }

    div#options {
        width: 326px;
        margin-bottom: 16px;
        display: flex;
        justify-content: space-between;
    }

    div#options div{
        width: 155px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    div#options div:hover {
        cursor: pointer;
    }

    ion-icon {
        color: #FFFFFF;
        width: 22px;
        height: 22px;
    }

    h4 {
        width: 64px;
        height: 40px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        color: #FFFFFF;
    }
`