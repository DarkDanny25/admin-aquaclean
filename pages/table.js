import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faExclamationTriangle, faCheck, faTimes, faSearch, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useRouter } from 'next/router';
import Push from 'push.js';
import {
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  ButtonEdit,
  ButtonDelete,
  Modal,
  ModalContent,
  ModalButton,
  ModalButtonWrapper,
  WarningIconWrapper,
  TableTitle,
  SearchInputWrapper,
  SearchInput,
  SearchIcon,
  PaginationWrapper,
  PaginationButton,
  NotificationWrapper,
  NotificationIcon,
} from '../frontend/styles/table.styles';

const TableComponent = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(5);
  const [notification, setNotification] = useState(null);
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://backend-aquaclean.onrender.com/api/contact');
      const newContacts = response.data;
      const newContactCount = newContacts.length;
      const storedContactCount = localStorage.getItem('contactCount') || 0;

      if (newContactCount > storedContactCount) {
        const newRegisteredCount = newContactCount - storedContactCount;
        
        Push.create('¡Nuevos contactos registrados!', {
          body: `Se han registrado ${newRegisteredCount} nuevos contactos.`,
          icon: '/icon-192x192.png',
          timeout: 4000,
          onClick: function () {
            window.focus();
            this.close();
          }
        });
      }

      localStorage.setItem('contactCount', newContactCount);
      
      setContacts(newContacts);
      setFilteredContacts(newContacts);
      setLoading(false);
    } catch (error) {
      console.error('Error al cargar contactos:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    const filtered = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.topic.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filtered);
  }, [searchTerm, contacts]);

  const handleEdit = (contactId) => {
    router.push(`/edit/${contactId}`);
  };

  const handleDeleteClick = (contactId) => {
    setContactToDelete(contactId);
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://backend-aquaclean.onrender.com/api/contact/${contactToDelete}`);
      fetchContacts();
      setIsModalOpen(false);

      setNotification({ type: 'success', message: 'Contacto eliminado con éxito.' });

      setTimeout(() => setIsExiting(true), 2500);
      setTimeout(() => {
        setNotification(null);
        setIsExiting(false);
      }, 3000);
    } catch (error) {
      console.error('Error al eliminar el contacto:', error);
    }
  };

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirstContact, indexOfLastContact);
  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {notification && (
        <NotificationWrapper type={notification.type} isExiting={isExiting}>
          <NotificationIcon>
            <FontAwesomeIcon icon={faCheckCircle} />
          </NotificationIcon>
          {notification.message}
        </NotificationWrapper>
      )}

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <WarningIconWrapper>
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </WarningIconWrapper>
            <p>¿Estás seguro de eliminar este contacto?</p>
            <ModalButtonWrapper>
              <ModalButton confirm onClick={handleDelete}>
                <FontAwesomeIcon icon={faCheck} /> Sí, eliminar
              </ModalButton>
              <ModalButton cancel onClick={() => setIsModalOpen(false)}>
                <FontAwesomeIcon icon={faTimes} /> Cancelar
              </ModalButton>
            </ModalButtonWrapper>
          </ModalContent>
        </Modal>
      )}

      <div>
        <TableTitle>Gestión de Formularios</TableTitle>
        <SearchInputWrapper>
          <SearchInput
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon>
            <FontAwesomeIcon icon={faSearch} />
          </SearchIcon>
        </SearchInputWrapper>

        {loading ? (
          <p style={{ textAlign: 'center' }}>Cargando...</p>
        ) : (
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <TableHeader>Nombre</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>Mensaje</TableHeader>
                  <TableHeader>Tema</TableHeader>
                  <TableHeader>Acciones</TableHeader>
                </tr>
              </thead>
              <tbody>
                {currentContacts.map((contact) => (
                  <tr key={contact._id}>
                    <TableCell>{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.message}</TableCell>
                    <TableCell>{contact.topic}</TableCell>
                    <TableCell>
                      <ButtonEdit onClick={() => handleEdit(contact._id)}>
                        <FontAwesomeIcon icon={faEdit} />
                      </ButtonEdit>
                      <ButtonDelete onClick={() => handleDeleteClick(contact._id)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </ButtonDelete>
                    </TableCell>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        )}

        <PaginationWrapper>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationButton
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </PaginationButton>
          ))}
        </PaginationWrapper>
      </div>
    </>
  );
};

export default TableComponent;