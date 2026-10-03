import logo from "./assets/logo-text.png";

export default function Navbar() {
    return (
        <nav className="bg-white sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className=" flex flex-1 justify-start">
                    <img src={logo} alt="Logo" />
                </div>
                <div>
                    <ul className="flex items-center gap-8 text-sm">
                        <li><a className="text-pink-600" href="#">Home</a></li>
                        <li><a className="hover:text-pink-600 transition-colors" href="#">Technologies</a></li>
                        <li><a className="hover:text-pink-600 transition-colors" href="#">Projects</a></li>
                        <li><a className="hover:text-pink-600 transition-colors" href="#">About</a></li>
                        <li><a className="hover:text-pink-600 transition-colors" href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="flex-1 flex items-center justify-end gap-4">
                    <button className="hover:text-pink-600 transition-colors">Sign In</button>
                    <button className="btn rounded-full bg-pink-500 text-white ">Sign Up</button>

                </div>
            </div>
        </nav>
    )
}
