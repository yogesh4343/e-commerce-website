import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Error = () => {
  return (
    <div>
        <Header />
        {/* <img src="./Image/error.png" style={{  backgroundSize: "cover", */}
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg.webp" style={{  backgroundSize: "cover",
    maxWidth: "100%",
    width: "100%" ,}} alt="error Page " />
    <Footer />
    </div>

  )
}

export default Error