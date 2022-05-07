import { Badge } from '@material-ui/core';
import { LockOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import './Header.css'
import { mobile } from '../../../responsive';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import {signOut} from 'firebase/auth'


const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}

`

const Wrapper = styled.div`
    padding: 10px 20px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items:center ;
    
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}

`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding:5px;
    
`
const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}

`
const Center = styled.div`
    flex: 1;
    text-align:center ;
`
const Right = styled.div`
    flex: 1;
    display: flex ;
    align-items:center ;
    justify-content: flex-end ;
    ${mobile({ justifyContent: "center", flex:2 })}
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left:25px ;
    text-decoration: none;
    ${mobile({ fontSize: "12px", marginLeft: '10px' })}
`

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        signOut(auth);
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'></Input>
                        <Search style={{color: 'gray', fontSize: 1}}></Search>
                    </SearchContainer>
                </Left>
                <Center>
                <LockOutlined></LockOutlined>
                </Center>
                <Right>
                    <MenuItem as={Link} to='/'>HOME</MenuItem>
                    <MenuItem as={Link} to='about'>ABOUT</MenuItem>
                    {
                        user &&<>
                            <MenuItem as={Link} to='additems'>AddItems</MenuItem>
                            <MenuItem as={Link} to='manageitems'>Manageitems</MenuItem>
                        </>
                    }
                    {
                        user ?
                        <button onClick={handleSignOut}>Sign Out</button>

                        :
                        <MenuItem as={Link} to='login'>LOGIN</MenuItem>
                    }
                    <MenuItem>
                    <Badge badgeContent={4} color="secondary">
                    <ShoppingCartOutlined />
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Header;

