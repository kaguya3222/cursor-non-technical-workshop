import { useId, useState, useEffect, useCallback } from "react"
import styles from "./App.module.css"

// Define the Recipe type
type Recipe = {
  id: string
  title: string
  description: string
  image: string
}

function App() {
  const clipPathId = useId()
  const titleId = useId()
  const descriptionId = useId()
  const imageId = useId()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  // Function to load recipes from local storage
  const loadRecipesFromStorage = (): Recipe[] => {
    try {
      const savedRecipes = localStorage.getItem("flavorflow-recipes")
      if (savedRecipes) {
        return JSON.parse(savedRecipes)
      }
    } catch (error) {
      console.error("Error loading recipes from storage:", error)
    }
    return []
  }

  // Function to save recipes to local storage
  const saveRecipesToStorage = useCallback((recipes: Recipe[]) => {
    try {
      localStorage.setItem("flavorflow-recipes", JSON.stringify(recipes))
    } catch (error) {
      console.error("Error saving recipes to storage:", error)
    }
  }, [])
  const [recipes, setRecipes] = useState<Recipe[]>(loadRecipesFromStorage)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  })

  // Save recipes to local storage whenever recipes change
  useEffect(() => {
    saveRecipesToStorage(recipes)
  }, [recipes, saveRecipesToStorage])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create a new recipe with a unique ID
    const newRecipe = {
      id: Date.now().toString(), // Simple ID generation
      title: formData.title,
      description: formData.description,
      image: formData.image,
    }

    // Add the new recipe to the list
    setRecipes((prev) => [newRecipe, ...prev]) // Add to beginning of array

    // Close modal and reset form
    setIsModalOpen(false)
    setFormData({ title: "", description: "", image: "" })
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    setFormData({ title: "", description: "", image: "" })
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  // Filter recipes based on search term
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logoSection}>
          <div
            className={styles.logoIcon}
            style={{
              background:
                "linear-gradient(135deg, rgba(245, 95, 20, 0.7) 0%, rgba(245, 95, 20, 1) 100%)",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="FlavorFlow logo - crossed fork and knife"
            >
              <title>FlavorFlow logo</title>
              <g clipPath={`url(#${clipPathId})`}>
                <path
                  d="M10.6667 1.33337L9.13336 2.86671C8.76691 3.24057 8.56165 3.7432 8.56165 4.26671C8.56165 4.79021 8.76691 5.29285 9.13336 5.66671L10.3334 6.86671C10.7072 7.23316 11.2099 7.43842 11.7334 7.43842C12.2569 7.43842 12.7595 7.23316 13.1334 6.86671L14.6667 5.33337"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 9.99995L2.20003 2.19995C1.93395 2.46065 1.72257 2.77183 1.57826 3.11525C1.43395 3.45868 1.35962 3.82744 1.35962 4.19995C1.35962 4.57246 1.43395 4.94123 1.57826 5.28465C1.72257 5.62807 1.93395 5.93925 2.20003 6.19995L7.06669 11.0666C7.53336 11.5333 8.40003 11.5333 8.93336 11.0666L10 9.99995ZM10 9.99995L14.6667 14.6666"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.40002 14.5334L5.66669 10.3334"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6667 3.33337L8 8.00004"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id={clipPathId}>
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h1 className={styles.logoTitle}>FlavorFlow</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Search Bar and New Button */}
        <div className={styles.searchSection}>
          <div className={styles.searchContainer}>
            <div className={styles.searchIconContainer}>
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
              placeholder="Search recipes"
              className={styles.searchInput}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <button
            type="button"
            className={styles.newButton}
            onClick={() => setIsModalOpen(true)}
          >
            + New
          </button>
        </div>

        {/* Recipes or Empty State */}
        {filteredRecipes.length === 0 ? (
          <div className={styles.emptyState}>
            <h2
              className={styles.emptyStateTitle}
              style={{
                fontFamily:
                  'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              }}
            >
              {recipes.length === 0 ? "No recipes yet" : "No recipes found"}
            </h2>
            <p className={styles.emptyStateText}>
              {recipes.length === 0 ? (
                <>
                  Create your first recipe to
                  <br />
                  get started.
                </>
              ) : (
                <>
                  Try adjusting your search to find
                  <br />
                  what you're looking for.
                </>
              )}
            </p>
          </div>
        ) : (
          <div className={styles.recipesGrid}>
            {filteredRecipes.map((recipe) => (
              <div key={recipe.id} className={styles.recipeCard}>
                {recipe.image && (
                  <div className={styles.recipeImageContainer}>
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className={styles.recipeImage}
                      onError={(e) => {
                        // Hide image if it fails to load
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                )}
                <div className={styles.recipeContent}>
                  <h3 className={styles.recipeTitle}>{recipe.title}</h3>
                  <p className={styles.recipeDescription}>
                    {recipe.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Create Recipe</h2>
              <button
                type="button"
                className={styles.closeButton}
                onClick={handleCancel}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-label="Close modal"
                >
                  <title>Close modal</title>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <p className={styles.modalDescription}>
              Add a new recipe with a title, description and an optional image.
            </p>

            <form onSubmit={handleSubmit} className={styles.modalForm}>
              <div className={styles.formGroup}>
                <label htmlFor={titleId} className={styles.formLabel}>
                  Title
                </label>
                <input
                  type="text"
                  id={titleId}
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="E.g. Creamy Tomato Pasta"
                  className={styles.formInput}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor={descriptionId} className={styles.formLabel}>
                  Description
                </label>
                <textarea
                  id={descriptionId}
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter recipe instructions..."
                  className={styles.formTextarea}
                  rows={6}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor={imageId} className={styles.formLabel}>
                  Image
                </label>
                <input
                  type="url"
                  id={imageId}
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="Paste an image URL (optional)"
                  className={styles.formInput}
                />
              </div>

              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.createButton}>
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
