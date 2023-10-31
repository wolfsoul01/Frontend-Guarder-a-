/* eslint-disable react/prop-types */
export function ButtonDef ({ children,handleclick }) {



  return (
    <button className='bg-purple-500 text-white px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none' onClick={handleclick}>
      {children}
    </button>
  )
}
