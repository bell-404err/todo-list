import cls from './index.module.scss'; //css module формируют объект стилей


const App = () => {
    console.log(cls);

    return (
        <div className={cls.test}>
            hello
        </div>
    );
};

export default App;