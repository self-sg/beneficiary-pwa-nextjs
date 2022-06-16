import { BooleanSchema } from 'yup'
import styles from '../styles/Button.module.css'

interface Props {
  type: string
  size?: string
  text: string
  disabled?: boolean
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button(props: Props) {
  let textClassName = ''
  if (props.disabled) {
    textClassName = 'text-m-r'
  } else {
    textClassName = 'text-m-sb'
  }
  
  return (
    <button 
      className={props.type != 'submit' ?  `${styles[props.type]}` : props.disabled ? `${styles.saveDisabled}` : `${styles.saveActive}`} 
      onClick={props.clickHandler} 
      disabled={props.disabled}>
      <span className={`${textClassName} ${styles.buttonText}`}>
        {props.text}
      </span>
    </button>
  )
}
