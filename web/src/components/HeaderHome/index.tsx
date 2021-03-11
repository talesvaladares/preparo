import {Container} from './styles';
import {Link} from 'react-router-dom';
import {FiUser, FiBell} from 'react-icons/fi';

export function Header  ()  {
    return (
        <Container>
            <nav>
                <Link to="/">EXPLORAR</Link>
                <Link to="#">INSCRIÇÕES</Link>
                <Link to="/profile">DADOS BÁSICOS</Link>
                <Link to="/location">LOCALIZAÇÃO</Link>
            </nav>
            <div>
                <FiBell size={26}/>
                <FiUser size={26}/>

            </div>
        </Container>
    );
}