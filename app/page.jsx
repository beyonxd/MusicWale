import React from "react";
import BackgroundImg from "../public/backgroundImg.jpg";
import Image from "next/image";
import CarouselBar from "@/components/Clients/Carousel";
import Footer from "@/components/Server/Footer";

const page = () => {
  return (
    <div className="body h-full w-full text-white">
      <div className="w-full h-full">
        <Image
          className="background-img w-full mb-[-450px] h-[90%]"
          src={BackgroundImg}
          alt="background Image"
        />
      <div className="body__container lg:m-10 max-sm:m-5 sm:m-5 md:m-8">

          <div className="intro">
                  <h1 className="text-3xl mb-5">MusicWale on your stage!</h1>
        </div>
          
          <CarouselBar />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default page;
