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

interface DiscountPolicy {
  tipo: string;
  valor: number;
  desconto_percentual: number;
}

interface CartContextData {
  products: Product[] | null;
  incrementProductQuantity(id: number): void;
  decrementProductQuantity(id: number): void;
  removeProduct(id: number): void;
  addNote(id: number, note: string): void;
  total: number;
  totalItemsQuantity: number;
  discount: number;
  totalWithDiscount: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [totalItemsQuantity, setItemsQuantity] = useState(0);
  const [minimumQuantityPolicy, setMinimumQuantityPolicy] = useState<
    DiscountPolicy
  >({} as DiscountPolicy);
  const [minimumValuepolicy, setMinimumValuepolicy] = useState<DiscountPolicy>(
    {} as DiscountPolicy,
  );
  const [discount, setDiscount] = useState(0);
  const [totalWithDiscount, setTotalWithDiscount] = useState(0);

  useEffect(() => {
    async function loadData() {
      const responseGetProducts = await api.get('/carrinho');
      const responseGetDiscountPolicies = await api.get<DiscountPolicy[]>(
        '/politicas-comerciais',
      );
      setProducts(responseGetProducts.data);
      responseGetDiscountPolicies.data.map(policy =>
        policy.tipo === 'valor_minimo'
          ? setMinimumValuepolicy(policy)
          : setMinimumQuantityPolicy(policy),
      );
    }

    loadData();
  }, []);

  useEffect(() => {
    if (total >= minimumValuepolicy.valor) {
      setDiscount((total * minimumValuepolicy.desconto_percentual) / 100);
      setTotalWithDiscount(total - discount);
    }
  }, [
    total,
    totalItemsQuantity,
    minimumValuepolicy.valor,
    minimumValuepolicy.desconto_percentual,
    discount,
  ]);

  useEffect(() => {
    const sum = products.reduce((accumulator, product): number => {
      if (product.quantidade > 0) {
        return accumulator + product.quantidade * product.valor_unitario;
      }
      return accumulator;
    }, 0);

    setTotal(sum);
  }, [products]);

  useEffect(() => {
    const itemsQuantity = products.reduce((accumulator, product): number => {
      if (product.quantidade > 0) {
        return accumulator + product.quantidade;
      }
      return accumulator;
    }, 0);

    setItemsQuantity(itemsQuantity);
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

      const productsWithQuantity = newProducts.filter(
        product => product.quantidade > 0,
      );

      setProducts(productsWithQuantity);
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
      totalItemsQuantity,
      discount,
      totalWithDiscount,
    }),
    [
      products,
      incrementProductQuantity,
      decrementProductQuantity,
      removeProduct,
      addNote,
      total,
      totalItemsQuantity,
      discount,
      totalWithDiscount,
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
