import Image from "next/image";
import { FC } from "react";
import { leaderboard } from "../../../../helpers/leaderboard";
import NFTSquid from "../../../../public/assets/images/leaderboard/nft/nft-1.png";
import NFTOctopus from "../../../../public/assets/images/leaderboard/nft/nft-2.png";
import NFTSiren from "../../../../public/assets/images/leaderboard/nft/nft-3.png";
interface ResultsTableProps {}

const ResultsTable: FC<ResultsTableProps> = () => {
    return (
        <table className="table-auto min-w-full my-10">
            <thead>
                <tr>
                    <th>Game</th>
                    <th>
                        <div>
                            <span className="text-lg">Multipler 1</span>
                            <div className="flex justify-between w-4/5 mx-auto my-2">
                                <span>50%</span>
                                <span>100%</span>
                                <span>200%</span>
                            </div>
                        </div>
                    </th>
                    <th>
                        <div>
                            <span className="text-lg">Multipler 2</span>
                            <div className="flex justify-between w-4/5 mx-auto my-2">
                                <span>50%</span>
                                <span>100%</span>
                                <span>200%</span>
                            </div>
                        </div>
                    </th>
                    <th>
                        <div>
                            <span className="text-lg">Multipler 3</span>
                            <div className="flex justify-between w-4/5 mx-auto my-2">
                                <span>50%</span>
                                <span>100%</span>
                                <span>200%</span>
                            </div>
                        </div>
                    </th>
                    <th>
                        <div>
                            <span className="text-lg">Bonus Slot</span>
                            <div className="flex justify-between w-4/5 mx-auto my-2">
                                <span>50%</span>
                                <span>100%</span>
                                <span>200%</span>
                            </div>
                        </div>
                    </th>
                </tr>
            </thead>
            {leaderboard.map((user) => (
                <tbody key={user.id}>
                    <tr>
                        <td className="py-5">BUSD Super Squid N°{user.id}</td>
                        <td className="py-2">
                            <div className="flex justify-between w-4/5 mx-auto">
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
                            </div>
                        </td>
                        <td>
                            <div className="flex justify-between w-4/5 mx-auto">
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
                            </div>
                        </td>
                        <td>
                            <div className="flex justify-between w-4/5 mx-auto">
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
                            </div>
                        </td>
                        <td>
                            <div className="flex justify-between w-4/5 mx-auto">
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
                            </div>
                        </td>
                    </tr>
                </tbody>
            ))}
        </table>
    );
};

export default ResultsTable;
