import { useEffect, useState } from 'react'
import { Alert, Button, Card, Form } from 'react-bootstrap'
import { motion } from 'framer-motion'

type ContactProps = {
  id: string
  email: string
  message: string
  created_at: string
}

export function Contact() {
  const API_URL = 'http://localhost:3000/message'
  const [message, setMessage] = useState([])
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [validator, setValidator] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const getMessages = async () => {
      const response = await fetch(API_URL)
      const data = await response.json()
      setMessage(data)
    }
    getMessages()
  }, [message])

  const sendMessage = (event: { preventDefault: () => void }) => {
    event.preventDefault()
    setValidator(false)
    if (author.length === 0 || content.length === 0) {
      return setValidator(!validator)
    }

    const bodyForm = {
      email: author,
      message: content
    }

    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyForm)
    })
      .then(response => response.json())
      .then(data => {
        if (data.id) {
          setSuccess(true)
          setTimeout(() => {
            setSuccess(false)
          }, 5000)
        }
      })
    setAuthor('')
    setContent('')
  }

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <h2 className="mb-4">Contato</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Insira seu email"
            value={author}
            onChange={event => setAuthor(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Insira sua mensagem"
            value={content}
            onChange={event => setContent(event.target.value)}
          />
        </Form.Group>

        <Button onClick={sendMessage} variant="primary" type="submit">
          Enviar
        </Button>
      </Form>

      {validator && (
        <Alert variant="danger" className="mt-3">
          Preencha todos os campos!
        </Alert>
      )}

      {success && (
        <Alert variant="success" className="mt-3">
          Enviado com sucesso!
        </Alert>
      )}
      <h3 className="mt-3">Comentários</h3>
      {message.map((content: ContactProps) => {
        const date = new Date(content.created_at)
        return (
          <Card className="mt-3" key={content.id}>
            <Card.Body>
              <Card.Title>{content.email}</Card.Title>
              <Card.Text>{content.message}</Card.Text>
              <Card.Text className="text-muted" style={{ fontSize: '0.8rem' }}>
                {date.toDateString()}
              </Card.Text>
            </Card.Body>
          </Card>
        )
      })}
    </motion.div>
  )
}
