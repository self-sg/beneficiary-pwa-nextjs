import { useRouter } from 'next/router'
import Image from 'next/image'
import Button from '../../components/Button'
import onboardingPage from '../../styles/OnboardingPage.module.css'
import onboardingSupport from '../../public/assets/graphics/onboarding-support.svg'

export default function Success() {
  const router = useRouter()

  const navigateToSupport = () => {
    router.push('/support')
  }
  return (
    <div className={onboardingPage.pageWrapper}>
      <div className={onboardingPage.container}>
        <div className={onboardingPage.contentTop}>
          <Image src={onboardingSupport} width={300} />
          <p className={`${onboardingPage.textContainer} text-body-main-white`}>
            Sign up success!
          </p>
          <p className={`${onboardingPage.textContainer} text-body-main-white`}>
            Welcome to SELF App
          </p>
        </div>
        <Button
          type="primary"
          text="Start exploring"
          clickHandler={navigateToSupport}
        />
      </div>
    </div>
  )
}
