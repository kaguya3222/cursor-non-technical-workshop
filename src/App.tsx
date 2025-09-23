import { useId } from "react"

function App() {
  const clipPathId = useId()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
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
          <h1 className="text-xl font-semibold text-gray-900">FlavorFlow</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        {/* Search Bar and New Button */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
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
              className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            + New
          </button>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            No recipes yet
          </h2>
          <p className="text-gray-500 text-lg">
            Create your first recipe to
            <br />
            get started.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
