"use client";

/* Next Modules */
import { useRouter } from "next/navigation";

/* React Modules */
import { useState } from "react";

/* Other Modules */
import sha256 from "crypto-js/sha256";

/* CSS Modules */
import styles from "./index.module.css";

/* Next-Ui Modules */
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

export default function Home() {
  const [username, setUsername] = useState("");

  const router = useRouter();

  function encryptAndSubmit() {
    const encryptPassword = sha256.encrypt(username);

    console.log(encryptPassword);
    let routerAdaptedPassword = "";

    for (let i = 0; i < encryptPassword.length; i++) {
      console.log(encryptPassword[i]);
      if (encryptPassword[i] === "?" || encryptPassword[i] === "/") {
        break;
      } else {
        routerAdaptedPassword += encryptPassword[i];
      }
    }

    console.log(routerAdaptedPassword);

    //router.push(`/dashboard/${routerAdaptedPassword}`);
  }

  return (
    <div className={styles.homeSearch}>
      <div className={styles.shazaMainDiv}>
        <div className={styles.shazamLogo} />
        <div className={styles.inputDiv}>
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your name here... "
            value={username}
          />
          <Button onClick={encryptAndSubmit} radius="full" className="">
            Button
          </Button>
        </div>
      </div>
    </div>
  );
}
