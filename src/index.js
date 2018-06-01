import ReactDOM from 'react-dom';
import routes from './Routes/routes';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();

//hello world