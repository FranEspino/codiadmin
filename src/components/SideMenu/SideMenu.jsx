import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
    BsFillArrowLeftSquareFill,
    BsFillArrowRightSquareFill,
    BsFillHouseDoorFill,
    BsFillGeoAltFill,
    BsFillPersonLinesFill,
    BsFillBarChartFill,
    BsArrowRightSquareFill,
    BsFillFileEarmarkPersonFill,
    BsGearFill
} from "react-icons/bs";

import { MdLocalTaxi } from "react-icons/md";

import '../../styles.css'


const HeaderSideBar = styled.div`
    position: relative;
    
`;
const ContainerLogo = styled.div`
    width:  60px;
    height: 40px;
    overflow: hidden;
    
`;
const LogoSideBar = styled.img`
   max-width: 100%;
   max-height: 100%;
margin-left: 5px;

    
`;

const ToggleMenuOpen = styled.div`
    color: #000;
    font-size: 25px;
    position: absolute;
    top: 50%;
    right: -65px;
    transform: translateY(-50%);
    cursor: pointer;
`;
const Divider = styled.div`
    width: 100%;
    height: 1px;
    border-radius: 1px;
    background: #BCBEC5;
    margin-top: 1em;


`;

const ContainerItem = styled.div`
    display:flex;
    margin-top: 1em;
    height: 45px;
    padding: 0.5em;
    align-items:center;
    &:hover {
        background-color:#d2efff ;
        border-radius: 25px;
      }
      transition: all 0.5s ease-in-out;   
      animation: fadeIn 0.5s ease-out;
      cursor: pointer;

`;

const SideBarItem = styled(Link)`
    color: #333;
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    display: flex;
    align-items: center;
    color: #fff;

`;
const TextItem = styled.p`
    color:#112257;
    font-size:20px;
    margin-top:20px;
    font-weight:700;
    transition: width 0.5s ease-in-out;

`;


const ItemIcon = styled.div`
    display:flex;
    align-items: center;

    width: 40px;
    color:#112257;
    height: 40px;
    font-size: 25px;
    line-height: 40px;
    text-aling: center;

`;

const SideMenu = () => {

    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {


    }, [isOpen])
    return (
        <div className={(isOpen ? 'active' : 'inactive')}  >
            <HeaderSideBar>
                <ContainerLogo>
                    <LogoSideBar src="http://codidrive.com/img/icon.png" alt="Codi Drive" />
                </ContainerLogo>
                <ToggleMenuOpen >
                    <button onClick={() => setIsOpen(!isOpen)} >
                        {
                            isOpen ? <BsFillArrowLeftSquareFill /> : <BsFillArrowRightSquareFill />
                        }
                    </button>
                </ToggleMenuOpen>
            </HeaderSideBar>
            <Divider />

            <ContainerItem>
                 <SideBarItem to="/orders">

                <ItemIcon>
                    <BsFillHouseDoorFill />
                </ItemIcon>
                {
                    isOpen ? <TextItem>Menu</TextItem> : null
                }
                </SideBarItem>

            </ContainerItem>

            <ContainerItem>
                <SideBarItem>
                    <ItemIcon>
                        <BsFillGeoAltFill />
                    </ItemIcon>
                    {
                        isOpen ? <TextItem>Vehiculos</TextItem> : null
                    }
                </SideBarItem>
            </ContainerItem>

            <ContainerItem>
                <SideBarItem>
                    <ItemIcon>
                        <BsFillPersonLinesFill />
                    </ItemIcon>
                    {
                        isOpen ? <TextItem>Pedidos</TextItem> : null
                    }
                </SideBarItem>
            </ContainerItem>

            <ContainerItem>
                <SideBarItem>
                    <ItemIcon>
                        <MdLocalTaxi />
                    </ItemIcon>
                    {
                        isOpen ? <TextItem>Choferes</TextItem> : null
                    }
                </SideBarItem>
            </ContainerItem>
            <ContainerItem>
                <SideBarItem>
                    <ItemIcon>
                        <BsFillFileEarmarkPersonFill />
                    </ItemIcon>
                    {
                        isOpen ? <TextItem>Clientes</TextItem> : null
                    }
                </SideBarItem>
            </ContainerItem>

            <ContainerItem>
                <SideBarItem>
                    <ItemIcon>
                        <BsFillBarChartFill />
                    </ItemIcon>
                    {
                        isOpen ? <TextItem>Reportes</TextItem> : null
                    }
                </SideBarItem>
            </ContainerItem>

            <ContainerItem>
                <SideBarItem>
                    <ItemIcon>
                        <BsGearFill />
                    </ItemIcon>
                    {
                        isOpen ? <TextItem>Ajustes</TextItem> : null
                    }
                </SideBarItem>
            </ContainerItem>
            <ContainerItem>
                <SideBarItem>
                    <ItemIcon>
                        <BsArrowRightSquareFill />
                    </ItemIcon>
                    {
                        isOpen ? <TextItem>Salir</TextItem> : null
                    }
                </SideBarItem>
            </ContainerItem>

        </div>
    )
}

export default SideMenu
