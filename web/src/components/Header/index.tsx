import {Container} from './styles';
import {Link} from 'react-router-dom';

export function Header  ()  {
    return (
        <Container>
            <Link to="/">ENTRAR</Link>
            <Link to="#">CADASTRE-SE</Link>
            <Link to="#">EMPRESA</Link>
            <Link to="#">SOBRE NÓS</Link>
            <Link to="#">EXPLORAR</Link>
        </Container>
    );
}