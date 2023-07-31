import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { IoIosTennisball } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";

export default function header() {
  return (
        <nav className='navbar'>

          <div className='logo'>
            <span><IoIosTennisball/>play tennis</span>
          </div>

          <ul className='menu'>
            <li>racket</li>
            <li>outfit</li>
            <li>shoes</li>
            <li>acc</li>
          </ul>

          <ul className='login'>
            <li>login</li>
            <li className='cart'><BsFillCartFill/></li>
          </ul>

        </nav>
  )
}
