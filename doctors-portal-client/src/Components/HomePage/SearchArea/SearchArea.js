import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchArea.css';

const SearchArea = () => {
    return (
        <div className="search-area-full d-flex align-items-center justify-content-center" style={{height: '500px'}}>
            <InputGroup size="lg" className="mb-3 w-50">
                <FormControl placeholder="Search anything.." />
                <InputGroup.Append>
                    <InputGroup.Text><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default SearchArea;