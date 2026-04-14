
import logoImg from "@/assets/logo.png";

import Image from "next/image";
import MyLink from "./MyLink";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",

    },
    {
      path: "/timeline",
      text: "Timeline",
    },
    {
      path: "/Stats",
      text: "Stats",
    },
  ];

  return (
    <nav className=" shadow">
      <div className="flex justify-between gap-4 items-center  py-[8px] container mx-auto">
        <Image
          src={logoImg}
          alt="keen-keeper logo"
          className="w-[141px] h-[31px]"
        />

        <ul className="flex justify-between gap-2 items-center">
          {navItems.map((item, index) => (
            // Client component
            <MyLink key={index} href={item.path}>
              {item.text}
            </MyLink>
          ))}

          {/* 
          <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/apps"}>Apps</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/installedApps"}>Installation</MyNavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;