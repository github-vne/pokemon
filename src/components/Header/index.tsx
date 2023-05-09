"use client";
import Link from "next/link";

import styles from "./modal.module.css";
import Image from "next/image";

import logo from "./images/logo.png";
import { NAVIGATION } from "./constants";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image src={logo} alt="" />

        <nav className={styles.navigation}>
          {NAVIGATION.map((route) => (
            <Link key={route.path} href={route.path}>
              {route.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
