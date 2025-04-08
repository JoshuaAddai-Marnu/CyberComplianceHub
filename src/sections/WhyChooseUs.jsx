import { Element } from "react-scroll";
import { plans } from "../constants/index.jsx";
// Removed unused imports like useState, CountUp, and Button

const WhyChooseUs = () => {
    return (
        <section>
            <Element name="why us?">
                <div className="container">
                    <div className="max-w-960 relative mx-auto pb-20 pt-28 text-center">
                        <h3 className="h3 mb-6 text-p4">Why Choose Us?</h3>
                        <p className="body-1 max-w-lg mx-auto mb-14">
                            Discover the key benefits that set us apart.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className="relative border-2 p-7 rounded-3xl max-w-sm flex flex-col justify-between transform transition duration-500 hover:scale-105 hover:shadow-xl"
                            >
                                <div className="mb-6">
                                    <h4 className="small-2 uppercase mb-4 text-p1">
                                        {plan.title}
                                    </h4>
                                    <p className="body-1 text-p4">
                                        {plan.description}
                                    </p>
                                </div>
                                {/* Optional: Add a button or other interactive element here */}
                            </div>
                        ))}
                    </div>
                </div>
            </Element>
        </section>
    );
};

export default WhyChooseUs;
