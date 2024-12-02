import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment, faTag, faSave, faArrowLeft, faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import {
  Form,
  InputWrapper,
  IconWrapper,
  Input,
  TextAreaWrapper,
  TextAreaIconWrapper,
  TextArea,
  Button,
  BackButton,
  ButtonWrapper,
  NotificationWrapper,
  Notification
} from '@/frontend/styles/editForm.styles';

const EditForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', topic: '' });
  const [notification, setNotification] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  useEffect(() => {
    if (id) {
      const fetchContact = async () => {
        try {
          const response = await axios.get(`https://backend-aquaclean.onrender.com/api/contact/${id}`);
          setFormData(response.data);
        } catch (error) {
          console.error('Error al obtener el contacto:', error);
        }
      };

      fetchContact();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://backend-aquaclean.onrender.com/api/contact/${id}`, formData);
      setNotification({ type: 'success', message: 'Contacto actualizado con éxito.' });
  
      setTimeout(() => {
        setNotification(null);
        router.push('/table');
      }, 3000);
    } catch (error) {
      setNotification({ type: 'error', message: 'Error al actualizar el contacto.' });
  
      setTimeout(() => setNotification(null), 3000);
      console.error('Error al actualizar el contacto:', error);
    }
  };  

  const handleBack = () => {
    router.push('/table');
  };

  return (
    <>
      {notification && (
        <NotificationWrapper>
          <Notification type={notification.type}>
            <FontAwesomeIcon icon={notification.type === 'success' ? faCheckCircle : faTimesCircle} />
            {notification.message}
          </Notification>
        </NotificationWrapper>
      )}

      <Form onSubmit={handleSubmit}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '25px' }}>Editar Formulario</h2>

        <InputWrapper>
          <IconWrapper>
            <FontAwesomeIcon icon={faUser} />
          </IconWrapper>
          <Input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </InputWrapper>

        <InputWrapper>
          <IconWrapper>
            <FontAwesomeIcon icon={faEnvelope} />
          </IconWrapper>
          <Input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </InputWrapper>

        <TextAreaWrapper>
          <TextAreaIconWrapper>
            <FontAwesomeIcon icon={faComment} />
          </TextAreaIconWrapper>
          <TextArea
            name="message"
            placeholder="Mensaje"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </TextAreaWrapper>

        <InputWrapper>
          <IconWrapper>
            <FontAwesomeIcon icon={faTag} />
          </IconWrapper>
          <Input
            type="text"
            name="topic"
            placeholder="Tema"
            value={formData.topic}
            onChange={handleInputChange}
            required
          />
        </InputWrapper>

        <ButtonWrapper>
          <Button type="submit">
            <FontAwesomeIcon icon={faSave} /> Actualizar Contacto
          </Button>
          <BackButton type="button" onClick={handleBack}>
            <FontAwesomeIcon icon={faArrowLeft} /> Regresar
          </BackButton>
        </ButtonWrapper>
      </Form>
    </>
  );
};

export default EditForm;