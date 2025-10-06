import { useState, useId } from "react"
import styles from "./App.module.css"

function App() {
  const clipPathId = "clip0"
  const titleId = useId()
  const descriptionId = useId()
  const imageId = useId()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  })

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
    // TODO: Handle form submission
    console.log("Form submitted:", formData)
    setIsModalOpen(false)
    setFormData({ title: "", description: "", image: "" })
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false)
    }
  }

  const handleOverlayKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsModalOpen(false)
    }
  }

  const isFormValid =
    formData.title.trim() !== "" && formData.description.trim() !== ""

  return (
    <div className={styles.app}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
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
          <h1 className={styles.logoText}>FlavorFlow</h1>
        </div>
      </header>

      {/* Search Bar and New Button */}
      <div className={styles.toolbar}>
        <div className={styles.searchBar}>
          <span className={styles.searchIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Search icon"
            >
              <title>Search</title>
              <path
                d="M14 14L11.1067 11.1067"
                stroke="#64748B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                stroke="#64748B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search recipes"
            className={styles.searchInput}
          />
        </div>

        <button
          type="button"
          className={styles.newButton}
          onClick={() => setIsModalOpen(true)}
        >
          <span className={styles.plusIcon}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Plus icon"
            >
              <title>Plus</title>
              <path
                d="M6.30371 0.373169C6.85589 0.373169 7.30353 0.821034 7.30371 1.37317V5.04016H10.9697C11.522 5.04016 11.9697 5.48788 11.9697 6.04016C11.9697 6.59245 11.522 7.04016 10.9697 7.04016H7.30371V10.7062C7.30371 11.2585 6.856 11.7062 6.30371 11.7062C5.75143 11.7062 5.30371 11.2585 5.30371 10.7062V7.04016H1.63672C1.08458 7.03999 0.636719 6.59234 0.636719 6.04016C0.636719 5.48798 1.08458 5.04034 1.63672 5.04016H5.30371V1.37317C5.30389 0.821034 5.75153 0.373169 6.30371 0.373169Z"
                fill="white"
              />
            </svg>
          </span>
          <span className={styles.newText}>New</span>
        </button>
      </div>

      {/* Main Content - Empty State */}
      <main className={styles.main}>
        <div className={styles.emptyState}>
          <h2 className={styles.emptyTitle}>No recipes yet</h2>
          <p className={styles.emptyText}>
            Create your first recipe to get started.
          </p>
        </div>
      </main>

      {/* Create Recipe Modal */}
      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={handleOverlayClick}
          onKeyDown={handleOverlayKeyDown}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div className={styles.modal}>
            <div className={styles.modalHeader}>
              <h2 className={styles.modalTitle}>Create Recipe</h2>
              <p className={styles.modalDescription}>
                Add a new recipe with a title, description and an optional
                image.
              </p>
              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setIsModalOpen(false)}
                aria-label="Close modal"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <title>Close</title>
                  <path
                    d="M12 4L4 12M4 4L12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <form className={styles.modalForm} onSubmit={handleSubmit}>
              <div className={styles.formField}>
                <label htmlFor={titleId} className={styles.fieldLabel}>
                  Title
                </label>
                <input
                  type="text"
                  id={titleId}
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="E.g. Creamy Tomato Pasta"
                  className={styles.fieldInput}
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor={descriptionId} className={styles.fieldLabel}>
                  Description
                </label>
                <textarea
                  id={descriptionId}
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder=""
                  className={styles.fieldTextarea}
                  rows={4}
                />
              </div>

              <div className={styles.formField}>
                <label htmlFor={imageId} className={styles.fieldLabel}>
                  Image
                </label>
                <input
                  type="url"
                  id={imageId}
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="Paste an image URL (optional)"
                  className={styles.fieldInput}
                />
              </div>

              <div className={styles.modalActions}>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={styles.createButton}
                  disabled={!isFormValid}
                >
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
