'use client'
import React, { useState } from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, User, Button, MenuItem, Menu } from "@nextui-org/react";
import { Icon } from '@iconify/react'
import Link from 'next/link';
import { link } from 'fs';

export default function DesktopMenuComponent() {

    return (
        <>
            <div className="flex items-center gap-4">

                <Dropdown placement="bottom-end">
                    <DropdownTrigger>
                        <Button className='bg-transparent' isIconOnly variant='shadow'>
                            <Icon icon="iconamoon:profile-circle-fill"  width={100} className='hidden  md:block'/>
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
    const List : Menu[] = [ ]
    if (user) {
        List.push({
            name: "Logout",
            link: '/logout'
        })
    } else {
        List.push({
            name: "Login",
            link : "/login"
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