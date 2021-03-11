import React, {useCallback, useState , FormEvent} from 'react';
import {Link } from 'react-router-dom';

import {Header} from '../../components/Header';

import {useAuth} from '../../hooks/auth';

import {Container, Form} from './styles';

export function Login  ()  {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signin} = useAuth();

    const handleSubmit = useCallback( (e :FormEvent) => {
        e.preventDefault();

        signin({email, password});

    },[email, password, signin]);

    return (

       <>
        <Header/>
        <Container>
            <Form onSubmit={handleSubmit}>
               
                <h2>LOGIN</h2>

                    <input 
                        type="email" 
                        placeholder='Email'
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='Senha'
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button type='submit'>Entrar</button>

                   <footer>
                        <button type='button'>Recuperar senha</button>
                        <button type='button'><Link to='/signup'> Cadastrar</Link></button>
                   </footer>
        
            </Form>
        </Container>
       </>
    );
}

