
'use client';

import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import {IoMdSettings} from "react-icons/io";
import React, {useState} from "react";
import {MenuList} from "./menu"

type MenuItem = {
    name: string;
    path: string;
    icon: React.ElementType;
};

export default function SideBarComponent() {
    const [menuList, setMenuList] = useState<MenuItem[]>(MenuList)
    return (
        <Sidebar aria-label="Default sidebar example">
            <Sidebar.Logo href="#" img="/next.svg" imgAlt="Flowbite logo">
                Flowbite
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                    {menuList?.map((item, index) => (
                        <Sidebar.Item key={index} href={item.path} icon={item.icon}>
                            {item.name}
                        </Sidebar.Item>))}
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
}
