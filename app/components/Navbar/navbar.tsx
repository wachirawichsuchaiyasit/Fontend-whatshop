"use client"
import React, { useState } from "react";
import { Avatar, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import MobileMenuComponent from "./mobilemenu";
import DesktopMenuComponent from "./desktopmenu";

export default function NavbarComponent() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>

            <Navbar className="border-b-2">
                <NavbarContent justify="start">
                    <Avatar
                        className="hidden md:block bg-transparent "
                        src="whatplan.png"
                        size="lg"
                    />
                    <p className="font-bold text-inherit sm:hidden">WHATPLAN</p>
                    <NavbarMenuList />
                </NavbarContent>

                <NavbarContent justify="end" className="hidden md:flex">
                    <DesktopMenuComponent />
                </NavbarContent>


                <NavbarContent justify="end" className="sm:hidden">
                    <MobileMenuComponent />
                </NavbarContent>


            </Navbar>
        </>
    )
}

type Menu = {
    name: string,
    link: string
}

const NavbarMenuList = () => {
    const List: Menu[] = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Scan",
            link: "/scan"
        },
        {
            name: "Dashboard",
            link: "/dashboard"
        },
    ]

    const pathUrl = usePathname()


    return List.map((item, key) => (
        <NavbarItem className="hidden md:block ">
            <Link href={item.link} color={pathUrl == item.link ? ("success") : ("foreground")} >{item.name}</Link>
        </NavbarItem>
    ))
}