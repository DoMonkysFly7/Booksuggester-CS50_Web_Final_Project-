class Quotes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quotes: ["Aren't books cool? - Stefan Stefanovicky"]
            // put random number here 1 to how many quotes I will plug in
        }
    }

    render() {
        return(
            <p id="quotes">
                {this.state.quotes}
            </p>
    )};
}

ReactDOM.render(<Quotes />, document.querySelector('#quotes_container'));

class App extends React.Component {
  
    constructor(props) {
        super(props);
            this.state = {
                questions: ["Do you like dogs?", "Do you like cats?", "Do you like leopards?", "Do you like bats?"],
                question_number: 0,
            }
        };

    changeQuestion = () => {
        this.setState(state => ({
            question_number: state.question_number + 1,
        }), this.questionTime);
    } 

    // Make this work properly (with animations)
    questionTime = () => {
        const logo_container = document.querySelector('#logo_container');
        const logo = document.querySelector('#logo');
        const quotesContainer = document.querySelector('#quotes_container');

        logo_container.className = 'colorTransition';
        quotesContainer.className = 'colorTransition';
        logo.style.animation = 'transitionIn 1.5s ease-in-out reverse forwards';
    }




    render() {
        return(
                <div id="test">
                    <button onClick={this.changeQuestion} autofocus id="test2"> {this.state.questions[this.state.question_number]} </button>
                </div>
        )};
}

ReactDOM.render(<App />, document.querySelector('#app'));



