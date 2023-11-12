import App from './App';
import { createRoot } from 'react-dom/client';

document.body.innerHTML = '<div id="root"></div>';
const container = document.getElementById('root');

const root = createRoot(container);
root.render(<App/>);