

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-purple-600 text-base-content p-10">
                <a className="flex text-3xl font-bold text-rose-600">
                    <img className="w-12" src="https://i.ibb.co.com/yyw6v3v/images.png"></img>
                    <span className="mt-2 script">Food Zone</span>
                </a>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="">Branding</a>
                    <a className="">Design</a>
                    <a className="">Marketing</a>
                    <a className="">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="">About us</a>
                    <a className="">Contact</a>
                    <a className="">Jobs</a>
                    <a className="">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="r">Terms of use</a>
                    <a className="r">Privacy policy</a>
                    <a className="">Cookie policy</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;