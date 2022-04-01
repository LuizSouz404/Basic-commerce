import { FormEvent, useState } from 'react';
import { FaChevronRight, FaPlus } from 'react-icons/fa';
import { FiCamera } from 'react-icons/fi';
import Modal from 'react-modal';
import { Container, Selector, SelectorImageWrapper, SelectorWrapper } from './styles';

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
  const [fileSelected, setFileSelected] = useState<File>(); // also tried <string | Blob>

  const handleImageChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.target.files;

    if (!fileList) return;

    setFileSelected(fileList[0]);
  };

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    if (!fileSelected) {
      return;
    }
    const formData = new FormData();
    formData.append("file", fileSelected, fileSelected.name);
    formData.append("product_name", title);
    formData.append("product_price", price);
    formData.append("product_stock", stock);
    formData.append("category", category);

    const dados = await fetch('http://localhost:3000/api/product/create', {
      method: "POST",
      body: formData
    });

    console.log(dados);
    onRequestClose();
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

        <SelectorImageWrapper htmlFor='image'>
          <FiCamera size={20} /> {fileSelected ? "" : "Selecione a image"}
          <input
            type="file"
            data-testid="input-file"
            id="image"
            name="image"
            multiple={false}
            onChange={handleImageChange}
          />
        </SelectorImageWrapper>

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
