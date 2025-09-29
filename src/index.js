import { createRoot} from 'react-dom/client'
import "semantic-ui-css/semantic.min.css";
// import { App } from './App'
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <App/>
</Provider>)