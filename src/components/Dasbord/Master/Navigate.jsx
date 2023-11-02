export function Navigate () {
  return (
    <>
      <footer className='w-full '>
        <nav className='flex items-center justify-center w-full'>
          <a
            className='text-gray-400 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md pointer-events-none'
            href='#'
          >
            <span>«</span>
            <span>Previous</span>
          </a>

          <a
            className='text-gray-500 hover:text-blue-600 p-4 inline-flex items-center gap-2 rounded-md'
            href='#'
          >
            <span>Next</span>
            <span>»</span>
          </a>
        </nav>
      </footer>
    </>
  )
}
