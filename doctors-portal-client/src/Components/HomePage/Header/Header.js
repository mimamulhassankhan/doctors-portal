import React from 'react';
import { Container } from 'react-bootstrap';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import SearchArea from '../SearchArea/SearchArea';
import TopBanner from '../TopBanner/TopBanner';
import UserInteraction from '../UserInteraction/UserInteraction';
import './Header.css';

const Header = () => {
    return (
        <div className="main-header">
            <SearchArea></SearchArea>
            <Container style={{marginTop: '-100px'}}>
                <UserInteraction></UserInteraction>
                <TopBanner></TopBanner>
                <BusinessInfo></BusinessInfo>
            </Container>
        </div>
    );
};

export default Header;