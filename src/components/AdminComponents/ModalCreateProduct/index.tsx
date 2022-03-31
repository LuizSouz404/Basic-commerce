import { FormEvent, useState } from 'react';
import { FaChevronRight, FaPlus } from 'react-icons/fa';
import Modal from 'react-modal';
import { Container, Selector, SelectorWrapper } from './styles';

const categories = [
  "CASACOS", "CAMISAS", "VESTIDOS", "CALÇAS"
]

interface ModalCreateProductProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalCreateProduct({
  isOpen,
  onRequestClose
}: ModalCreateProductProps) {
  const [isFocus, setIsFocus] = useState(false);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

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
        <h2>Cadastrar Produto</h2>

        <input
          type="text"
          placeholder="Título"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />

        <input
          type="number"
          placeholder="Valor"
          onChange={e => setPrice(e.target.value)}
          value={price}
        />

        <input
          type="number"
          placeholder="Estoque"
          onChange={e => setStock(e.target.value)}
          value={stock}
        />

        <SelectorWrapper onClick={() => setIsFocus(!isFocus)}>
          <span>{category === "" ? "Selectione a categoria" : category}</span>

          <button>
            <FaChevronRight size={24}/>
          </button>

          <Selector style={isFocus ? {opacity: 1, visibility: "visible"} : {opacity: 0, visibility: "hidden"}}>
            {categories.map((categoryName, index) => (
              <span key={index} onClick={() => {setIsFocus(!isFocus); setCategory(categoryName)}}>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</span>
            ))}
          </Selector>
        </SelectorWrapper>

        <input
          type="text"
          placeholder="ImageURL"
          onChange={e => setImage(e.target.value)}
          value={image}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
