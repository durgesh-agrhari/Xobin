import React from 'react'
import './Auth.css'

const Right = () => {
  
    return (
      <section className='auth-section'>
        <div className='auth-contaner-2'>
          <form>
            <label htmlFor='email'>
              <h4>Email</h4>
              <input type="email" name="email" id="email" />
            </label>
            <label htmlFor='password'>
              <div className='pass'>
                <h4>Password</h4>
              </div>
              <input type="password" name="password" id="password" />
            </label>
  
            <button type='submit' className='auth-btn'>Sign Up</button>
  
          </form>
        </div>
      </section>
    )
}

export default Right
