import { FormEvent } from 'react';
import { FaPlus } from 'react-icons/fa';
import Modal from 'react-modal';
import { Container } from './styles';


interface ModalCreateProductProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalCreateProduct({
  isOpen,
  onRequestClose
}: ModalCreateProductProps) {

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button
        className="react-modal-close"
        type="button"
        onClick={onRequestClose}
      >
        <FaPlus size={24}/>
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          type="text"
          placeholder="Título"
        />

        <input
          type="number"
          placeholder="Valor"
        />

        <input
          type="text"
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
