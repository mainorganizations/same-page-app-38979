import { createRoot } from 'react-dom/client'
import './index.css'

// Redirect to index.html in root
window.location.href = '/index.html';

createRoot(document.getElementById("root")!).render(
  <div>Loading...</div>
);
