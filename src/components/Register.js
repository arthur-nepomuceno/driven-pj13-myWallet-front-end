import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function Register({date, description, value, type}){
    return(
        <Container color={type === 'withdraw' ? '#C70000' : '#5AAE2E'}>
            <p id='date'>{date}</p>
            <p id='description'>{description}</p>
            <p id='value'>{value}</p>
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
        color: ${props => props.color}
    }
`