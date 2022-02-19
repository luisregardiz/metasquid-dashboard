import Image from "next/image";
import { FC } from "react";
import { myGames } from "../../../../helpers/myGames";
import NFTSquid from "../../../../public/assets/images/leaderboard/nft/nft-1.png";
import NFTOctopus from "../../../../public/assets/images/leaderboard/nft/nft-2.png";
import NFTSiren from "../../../../public/assets/images/leaderboard/nft/nft-3.png";

interface MyGamesTableProps {}

const MyGamesTable: FC<MyGamesTableProps> = () => {
    return (
        <table className="table-auto min-w-full my-2">
            <thead>
                <tr className="text-lg">
                    <th className="py-10">Game</th>
                    <th className="py-10">Choises</th>
                    <th className="py-10">Pearls</th>
                    <th className="py-10">SQDS</th>
                    <th className="py-10">NFT</th>
                    <th className="py-10">Tokens</th>
                </tr>
            </thead>
            {myGames.map((movement) => (
                <tbody key={movement.id}>
                    <tr>
                        <td className="text-center py-5">
                            BUSD Super Squid N°{movement.id}
                        </td>
                        <td className="py-2">
                            <div className="flex justify-between w-8/12 mx-auto">
                                <div className="bg-leaderboard-item rounded-full h-14 w-14 flex items-center justify-center">
                                    <Image
                                        src={NFTOctopus}
                                        alt="NFT Octopus"
                                        height={45}
                                        width={45}
                                        objectFit="contain"
                                    />
                                </div>
                                <div className="bg-leaderboard-item rounded-full h-14 w-14 flex items-center justify-center">
                                    <Image
                                        src={NFTSquid}
                                        alt="NFT Squid"
                                        height={45}
                                        width={45}
                                        objectFit="contain"
                                    />
                                </div>
                                <div className="bg-leaderboard-item rounded-full h-14 w-14 flex items-center justify-center">
                                    <Image
                                        src={NFTSiren}
                                        alt="NFT Siren"
                                        height={45}
                                        width={45}
                                        objectFit="contain"
                                    />
                                </div>
                                <div className="bg-leaderboard-item rounded-full h-14 w-14 flex items-center justify-center">
                                    <Image
                                        src={NFTOctopus}
                                        alt="NFT Octopus"
                                        height={45}
                                        width={45}
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                        </td>
                        <td className="text-center">{movement.pearls}</td>
                        <td className="text-center">{movement.SQDS}</td>
                        <td className="text-center">{movement.NFT}</td>
                        <td className="text-center">
                            {movement.tokens.toFixed(2)} BUSD
                        </td>
                    </tr>
                </tbody>
            ))}
        </table>
    );
};

export default MyGamesTable;
