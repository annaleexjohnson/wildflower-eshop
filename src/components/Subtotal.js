import React, { useContext} from 'react'
import '../styles/Subtotal.css'
import CurrencyFormat from 'react-currency-format';
import ProductContext from './ProductContext';


export default function Subtotal() {

    const {subtotalPrice, items} = useContext(ProductContext);

  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText = {(value) => (
                <>
                    <p>
                        Subtotal ({items.length}): $<strong>{subtotalPrice}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
            )}

            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />

        <button className='subtotal__checkout'>Proceed to Checkout</button>
    </div>
  )
}
