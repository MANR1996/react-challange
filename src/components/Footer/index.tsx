import React from 'react';
import './index.css';
import Logo from '../atoms/Logo';
import PhoneIcon from '@mui/icons-material/Phone';
import SocialMedia from './components/SocialMedia';

function Footer() {
    return (
        <footer className='footer'>
            <div className='first-row'>
                <div className='contact-us'>
                    <Logo />
                    <p>We sell custom products for all your needs. Packs and bulk products that you will enjoy.</p>
                    <a href='tel:+1-202-555-0129' className='phone'><PhoneIcon style={{ color: '#091625', width: '22px', height: '22px' }} /><span>+1-202-555-0129</span></a>
                    <SocialMedia />
                </div>
                <div className='our-company'>
                    <div className='title'>Our company</div>
                    <nav className='items'>
                        <a href=''>About us</a>
                        <a href=''>FAQ</a>
                        <a href=''>Partnerships</a>
                        <a href=''>Sustainability</a>
                        <a href=''>Blog</a>
                    </nav>
                </div>
                <div className='help'>
                    <div className='title'>How can we help</div>
                    <nav className='items'>
                        <a href=''>Place a ticket</a>
                        <a href=''>Track your order</a>
                        <a href=''>Help center</a>
                    </nav>
                </div>
                <div className='information'>
                    <div className='title'>Information</div>
                    <nav className='items'>
                        <a href=''>Contact us</a>
                        <a href=''>Live chat</a>
                        <a href=''>Privacy</a>
                        <a href=''>Terms of use</a>
                    </nav>
                </div>
            </div>
            <div className='second-row'>
                <div className='rights'>© 2022 Customer Products. All rights reserved.</div>
                <div className='region-language'>
                    <div className='region'>Region:
                        <span>
                            <svg width='16' height='11' viewBox='0 0 16 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M7.34375 0H0.5C0.223844 0 0 0.223844 0 0.5V5.84375C0 5.93003 0.0699688 6 0.15625 6H7.34375C7.43003 6 7.5 5.93003 7.5 5.84375V0.15625C7.5 0.0699688 7.43003 0 7.34375 0ZM4.5 1C4.77625 1 5 1.22375 5 1.5C5 1.77625 4.77625 2 4.5 2C4.22375 2 4 1.77625 4 1.5C4 1.22375 4.22375 1 4.5 1ZM3 1C3.27625 1 3.5 1.22375 3.5 1.5C3.5 1.77625 3.27625 2 3 2C2.72375 2 2.5 1.77625 2.5 1.5C2.5 1.22375 2.72375 1 3 1ZM1.5 1C1.77625 1 2 1.22375 2 1.5C2 1.77625 1.77625 2 1.5 2C1.22375 2 1 1.77625 1 1.5C1 1.22375 1.22375 1 1.5 1ZM1.5 5C1.22375 5 1 4.77625 1 4.5C1 4.22375 1.22375 4 1.5 4C1.77625 4 2 4.22375 2 4.5C2 4.77625 1.77625 5 1.5 5ZM1.75 3C1.75 2.72375 1.97375 2.5 2.25 2.5C2.52625 2.5 2.75 2.72375 2.75 3C2.75 3.27625 2.52625 3.5 2.25 3.5C1.97375 3.5 1.75 3.27625 1.75 3ZM3 5C2.72375 5 2.5 4.77625 2.5 4.5C2.5 4.22375 2.72375 4 3 4C3.27625 4 3.5 4.22375 3.5 4.5C3.5 4.77625 3.27625 5 3 5ZM3.25 3C3.25 2.72375 3.47375 2.5 3.75 2.5C4.02625 2.5 4.25 2.72375 4.25 3C4.25 3.27625 4.02625 3.5 3.75 3.5C3.47375 3.5 3.25 3.27625 3.25 3ZM4.5 5C4.22375 5 4 4.77625 4 4.5C4 4.22375 4.22375 4 4.5 4C4.77625 4 5 4.22375 5 4.5C5 4.77625 4.77625 5 4.5 5ZM4.75 3C4.75 2.72375 4.97375 2.5 5.25 2.5C5.52625 2.5 5.75 2.72375 5.75 3C5.75 3.27625 5.52625 3.5 5.25 3.5C4.97375 3.5 4.75 3.27625 4.75 3ZM6 5C5.72375 5 5.5 4.77625 5.5 4.5C5.5 4.22375 5.72375 4 6 4C6.27625 4 6.5 4.22375 6.5 4.5C6.5 4.77625 6.27625 5 6 5ZM6 2C5.72375 2 5.5 1.77625 5.5 1.5C5.5 1.22375 5.72375 1 6 1C6.27625 1 6.5 1.22375 6.5 1.5C6.5 1.77625 6.27625 2 6 2Z' fill='black' />
                                <path d='M15.5 0H8.65625C8.56997 0 8.5 0.0699688 8.5 0.15625V1V1.34375C8.5 1.43003 8.56997 1.5 8.65625 1.5H15.8438C15.93 1.5 16 1.43003 16 1.34375V0.5C16 0.223844 15.7762 0 15.5 0Z' fill='black' />
                                <path d='M8.5 3V3.59375C8.5 3.68003 8.56997 3.75 8.65625 3.75H15.8438C15.93 3.75 16 3.68003 16 3.59375V2.65625C16 2.56997 15.93 2.5 15.8438 2.5H8.65625C8.56997 2.5 8.5 2.56997 8.5 2.65625V3Z' fill='black' />
                                <path d='M8.5 5.84375C8.5 5.93003 8.56997 6 8.65625 6H15.8438C15.93 6 16 5.93003 16 5.84375V4.90625C16 4.81997 15.93 4.75 15.8438 4.75H8.65625C8.56997 4.75 8.5 4.81997 8.5 4.90625V5.84375Z' fill='black' />
                                <path d='M0 7.15625V8.34375C0 8.43003 0.0699688 8.5 0.15625 8.5H15.8438C15.93 8.5 16 8.43003 16 8.34375V7.15625C16 7.06997 15.93 7 15.8438 7H0.15625C0.0699688 7 0 7.06997 0 7.15625Z' fill='black' />
                                <path d='M0 9.65625V10.5C0 10.7762 0.223844 11 0.5 11H15.5C15.7762 11 16 10.7762 16 10.5V9.65625C16 9.56997 15.93 9.5 15.8438 9.5H0.15625C0.0699688 9.5 0 9.56997 0 9.65625Z' fill='black' />
                            </svg>
                            United States
                            <svg width='8' height='5' viewBox='0 0 8 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
                                <path d='M6.96296 0L4 2.94191L1.03778 0L0 1.02941L4 5L8 1.02941L6.96296 0Z' fill='#091625' />
                            </svg>
                        </span>
                    </div>
                    <div className='language'>Language:
                        <select>
                            <option value='English'>English</option>
                            <option value='Spanish'>Spanish</option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;