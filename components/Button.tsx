import styles from '../styles/Button.module.css'

interface Props {
  type: string
  size?: string
  text: string
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
    <button className={`${styles[props.type]}`} onClick={props.clickHandler}>
      <span className={`${textClassName} ${styles.buttonText}`}>
        {props.text}
      </span>
    </button>
  )
}
