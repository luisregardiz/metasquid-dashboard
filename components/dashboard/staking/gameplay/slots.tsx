import { FC } from "react";
import Border from "./border";
import CardSlots from "./card-slots";
import BorderOne from "../../../../public/assets/images/gameplay/border-1.svg";
import BorderTwo from "../../../../public/assets/images/gameplay/border-2.svg";
import BorderThree from "../../../../public/assets/images/gameplay/border-3.svg";
import BorderFour from "../../../../public/assets/images/gameplay/border-4.svg";
import BorderFive from "../../../../public/assets/images/gameplay/border-5.svg";
import NFTOne from "../../../../public/assets/images/gameplay/nft/nft-1-gameplay.svg";
import NFTTwo from "../../../../public/assets/images/gameplay/nft/nft-2-gameplay.svg";
import NFTThree from "../../../../public/assets/images/gameplay/nft/nft-3-gameplay.svg";
import NFTFour from "../../../../public/assets/images/gameplay/nft/nft-4-gameplay.svg";
import NFTFive from "../../../../public/assets/images/gameplay/nft/nft-5-gameplay.svg";

interface SlotsProps {}

const Slots: FC<SlotsProps> = () => {
    const slotOne = [
        { name: "Crab", image: NFTThree },
        { name: "Fish", image: NFTOne },
        { name: "Squid", image: NFTTwo },
    ];
    const slotTwo = [
        { name: "Crab", image: NFTThree },
        { name: "Fish", image: NFTOne },
        { name: "Squid", image: NFTTwo },
    ];
    const slotThree = [
        { name: "Crab", image: NFTThree },
        { name: "Fish", image: NFTOne },
        { name: "Squid", image: NFTTwo },
    ];
    const slotFour = [
        { name: "Whale", image: NFTFive },
        { name: "Shark", image: NFTFour },
        { name: "Squid", image: NFTTwo },
    ];

    return (
        <div className="bg-gameplay-items flex-1 mx-20 my-10">
            <div className="h-full mx-10 flex flex-col justify-center">
                <div className="flex justify-between z-0 ">
                    <Border src={BorderOne} height={500} width={13} />
                    <CardSlots NFTs={slotOne} />
                    <Border src={BorderTwo} height={500} width={13} />
                    <CardSlots NFTs={slotTwo} />
                    <Border src={BorderThree} height={500} width={13} />
                    <CardSlots NFTs={slotThree} />
                    <Border src={BorderFour} height={500} width={13} />
                    <CardSlots NFTs={slotFour} isSecondary={true} />
                    <Border src={BorderFive} height={500} width={13} />
                </div>
            </div>
        </div>
    );
};

export default Slots;
