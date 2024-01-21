import Image from "next/image";
import styles from "./page.module.css";
import Login from "@/pages/login";
import Header from "../../components/header";

export default function Home() {
  return (
    <main className={styles.main} style={{backgroundColor: "black"}}>
      <Login />
    </main>
  );
}
