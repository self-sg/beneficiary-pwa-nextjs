import { useRouter } from 'next/router'
import Image from 'next/image'
import Button from '../../components/Button'
import onboardingPage from '../../styles/OnboardingPage.module.css'
import onboardingSupport from '../../public/assets/graphics/onboarding-support.svg'
import stepOne from '../../public/assets/graphics/step-one.svg'

export default function StepOne() {
  const router = useRouter()

  const navigateToNextStep = () => {
    router.push('/onboarding/step-2')
  }
  return (
    <div className={onboardingPage.pageWrapper}>
      <div className={onboardingPage.container}>
        <div className={onboardingPage.contentTop}>
          <Image src={onboardingSupport} width={300} />
          <p className={`${onboardingPage.textContainer} text-body-main-white`}>
            From subsidy to vouchers, find the support you need from the list of
            categories
          </p>
          <Image src={stepOne} />
        </div>
        <Button
          type="secondary"
          text="Next"
          clickHandler={navigateToNextStep}
        />
      </div>
    </div>
  )
}
