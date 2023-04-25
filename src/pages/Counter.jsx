import { useDispatch, useSelector } from 'react-redux'


export const Counter = () => {
  const dispatch = useDispatch()
  const  {count}  = useSelector(state => state)

  const Increment = () => {
    dispatch({
      type: 'Increment'
    })
  }
  const Decrement = () => {
  
    dispatch({
      type: 'Decrement'    
    })
  }
  return (

    <div className='iner'>
      <button className='btn'  onClick={Increment}>+</button>
      <p className='count'>{count}</p>
      <button className='btn'  onClick={Decrement}>-</button>
    </div>
  )
}
