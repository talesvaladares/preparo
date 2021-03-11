import {useCallback, useState, FormEvent} from 'react';


import {Header} from '../../components/Header';

import {authFireBase} from '../../auth/firebase';

import {Container, ContentLeft, ContentRight, Form} from './styles';

export function Signup () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmePassword, setConfirmePassoword] = useState('');

    const signup = useCallback((e : FormEvent) => {
        e.preventDefault();

        if(!email) {
            alert('Email vazio');
            return;
        }
        if(!password) {
            alert('Senha vazia');
            return;
        }
        if(!confirmePassword) {
            alert('Confirmar senha vazia');
            return;
        }

        if(password !== confirmePassword) {
            alert('As senhas não batem. Tente novamente!');
            return;
        }

        try{
            authFireBase
            .auth()
            .createUserWithEmailAndPassword(email, password)
        }
        catch(err){
            console.log(err);
        }

    },[email, password, confirmePassword]);

    return (
        <>
            <Header/>
            <Container>
                <ContentLeft>
                    <h2>Procurando por um estágio?</h2>
                    <h1>Aqui é o lugar certo.</h1>
                    <h3>Descubra estágios em todos os tipos de empresa, desde startups a multinacionais. E tudo isso sem burocracia.</h3>
                </ContentLeft>

                <ContentRight>
                    <Form onSubmit={signup}>
                        <h2>CADASTRO DO CANDIDATO</h2>

                        <input 
                            type="email" 
                            placeholder='E-mail'
                            onChange={ e => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder='Senha'
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder='Confirmação da senha'
                            onChange={e => setConfirmePassoword(e.target.value)}
                        />

                        <button type='submit'>CADASTRAR</button>
                    </Form>
                </ContentRight>
            </Container>
        </>
    );
}