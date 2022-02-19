import { FC, useState } from "react";
import { stakingItems } from "../../../../../helpers/stakingItems";
import ModalItems from "../../../../modals/items";
import ItemsCard from "./card";

interface ItemsProps {}

const Items: FC<ItemsProps> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (
        <>
            <div className="bg-card p-8 ">
                <div className="h-full flex flex-col justify-center ">
                    <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-5">
                        {stakingItems.map((item) => (
                            <ItemsCard
                                key={item.id}
                                title={item.title}
                                percetage={item.percentage}
                                type={item.type}
                                id={item.id}
                            />
                        ))}

                        <ItemsCard
                            title="Pet"
                            percetage={0}
                            type="attack"
                            id="empty"
                            setIsOpen={setIsOpen}
                        />
                        <ItemsCard
                            title="Pet"
                            percetage={0}
                            type="attack"
                            id="empty"
                            setIsOpen={setIsOpen}
                        />
                    </div>
                </div>
            </div>
            <ModalItems isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default Items;
