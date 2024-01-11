import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateItemFromSelect } from "../features/cart";
import { removeFromCart } from "../features/cart";

export default function Cart({ onClose }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div
      onClick={onClose}
      className="fixed z-10 inset-0 bg-slate-700/75 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-20 bg-slate-100 text-slate-900 px-10 pt-10 pb-6 mx-auto min-w-[500px] md:min-w-[700px] rounded border border-slate-600 mb-[10vh]"
      >
        <button
          onClick={onClose}
          className="rounded absolute bg-red-600 w-7 h-7 top-2 right-2 flex items-center justify-center text-slate-100"
        >
          X
        </button>
        <ul>
          {cart.cartItems?.length > 0 ? (
            cart.cartItems.map((cartItem) => (
              <li key={cartItem.id} className="flex items-center mb-4">
                <img
                  className="w-16 h-16 object-contain mb-4 rounded-sm"
                  src={`/images/${cartItem.img}.png`}
                  alt={cartItem.title}
                />
                <p className="mr-auto ml-2 text-slate-700 text-lg font-semibold">
                  {cartItem.title}
                </p>

                <select
                  onChange={(e) =>
                    dispatch(
                      updateItemFromSelect({
                        value: e.target.value,
                        id: cartItem.id,
                      })
                    )
                  }
                  className="w-20 rounded p-2 mr-4"
                  name="quantity"
                  value={cartItem.quantity}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>

                <button
                  onClick={() => dispatch(removeFromCart(cartItem.id))}
                  className="bg-slate-900 text-slate-200 p-2 inline-flex justify-center items-center rounded"
                >
                  Remove from card
                </button>
              </li>
            ))
          ) : (
            <li className="mb-4">Add some items to your cart...</li>
          )}
        </ul>
        <p className="text-xl text-slate-900 mb-6">
          Your total :{" "}
          <span className="font-semibold">
            {cart.cartItems
              .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
              .toFixed(2)}
            $
          </span>
        </p>
        <button className="mx-auto block max-w-4xl bg-slate-900 text-slate-200 p-2 justify-center items-center rounded">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
}
