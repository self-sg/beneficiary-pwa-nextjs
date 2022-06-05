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
  if (props.type === 'primary') {
    textClassName = 'text-m-sb'
  } else if (props.type === 'secondary') {
    textClassName = 'text-m-r'
  }
  return (
    <button 
      className={props.disabled ? `${styles['saveDisabled']}` : `${styles[props.type]}`} 
      onClick={props.clickHandler} 
      disabled={props.disabled}>
      <span className={`${textClassName} ${styles.buttonText}`}>
        {props.text}
      </span>
    </button>
  )
}
