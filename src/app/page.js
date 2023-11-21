import Image from 'next/image'
import styles from './page.module.css'; 
import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";

export default function Home() {
  return (
    <div className={styles.homeSearch}>
        <div className={styles.shazaMainDiv}>
            <div className={styles.shazamLogo}/>
            <div className={styles.inputDiv}>
              <Input placeholder="Enter your name here... "/>
              <Button radius="full" className="">
              Button
            </Button>
            </div>
        </div>
    </div>
  )
}
