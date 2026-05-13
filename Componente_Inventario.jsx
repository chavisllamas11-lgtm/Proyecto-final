import React, { useState, useEffect } from 'react';
import {
  Search, Bell, LogOut, ShoppingCart,
  Package, User, Printer
} from 'lucide-react';
import Inventario from './Componentes/Componente_Inventario';
import './App.css';

const App = () => {
  const [activePage, setActivePage] = useState('ventas');
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('inventory_products');
    return saved ? JSON.parse(saved) : [];
  });
  const [categories, setCategories] = useState(() => {
    const saved = localStorage.getItem('inventory_categories');
    return saved ? JSON.parse(saved) : ['Bebidas', 'Postres', 'Snacks'];
  });

  // Persistencia
  useEffect(() => {
    localStorage.setItem('inventory_products', JSON.stringify(products));
  }, [products]);
  useEffect(() => {
    localStorage.setItem('inventory_categories', JSON.stringify(categories));
  }, [categories]);

  // Estados de Ventas
  const [activeTab, setActiveTab] = useState('Todos');
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [description, setDescription] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('Efectivo');

  // Obtener pestañas dinámicas (categorías reales)
  const tabs = ['Todos', ...categories.filter(cat =>
    products.some(p => p.category === cat)
  )];

  // Filtrar productos por búsqueda y pestaña activa
  const displayedProducts = products.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    if (activeTab === 'Todos') return matchSearch;
    return p.category === activeTab && matchSearch;
  });

  const handleQuantityChange = (productId, value) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(0, parseInt(value) || 0),
    }));
  };

  const addToCart = (product) => {
    const qty = quantities[product.id] || 1;
    if (qty <= 0) return;
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prev, { product, quantity: qty }];
    });
    setQuantities(prev => ({ ...prev, [product.id]: 0 }));
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const total = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  // Imprimir ticket (ventana emergente)
  const handlePrintTicket = () => {
    const ticketWindow = window.open('', '_blank', 'width=400,height=600');
    if (!ticketWindow) return;
    const now = new Date().toLocaleString();
    const itemsHtml = cart.map(item => `
      <tr>
        <td>${item.product.name}</td>
        <td>${item.quantity}</td>
        <td>$${(item.product.price * item.quantity).toFixed(2)}</td>
      </tr>
    `).join('');
    ticketWindow.document.write(`
      <html>
        <head><title>Ticket</title></head>
        <body style="font-family: monospace; padding: 20px;">
          <h2>Ticket de Venta</h2>
          <p>Fecha: ${now}</p>
          <table width="100%" border="1" cellpadding="5" style="border-collapse: collapse;">
            <thead><tr><th>Producto</th><th>Cant.</th><th>Subtotal</th></tr></thead>
            <tbody>${itemsHtml}</tbody>
          </table>
          <h3>Total: $${total.toFixed(2)}</h3>
          <p>Pago con: ${paymentMethod}</p>
          <p>Descripción: ${description || 'N/A'}</p>
          <script>window.print(); window.close();</script>
        </body>
      </html>
    `);
    ticketWindow.document.close();
  };

  return (
    <div className="pos-container">
      <aside className="pos-sidebar">
        <div className="profile-section">
          <div className="avatar-circle"><User size={32} color="white" /></div>
          <span className="profile-name">Nombre</span>
        </div>
        <nav className="sidebar-nav">
          <button className={`nav-btn ${activePage === 'ventas' ? 'active' : ''}`} onClick={() => setActivePage('ventas')} title="Ventas">
            <ShoppingCart size={24} />
          </button>
          <button className={`nav-btn ${activePage === 'inventario' ? 'active' : ''}`} onClick={() => setActivePage('inventario')} title="Inventario">
            <Package size={24} />
          </button>
        </nav>
      </aside>

      <main className="pos-main">
        <header className="pos-header">
          <div className="search-bar">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="header-actions">
            <button className="icon-btn"><Bell size={20} /></button>
            <button className="icon-btn"><LogOut size={20} /></button>
          </div>
        </header>

        {activePage === 'ventas' && (
          <div className="pos-content-grid">
            <section className="product-section">
              {/* Pestañas dinámicas */}
              <div className="tabs-container">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="table-wrapper">
                <table className="product-table">
                  <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedProducts.length === 0 ? (
                      <tr><td colSpan={4} style={{ textAlign: 'center' }}>Sin productos</td></tr>
                    ) : (
                      displayedProducts.map(product => (
                        <tr key={product.id}>
                          <td>{product.name}</td>
                          <td className="price-cell">${product.price.toFixed(2)}</td>
                          <td>
                            <input
                              type="number"
                              min="0"
                              className="qty-input"
                              value={quantities[product.id] || ''}
                              onChange={e => handleQuantityChange(product.id, e.target.value)}
                              placeholder="0"
                            />
                          </td>
                          <td>
                            <button
                              className="add-to-cart-btn"
                              onClick={() => addToCart(product)}
                              disabled={!quantities[product.id] || quantities[product.id] <= 0}
                            >
                              Agregar
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            <aside className="billing-panel">
              <h2 className="billing-title">Cuenta</h2>
              <div className="cart-table-header">
                <span>Productos</span>
                <span>Cant.</span>
                <span>Precio</span>
                <span></span>
              </div>
              <div className="cart-items-list">
                {cart.length === 0 ? (
                  <div className="cart-empty">Carrito vacío</div>
                ) : (
                  cart.map((item, idx) => (
                    <div className="cart-item" key={idx}>
                      <span className="item-name">{item.product.name}</span>
                      <span className="item-qty">{item.quantity}</span> {/* No editable */}
                      <span className="item-price">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                      <button className="remove-item-btn" onClick={() => removeFromCart(item.product.id)}>×</button>
                    </div>
                  ))
                )}
              </div>
              <div className="billing-summary">
                <div className="summary-row total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="summary-row payment">
                  <span>Pago con</span>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="payment-select"
                  >
                    <option value="Efectivo">Efectivo</option>
                    <option value="Transferencia">Transferencia</option>
                  </select>
                </div>
                <div className="description-box">
                  <label>Descripción</label>
                  <textarea
                    placeholder="Pedido para mesa 4..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <button className="btn-print-ticket" onClick={handlePrintTicket}>
                  <Printer size={18} /> Imprimir Ticket
                </button>
              </div>
            </aside>
          </div>
        )}

        {activePage === 'inventario' && (
          <Inventario
            products={products}
            setProducts={setProducts}
            categories={categories}
            setCategories={setCategories}
          />
        )}
      </main>
    </div>
  );
};

export default App;