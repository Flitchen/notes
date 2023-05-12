import React from 'react';
import Services from './Services';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faMicrochip, faPeopleGroup, faRobot, faSitemap } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer';


function Courses() {
    return (
        <>
            <div className="container mt-3 mx-auto text-center" >
                <Services />

            </div >
            <div className="container my-5 mx-auto  text-center p-2 pb-4" >
                <div className="row d-flex justify-content-around mx-auto">
                    <div className="mb-4 col-md-5">
                        <Link to='/courses/artificial-intelligence' className='text-decoration-none text-dark'>

                            <div className="card shadow-sm">
                                <div className="card-header">
                                    <FontAwesomeIcon icon={faRobot} size='3x' className='mb-3' id='robot'></FontAwesomeIcon>
                                    <br />
                                    <p>Fundamentals of Artificial intelligence</p>
                                </div>
                            </div>
                        </Link>

                    </div>


                    <div className="mb-4 col-md-5">
                        <Link to='web-programming' className='text-decoration-none text-dark'>
                            <div className="card shadow-sm">
                                <div className="card-header">
                                    <FontAwesomeIcon icon={faLaptopCode} size='3x' className='mb-3' id='laptop'></FontAwesomeIcon>
                                    <br />
                                    <p>Introduction to Web Programming</p>
                                </div>
                            </div>

                        </Link>
                    </div>


                </div>

                <div className="row d-flex justify-content-around mx-auto">

                    <div className="mb-4 col-md-5">
                        <Link to='operating-systems' className='text-decoration-none text-dark'>
                            <div className="card shadow-sm">
                                <div className="card-header">
                                    <FontAwesomeIcon icon={faMicrochip} size='3x' className='mb-3' id='microchip'></FontAwesomeIcon>
                                    <br />
                                    <p>Operating Systems</p>
                                </div>
                            </div>

                        </Link>
                    </div>

                    <div className="mb-4 col-md-5">
                        <Link to='information-system-management' className='text-decoration-none text-dark'>
                            <div className="card shadow-sm">
                                <div className="card-header">
                                    <FontAwesomeIcon icon={faSitemap} size='3x' className='mb-3' id='sitemap'></FontAwesomeIcon>
                                    <br />
                                    <p>Information System Management</p>
                                </div>
                            </div>
                        </Link>
                    </div>

                </div>

                <div className="row d-flex justify-content-around mx-auto">
                    <div className="mb-3  col-md-5 ">
                        <Link to='collaborative-networks' className='text-decoration-none text-dark'>
                            <div className="card shadow-sm">
                                <div className="card-header">
                                    <FontAwesomeIcon icon={faPeopleGroup} size='3x' className='
                                    mb-3' id='people'></FontAwesomeIcon>
                                    <br />
                                    <p>Collaborative networks and facilitating technologies</p>
                                </div>
                            </div>


                        </Link>
                    </div>


                </div>


            </div>
            <Footer />
        </>
    );
}

export default Courses;