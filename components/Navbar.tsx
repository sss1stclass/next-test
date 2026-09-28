"use client";
import Link from "next/link";
import React, { useState } from "react";

const navigation = [
    { name: "Product", href: "product", isActive: false },
    { name: "Features", href: "features", isActive: false },
    { name: "Marketplace", href: "marketplace", isActive: false },
    { name: "Company", href: "company", isActive: false },
];

interface NavItem {
  name: string;
  href: string;
  isActive: boolean;
}

const Navbar = () => {
    const [navstate, setNavstate] = useState(navigation);
    const changeActive = (name: string) => {
        setNavstate(navstate.map((item) => {
            if (item.name === name) {
                return { ...item, isActive: true };
            } else {
                return { ...item, isActive: false };
            }

        }));

    }
    return (
        <div>
            <nav
                style={{
                    padding: "10px",
                    backgroundColor: "lightgrey",
                    border: "2px solid black",
                    borderRadius: "10px",
                }}
            >
                <ul className="flex">

                    {navstate.map((item: NavItem) => {
                        return (
                            <Link href={item.href} key={item.name} style={{ textDecoration: "none" }}>
                                <li
                                    style={{
                                        color: "black",
                                        backgroundColor: item.isActive ? "white" : "lightgrey",
                                        fontWeight: 600,
                                        listStyle: "none",
                                        lineHeight: 1,
                                        padding: 12,
                                        borderRadius: "10px",
                                        border: item.isActive ? "2px solid blue" : "2px solid black",
                                    }}
                                    onClick={() => changeActive(item.name)}
                                    key={item.name}
                                >
                                    {item.name}
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
