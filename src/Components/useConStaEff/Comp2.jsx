import React, {useContext} from 'react'
import { PropContext } from './TeachContext'

const Comp2 = () => {
    const {name} = useContext(PropContext)
  return (
    <div>
        {name}
    </div>
  )
}                                    

export default Comp2