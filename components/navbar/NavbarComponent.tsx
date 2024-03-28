'use client'
import {Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle} from 'flowbite-react';
import {usePathname} from 'next/navigation'
import Link from "next/link";
import {useState} from "react";
import {MenuList} from "@/components/navbar/menu";
import Image from "next/image";

export default function NavbarComponent() {
    const pathname = usePathname();
    const [menu, setMenu] = useState();
    return (
        <Navbar fluid rounded>
            <NavbarBrand href="/">
                <Image src="/next.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo"/>
                <span
                    className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </NavbarBrand>
            <div className="flex md:order-2">
                <Button>Get started</Button>
                <NavbarToggle/>
            </div>
            <NavbarCollapse>
                {MenuList.map((item, index) => (
                    <NavbarLink key={index} as={Link} href={item.path} active={item.path === pathname}>
                        {item.name}
                    </NavbarLink>))}
            </NavbarCollapse>
        </Navbar>
    );
}
