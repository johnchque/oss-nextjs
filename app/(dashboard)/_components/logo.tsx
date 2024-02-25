import Image from 'next/image'
import React from 'react'

export function Logo() {
  return (
    <Image height={50} width={50} alt='logo' src="/logo.svg" />
  )
}
