"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { VscDashboard } from "react-icons/vsc";
import { FaUserSecret } from "react-icons/fa";
import { FaBookDead } from "react-icons/fa";
import { SiParrotsecurity } from "react-icons/si";
import { BsCoin } from "react-icons/bs";
import { RiCalendarEventLine, RiHotelLine } from "react-icons/ri";
import clsx from "clsx";
import TextLogo from "@/app/components/Logo";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: <VscDashboard size={20} /> },
    {
      href: "/admin/rooms",
      label: "Rooms & Suites",
      icon: <RiHotelLine size={20} />,
    },
    { href: "/admin/assassin", label: "Assassin", icon: <SiParrotsecurity /> },
    { href: "/admin/guests", label: "Guest", icon: <FaUserSecret size={20} /> },
    { href: "/admin/services", label: "Bookings", icon: <FaBookDead /> },
    { href: "/admin/services", label: "Finance", icon: <BsCoin /> },
    { href: "/admin/services", label: "Events", icon: <RiCalendarEventLine /> },
  ];

  return (
    <aside className="h-full bg-[#191C24] text-white pr-6">
      <div className="px-5 pt-4">
        <TextLogo />
      </div>
      <ul className="gap-4 flex flex-col mt-5">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={clsx(
                "flex items-center gap-2 py-2 text-base font-medium px-5 text-[#6C7293]",
                pathname === item.href
                  ? "SelectedDashobardNavItem"
                  : "dashobardNavItem"
              )}
            >
              {item.icon} {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
