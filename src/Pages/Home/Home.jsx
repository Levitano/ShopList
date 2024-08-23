import { ContainerList, Item } from './Home.js'
import { useState } from 'react'
import data from '../ListaDeProdutos/produtos'
import '../../index.css'
import Carrinho from '../../components/Carrinho.jsx'

function Home() {
  const [selectedItems, setSelectedItems] = useState([]);

  const changeColor = (id, name) => {
    setSelectedItems((prevSelectedItems) => {
      const existingItem = prevSelectedItems.find(item => item.id === id);
      if (existingItem) {
        // Se o item já está selecionado, remova-o
        return prevSelectedItems.filter(item => item.id !== id);
      } else {
        // Se o item não está selecionado, adicione-o com quantidade 1
        return [...prevSelectedItems, { id, name, quantity: 1 }];
      }
    });
  }

  const increaseQuantity = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  const decreaseQuantity = (id) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
      )
    );
  }

  return (
    <div>
      <ContainerList>
        <h1>Lista de produtos</h1>

        {data[0].produto.map((type) => (
          <Item key={type.id}>
            <li
              onClick={() => changeColor(type.id, type.name)}
              style={{ backgroundColor: selectedItems.find(item => item.id === type.id) ? 'green' : 'transparent' }}>
              {type.name}
            </li>
            <div>
              <button onClick={() => increaseQuantity(type.id)}>+</button>
              <button onClick={() => decreaseQuantity(type.id)}>-</button>
              {/* Exibe a quantidade se o item estiver selecionado */}
              <span>
                {selectedItems.find(item => item.id === type.id)?.quantity || 0}
              </span>
            </div>
          </Item>
        ))}
      </ContainerList>

      <div>
        <Carrinho value={selectedItems} />
      </div>
    </div>
  )
}

export default Home;
