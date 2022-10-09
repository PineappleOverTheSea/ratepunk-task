import { IDownload } from "../interfaces/IDownload";
import Image from "next/image";
import styles from "../styles/download.module.scss"

export const Download = (props : IDownload) =>{
    const imagePath = props.image_path
    const storeName = props.store_name
    return(
        <div className={styles.download}>
          <Image src={imagePath} height="52px" width="56px"/>
          <div className={styles.download_text_container}>
            <div>available in</div>
            <b>{storeName}</b>
          </div>
        </div>
    );
}