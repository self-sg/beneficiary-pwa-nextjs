import { useRouter } from 'next/router'
import Image from 'next/image'
import Button from '../../components/Button'
import onboardingPage from '../../styles/OnboardingPage.module.css'
import onboardingCard from '../../public/assets/graphics/onboarding-card.svg'
import stepTwo from '../../public/assets/graphics/step-two.svg'

export default function StepTwo() {
  const router = useRouter()

  const navigateToNextStep = () => {
    router.push('/onboarding/step-1')
  }
  return (
    <div className={onboardingPage.pageWrapper}>
      <div className={onboardingPage.container}>
        <div className={onboardingPage.contentTop}>
          <Image src={onboardingCard} height={300} />
          <p className="text-body-main-white">
            Star your favorite support and find them quickly in your profile
            next time!
          </p>
          <Image src={stepTwo} />
        </div>
        <Button
          type="primary"
          text="Get Started"
          clickHandler={navigateToNextStep}
        />
      </div>
    </div>
  )
}
