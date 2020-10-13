import React from 'react';
import { Container } from 'react-bootstrap';
import Titlebar from '../../Shared/Titlebar/Titlebar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import TopBanner from '../TopBanner/TopBanner';
import './Header.css';

const Header = () => {
    return (
        <div className="main-header">
            <Titlebar></Titlebar>
            <Container>
                <TopBanner></TopBanner>
                <BusinessInfo></BusinessInfo>
            </Container>
        </div>
    );
};

export default Header;