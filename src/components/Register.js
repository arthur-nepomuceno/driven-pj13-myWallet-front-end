import styled from 'styled-components';
import axios from 'axios';
import { Link} from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../contexts/DataContext';

export default function Register({date, description, value, type, id}){
    const {user, setTransactions} = useContext(DataContext);
    const token = user.token;
    const API = `http://localhost:5000/transactions/${id}`;
    const config = {headers: {Authorization: `Bearer ${token}`}};

    function DeleteRegister(){
        const confirm = window.confirm('Quer mesmo apagar esse registro?');
        if(confirm){
            const promise = axios.delete(API, config);
            promise.then((response) => {
                setTransactions(response.data);
                alert('Registro apagado com sucesso.');
            });
            promise.catch((error) => {
                alert('Problemas com o servidor :(.');
            })
        }
    }

    return(
        <Container color={type === 'withdraw' ? '#C70000' : '#5AAE2E'}>
            <Link to={type === 'withdraw' ? `/edit-check-out/${id}` : `/edit-check-in/${id}`} style={{textDecoration: "none"}}>
                <div>
                    <p id='date'>{date}</p>
                    <p id='description'>{description}</p>
                    <p id='value'>{value}</p>
                </div>
            </Link>
            <p id='delete' onClick={DeleteRegister}>x</p>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: fit-content;
    position: relative;

    p {
        height: 25px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16   px;
        display: flex;
        justify-content: center;
        align-items: baseline;
        margin-bottom: 15px;
    }

    p#date {
        color: #c6c6c6;
    }

    p#description { 
        color: #000000;
        position: absolute;
        left: 55px;
    }

    p#value {
        color: ${props => props.color};
        position: absolute;
        right: 25px;
    }

    p#delete { 
        width: 20px;
        color: #c6c6c6;
    }

    p#delete:hover {
        cursor: pointer;
    }
`