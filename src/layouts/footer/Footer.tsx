import { Link } from "@heroui/react";
import config from "../../config/config";
import Logo from "../logo/Logo";
import { Icons } from "../../components/icons/Icon";

export default function Footer() {
    return (
        <div className="container px-6 mx-auto py-10 md:py-20 flex flex-col md:flex-row md:justify-between gap-8 md:gap-16">
            <div className="flex flex-row gap-4 items-center">
                <Logo size={56} />
                <h5 className="text-display-sm-medium font-lora">{config.siteName}</h5>
            </div>

            <div className="flex flex-wrap flex-row gap-10 md:gap-20">
                {config.footer.map((item, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-3"
                    >
                        <p className="text-body-xl-medium font-lora">{item.title}</p>

                        {item.links.map((link, indexLink) => (
                            <Link
                                key={indexLink}
                                href={link.direction}
                                className="flex flex-row justify-between gap-6 w-full hover:scale-105 duration-500 text-neutral-600 text-body-md-medium font-lora"
                            >
                                {link.title}
                                <Icons.ArrowRight color="#6B7280" />
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
