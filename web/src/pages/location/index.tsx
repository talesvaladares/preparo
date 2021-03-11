import {Header} from '../../components/HeaderHome';

import {
    Container, 
    Content,
    ButtonSubmit
} from './styles';

export function Location () {
    return (
        <>
            <Header/>
            <Container>
                <h2>Localização</h2>

                <Content>
                    <section className='section-left'>
                        <h1>
                            Instruções
                           
                        </h1>
                        <p>
                            Preencha seus dados de Localização. Sempre os mantenha atualizado.
                        </p>
                    </section>

                    <section className='section-right'>
                        <p>CEP<span>*</span></p>
                        <input type='text' placeholder='1234-20'/>

                        <p>Cidade<span>*</span></p>
                        <input type='text' placeholder='Insira o nome da sua cidade atual'/>

                        <p>Estado<span>*</span></p>
                        <input type='text' placeholder='Selecione o estado'/>

                        <p>Bairro<span>*</span></p>
                        <input type='text' placeholder='Insira o nome do seu bairro'/>

                        <p>Endereço<span>*</span></p>
                        <input type='text' placeholder='Insira seu endereço'/>

                        <p>Número<span>*</span></p>
                        <input type='text' placeholder='Insira o número da sua residência'/>

                        <p>Complemento</p>
                        <input type='text' placeholder='Insira um complento se achar necessário'/>
                    </section>
                </Content>

                <ButtonSubmit type='submit'>Enviar</ButtonSubmit>

            </Container>
        
        </>
    );
}