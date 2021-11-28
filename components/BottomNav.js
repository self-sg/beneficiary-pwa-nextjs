import Styles from '../styles/BottomNav.module.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import profile from '../public/assets/icon-profile.svg'
import profileActive from '../public/assets/icon-profile-active.svg'
import support from '../public/assets/icon-support.svg'
import supportActive from '../public/assets/icon-support-active.svg'
import Image from 'next/image'

// Thank you to https://github.com/coderzway/next-js-bottom-navigation-bar

export default function BottomNav(props) {
  const router = useRouter()

  const [activeTabs, setActiveTabs] = useState(props.name)
  useEffect(() => {
    switch (activeTabs) {
      case 'home':
        router.push('/')
        break
      case 'support':
        router.push('/support')
        break
      case 'jobs':
        router.push('/jobs')
        break
      case 'profile':
        router.push('/profile')
        break
      default:
        router.push('/')
        break
    }
  }, [activeTabs])

  return (
    <div className={`${Styles.bottomNav}`}>
      <div className={`${Styles.bnTab}`}>
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
      </div>
      <div className={`${Styles.bnTab}`}>
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
      </div>
    </div>
  )
}
