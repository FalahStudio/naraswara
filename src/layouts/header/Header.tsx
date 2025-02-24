import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react"
import config from "../../config/config"
import Logo from "../logo/Logo"

export default function Header() {
    return (
        <header>
            <Navbar
                shouldHideOnScroll
                maxWidth="2xl"
                className="font-lora border-b border-neutral-300 py-4"
            >
                <NavbarBrand className="flex gap-2.5 items-center">
                    <Logo />
                    <p className="text-body-xl-medium">{config.siteName}</p>
                </NavbarBrand>
                <NavbarContent
                    justify="end"
                    className="hidden lg:flex lg:gap-8 text-body-md-medium"
                >
                    {config.navbar.map((item, index) => (
                        <NavbarItem key={index}>
                            <Link href={item.link}>{item.title}</Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            </Navbar>
        </header>
    )
}
