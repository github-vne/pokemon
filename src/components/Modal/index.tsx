"use client";
import { useRouter } from "next/navigation";
import styles from "./modal.module.css";
import Image from "next/image";
import CrossImg from "./images/cross.svg";
import { useCallback } from "react";

interface IProps {
  children: React.ReactNode;
}

export default function Modal({ children }: IProps) {
  const router = useRouter();

  const onClose = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.close} onClick={onClose}>
          <Image src={CrossImg} alt="close" />
        </div>
        <div className={styles.modal}>{children}</div>
      </div>
    </div>
  );
}
