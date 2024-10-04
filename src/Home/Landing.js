import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Footer from './footer';
import './footer.css';
import Form from '../Forms/Form'; // Ensure the Form component is imported

function Landing() {
    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false); // State for modal open/close
    const domains = [
        { name: "Algorithms", className: "domain-card1" },
        { name: "Data Structures", className: "domain-card2" },
        { name: "DBMS/SQL", className: "domain-card1" },
        { name: "Networking", className: "domain-card2" },
        { name: "Machine Learning", className: "domain-card1" },
        { name: "Web Development", className: "domain-card2" },
        { name: "Mobile Development", className: "domain-card1" },
        { name: "DevOps", className: "domain-card2" },
        { name: "Cloud Computing", className: "domain-card1" },
        { name: "Cyber Security", className: "domain-card2" },
        { name: "Software Engineering", className: "domain-card1" },
        { name: "Artificial Intelligence", className: "domain-card2" },
    ];

    const totalSlides = Math.ceil(domains.length / 4); // Calculate total slides
    const [currentIndex, setCurrentIndex] = useState(0); // State to keep track of current index

    const showSlide = (index) => {
        setCurrentIndex(index); // Update current index state
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides); // Increment index
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides); // Decrement index
    };

    useEffect(() => {
        const intervalId = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return(
        <>
        {/* Apply blur when the modal is open */}
        <div className={`content-container ${isModalOpen ? 'blur' : ''}`}>
            <div className="tv-frame">
                <div className="container1">
                    <div className="left1">
                        <div>
                            <button onClick={openModal} className='i-button'>
                                <p>Give Interview</p>
                            </button>
                        </div>
                        <div className='left1-text'>
                            <div className='tagline'>
                                <p>Prepare . Learn . Ace . Crack</p>
                            </div>
                            <div className='w-text'>
                                <p>Say Hello to your Online Interview Mentor !!</p>
                            </div>
                            <div className='g-text'>
                                <p>Your Online Mentor and Guide for all your interview needs !!</p>
                            </div>
                            <div className='b-text'>
                                <p>Master Every Interview with Personalized Coaching and On-Demand Practice, Anytime, Anywhere!</p>
                            </div>
                            <div>
                                <button onClick={() => navigate('/register')} className='platform'>
                                    <span>
                                        <p style={{ paddingLeft: '40px' }}>Join our Platform &rarr;</p>
                                    </span>
                                </button>    
                            </div>
                        </div>        
                    </div>
                    <div className="right1">
                        <div>
                            <span>
                                <button onClick={() => navigate('/login')} className='login-button'>
                                    <p>Login</p>
                                </button>
                            </span>
                            <span>
                                <button onClick={() => navigate('/dashboard')} className='d-button'>
                                    <p>Dashboard</p>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='tv-frame'>
                <div className='container2'>
                    <div className='left2'>
                         {/* Image here */}
                    </div>
                    <div className='right2'>
                          <p className='headline'>Interview Tailored to Today’s Age</p>
                          <div className='h-text'>
                            <p>
                            Stay up to date with the latest questions and trends, and easily track your progress with our intuitive dashboard that highlights your strengths and areas for improvement. Receive personalized feedback after each quiz to better understand your performance and adjust your study strategies accordingly.

                            With regular updates, you'll be fully equipped for any interview, as we continuously incorporate the newest trends and technologies into our quizzes.
                            </p>
                          </div>
                    </div>
                </div>
            </div>
            
            <div className='domain'>
                <h1>Our Domains</h1>
                <div className='carousel'>
                    <div className='carousel-inner'>
                        {Array.from({ length: totalSlides }, (_, slideIndex) => (
                            <div className={`carousel-item ${slideIndex === currentIndex ? 'active' : ''}`} key={slideIndex}>
                                {domains.slice(slideIndex * 4, slideIndex * 4 + 4).map((domain, index) => (
                                    <div className={domain.className} key={index}>
                                        <p>{domain.name}</p>
                                        <div><button onClick={()=>navigate('/form')} className={`trynow-${domain.className === 'domain-card1' ? '1' : '2'}`}>
                                            <p>Try Now</p></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="carousel-indicators">
                        {Array.from({ length: totalSlides }, (_, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`indicator ${currentIndex === index ? 'active' : ''}`}
                                onClick={() => showSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>

        {/* Modal for Interview Component */}
        {isModalOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <Form />
                    <button className="close-modal" onClick={closeModal}>Close</button>
                </div>
            </div>
        )}

        </>
    );
}

export default Landing;
