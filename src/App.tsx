import React, { useState } from "react";
import "./global.css";

const App = () => {
    const NavLinks = ["About", "Services", "Portfolio", "Contact"];
    const ServicesCardInfo = [
        {
            cardTitle: "Web design",
            cardInfo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            cardTitle: "Development",
            cardInfo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            cardTitle: "SEO Optimization",
            cardInfo:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];
    const PortfolioCardInfo = [
        { cardTitle: "Project One", cardInfo: "" },
        { cardTitle: "Project Two", cardInfo: "" },
        { cardTitle: "Project Three", cardInfo: "" },
    ];

    return (
        <section className="w-full bg-[rgb(250,249,247)] flex justify-center items-center">
            <div className="w-[90%] lg:max-w-[1500px] h-[95%] md:w-[95%] md:h-[90%] bg-[rgb(255,255,255)] px-5 md:px-10 py-2 md:py-4">
                <NavBar title={"Home"} navLinks={NavLinks} />
                <div className="max-sm:h-[90vh] max-sm:flex items-center">
                    <div className="mt-6 ">
                        <h1 className="text-4xl font-bold mb-1.5">
                            Build your dream website
                        </h1>
                        <span className="text-gray-700 block mb-4">
                            We provide innovative solutions to help you grow
                            your online presence.
                        </span>
                        <button className="bg-[rgb(99,57,223)] text-white px-3 py-1 lg:px-6 lg:py-2 rounded-md ">
                            Get Started
                        </button>
                    </div>
                </div>

                <SectionAndCards
                    title="Our Services"
                    cardInfo={ServicesCardInfo}
                    className="mt-10 "
                />

                <SectionAndCards
                    title="Portfolio"
                    cardInfo={PortfolioCardInfo}
                    className="mt-10 "
                />

                <div className="mt-10">
                    <h1 className="text-2xl font-bold mb-1.5">About Us</h1>
                    <p className="text-gray-700 block mb-4">
                        Build your dream websites here at Lorem Ipsum
                        Development Inc. We build the most innovative webpages
                        there are.
                    </p>
                </div>
            </div>
        </section>
    );
};

function NavBar({ title, navLinks }: { title: string; navLinks: string[] }) {
    const [isNavOpen, setIsNavOpen] = useState(true);
    const currentPath = window.location.pathname;
    return (
        <nav className="relative flex flex-col md:flex-row list-none items-baseline justify-between">
            <h1 className="relative text-lg md:text-2xl w-full z-10 bg-white">
                {title}
                <button
                    className="md:hidden absolute text-2xl right-0 px-2"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                >
                    {isNavOpen ? "x" : "="}
                </button>
            </h1>
            <div
                className={
                    "flex flex-col max-md:w-full max-md:absolute md:flex-row top-8 left-0 space-x-8 text-sm md:text-lg duration-500 transition-all " +
                    (isNavOpen ? "opacity-100" : "left-[130%] opacity-0")
                }
            >
                {navLinks.map((link) => (
                    <a
                        href={link}
                        className={
                            "text-center w-full bg-white py-3 " +
                            ("/" + link === currentPath ? "font-bold" : "")
                        }
                    >
                        {link}
                    </a>
                ))}
            </div>
        </nav>
    );
}

function SectionAndCards({
    title,
    cardInfo,
    className,
}: {
    title: string;
    cardInfo: { cardTitle: string; cardInfo?: string }[];
    className?: string;
}) {
    return (
        <div className={className}>
            <h1 className="text-2xl font-bold">{title}</h1>
            <div className="flex flex-col sm:flex-row space-x-3 lg:space-x-6 max-sm:space-y-3 justify-around mt-4">
                {cardInfo.map((card) => (
                    <div className="w-full lg:max-w-[450px] flex-auto p-3 border border-gray-300">
                        <span className="block font-bold">
                            {card.cardTitle}
                        </span>
                        <p>{card.cardInfo}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
