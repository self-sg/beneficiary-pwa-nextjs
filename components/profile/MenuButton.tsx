import Image from 'next/image' 
import Link from 'next/link'
import { getSystemErrorName } from 'util'
import styles from '../../styles/Profile.module.css'

interface Props {
    buttonText: string
    imgSrc: string
    urlSlug: string
    buttonStyle: string
    additionalProps ?: any 
}

export default function MenuButton(props: Props) {
    // if (menuOptionRef == null) {
    //   console.log(
    //     'error in MenuOptionThin.tsx: menuOptionRef is undefined as menu option type does not exist.'
    //   )
    //   return null
    // } else {
      return (
        <div>
          <Link href={{ 
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
    // }
}