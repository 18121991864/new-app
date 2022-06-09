import React, { useRef, useState } from 'react'
import styles from './index.less';
import { history } from 'umi'
import { useScroll, useThrottleEffect } from 'ahooks';

export default function index(props: any) {
  const herderRef = useRef(null)
  const scrollTop = document.documentElement||document.body;
  const _scroll = useScroll() || { top: 0 }
  const [headerStyle, setHeaderStyle] = useState({})
  useThrottleEffect(() => { 
    if(_scroll?.top >= 150) {
      setHeaderStyle({
        position: "fixed",
      })
    }else {
      setHeaderStyle({
        position: "static"
      })
    }
  }, [_scroll?.top >= 150])
  return (
    <header>
      <div className={styles.hearder} ref={herderRef} style={headerStyle}>
        <div className={styles.jump} onClick={() => { 
            history?.push('/')
            scrollTop.scrollTop = 0
           }}>
             <h2 style={{width: 200, height: 40, opacity: 0}}>UPbit</h2>
        </div>
        <div  className={styles.b_c_c}>
          <div className={styles.padding_l} onClick={() => { 
            history?.push('/featured-projects')
            setTimeout(() => {
              scrollTop.scrollTop = 750
            }, 100);
            }}>builds_</div>
          <div className={styles.padding_l} onClick={() => { 
            history?.push('/writing')
           }}>compositions_</div>
          <div className={styles.padding_l_r}>careers_</div>
        </div>
      </div>
    </header>
  )
}
