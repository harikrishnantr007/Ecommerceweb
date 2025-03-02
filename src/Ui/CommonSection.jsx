import React from 'react'
import "../Styles/CommonSection.scss"
const CommonSection = ({productName}) => {
  return (
    <section className='common_section'>
        <div className="container">
            <h1>{productName}</h1>
        </div>
    </section>
  )
}

export default CommonSection