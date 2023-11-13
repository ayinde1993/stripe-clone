import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const { closeSubeMenu } = useGlobalContext();
  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1> Payments infrastructure for the internet</h1>
          <p>Millions of businesses of all sizes use Stripe, whether online or via POS, to accept payments, make transfers, automate financial processes and, ultimately, generate more revenue.</p>
          <button className='btn'>
            Start now
          </button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />
        </article>
      </div>
    </section>)
}

export default Hero
