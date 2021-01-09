export default function Container({ children }) {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8">
      {children}
    </div>
  )
}
