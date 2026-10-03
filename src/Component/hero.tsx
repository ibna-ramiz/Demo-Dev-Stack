import heroImage from '../assets/banner-stack.png'

export default function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto px-4 py-10">
            <div id="left">
                <h1 className="text-6xl font-bold">Build Your Ideal
                    <br />
                    <span className="text-brand-gradient"> Development Stack</span>
                </h1>
                <br />
                <p className="text-lg"> Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>
                <div className="flex gap-4 mt-8 text-sm">
                    <button className="btn bg-brand-gradient text-white">Explore Technologies</button>
                    <button className="btn text-gray-600 border-2 px-6 py-2.5">Learn More</button>
                </div>

            </div>

            <div id="right">
                <img src={heroImage} alt="Hero Image" />
            </div>
            <br />
            <br />

        </div>
    )
}
