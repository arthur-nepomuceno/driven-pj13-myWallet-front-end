import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import DataContext from '../contexts/DataContext';
import Register from '../components/Register';

export default function Main(){
    const {user, transactions, setTransactions} = useContext(DataContext);
    const token = user.token;
    const API = 'https://driven-pj13-mywallet.herokuapp.com/transactions';
    const config = {headers: {Authorization: `Bearer ${token}`}};

    useEffect(() => {
        const promise = axios.get(API, config);
        promise.then(response => {
            setTransactions(response.data);
        });
        promise.catch(error => {console.log(error.response.data)});
    }, [])

    let balance = 0;
    transactions.map(t => {
        if(t.type === 'deposit'){
            balance += parseFloat(t.value);
        } else {
            balance -= parseFloat(t.value);
        }
    })

    return(
        <Container color={balance > 0 ? '#5AAE2E' : '#C70000'}>
            <div id='title'>
                <h3>Olá, {user.name}</h3>
                <ion-icon name="exit-outline"></ion-icon>
            </div>
            <div id='registers'>
                {transactions.length === 0 ? <h3>Não há registros de entrada ou saída.</h3>
                                           : <>{transactions.map(t => <Register date={t.date} 
                                                                                description={t.description} 
                                                                                value={t.value} 
                                                                                type={t.type} 
                                                                                id={t._id}/>)}
                                             <p id='balance'>
                                                 <div>Saldo:</div> 
                                                 <div>{balance.toFixed(2)}</div>
                                             </p>
                                             </>}
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
        padding-top: 23px;
        padding-left: 12px;
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

    div#registers div {
        width: 300px;
        display: flex;
        align-items: center;
        justify-content: space-between;
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

    p#balance {
        width: 300px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        position: absolute;
        bottom: 10px;

        display: flex;
        justify-content: space-between;
    }

    p#balance div{
        width: fit-content;
    }

    p#balance div:nth-child(2){
        color: ${props => props.color};
    }
`