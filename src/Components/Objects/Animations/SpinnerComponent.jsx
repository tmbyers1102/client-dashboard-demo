import React, { useEffect, useState } from 'react'

const SpinnerComponent = () => {
  return (
    <>
        <div class="flex items-center justify-center">
            <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                <div class="border-t-transparent border-solid animate-spin rounded-full border-blue-400 border-8 h-48 w-48"></div>
            </div>
        </div>
    </>
  )
}

export default SpinnerComponent