import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <div>
            <Container>
                <Main>
                    <Logo>Logo</Logo>

                    <NavHolder>
                        <Nav to="/">Input</Nav>
                        <Nav to="/display">Display</Nav>
                    </NavHolder>
                </Main>
            </Container>
        </div>
    )
}

export default Header

const Nav = styled(Link)`
text-decoration: none;
color: white;
transition: all 350ms;
cursor: pointer;
text-transform: uppercase;
font-weight: bold;
font-size: 12px;
margin: 0 10px;
`;

const NavHolder = styled.div`
display: flex;
align-items: center;
`;

const Logo = styled.div`
font-size: 23px;
font-weight: bolder;
margin-right: 30px;
`;

const Main = styled.div`
width: 95%;
display: flex;
align-items: center;
`;

const Container = styled.div`
width: 100%;
height: 80px;
background-color: #191919;
color: white;
display: flex;
justify-content: center;
`