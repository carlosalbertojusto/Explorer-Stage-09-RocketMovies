import { Container, Informations, Wrapper, Section } from './styles'
import { FiArrowLeft } from 'react-icons/fi'

import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'

import { api } from '../../services/api'
import { useState } from 'react'

export function NewMovie() {
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(0)
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([])
  const [newTags, setNewTags] = useState('')

  const navigate = useNavigate()

  function handleAddTags() {
    setTags((prevState) => [...prevState, newTags])
    setNewTags('')
  }

  function handleRemoveTags(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Digite o título do filme')
    }

    if (!rating) {
      return alert(
        'Você deixou o campo de nota preenchido mas não clicou em adicionar, Clique em adicionar ou deixe o campo vazio.'
      )
    }

    if (newTags) {
      return alert(
        'Você deixou o campo Tag preenchido mas não clicou em adicionar, Clique em adicionar ou deixe o campo vazio.'
      )
    }

    await api.post('/notes', {
      title,
      description,
      rating,
      tags,
    })

    alert('Nota criada com sucesso!')
    navigate(-1)
  }

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Header />
      <Wrapper>
        <button type="button" onClick={handleBack}>
          <FiArrowLeft /> Voltar
        </button>
        <h1>Novo Filme</h1>
        <Informations>
          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="Sua nota (de 0 a 5)"
            onChange={(e) => setRating(e.target.value)}
          />
        </Informations>
        <TextArea
          placeholder="Observações"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Section>
          <h2>Marcadores</h2>
          <div className="tags">
            {tags.map((tag, index) => (
              <NoteItem
                key={index}
                value={tag}
                onClick={() => handleRemoveTags(tag)}
              />
            ))}
            <NoteItem
              isNew
              placeholder="Novo marcador"
              value={newTags}
              onChange={(e) => setNewTags(e.target.value)}
              onClick={handleAddTags}
            />
          </div>
        </Section>
        <div>
          <Button title="Excluir filme" onClick={handleBack} />
          <Button title="Salvar alterações" primary onClick={handleNewNote} />
        </div>
      </Wrapper>
    </Container>
  )
}
