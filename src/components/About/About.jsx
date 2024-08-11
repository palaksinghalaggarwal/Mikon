import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/about_img.jpg';

export default function About() {
    // Icons
    const faBusinessIcon = <FontAwesomeIcon icon={faBusinessTime} />
    const faChartPieIcon = <FontAwesomeIcon icon={faChartPie} />
    const faTruckFastIcon = <FontAwesomeIcon icon={faTruckFast} />
    const faUserClockIcon = <FontAwesomeIcon icon={faUserClock} />
    const faHouseLaptopIcon = <FontAwesomeIcon icon={faHouseLaptop} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

  return (
    <>
    <section id="about">
        <div class="container">
            <div className="title_headling">
                <h3>We Provides Shortage Remarkable Ideas!</h3>
                <p>We provide innovative solutions that turn challenges into remarkable opportunities for success.</p>
            </div>
            <div className="about_box_wrapper">
                <div className="about_box">
                    <div className="about_icon">
                        {faBusinessIcon}
                    </div>
                    <div className="about_content">
                        <h5>Development</h5>
                        <p>Our development services create custom solutions, driving innovation and growth for your business.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon green_icon">
                        {faChartPieIcon}
                    </div>
                    <div className="about_content">
                        <h5>Integration</h5>
                        <p>Seamless integration ensures your systems operate efficiently, enhancing productivity and overall performance.</p>
                    </div>
                </div>
                <div className="about_box">
                    <div className="about_icon blue_icon">
                        {faTruckFastIcon}
                    </div>
                    <div className="about_content">
                        <h5>Branding</h5>
                        <p>We build strong branding strategies that resonate, elevating your business's identity and market presence.</p>
                    </div>
                </div>
            </div>

            <div className="about_box_details">
                <div className="about_col">
                    <div className="about_image">
                        <img src={AboutImage} alt="about" className="about_main"/>
                    </div>
                    <div className="img_info__box">
                        <h6 className="img_info__title">GET A PRICE QUOTE TODAY!</h6>
                        <p>Nemo enim ipsam oluptatem quia oluptas <br/>sit aspernatur aut odit aut fugit.</p>
                        <a href="/">{faPhoneIcon} <span>1-800-654-3210</span></a>
                    </div>
                </div>
                <div className="about_col more_space">
                    <h3>We have business skills that will increase your earnings</h3>
                    <p>We possess the business skills to significantly boost your earnings. Our expertise in strategic planning and execution ensures optimal financial growth and success.</p>

                    <div className="grid_info">
                        <div className="icon">{faUserClockIcon}</div>
                        <div className="detail">
                            <h4>Start your own business in minutes</h4>
                            <p>Launch your own business quickly with our streamlined, easy-to-follow setup process.</p>
                        </div>
                    </div>
                    <div className="grid_info">
                        <div className="icon green_icon">{faHouseLaptopIcon}</div>
                        <div className="detail">
                            <h4>Open a business account online</h4>
                            <p>Open a business account online effortlessly, with quick and secure setup.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
