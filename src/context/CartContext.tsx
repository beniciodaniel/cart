import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
import api from '../services/api';

interface Product {
  id: number;
  nome: string;
  valor_unitario: number;
  quantidade: number;
  url_imagem: string;
  sku: string;
  observacao?: string;
}

interface CartContextData {
  products: Product[] | null;
  incrementProductQuantity(id: number): void;
  decrementProductQuantity(id: number): void;
  removeProduct(id: number): void;
  addNote(id: number, note: string): void;
  total: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/');
      console.log(response.data);
      setProducts(response.data);
    }

    loadData();
  }, []);

  useEffect(() => {
    const sum = products.reduce((accumulator, product): number => {
      if (product.quantidade > 0) {
        return accumulator + product.quantidade * product.valor_unitario;
      }
      return accumulator;
    }, 0);

    setTotal(sum);
  }, [products]);

  const incrementProductQuantity = useCallback(
    (id: number) => {
      const newProducts = products?.map(product =>
        product.id === id
          ? { ...product, quantidade: product.quantidade + 1 }
          : product,
      );
      setProducts(newProducts);
    },
    [products],
  );

  const removeProduct = useCallback(
    (id: number) => {
      const newProducts = products.filter(product => product.id !== id);
      setProducts(newProducts);
    },
    [products],
  );

  const decrementProductQuantity = useCallback(
    (id: number) => {
      const newProducts = products.map(product =>
        product.id === id && product.quantidade > 0
          ? { ...product, quantidade: product.quantidade - 1 }
          : product,
      );
      setProducts(newProducts);
    },
    [products],
  );

  const addNote = useCallback(
    (id: number, note: string) => {
      const newProducts = products.map(product =>
        product.id === id ? { ...product, observacao: note } : product,
      );
      setProducts(newProducts);
    },
    [products],
  );

  const value = useMemo(
    () => ({
      products,
      incrementProductQuantity,
      decrementProductQuantity,
      removeProduct,
      addNote,
      total,
    }),
    [
      products,
      incrementProductQuantity,
      decrementProductQuantity,
      removeProduct,
      addNote,
      total,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('You should use useCart within CartProvider');
  }

  return context;
}

export { CartProvider, useCart };