import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>

            <div className='footer-left'>
                <h3>
                    <span className="logo">B</span>eBike
                </h3>

                <p>
                    Trafalgar provides progressive and affordable <br/> healthcare accessible on mobile and online <br/> for everyone.
                </p>

                <p>
                    &copy;eBike 2021. All rghts reserved.
                </p>
            </div>

            <div className='footer-right'>

                <div className='company-list'>

                    <ul>
                        <li>
                            <a href="/" className='bold-footer-link'>Company</a>
                        </li>

                        <li>
                            <a href="/">Product</a>
                        </li>

                        <li>
                            <a href="/">Bike type</a>
                        </li>

                        <li>
                            <a href="/">About Us</a>
                        </li>

                        <li>
                            <a href="/">Contact</a>
                        </li>

                    </ul>

                </div>

                <div className='help-list'>

                    <ul>

                        <li>
                            <a href="/" className='bold-footer-link'>Help</a>
                        </li>

                        <li>
                            <a href="/">Help center</a>
                        </li>

                        <li>
                            <a href="/">Contact support</a>
                        </li>

                        <li>
                            <a href="/">Instructions</a>
                        </li>

                        <li>
                            <a href="/">How it works</a>
                        </li>

                    </ul>

                </div>

            </div>

        </div>
    )
}

export default Footer;
