import styled from "styled-components";

// ICONS
import Logo from "./UI/Logo";
import { GoSearch } from "react-icons/go"; // DISCOVER
import { BiHome } from "react-icons/bi"; // MY HOME
import { MdOutlineWaterDrop } from "react-icons/md"; // THIRSTY BB
import { FaRegUserCircle } from "react-icons/fa"; // PROFILE

// LINKS
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
        <NavDiv>
            <LogoLink exact to="/">
                <Logo />
            </LogoLink>
            <NavigationLink exact to="/my-home">
                <IconSpan>
                    <BiHome size={40} />
                </IconSpan>
                <NameSpan>My Home</NameSpan>
            </NavigationLink>
            <NavigationLink exact to="/thirsty-bb">
                <IconSpan>
                    <MdOutlineWaterDrop size={40} />
                </IconSpan>
                <NameSpan>Thirsty.bb</NameSpan>
            </NavigationLink>
            <NavigationLink exact to="/">
                <IconSpan>
                    <GoSearch size={40} />
                </IconSpan> 
                <NameSpan>Discover</NameSpan>
            </NavigationLink>
            <NavigationLink exact to="/profile">
                <IconSpan>
                    <FaRegUserCircle size={40} />
                </IconSpan> 
                <NameSpan>Profile</NameSpan>
            </NavigationLink>
            
        </NavDiv>
        </>
    );
}

export default Sidebar;

const NavDiv = styled.nav`
    display: flex;
    flex-direction: column;
    border-top-left-radius: 5px;
    height: 100vh;
    padding: 20px;
    background-color: var(--color-primaryDark);
`;
const LogoLink = styled(Link)`
    border-radius: 50%;
    align-self: center;
    padding: 5px;
    width: fit-content;
    &:hover {
        background-color: var(--color-primaryHighlight);
    }
`
const NavigationLink = styled(NavLink)`
    color: var(--color-creamAccent);
    text-decoration: none;
    font-weight: bold;
    margin-top: 10px;
    padding: 10px 20px 10px 15px;
    border-radius: 40px;
    width: fit-content;
    display: flex;
    align-items: center;

    &:nth-of-type(2) {
        margin-top: 140px;
    }
    &:hover {
        background-color: var(--color-primaryHighlight);
        color: var(--color-creamAccent);
    }
    &.active {
        color: var(--color-creamAccent);
    }
`;

const IconSpan = styled.span`
    margin-right: 20px;
`;

const NameSpan = styled.span`
    font-size: 24px;
`