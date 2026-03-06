import React, { useEffect, useRef, useState } from 'react';
import { Globe, Handshake, Trophy, Medal } from 'lucide-react';
import { useInView, animate } from 'framer-motion';

const Counter = ({ value, color }) => {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 2,
                onUpdate(val) {
                    setDisplayValue(Math.round(val));
                },
            });
            return () => controls.stop();
        }
    }, [isInView, value]);

    return (
        <span
            ref={ref}
            className={`text-3xl md:text-6xl font-extrabold mb-1 md:mb-4 ${color}`}
        >
            {displayValue}
        </span>
    );
};

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: <Globe className="w-16 h-16 text-[#68bb59]" />,
            count: 60,
            label: "COUNTRIES",
            color: "text-[#68bb59]"
        },
        {
            icon: <Handshake className="w-16 h-16 text-gray-900" />,
            count: 70,
            label: "INTERNATIONAL COLLABORATIONS",
            color: "text-[#0ea5e9]"
        },
        {
            icon: <Trophy className="w-16 h-16 text-[#ef4136]" />,
            count: 30,
            label: "INTERNATIONAL AND NATIONAL AWARDS",
            color: "text-[#ef4136]"
        },
        {
            icon: <Medal className="w-16 h-16 text-[#8b0000]" />,
            count: 70,
            label: "GOLD MEDALS",
            color: "text-[#8b0000]"
        }
    ];

    return (
        <section className="py-24 bg-[#f4f7f6]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2d3748] mb-2 font-sans">Why Choose Us?</h2>
                    <p className="text-gray-500 font-medium">A choice that makes the difference.</p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-7xl mx-auto">
                    {reasons.map((item, index) => (
                        <div key={index} className="bg-white p-4 md:p-10 flex flex-col items-center justify-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full min-h-[180px] md:aspect-square">
                            <div className="mb-3 md:mb-8 flex items-center justify-center scale-75 md:scale-100">
                                {item.icon}
                            </div>

                            <Counter value={item.count} color={item.color} />

                            <h3 className="text-center text-[#4a5568] text-[9px] md:text-sm font-bold tracking-widest leading-tight md:leading-snug uppercase px-1">
                                {item.label}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
