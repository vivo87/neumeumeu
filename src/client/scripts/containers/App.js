import Messages from 'client/components/Messages';
let App;

if (process.env.NODE_ENV === 'development' && false) {
    let DevTools = require('client/containers/DevTools');

    App = (props) => (
        <div className="app">
            {props.children}
            <DevTools/>
        </div>
    );
} else {
    App = (props) => (
        <div className="app">
            <Messages text="Error while login!"/>
            {props.children}
        </div>
    );
}

export default App;
