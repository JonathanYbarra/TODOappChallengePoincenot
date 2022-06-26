import { Todos } from './components/todo/Todos';
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  )
}

export default App;
