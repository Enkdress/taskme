'use client'

import { useEffect } from "react"

const A = () => {
  useEffect(() => {
    if (window) {
      window.addEventListener("load", function() {
        setTimeout(function() {
          // This hides the address bar:
          window.scrollTo(0, 1);
        }, 0);
      });
    }
  }, [])

  return null
}

export default A 
