import styles from '../styles/StyleGuide.module.css'

interface Props {
  colorName: string
  colorVar: string
}

export default function ColorSwatch(props: Props) {
  return (
    <div className="flex-column">
      <p>{props.colorName}</p>
      <div
        className={styles.swatch}
        style={{ backgroundColor: props.colorVar }}
      ></div>
    </div>
  )
}
