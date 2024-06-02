'use client'
import React, { useState } from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User, Button, MenuItem, Menu } from "@nextui-org/react";
import { Icon } from '@iconify/react'
import Link from 'next/link';
import { link } from 'fs';

export default function MobileMenuComponent() {

    return (
        <>
            <div className="flex items-center gap-4">

                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Button color="success" isIconOnly variant='shadow'>
                            <Icon color='white' icon="material-symbols:menu" className='block sm:hidden' />
                            <Icon icon="iconamoon:profile-circle-fill" color='white' width={100} className='hidden md:block'/>
                        </Button>
                    </DropdownTrigger>
                    <DropdownListMenu />
                </Dropdown>

            </div>
        </>
    )
}

type Menu = {
    name: string,
    link: string
}

const DropdownListMenu = () => {
    const [user, setUser] = useState(false)
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
    if (user) {
        List.push({
            name: "Logout",
            link: '/logout'
        })
    }
    return <DropdownMenu items={List} variant='flat'>
        {
            (item) => (
                <DropdownItem
                    key={item.name}
                >
                    <Link href={item.link} className='block '  >
                        {item.name}
                    </Link>
                </DropdownItem>
            )
        }
    </DropdownMenu>
}