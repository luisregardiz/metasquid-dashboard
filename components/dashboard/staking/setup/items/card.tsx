import Image from "next/image";
import { Dispatch, FC, SetStateAction } from "react";
import VectorItems from "../../../../../public/assets/images/vector-item-card.svg";
import Shield from "../../../../../public/assets/icons/shield.svg";
import Thunder from "../../../../../public/assets/icons/thunder.svg";
import Armour from "../../../../../public/assets/images/items/armour.svg";
import Gloves from "../../../../../public/assets/images/items/gloves.svg";
import Sword from "../../../../../public/assets/images/items/sword.svg";
import ShieldItem from "../../../../../public/assets/images/items/shield.svg";
import { FiPlusCircle } from "react-icons/fi";
import { RiShieldFlashLine } from "react-icons/ri";
interface ItemsCardProps {
    title: string;
    percetage: number;
    type: string;
    id: string;
    setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const ItemsCard: FC<ItemsCardProps> = ({
    title,
    percetage,
    type,
    id,
    setIsOpen,
}) => {
    const getItemImage = (id: string) => {
        switch (id) {
            case "armour":
                return Armour;
            case "gloves":
                return Gloves;
            case "sword":
                return Sword;
            case "shield":
                return ShieldItem;
        }
    };

    return (
        <div
            className={`bg-item-staking ${
                id === "empty" && "pulse-animation"
            } p-3 relative flex flex-col items-center`}
        >
            <div className="absolute -top-3 ">
                <Image
                    src={VectorItems}
                    alt="Vector"
                    height={5}
                    width={100}
                    objectFit="contain"
                />
            </div>
            <div className="bg-item-text w-full text-center">
                <span className="text-xs text-meta-cyan font-medium">
                    {title}
                </span>
            </div>
            <div className="my-3">
                {id === "empty" ? (
                    <FiPlusCircle
                        onClick={() => setIsOpen && setIsOpen(true)}
                        className="text-4xl h-16 cursor-pointer"
                    />
                ) : (
                    <Image
                        src={getItemImage(id)}
                        alt="Item One"
                        height={60}
                        width={60}
                        objectFit="contain"
                    />
                )}
            </div>
            <div className="bg-items-value p-1 w-full flex items-center justify-center space-x-2">
                {type === "defense" && (
                    <RiShieldFlashLine className="text-xl" />
                )}
                {type === "attack" && (
                    <Image src={Thunder} alt="Shield" height={20} width={20} />
                )}

                <span className="text-xl font-semibold">{percetage}%</span>
            </div>
        </div>
    );
};

export default ItemsCard;
