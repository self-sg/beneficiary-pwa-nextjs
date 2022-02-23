import Button from '../components/Button'
import ColorSwatch from '../components/ColorSwatch'
import styles from '../styles/StyleGuide.module.css'

export default function Styles() {
  return (
    <div className="flex-column">
      <p className={styles.groupTitle}>Typography</p>
      <div className={styles.group}>
        <h1>Heading H1 32 Bold</h1>
        <h2>Heading H2 28 Bold</h2>
        <h3>Heading H3 24 Bold</h3>
        <h4>Heading H4 20 Bold</h4>
        <p className="text-body-intro">Body Intro Text 20 Medium</p>
        <p className="text-body-main">Body Main Text 20 Regular</p>
        <p className="text-m">Medium Text 16 Regular</p>
        <p className="text-caption">Caption Text 14 Regular</p>
        <p className="text-s">Small Text 13 Regular</p>
        <p className="text-ls">Long Small Text 14 Regular</p>
      </div>
      <p className={styles.groupTitle}>Colors</p>
      <div className={styles.group} style={{ flexDirection: 'row' }}>
        <ColorSwatch colorName="Primary" colorVar="var(--accent-primary)" />
        <ColorSwatch colorName="Sec" colorVar="var(--accent-secondary)" />
        <ColorSwatch colorName="Active" colorVar="var(--accent-active)" />
        <ColorSwatch colorName="Label" colorVar="var(--accent-label)" />
        <ColorSwatch colorName="Font" colorVar="var(--accent-font)" />
        <ColorSwatch colorName="Black" colorVar="var(--accent-black)" />
        <ColorSwatch colorName="White" colorVar="var(--accent-White)" />
        <ColorSwatch colorName="Offwhite" colorVar="var(--accent-offwhite)" />
        <ColorSwatch colorName="Link" colorVar="var(--accent-link)" />
        <ColorSwatch colorName="Disabled" colorVar="var(--accent-disabled)" />
        <ColorSwatch colorName="Success" colorVar="var(--accent-success)" />
        <ColorSwatch colorName="Error" colorVar="var(--accent-error)" />
      </div>
      <p className={styles.groupTitle}>Components</p>
      <div className={styles.group}>
        <Button type="primary" text="Primary" size="hi" />
        <Button type="secondary" text="Secondary" size="hi" />
      </div>
    </div>
  )
}
