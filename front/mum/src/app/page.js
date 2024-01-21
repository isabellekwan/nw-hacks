import Image from "next/image";
import styles from "./page.module.css";
import Login from "@/pages/login";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Login />
      <Button>Cheese</Button>
    </main>
  );
}
