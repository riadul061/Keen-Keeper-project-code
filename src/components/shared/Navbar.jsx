"use client";
import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MyLink from "./MyLink";
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      path: "/",
      text: "Home",
      element: <RiHome2Line />
    },
    {
      path: "/timeline",
      text: "Timeline",
      element: <RiTimeLine />
    },
    {
      path: "/stats",
      text: "Stats",
      element: <ImStatsDots />
    },
  ];

  return (
    <nav className="border-b bg-white">
      <div className="flex justify-between items-center py-1 px-6 max-w-7xl mx-auto">

        {/* Logo */}
        <Image
          src={logoImg}
          alt="keen-keeper logo"
          className="w-[120px] h-auto"
        />

        {/* Nav Items */}
        <ul className="flex gap-3 items-center">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;

            return (
              <li key={index}>
                <MyLink href={item.path}>
                  <span
                    className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-green-900 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {item.element}
                    {item.text}
                  </span>
                </MyLink>
              </li>
            );
          })}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;