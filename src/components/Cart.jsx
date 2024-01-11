import React from "react";
import { useSelector, useDispatch } from "react-redux";
import cart from "../features/cart";

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
        className="relative z-20 bg-slate-300 text-slate-900 px-10 pt-10 pb-6 mx-auto min-w-[500px] md:min-w-[700px] rounded border border-slate-600 mb-[10vh]"
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
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
}
