import Image from "next/image";
import { FC } from "react";
import Shark from "../../../../public/assets/images/leaderboard/shark.svg";
import Dolphin from "../../../../public/assets/images/leaderboard/dolphin.svg";
import Fish from "../../../../public/assets/images/leaderboard/fish.svg";
import Crab from "../../../../public/assets/images/leaderboard/crab.svg";
import OneStar from "../../../../public/assets/images/leaderboard/star-rank-1.svg";
import TwoStars from "../../../../public/assets/images/leaderboard/star-rank-2.svg";
import ThreeStars from "../../../../public/assets/images/leaderboard/star-rank-3.svg";
import AvatarUser from "../../../../public/assets/images/leaderboard/avatar-user.png";
import { leaderboard } from "../../../../helpers/leaderboard";

interface TableLeaderboardProps {}

const TableLeaderboard: FC<TableLeaderboardProps> = () => {
    const getImageRank = (rank: string) => {
        switch (rank) {
            case "shark":
                return Shark;
            case "dolphin":
                return Dolphin;
            case "fish":
                return Fish;
            case "crab":
                return Crab;
        }
    };

    const getStars = (stars: number) => {
        switch (stars) {
            case 1:
                return OneStar;
            case 2:
                return TwoStars;
            case 3:
                return ThreeStars;
        }
    };

    return (
        <table className="table-auto min-w-full my-2 ">
            <thead>
                <tr className="text-lg">
                    <th className="py-10">No</th>
                    <th className="py-10">Username</th>
                    <th className="py-10">Atlantic Rank</th>
                    <th className="py-10">Pearls</th>
                </tr>
            </thead>

            {leaderboard.map((user) => (
                <tbody key={user.id}>
                    <tr className="text-center">
                        <td className="py-5">{user.id}</td>
                        <td>
                            <div className="w-1/2 mx-auto">
                                <div className="flex items-center space-x-5">
                                    <Image
                                        src={AvatarUser}
                                        alt={user.username}
                                        height={40}
                                        width={40}
                                        objectFit="contain"
                                    />
                                    <span>{user.username}</span>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="w-1/2 mx-auto">
                                <div className="flex items-center">
                                    <div className="w-20">
                                        <Image
                                            src={getImageRank(user.rank)}
                                            alt={user.rank}
                                            width={40}
                                            height={40}
                                            objectFit="contain"
                                        />
                                    </div>
                                    <div className="flex flex-col items-start">
                                        <span className="capitalize">
                                            {user.rank}
                                        </span>
                                        <Image
                                            src={getStars(user.stars)}
                                            alt={user.stars.toString()}
                                            width={
                                                user.stars === 1
                                                    ? 20
                                                    : user.stars === 2
                                                    ? 50
                                                    : 80
                                            }
                                            height={20}
                                            objectFit="contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>{user.pearls}</td>
                    </tr>
                </tbody>
            ))}
        </table>
    );
};

export default TableLeaderboard;
