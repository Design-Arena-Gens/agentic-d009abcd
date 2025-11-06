"use client";

import React, { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import type { CartItem, Product } from '@/types/product';

export type CartState = {
  items: CartItem[];
};

type Action =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { key: string } }
  | { type: 'UPDATE_QTY'; payload: { key: string; quantity: number } }
  | { type: 'CLEAR' };

const CartStateContext = createContext<CartState | undefined>(undefined);
const CartDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

function itemKey(item: Pick<CartItem, 'productId' | 'size' | 'color'>): string {
  return `${item.productId}__${item.size ?? ''}__${item.color ?? ''}`;
}

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const key = itemKey(action.payload);
      const existing = state.items.find((i) => i.key === key);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.key === key ? { ...i, quantity: i.quantity + action.payload.quantity } : i
          ),
        };
      }
      return { items: [...state.items, { ...action.payload, key }] };
    }
    case 'REMOVE_ITEM': {
      return { items: state.items.filter((i) => i.key !== action.payload.key) };
    }
    case 'UPDATE_QTY': {
      return {
        items: state.items.map((i) =>
          i.key === action.payload.key ? { ...i, quantity: action.payload.quantity } : i
        ),
      };
    }
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

const STORAGE_KEY = 'agentic_cart_v1';

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartState;
        if (Array.isArray(parsed.items)) {
          parsed.items.forEach((i) => (i.key = i.key ?? itemKey(i)));
          dispatch({ type: 'CLEAR' });
          // Rehydrate by adding
          parsed.items.forEach((i) => dispatch({ type: 'ADD_ITEM', payload: i }));
        }
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ items: state.items.map((i) => ({ ...i })) })
      );
    } catch {}
  }, [state.items]);

  const value = useMemo(() => state, [state]);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={value}>{children}</CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

export function useCart() {
  const state = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);
  if (!state || !dispatch) throw new Error('useCart must be used within CartProvider');
  return { state, dispatch } as const;
}

export function useCartActions() {
  const { dispatch } = useCart();
  return {
    addToCart: (item: Omit<CartItem, 'key'>) => dispatch({ type: 'ADD_ITEM', payload: item as CartItem }),
    removeItem: (key: string) => dispatch({ type: 'REMOVE_ITEM', payload: { key } }),
    updateQuantity: (key: string, quantity: number) =>
      dispatch({ type: 'UPDATE_QTY', payload: { key, quantity } }),
    clear: () => dispatch({ type: 'CLEAR' }),
  } as const;
}
