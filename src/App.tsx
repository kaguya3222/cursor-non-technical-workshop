import { type FormEvent, useState, useEffect } from "react"
import styles from "./App.module.css"

type Recipe = {
  id: number
  title: string
  description: string
  image?: string
}

// Helper function to load recipes from browser storage
const loadRecipesFromStorage = (): Recipe[] => {
  try {
    const savedRecipes = localStorage.getItem("flavorflow-recipes")
    return savedRecipes ? JSON.parse(savedRecipes) : []
  } catch (error) {
    console.error("Error loading recipes from storage:", error)
    return []
  }
}

// Helper function to save recipes to browser storage
const saveRecipesToStorage = (recipes: Recipe[]) => {
  try {
    localStorage.setItem("flavorflow-recipes", JSON.stringify(recipes))
  } catch (error) {
    console.error("Error saving recipes to storage:", error)
  }
}

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>(loadRecipesFromStorage)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  })
  const [error, setError] = useState("")

  // Save recShare your emoji in Figjam !ipes to storage whenever recipes change
  useEffect(() => {
    saveRecipesToStorage(recipes)
  }, [recipes])

  const openModal = () => {
    setError("")
    setFormData({ title: "", description: "", image: "" })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const handleChange =
    (field: "title" | "description" | "image") =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((previous) => ({ ...previous, [field]: event.target.value }))
    }

  const handleCreate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formData.title.trim()) {
      setError("Please add a title so we know what to call the recipe.")
      return
    }

    const newRecipe: Recipe = {
      id: Date.now(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      image: formData.image.trim() || undefined,
    }

    setRecipes((previous) => [newRecipe, ...previous])
    setIsModalOpen(false)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <span className={styles.logoText}>🍳</span>
          </div>
          <h1 className={styles.title}>FlavorFlow</h1>
        </div>

        <button type="button" onClick={openModal} className={styles.newButton}>
          <span className={styles.plusIcon}>+</span>
          New
        </button>
      </header>

      <div className={styles.searchContainer}>
        <div className={styles.searchWrapper}>
          <div className={styles.searchIconWrapper}>
            <svg
              className={styles.searchIcon}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search recipes"
          />
        </div>
      </div>

      <main className={styles.main}>
        {recipes.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyStateContent}>
              <h2 className={styles.emptyStateTitle}>No recipes yet</h2>
              <p className={styles.emptyStateText}>
                Create your first recipe to
                <br />
                get started.
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.recipeGrid}>
            {recipes.map((recipe) => (
              <div key={recipe.id} className={styles.recipeCard}>
                {recipe.image ? (
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className={styles.recipeImage}
                    onError={(event) => {
                      event.currentTarget.style.display = "none"
                    }}
                  />
                ) : null}
                <div>
                  <h3 className={styles.recipeTitle}>{recipe.title}</h3>
                  {recipe.description ? (
                    <p className={styles.recipeDescription}>
                      {recipe.description}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {isModalOpen ? (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button
              type="button"
              onClick={closeModal}
              className={styles.closeButton}
              aria-label="Close create recipe modal"
            >
              ×
            </button>

            <h2 className={styles.modalTitle}>Create Recipe</h2>
            <p className={styles.modalDescription}>
              Add a new recipe with a title, description and an optional image.
            </p>

            <form className={styles.form} onSubmit={handleCreate}>
              <label className={styles.label}>
                Title
                <input
                  type="text"
                  value={formData.title}
                  onChange={handleChange("title")}
                  placeholder="E.g. Creamy Tomato Pasta"
                  className={styles.input}
                />
              </label>

              <label className={styles.label}>
                Description
                <textarea
                  value={formData.description}
                  onChange={handleChange("description")}
                  placeholder="Share a short description or instructions"
                  className={styles.textarea}
                />
              </label>

              <label className={styles.label}>
                Image
                <input
                  type="url"
                  value={formData.image}
                  onChange={handleChange("image")}
                  placeholder="Paste an image URL (optional)"
                  className={styles.input}
                />
              </label>

              {error ? (
                <p className={styles.error} role="alert">
                  {error}
                </p>
              ) : null}

              <div className={styles.buttonGroup}>
                <button
                  type="button"
                  onClick={closeModal}
                  className={styles.cancelButton}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.submitButton}>
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default App
