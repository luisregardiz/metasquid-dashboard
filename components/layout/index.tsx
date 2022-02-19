import { FC, useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Header from "./header";
import Sidebar from "./sidebar";

interface LayoutProps {
    children: React.ReactComponentElement<any>;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    const { isAuthenticated } = useMoralis();

    return (
        <div className="flex">
            <Sidebar />
            <main className="w-4/5 max-w-screen-xl mx-auto">
                {isAuthenticated && <Header />}

                {children}
            </main>
        </div>
    );
};

export default Layout;
