"use client";
import Image from "next/image";

import StubImage from "./image/stub.png";
import styles from "./StubPage.module.css";

export default function StubPage({ pageTitle }: { pageTitle: string }) {
  return (
    <main className={styles.container}>
      <Image src={StubImage} width={300} alt="stub" />
      <h1>{pageTitle} page is under construction</h1>
    </main>
  );
}
