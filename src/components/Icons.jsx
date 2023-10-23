// eslint-disable-next-line react/prop-types
export function HambMenu ({ handleClick }) {
  return (
    <>
      <label
        htmlFor='check'
        className='flex flex-col cursor-pointer w-[40px] md:hidden'
        
      >
        <input type='checkbox' name='' id='check' onClick={handleClick}/>
        <span className='row'></span>
        <span className='row'></span>
        <span className='row'></span>
      </label>
    </>
  )
}
