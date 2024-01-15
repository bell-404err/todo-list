import cls from './index.module.scss';
import TodoWrapper from './components/TodoWrapper/TodoWrapper'; //css module формируют объект стилей
import './app.scss';

const App = () => {
  console.log(cls);

  return (
    <div className="App">
      <TodoWrapper />
    </div>

  );
};

export default App;