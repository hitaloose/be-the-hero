import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'
import './styles.css'

import logoImg from '../../assets/logo.svg'

import api from '../../services/api'

export default function NewIncident() {
  /**
   * Consts
   */
  const ongId = localStorage.getItem('ongId')

  /**
   * Router
   */
  const history = useHistory()

  /**
   * States
   */
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  /**
   * Handles
   */
  async function handleNewIncedent(e) {
    e.preventDefault()

    const newIncident = {
      title,
      description,
      value
    }

    try {

      await api.post('/incidents', newIncident, {
        headers: {
          Authorization: ongId
        }
      })

      history.push('/profile')
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  }

  /**
   * Returns
   */
  return (
    <div className="new-incedent-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro novo caso</h1>
          <p>Descreva o caso detalhadamento para encontrar um herói para resolver isso.</p>

          <Link className='back-link' to="/profile">
            <FiArrowLeft size={16} color='#e02041' />
          Voltar para home
        </Link>
        </section>

        <form onSubmit={handleNewIncedent}>
          <input
            placeholder='Nome do caso'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder='Descrição'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder='Valor em reais'
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className='button' type='submit'>Cadastrar</button>
        </form>
      </div>
    </div>
  )
}
