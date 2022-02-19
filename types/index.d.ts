type UpdateUser = {
    username: string;
};
type LoginForm = {
    username: string;
    password: string;
};
type RegisterForm = {
    username: string;
    email: string;
    password: string;
};
type Items = {
    id: string;
    title: string;
    percentage: number;
    type: string;
};
type Leaderboard = {
    id: number;
    username: string;
    rank: string;
    stars: number;
    pearls: number;
};
type MyGames = {
    id: number;
    pearls: number;
    SQDS: number;
    NFT: number;
    tokens: number;
};
