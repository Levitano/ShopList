import PropTypes from 'prop-types';
import { CartContainer, CartItem, CartTitle, EmptyCartMessage } from './CarrinhoStyles.js';

const Carrinho = ({ value }) => {
    return (
        <CartContainer>
            <CartTitle>Lista de Compras</CartTitle>
            {value.length === 0 ? (
                <EmptyCartMessage>Seu carrinho está vazio.</EmptyCartMessage>
            ) : (
                <ul>
                    {value.map((item) => (
                        <CartItem key={item.id}>
                            {item.name} - Quantidade: {item.quantity}
                        </CartItem>
                    ))}
                </ul>
            )}
        </CartContainer>
    );
}

Carrinho.propTypes = {
    value: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Carrinho;
