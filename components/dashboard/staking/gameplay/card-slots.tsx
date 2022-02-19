import Image from "next/image";
import { FC } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
interface CardSlotsProps {
    NFTs: NFT[];
    isSecondary?: boolean;
}

type NFT = {
    name: string;
    image: string;
};

const CardSlots: FC<CardSlotsProps> = ({ NFTs, isSecondary }) => {
    return (
        <Swiper
            direction={"vertical"}
            modules={[Navigation]}
            navigation
            loop={true}
            className="max-w-md max-h-96 z-40"
        >
            {NFTs.map((nft, index) => (
                <SwiperSlide key={index}>
                    <div className="relative">
                        <div className="flex flex-col items-center h-full justify-center ">
                            <Image
                                src={nft.image}
                                alt="NFT"
                                height={300}
                                width={300}
                                objectFit="contain"
                            />
                            <span className="uppercase text-xl font-bold">
                                {nft.name}
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
            <div
                className={`absolute h-[280px] w-[115px] ${
                    isSecondary
                        ? "bg-gameplay-item-secondary"
                        : "bg-gameplay-item"
                } top-10 left-12`}
            ></div>
        </Swiper>
    );
};

export default CardSlots;
