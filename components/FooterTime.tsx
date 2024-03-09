"use client"
import { useEffect, useState } from "react"

export default function FooterTime() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  // useEffect(() => {
  //   setCurrentYear(new Date().getFullYear());
  // }, []); // Run only once on mount

  return <div>Rafael Santana, {currentYear}</div>
}
