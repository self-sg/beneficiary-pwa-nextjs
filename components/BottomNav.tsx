import styles from '../styles/BottomNav.module.css'
import { useState } from 'react'
import profile from '../public/assets/navigation/profile.svg'
import profileActive from '../public/assets/navigation/profile-active.svg'
import support from '../public/assets/navigation/support.svg'
import supportActive from '../public/assets/navigation/support-active.svg'
import Image from 'next/image'
import Link from 'next/link'

// Thank you to https://github.com/coderzway/next-js-bottom-navigation-bar

interface Props {
  featureName: string
}

export default function BottomNav(props: Props) {
  const [activeTabs, setActiveTabs] = useState(props.featureName)

  return (
    <div className={styles.navbar}>
      <div className={styles.tabContainer}>
        <Link href="/support">
          {activeTabs === 'support' ? (
            <div className={styles.tab}>
              <Image
                src={supportActive}
                alt="supportIconActive"
                onClick={() => setActiveTabs('support')}
              />
              <p className={styles.active}>Support</p>
            </div>
          ) : (
            <div className={styles.tab}>
              <Image
                src={support}
                alt="supportIcon"
                onClick={() => setActiveTabs('support')}
              />
              <p className={styles.normal}>Support</p>
            </div>
          )}
        </Link>
      </div>
      <div className={`${styles.tabContainer}`}>
        <Link href="/profile">
          {activeTabs === 'profile' ? (
            <div className={styles.tab}>
              <Image
                src={profileActive}
                alt="profileIconActive"
                onClick={() => setActiveTabs('profile')}
              />
              <p className={styles.active}>Profile</p>
            </div>
          ) : (
            <div className={styles.tab}>
              <Image
                src={profile}
                alt="profileIcon"
                onClick={() => setActiveTabs('profile')}
              />
              <p className={styles.normal}>Profile</p>
            </div>
          )}
        </Link>
      </div>
    </div>
  )
}
