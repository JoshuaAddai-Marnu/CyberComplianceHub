import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../components/Marker.jsx";

const About = () => {
    return (
        <section>
            <Element
                name="about us"
                className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
            >
                <div className="container">
                    <div className="flex items-center gap-16 max-lg:flex-col">
                        <div className="relative flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">

                            {/* Styled Title */}
                            <div className="mb-6">
                                <h2 className="text-sm font-bold tracking-widest text-blue-400 uppercase mb-2">
                                    About Us
                                </h2>
                                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-300 rounded-full mb-6" />
                            </div>

                            {/* Logo */}
                            <div className="mb-8">
                                <img
                                    src="/images/companylogo5.png"
                                    width={160}
                                    height={55}
                                    alt="company logo"
                                />
                            </div>

                            {/* Description */}
                            <p className="text-base text-slate-600 dark:text-slate-300 mb-10 max-w-md leading-relaxed">
                                Cyber Compliance Hub serves businesses worldwide — whether you’re a startup with 8 employees or a multinational
                                corporation with 8,000+ employees. We customize our services to meet the specific needs of businesses across all industries,
                                regardless of size.
                            </p>

                            {/* Social/Tech Links */}
                            <ul className="flex flex-wrap items-center gap-6">
                                {links.map(({ id, url, icon }) => (
                                    <li
                                        key={id}
                                        className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                                    >
                                        <a
                                            href={url}
                                            className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-full border-2 border-s3 bg-s1 transition-all duration-300 hover:scale-105"
                                        >
                                            <span className="absolute -top-2 rotate-90">
                                                <Marker />
                                            </span>
                                            <img
                                                src={"/images/lines.svg"}
                                                alt="lines"
                                                className="absolute size-13/20 object-contain"
                                            />
                                            <span className="download_tech-icon">{icon}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Info Card */}
                        <div className="mb-10 max-md:hidden">
                            <div className="relative w-[955px] p-1 rounded-[30px] bg-gradient-to-br from-blue-800 to-blue-950 shadow-xl shadow-blue-950/40 border border-blue-600/40 backdrop-blur-lg">
                                <div className="relative rounded-[24px] bg-[#0b1d3a]/80 px-10 py-12 text-white backdrop-blur-md shadow-inner">
                                    <span className="absolute top-6 left-8 w-3 h-3 rounded-full bg-p2" />
                                    <span className="absolute top-6 left-14 w-3 h-3 rounded-full bg-s3" />
                                    <span className="absolute top-6 left-20 w-3 h-3 rounded-full bg-p1/15" />

                                    <div className="text-lg space-y-3 leading-relaxed tracking-wide">
                                        <h4 className="text-2xl font-semibold mb-4 border-b border-white/20 pb-2">Cyber Compliance Hub Admin</h4>
                                        <p><span className="font-semibold">Address:</span> London United Kingdom</p>
                                        <p><span className="font-semibold">Opening and closing times:</span> there’s none.</p>
                                        <p><span className="font-semibold">Email:</span> <a href="mailto:cybercompliancehub@outlook.com" className="underline text-blue-300 hover:text-blue-400">cybercompliancehub@outlook.com</a></p>
                                        <p><span className="font-semibold">Tele No:</span> 07549 946446</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Element>
        </section>
    );
};

export default About;
