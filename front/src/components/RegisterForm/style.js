import styled from 'styled-components';

export const boxForm = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    width: '50%',
    height: '100%',
    padding: '1rem',
    backgroundColor: '#d4bbf2',
    borderRadius: '0.5rem',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
    '& > :not(style)': {
        m: 1,
        width: '25ch'
    }
}

export const Input = styled.input`
    width: 100%;
    height: 3rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1.2rem;
    color: #333;
    background-color: #fff;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    outline: none;
    transition: all 0.2s ease-in-out;
    &:focus {
        border: 1px solid #000;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    }
    &:disabled {
        background-color: #ccc;
        color: #333;
        border: 1px solid #ccc;
        box-shadow: none;
    }
`;
