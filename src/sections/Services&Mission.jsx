import { Element } from "react-scroll";
import { servicesMission } from "../constants/index.jsx";

const ServicesMission = () => {
    return (
        <section>
            <Element name="services & Mission">
                <div className="container">
                    <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
                        {servicesMission.map(({ id, icon, caption, title, text }) => (
                            <div
                                key={id}
                                className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320 transform transition duration-500 hover:scale-105 hover:-translate-y-2 hover:shadow-xl group"
                            >
                                <div className="w-full flex justify-start items-start">
                                    <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
                                        <div className="w-0.5 h-16 bg-s3" />
                                        <img
                                            src={icon}
                                            className="size-28 object-contain transition-transform duration-500 group-hover:rotate-6"
                                            alt={title}
                                        />
                                    </div>
                                </div>

                                {/* Caption comes before title */}
                                <p className="caption mb-5 max-md:mb-6">{caption}</p>
                                <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max-md:h5">
                                    {title}
                                </h2>
                                <p className="text-[1.1rem] mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default ServicesMission;
