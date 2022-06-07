import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Profile.module.css'

interface Props {
  buttonText: string
  imgSrc: string
  url: string
  buttonStyle: string
  onClick?: any
}

export default function MenuButton(props: Props) {
  return (
    <div>
      <div className={styles[props.buttonStyle]} onClick={props.onClick}>
        <div className={styles.image}>
          <Image src={props.imgSrc} />
        </div>
          {props.buttonText}
      </div>
    </div>
  )
}
