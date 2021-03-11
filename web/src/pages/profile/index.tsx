import {ChangeEvent, useCallback} from 'react';

import {Header} from '../../components/HeaderHome';
import {authFireBase} from '../../auth/firebase';
import firebase from 'firebase';

import {useAuth} from '../../hooks/auth';

import {Container, LeftContainer, RightContainer, AvatarInput} from './styles';

export function Profile () {

    const {user} = useAuth();

    
    const handleSubmitImage = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
        // authFireBase.firestore().

        if(e.target.files){
            
            let bucketName = 'images';
            let file = e.target.files[0];
            
            let storageRef = authFireBase.storage().ref(`${bucketName}/${user.id}`);
            let uploadTask = storageRef.put(file);

            uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED, () => {
                // let downloadURL = uploadTask.snapshot.downloadURL;
                alert('foto enviado com sucesso!');     
            });
        }
    },[user.id]);

    return (
        <>
            <Header/>
            <Container>
                <section>
                    <LeftContainer>
                        <h1>
                            Foto de perfil
                        </h1>
                        <p>Adicione uma foto ao seu perfil</p>
                    </LeftContainer>
                    <RightContainer>
                        <AvatarInput>
                            <img 
                                src="https://image.freepik.com/vetores-gratis/homem-negocios-perfil-caricatura_18591-58479.jpg" 
                                alt='userAvatar'/>

                            <label htmlFor='selecao-arquivo'>Carregar foto
                                <input id='selecao-arquivo' type='file' onChange={handleSubmitImage}/>
                            </label>
                           
                          
                            </AvatarInput>

                           
                    </RightContainer>
                </section>

                <section>
                    <LeftContainer>
                        <h1>
                            Email
                        </h1>
                        <p>Você pode alterar seu email</p>
                    </LeftContainer>
                    <RightContainer>
                       
                        <p>Email <span style={{color: 'red'}}>*</span> </p>

                        <input type='email' placeholder='email'/>                        
                        <button className='update-email' type='button'>Atualizar email</button>
                    </RightContainer>
                </section>

                <section>
                    <LeftContainer>
                        <h1>
                            Instruções
                        </h1>
                        <p>Preencha seus dados de perfil. Sempre mantenha seu telefone atualizado.</p>
                    </LeftContainer>
                    <RightContainer>
                       
                        <p>Nome <span style={{color: 'red'}}>*</span> </p>
                        <input type='text' placeholder='Tales'/>

                        <p>Sobrenome <span style={{color: 'red'}}>*</span> </p>
                        <input type='text' placeholder='Eduardo'/>   

                        <p>Telefone <span style={{color: 'red'}}>*</span> </p>
                        <input type='number' placeholder='2222222'/>                               
        
                    </RightContainer>
                </section>

                <section>
                    <LeftContainer>
                        <h1>
                            Links Pessoais
                        </h1>
                        <p>Compartilhe seu perfil de outras plataformas aqui.</p>
                    </LeftContainer>
                    <RightContainer>
                       
                        <p>Github<span style={{color: 'red'}}>*</span> </p>
                        <input type='text' placeholder='https://github/'/>

                        <p>Behance <span style={{color: 'red'}}>*</span> </p>
                        <input type='text' placeholder='https://behance.net/abadadsf'/>   

                        <p>Linkedin <span style={{color: 'red'}}>*</span> </p>
                        <input type='text' placeholder='https://linkeding.com/dhadsjklfh'/>                               
        
                    </RightContainer>
                </section>

                <button className='upload-button' type='submit' >ENVIAR</button>
               
            </Container>
        </>
    );
}