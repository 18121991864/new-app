import React from 'react'
import { history } from 'umi'
import styles from './index.less'

export default function index(props: any) {
  return (
    <footer>
      <div className={styles.footer_box} style={props?.style}>
        <div className={styles.footer_top}>
          <div className={styles.jump_compositions_box}>
            <div>
              <div style={{width: 200, height: 100,display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className={styles.img} onClick={() => { 
                  window.location.href = 'https://twitter.com/Upbitventure'
                }}>
              </div>
              </div>
              <div style={{marginTop: 25}}>
                jongmin@upbitventure.com
              </div>
            </div>
            {/* <div  className={styles.jump}>
              <div style={{color: "#1CE7C2"}}>jump_</div>
              <p>Builds</p>
              <p>Compositions</p>
              <p>Chronicle</p>
              <p>Careers</p>
              <p>Connect</p>
            </div>
            <div  className={styles.compositions}>
              <div style={{color: "#1CE7C2"}}>compositions</div>
              <p>Research</p>
              <p>Macro</p>
              <p>Spotlights</p>
              <p>News</p>
              <p>Podcasts</p>
            </div> */}
          </div>
        </div>
        <div className={styles.footer_middle}>
          <div className={styles.footer_middle_left}></div>
          <div className={styles.footer_middle_right}></div>
        </div>
        <div  className={styles.footer_bottom}>
          <div>
            <span>Terms of Use_</span>
            <span style={{marginLeft: "30px", marginRight: "30px"}}>Disclosures_</span>
          </div>
          <p>© 2022 Jump Crypto. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
