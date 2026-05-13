.inv-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  overflow-y: auto;
}

/* HEADER */
.inv-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
}

.inv-title-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.inv-icon {
  color: var(--primary-blue);
}

.inv-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-dark);
}

.inv-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* La barra de búsqueda se eliminó del HTML, pero dejamos el estilo por si acaso */
.inv-search {
  background: white;
  display: flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  gap: 8px;
}

.inv-search input {
  border: none;
  outline: none;
  font-size: 0.9rem;
  width: 200px;
  background: transparent;
  color: var(--text-dark);
}

.inv-search-icon {
  color: #888;
  flex-shrink: 0;
}

.btn-add {
  display: flex;
  align-items: center;
  gap: 7px;
  background-color: var(--primary-blue);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  white-space: nowrap;
}

.btn-add:hover {
  background-color: #303f9f;
}

.btn-add:active {
  transform: scale(0.97);
}

/* STATS */
.inv-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.stat-card {
  background: white;
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stat-label {
  font-size: 0.78rem;
  color: #888;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.stat-value {
  font-size: 1.7rem;
  font-weight: 700;
  color: var(--primary-blue);
}

.stat-warn {
  color: #e53935;
}

/* TABLE */
.inv-table-card {
  background: white;
  border-radius: 20px;
  border: 1px solid var(--border-color);
  overflow: hidden;
  flex: 1;
}

.inv-table {
  width: 100%;
  border-collapse: collapse;
}

.inv-table thead tr {
  background-color: #f5f5f5;
}

.inv-table th {
  padding: 14px 18px;
  text-align: left;
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #777;
  border-bottom: 1px solid var(--bg-light);
}

.inv-table td {
  padding: 14px 18px;
  border-bottom: 1px solid var(--bg-light);
  font-size: 0.9rem;
  color: var(--text-dark);
}

.inv-table tbody tr:last-child td {
  border-bottom: none;
}

.inv-table tbody tr:hover {
  background-color: #fafafa;
}

.inv-num {
  color: #aaa;
  font-weight: 500;
  width: 40px;
}

.inv-name {
  font-weight: 600;
}

.inv-price {
  font-weight: 700;
  color: var(--primary-blue);
}

.inv-empty {
  text-align: center;
  color: #aaa;
  padding: 40px !important;
  font-size: 0.95rem;
}

/* BADGES */
.category-pill {
  background: #e8eaf6;
  color: var(--primary-blue);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;
}

.badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.78rem;
  font-weight: 600;
}

.badge-ok {
  background: #e8f5e9;
  color: #2e7d32;
}

.badge-mid {
  background: #fff3e0;
  color: #e65100;
}

.badge-low {
  background: #ffebee;
  color: #c62828;
}

/* ACTION BUTTONS */
.action-btns {
  display: flex;
  gap: 8px;
}

.action-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.action-btn.edit {
  color: var(--primary-blue);
}

.action-btn.edit:hover {
  background: #e8eaf6;
}

.action-btn.delete {
  color: #e53935;
}

.action-btn.delete:hover {
  background: #ffebee;
}

/* MODAL */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.15s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-card {
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 440px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  animation: slideUp 0.2s ease;
}

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 16px;
  border-bottom: 1px solid var(--bg-light);
}

.modal-title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-dark);
}

.modal-close {
  background: none;
  border: none;
  cursor: pointer;
  color: #888;
  padding: 4px;
  border-radius: 6px;
  display: flex;
  transition: background 0.2s;
}

.modal-close:hover {
  background: var(--bg-light);
  color: var(--text-dark);
}

.modal-body {
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.form-group label {
  font-size: 0.82rem;
  font-weight: 600;
  color: #555;
}

.form-group input,
.form-group select {
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 10px;
  font-size: 0.9rem;
  outline: none;
  color: var(--text-dark);
  transition: border-color 0.2s;
  background: white;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus {
  border-color: var(--primary-blue);
}

.form-row {
  display: flex;
  gap: 14px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 16px 24px 20px;
  border-top: 1px solid var(--bg-light);
}

.btn-cancel {
  padding: 10px 20px;
  border: 1px solid var(--border-color);
  background: white;
  border-radius: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  color: #555;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-cancel:hover {
  background: var(--bg-light);
}

.btn-confirm {
  padding: 10px 24px;
  background-color: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-confirm:hover {
  background-color: #303f9f;
}

/* NUEVOS ESTILOS PARA AGREGAR CATEGORÍA EN EL MODAL */
.category-select-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.btn-add-category {
  background: none;
  border: 1px dashed var(--border-color);
  color: #888;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.btn-add-category:hover {
  background: var(--bg-light);
  color: var(--primary-blue);
  border-color: var(--primary-blue);
}

.new-category-input {
  display: flex;
  gap: 8px;
  align-items: center;
}

.new-category-input input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: 0.9rem;
  outline: none;
}

.new-category-input input:focus {
  border-color: var(--primary-blue);
}

.new-category-input .btn-confirm {
  padding: 8px 16px;
  font-size: 0.8rem;
  white-space: nowrap;
}