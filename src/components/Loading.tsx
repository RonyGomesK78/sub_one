export function Loading() {
  return (
    <>
      <div className="flex flex-row items-center justify-center h-screen">
        <svg className="animate-pulse h-4 rounded-full w-4 mr-3 bg-red-400" viewBox="0 0 24 24"></svg>
        <svg className="animate-pulse h-4 rounded-full w-4 mr-3 bg-yellow-400" viewBox="0 0 24 24"></svg>
        <svg className="animate-pulse h-4 rounded-full w-4 mr-3 bg-green-400" viewBox="0 0 24 24"></svg>
        </div>
        <div className="flex flex-row justify-center">
        Guardando...
      </div>
    </>
  )
}
