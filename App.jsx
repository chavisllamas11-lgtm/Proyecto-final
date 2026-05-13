:root {
  --primary-blue: #3f51b5;
  --bg-light: #e8eaf6;
  --text-dark: #333;
  --border-color: #c5cae9;
  --white: #ffffff;
}

body {
  margin: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--bg-light);
}

.pos-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* SIDEBAR */
.pos-sidebar {
  width: 100px;
  background-color: var(--primary-blue);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.profile-section {
  text-align: center;
  margin-bottom: 40px;
}

.avatar-circle {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff5252, #b71c1c);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.profile-name {
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.nav-btn {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  padding: 15px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 12px;
}

.nav-btn.active {
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
}

/* MAIN AREA */
.pos-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
}

.pos-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-bar {
  background: white;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  border-radius: 10px;
  width: 60%;
  border: 1px solid var(--border-color);
}

.search-bar input {
  border: none;
  outline: none;
  width: 100%;
  margin-left: 10px;
  font-size: 1rem;
}

.header-actions {
  display: flex;
  gap: 15px;
}

.icon-btn {
  background: none;
  border: none;
  color: var(--primary-blue);
  cursor: pointer;
}

/* CONTENT GRID */
.pos-content-grid {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 20px;
  height: calc(100% - 80px);
}

/* PRODUCT SECTION */
.product-section {
  background: white;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.tabs-container {
  display: flex;
  background-color: #f5f5f5;
  padding: 10px 10px 0 10px;
}

.tab-btn {
  padding: 12px 30px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-weight: 600;
  color: #888;
  border-radius: 12px 12px 0 0;
}

.tab-btn.active {
  background: white;
  color: var(--primary-blue);
  border: 1px solid var(--border-color);
  border-bottom: none;
}

.table-wrapper {
  padding: 20px;
  overflow-y: auto;
}

.product-table {
  width: 100%;
  border-collapse: collapse;
}

.product-table th {
  text-align: left;
  padding: 12px;
  border-bottom: 2px solid var(--bg-light);
  color: #555;
}

.product-table td {
  padding: 15px 12px;
  border-bottom: 1px solid var(--bg-light);
}

.price-cell {
  font-weight: bold;
  color: var(--primary-blue);
}

/* Nuevos estilos para cantidad y botón agregar */
.qty-input {
  width: 70px;
  padding: 6px 8px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 0.9rem;
  text-align: center;
  outline: none;
}

.qty-input:focus {
  border-color: var(--primary-blue);
}

.add-to-cart-btn {
  background-color: var(--primary-blue);
  color: white;
  border: none;
  padding: 7px 16px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 0.85rem;
}

.add-to-cart-btn:disabled {
  background-color: #b0bec5;
  cursor: not-allowed;
}

.add-to-cart-btn:not(:disabled):hover {
  background-color: #303f9f;
}

/* BILLING PANEL */
.billing-panel {
  background: white;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.billing-title {
  margin-top: 0;
  font-size: 1.4rem;
}

/* Ahora el header del carrito tiene 4 columnas: Producto, Cant., Precio, Acción */
.cart-table-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 0.5fr;
  font-size: 0.8rem;
  font-weight: bold;
  color: #777;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--bg-light);
}

.cart-items-list {
  flex: 1;
  margin: 15px 0;
}

/* Cada ítem del carrito con 4 columnas */
.cart-item {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 0.5fr;
  align-items: center;
  padding: 10px 0;
  font-size: 0.9rem;
  border-bottom: 1px solid var(--bg-light);
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-empty {
  text-align: center;
  color: #aaa;
  padding: 30px 0;
  font-size: 0.9rem;
}

.item-name {
  font-weight: 500;
}

.item-qty {
  text-align: center;
  font-weight: 600;
}

.item-price {
  text-align: right;
  font-weight: 600;
  color: var(--primary-blue);
}

.remove-item-btn {
  background: none;
  border: none;
  color: #e53935;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  transition: background 0.2s;
  display: flex;
  justify-content: center;
  align-items: center;
}

.remove-item-btn:hover {
  background: #ffebee;
}

/* Summary y opciones de pago */
.billing-summary {
  border-top: 2px solid var(--bg-light);
  padding-top: 15px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.summary-row.total {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--text-dark);
}

/* Estilo para el select de método de pago */
.payment-select {
  background: #f8f9fa;
  border: 1px solid var(--border-color);
  padding: 8px 15px;
  border-radius: 8px;
  font-size: 0.9rem;
  cursor: pointer;
  outline: none;
  font-family: inherit;
  color: var(--text-dark);
}

.payment-select:focus {
  border-color: var(--primary-blue);
}

.description-box {
  margin-top: 20px;
}

.description-box label {
  display: block;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.description-box textarea {
  width: 100%;
  height: 80px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  padding: 10px;
  resize: none;
  font-family: inherit;
  box-sizing: border-box;
}

/* Botón de imprimir ticket */
.btn-print-ticket {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background-color: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
}

.btn-print-ticket:hover {
  background-color: #303f9f;
}

.btn-print-ticket:active {
  transform: scale(0.98);
}