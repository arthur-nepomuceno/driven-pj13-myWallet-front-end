import styled from 'styled-components';

export default function NewCheckIn(){
    return (
        <Container>
            <div id='title'>
                <h3>Nova entrada</h3>
            </div>
            <input type='text' placeholder='Valor'/>
            <input type='text' placeholder='Descrição'/>
            <button type='submit'>
                <h3>Salvar entrada</h3>
            </button>
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
`