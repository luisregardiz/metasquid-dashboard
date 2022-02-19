import { FC, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper";
import RedLightGreenLight from "../../public/assets/images/redlight-greenlight.png";
import FallingSquids from "../../public/assets/images/fallingsquids.png";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
interface DashboardSwiperProps {}

const DashboardSwiper: FC<DashboardSwiperProps> = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<null | any>(null);

    return (
        <>
            <Swiper
                modules={[FreeMode, Navigation, Thumbs]}
                thumbs={{ swiper: thumbsSwiper }}
                className="mySwiper2 my-5"
            >
                <SwiperSlide>
                    <div className="relative shadow-lg ">
                        <Image
                            src={RedLightGreenLight}
                            alt="Red Light Green Light"
                            height={750}
                            width={1500}
                            objectFit="cover"
                            className="rounded-lg"
                            priority
                        />
                        <div className="bg-swiper-img absolute top-0 h-full w-full">
                            <div className="w-2/5 h-full flex flex-col justify-center p-10 mx-10">
                                <span className="text-lg ">
                                    Get Whitelisted for the
                                </span>
                                <h3 className="text-5xl font-bold text-shadow-meta mt-2">
                                    Super
                                </h3>
                                <h3 className="text-5xl font-bold text-shadow-meta">
                                    BUSD N°1
                                </h3>
                                <p className="my-5">
                                    Get ready for the MetaSquid Game Super BUSD
                                    N°1, make sure you obtain your spot in the
                                    whitelisting! Check the website for further
                                    information!
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide key={2}>
                    <div className="relative shadow-lg">
                        <Image
                            src={FallingSquids}
                            alt="Falling Squids"
                            height={750}
                            width={1500}
                            objectFit="cover"
                            className="rounded-lg"
                            priority
                        />
                        <div className="bg-swiper-img absolute top-0 h-full w-full"></div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                slidesPerView={6}
                spaceBetween={10}
                slideToClickedSlide={true}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper absolute -top-20 "
            >
                <SwiperSlide>
                    <Image
                        src={RedLightGreenLight}
                        alt="Red Light Green Light thumb"
                        height={150}
                        width={300}
                        objectFit="cover"
                        className="rounded-lg cursor-pointer shadow-lg"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={FallingSquids}
                        alt="Falling Squids thumb"
                        height={150}
                        width={300}
                        objectFit="cover"
                        className="rounded-lg cursor-pointer shadow-lg"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default DashboardSwiper;
