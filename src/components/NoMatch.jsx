import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NoMatch() {
    const navigate = useNavigate()
    const handleNoMatch = () => {
        navigate('/')
    }
    return (
        <div className='container d-flex flex-column mt-5 align-items-center '>
            <p className="display-2">Page not found
            </p>
            <FontAwesomeIcon icon={faFaceFrown} size='4x' className='mt-5 text-dark' id='sad-face'></FontAwesomeIcon>
            <button className='btn btn-outline-dark mt-5' onClick={handleNoMatch}>Go to Home Page</button>
        </div>
    );
}

export default NoMatch;