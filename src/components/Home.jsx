import React from 'react'
import './Home.css'
import './Auth.css'
import icon from '../components/assets/logo.png'

const Home = () => {
  return (
    <div className='row'>
        <div className='col'>
            <div className='leftside'>
                <div className='auth-container-1'>
                    <h1>Welcome to our Community</h1>
                    <h3>
                    We hope you have a great time taking up this test.
                    Start this test in a Desktop instead of a mobile phone.
                    You will have to finish this assessment in one go!
                    We suggest you to disable any antivirus softwares or other popups that may appear while the test is ongoing.
                    Make sure your ready to take up this assessment before you start. All the best!
                    You can take up this test anytime you want.
                    But once you start the test, you must not leave the assessment page.
                    </h3>
                    <p style={{ color:"red", fontSize:'13px'}}>Git Free Certifactes and osm QA</p>
                    <p style={{ color:"blue", fontSize:'13px'}}>Git Free Certifactes and osm QA</p>
                </div>
            </div>
        </div>


        <div className='col'>
            <div className='rightside'>
            <section className='auth-section'>
                <div className='auth-contaner-2'>
                <img src={icon} alt='Stack overflow' className='login-logo' />
                <form>
                    <h2>Sign Up</h2>

                    <label htmlFor='name'>
                    <div className='pass'>
                        <h4>Nmae</h4>
                    </div>
                    <input type="text" name="name" id="name" />
                    </label>

                    <label htmlFor='email'>
                    <h4>Email</h4>
                    <input type="email" name="email" id="email" />
                    </label>
        
                    <button type='submit' className='auth-btn'>Sign Up</button>
        
                </form>
                </div>
            </section>
            </div>
        </div>
      
    </div>
  )
}

export default Home
