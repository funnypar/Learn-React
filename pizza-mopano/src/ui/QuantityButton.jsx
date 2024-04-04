import { useDispatch } from 'react-redux';
import Button from './Button';
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from '../features/cart/cartSlice';

const QuantityButton = ({ pizzaId }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2">
      <Button
        type="mini"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <Button
        type="mini"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default QuantityButton;
