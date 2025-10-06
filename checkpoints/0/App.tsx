import styles from "./App.module.css"

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>FlavorFlow</h1>
        <p className={styles.subtitle}>Your Recipe Management App</p>
        <div className={styles.card}>
          <p className={styles.cardText}>
            Ready to start building your recipe management app!
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
