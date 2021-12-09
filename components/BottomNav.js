import Styles from '../styles/BottomNav.module.css'
import { useState } from 'react'
import profile from '../public/assets/navigation/profile.svg'
import profileActive from '../public/assets/navigation/profile-active.svg'
import support from '../public/assets/navigation/support.svg'
import supportActive from '../public/assets/navigation/support-active.svg'
import Image from 'next/image'
import Link from 'next/link'

// Thank you to https://github.com/coderzway/next-js-bottom-navigation-bar

export default function BottomNav(props) {
  const [activeTabs, setActiveTabs] = useState(props.name)

  return (
    <div className={`${Styles.bottomNav}`}>
      <div className={`${Styles.bnTab}`}>
        <Link href="/support">
          {activeTabs === 'support' ? (
            <Image
              src={supportActive}
              alt="supportIconActive"
              style={{ width: 50 }}
              onClick={() => setActiveTabs('support')}
            />
          ) : (
            <Image
              src={support}
              alt="supportIcon"
              style={{ width: 50 }}
              onClick={() => setActiveTabs('support')}
            />
          )}
        </Link>
      </div>
      <div className={`${Styles.bnTab}`}>
        <Link href="/profile">
          {activeTabs === 'profile' ? (
            <Image
              src={profileActive}
              alt="profileIconActive"
              style={{ width: 50 }}
              onClick={() => setActiveTabs('profile')}
            />
          ) : (
            <Image
              src={profile}
              alt="profileIcon"
              style={{ width: 50 }}
              onClick={() => setActiveTabs('profile')}
            />
          )}
        </Link>
      </div>
    </div>
  )
}
