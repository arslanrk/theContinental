'use client'

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import TextLogo from "./Logo";

export default function CustomNavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MenuItem = [
    {id: 1, title:'Home', ref: '/'},
    {id: 2, title:'Rooms & Suites', ref: '/rooms'},
    {id: 3, title:'Services', ref: '/services'},
    {id: 4, title:'Membership', ref: '/membership'},
    {id: 5, title:'Hire An Assassin', ref:'/assassin'},
    {id: 6, title:'About', ref: '/'},
    {id: 7, title:'Contact', ref: '/'},
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-black customBoxShadow">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-cutomGold"
        />
        <NavbarBrand>
          <TextLogo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {MenuItem.map((linkItem)=>{
          return(
            <NavbarItem key={linkItem.id}>
          <Link href={linkItem.ref} className="text-medium font-semibold leading-6 font-heading text-[#ffd23e] transition duration-300 ease-in-out transform hover:text-[#ffe99f] hover:shadow-sm hover:shadow-[#6a7107] glow"
            >
            {linkItem.title}
          </Link>
        </NavbarItem>
          )
        })}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} href="/signup" variant="flat" className="bg-black border-3 border-[#fdc564] text-cutomGold px-4 py-1 font-body font-bold rounded-full">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-black">
        {MenuItem.map((item) => (
          <NavbarMenuItem key={item.id}>
            <Link
              className="w-full text-cutomGold"
              href={item.ref}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
