import React from 'react'

export default function Footer() {
  return (
    <footer className="py-8 mt-12 bg-yellow-400">
      <div className="container mx-auto px-6 text-center container-max text-black">
        <p className='font-bold text-lg'>Abaixo estão meus contatos:</p>
        <ul className="mt-4">
          <li><strong>Email:</strong> dobsfoxx@gmail.com</li>
          <li><a href="https://www.linkedin.com/in/douglas-morais-asuosdgx/"><strong>LinkedIn:</strong> https://www.linkedin.com/in/douglas-morais-asuosdgx/</a></li>
          <li><a href="https://github.com/dobsfoxx"><strong>GitHub:</strong> https://github.com/dobsfoxx</a></li>
          <li><strong>Telefone e WhatsApp:</strong> (34)99188-1114</li>
        </ul>
      </div>
    </footer>
  )
}
