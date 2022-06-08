import React from 'react'
import Header from '@/components/Header'
import MidBox from '@/components/MidBox'
import Footer from '@/components/Footer'
import styles from './index.less';

export default function index() {
  return (
    <div className={styles.background}>
      <main>
        <Header />
        <MidBox>
          <div className={styles.content_style}>
            <div className={styles.header_explain}>
              <h2 className={styles.explain1}>Thinking_</h2>
              <div className={styles.explain2}>Read  our  latest  white  papers,  blog  posts,  anaysis  and  opinions.</div>
            </div>
            <div>
              
            </div>
          </div>
        </MidBox>
        <Footer />
      </main>
    </div>
  )
}
