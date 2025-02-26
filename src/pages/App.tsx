import React from "react";
import { Button, Image } from "@heroui/react";
import TitleDescription from "../components/TitleDescription";
import config from "../config/config";
import Logo from "../layouts/logo/Logo";
import { useEffect } from "react";
import { Icons } from "../components/icons/Icon";
import CardComponent from "../components/CardComponent";

export default function App() {
    useEffect(() => {
        document.title = config.siteName;
    }, []);
    return (
        <div>
            <div className="container px-6 mx-auto flex flex-col gap-5 md:gap-10 justify-center items-center py-10 md:py-20">
                <div className="w-full lg:w-3/4">
                    <TitleDescription
                        title="We document real stories through compelling visuals. More than just images, we bring narratives that inspire and resonate."
                        size="lg"
                    />
                </div>

                <div className="w-full lg:w-3/4 flex flex-row gap-6 items-center">
                    <hr className="hidden md:block w-full border-[#D1D5DB]" />
                    <Button
                        className="text-body-xl-medium font-lora bg-[#121212] text-neutral-50 px-6"
                        size="lg"
                        radius="none"
                    >
                        Watch Our Work
                    </Button>
                </div>
            </div>

            <div className="w-full mt-10 md:mt-20 overflow-hidden relative">
                <Image
                    radius="none"
                    height={320}
                    width="100%"
                    src="https://images.unsplash.com/photo-1541534219036-d216070cb5d2"
                    className="w-full h-full object-cover object-center z-0"
                />

                <div className="absolute inset-0 container px-6 mx-auto h-full w-full flex items-center z-10">
                    <div className="flex flex-row gap-2.5 items-center">
                        <Logo color="#F9FAFB" />
                        <h5 className="text-body-xl-medium text-neutral-50">{config.siteName}</h5>
                    </div>
                </div>
            </div>

            <div className="container px-6 mx-auto py-10 md:py-20 flex flex-col gap-8 md:gap-16">
                <div className="w-3/4">
                    <TitleDescription
                        title="We take pride in collaborating with brands, companies, and organizations that value the power of storytelling."
                        weight="medium"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {config.organization.map((item, index) => (
                        <div
                            key={index}
                            className="bg-neutral-100 flex justify-center items-center h-64"
                        >
                            {React.createElement(Icons[item.image as keyof typeof Icons])}
                        </div>
                    ))}
                </div>
            </div>

            <div className="container px-6 mx-auto py-10 md:py-20 flex flex-col gap-8 md:gap-16">
                <TitleDescription title="Every Frame, A Story Worth Telling" weight="medium" justify="center" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:items-center">
                    <Image
                        src="https://images.unsplash.com/photo-1525054934392-d6f3b884a634"
                        alt="landscape photography of snow field and bare tree"
                        radius="none"
                    />

                    <div className="flex flex-col gap-8 md:gap-16">
                        {config.storyTellings.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-row gap-4 items-start pb-4 border-b border-neutral-300"
                            >
                                <div className="w-6 h-6 bg-neutral-200"></div>
                                <p className="text-body-lg-medium md:text-body-xl-medium lg:text-display-xs-medium w-full">{item.title}</p>
                                <Icons.ArrowUpRight color="#6B7280" size={40} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container px-6 mx-auto py-10 md:py-20 flex flex-col gap-8 md:gap-16">
                <TitleDescription title="Experience Stories That Matter" weight="medium" justify="start" />

                <div className="flex flex-col gap-6 md:gap-12">
                    {config.experiences.map((item, index) => (
                        <CardComponent
                            key={index}
                            title={item.title}
                            desc={item.desc}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>

            <div className="container px-6 mx-auto py-10 md:py-20 flex flex-col gap-8 md:gap-16">
                <div className="flex flex-col md:flex-row md:justify-between gap-6 md:items-center">
                    <TitleDescription title="Let’s Create Something Meaningful Together" weight="medium" justify="start" />
                    <hr className="hidden md:block border-[#D1D5DB] w-full max-w-56" />
                    <div className="flex">
                        <Button
                            className="text-body-xl-medium font-lora bg-[#121212] text-neutral-50 px-6"
                            size="lg"
                            radius="none"
                        >
                            Let’s Talk
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {config.images.map((item, index) => (
                        <Image
                            key={index}
                            src={item.image}
                            alt={item.title}
                            radius="none"
                            width="100%"
                            height={480}
                            className="hover:scale-105 cursor-pointer"
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}
