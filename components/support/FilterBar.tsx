import { useState } from 'react'
import styles from '../../styles/FilterBar.module.css'

export default function FilterBar() {
  const [regions, setRegions] = useState([
    { type: 'North', active: false },
    { type: 'South', active: false },
    { type: 'Central', active: false },
    { type: 'East', active: false },
    { type: 'West', active: false }
  ])

  const toggleActiveHandler = (event) => {
    setRegions((prevRegions) => {
      const updatedRegions = [...prevRegions]
      const regionIndex = updatedRegions.findIndex(
        (region) => region.type == event.target.innerHTML
      )
      updatedRegions[regionIndex].active = !updatedRegions[regionIndex].active

      return updatedRegions
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
        {regions.map((region) => {
          return (
            <div
              className={`${styles.regionContainer} + ${
                region.active && styles.active
              }`}
              onClick={toggleActiveHandler}
            >
              {region.type}
            </div>
          )
        })}
      </div>
      <div className={styles.infoContainer}>
        <span className="text-caption">
          Browse through different categories of support.
        </span>
      </div>
    </div>
  )
}
