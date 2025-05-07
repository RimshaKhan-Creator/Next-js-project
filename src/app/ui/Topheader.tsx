import React from 'react'
import SearchInput from './search-input'
import AuthHeader from './AuthHeader'
const Topheader = () => {
  return (

          <div className="grid grid-cols-3 h-14 items-center ml-70">
             
      <div className="flex flex-start">
<h1>Discuss App for learning how ,why ,connection,scenerio  </h1>
      </div>
      <div className="flex flex-center:">
      <SearchInput/>
      </div>
      <div className="flex flex-end">
<AuthHeader/>
      </div>
    </div>

  )
}

export default Topheader
