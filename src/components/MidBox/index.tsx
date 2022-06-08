import React from 'react'
import styles from './index.less'

export default function index(props: any) {
  return (
    <div className={styles.mid_box}>
      <div className={styles.mid_box_style}>
        <div className={styles.mid_box_content}>
          {
            props?.children
          }
        </div>
      </div>
    </div>
  )
}
