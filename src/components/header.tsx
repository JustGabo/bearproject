
import HeaderButtons from '../components/header-buttons'
import HeaderMenu from '../components/header-menu'

export const header = () => {
  return (
    <div>
        <h1 className='text-red-200'>Logo</h1>
        <HeaderMenu/>
        <HeaderButtons/>
    </div>
  )
}

export default header