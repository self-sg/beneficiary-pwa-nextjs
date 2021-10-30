import styles from '../styles/Button.module.css'

interface Props {
  type: string
  size: string
  text: string
}

export default function Button(props: Props) {
  let textClassName = ''
  if (props.type === 'primary') {
    textClassName = 'text-m-sb'
  } else {
    textClassName = 'text-m-r'
  }
  return (
    <button className={`${styles[props.type]}`}>
      <span className={textClassName}>{props.text}</span>
    </button>
  )
}
