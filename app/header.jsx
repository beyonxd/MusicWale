import React from "react";
import Link from "next/link";
import Image from "next/image";
import musicIcon from "../public/musicIcon.png";
import LoginBtn from "../components/Clients/Login";
import ContactUsBtn from "@/components/Clients/ContactUsBtn";



const Header = () => {
  return (
    <div className="header z-50 shadow-md grad text-white w-full h-20 items-center flex">
      <div
        className=" sm
        header__container
        flex
        justify-between
        lg:w-3/4
        mx-auto
        md:w-5/6
        max-sm:w-[95%]
        sm:w-[90%]
        "
      >
        {/* Company logo  */}
        <Link href={"/"}>
          <div className="logo_container flex mr-3">
            <Image src={musicIcon} alt="logo" />
            <h1 className="font-lobster max-sm:hidden  text-3xl ">MusicWale</h1>
            <h1 className="font-lobster lg:hidden md:hidden sm:hidden  text-3xl ">
              MW
            </h1>
          </div>
        </Link>

        {/* Options  */}
        <div className="options__conatiner flex space-x-20 max-sm:space-x-2 sm:space-x-10 items-center">
          
          
        <div className="contactUsBtn__container">
            <p>Book your show now</p>
            <ContactUsBtn />
        </div>
          <LoginBtn />
        </div>
      </div>
    </div>
  );
};

export default Header;
