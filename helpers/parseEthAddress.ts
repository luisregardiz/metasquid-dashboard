export const parseEthAddress = (address: string): string => {
    const firstNumbers = address.split("").splice(0, 4).join("");
    const lastNumbers = address.split("").splice(-4).join("");

    return `${firstNumbers}...${lastNumbers}`;
};
