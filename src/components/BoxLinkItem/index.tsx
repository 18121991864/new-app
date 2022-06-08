import React, { useRef, useEffect } from 'react'
import styles from "./index.less"
export default function index(props: any) {
  return (
    <div className={styles.box_link_item}>
      <div className={styles.box}>
        <div className={styles.box_within}>{props?.children}</div>
        <div className={styles.box_outside}></div>
      </div>
    </div>
  )
}
