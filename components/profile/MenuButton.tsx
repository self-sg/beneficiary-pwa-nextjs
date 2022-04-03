import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Profile.module.css'

interface Props {
  buttonText: string
  imgSrc: string
  urlSlug: string
  buttonStyle: string
  additionalProps?: any
}

export default function MenuButton(props: Props) {
  return (
    <div>
      <Link
        href={{
          pathname: `/profile/${props.urlSlug}`,
          query: {
            userState: props.additionalProps
          }
        }}
      >
        <div className={styles[props.buttonStyle]}>
          <div className={styles.image}>
            <Image src={props.imgSrc} />
          </div>
          {props.buttonText}
        </div>
      </Link>
    </div>
  )
}
