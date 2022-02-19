import Image from "next/image";
import { FC } from "react";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import RedLightGreenLight from "../../../../public/assets/images/redlight-greenlight.png";

interface AnnouncementProps {}

const Announcement: FC<AnnouncementProps> = () => {
    return (
        <div className="bg-card p-5">
            <Swiper
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                className="h-full w-auto flex items-center justify-center "
            >
                <SwiperSlide>
                    <div className="relative shadow-lg h-auto w-auto  ">
                        <Image
                            src={RedLightGreenLight}
                            alt="Red Light Green Light"
                            height={750}
                            width={1000}
                            objectFit="cover"
                            className="h-full w-full rounded-lg"
                            priority
                        />
                        <div className="bg-swiper-img-announce absolute top-0 h-full w-full rounded-lg flex flex-col justify-end items-center">
                            <div className="w-3/5  my-10">
                                <h4 className="text-2xl font-bold">
                                    Big Announcement
                                </h4>
                                <p>
                                    Keep following the updates guys !! We have
                                    some great news coming soon..
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative shadow-lg h-auto w-auto  ">
                        <Image
                            src={RedLightGreenLight}
                            alt="Red Light Green Light"
                            height={750}
                            width={1000}
                            objectFit="cover"
                            className="h-full w-full rounded-lg"
                            priority
                        />
                        <div className="bg-swiper-img-announce absolute top-0 h-full w-full rounded-lg flex flex-col justify-end items-center">
                            <div className="w-3/5  my-10">
                                <h4 className="text-2xl font-bold">
                                    Big Announcement
                                </h4>
                                <p>
                                    Keep following the updates guys !! We have
                                    some great news coming soon..
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Announcement;
