import styles from '../styles/TopNav.module.css'
import { IoIosArrowBack } from 'react-icons/io'
import { useRouter } from 'next/router'
import filter from '../public/assets/icon/filter.svg'
import Image from 'next/image'

interface Props {
  pageName: string
  displayBackButton: boolean
  displayFilter?: boolean // to specify only if displayBackButton = true
}

export default function TopNav(props: Props) {
  const router = useRouter()

  return (
    <div className={styles.navbar}>
      {props.displayBackButton ? (
        <IoIosArrowBack
          style={{ marginLeft: '14px' }}
          onClick={() => router.back()}
        />
      ) : undefined}
      <div
        className={
          props.displayBackButton
            ? styles.outerWrapperWithIcon
            : styles.outerWrapper
        }
      >
        <div
          className={
            props.displayBackButton && props.displayFilter
              ? styles.innerWrapper
              : null
          }
        >
          <p className="text-caption">{props.pageName}</p>

          {props.displayFilter ? (
            <Image
              src={filter}
              alt="filterIcon"
              onClick={() => console.log('Open filter modal')}
            />
          ) : undefined}
        </div>
      </div>
    </div>
  )
}
