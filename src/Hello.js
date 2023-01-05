import './Hello.css';

const Hello = props => {
    return (
        <div className="f1 tc">
            <h1>Hello World</h1>
            <h2>{props.greeting}</h2>
        </div>
    );
}

export default Hello;