import Image from "next/image";
import { FC } from "react";

interface BorderProps {
    src: string;
    height: number;
    width: number;
}

const Border: FC<BorderProps> = ({ src, height, width }) => {
    return (
        <Image
            src={src}
            alt="Border"
            height={height}
            width={width}
            objectFit="contain"
            className="-z-10"
        />
    );
};

export default Border;
