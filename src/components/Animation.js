import React from 'react'

const Animation = () => {
  return (
    <div>

<div class="flex space-x-6 items-center justify-center min-h-screen bg-gray-100">

  <div class="w-16 h-16 bg-blue-500 rounded-full animate-bounce"></div>

 
  <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

  
  <div class="w-16 h-16 bg-green-500 rounded-full animate-pulse"></div>

 
  <div class="w-16 h-16 bg-red-500 rounded-full animate-ping"></div>
</div>



    </div>
  )
}

export default Animation