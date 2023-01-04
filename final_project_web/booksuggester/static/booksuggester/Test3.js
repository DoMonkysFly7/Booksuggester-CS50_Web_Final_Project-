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
    questionTime = async () => {
        const logo_container = document.querySelector('#logo_container');
        const logo = document.querySelector('#logo');
        const quotesContainer = document.querySelector('#quotes_container');
        const question = document.querySelector('#question');

        logo_container.className = 'colorTransition';
        quotesContainer.className = 'colorTransition';
        question.style.animation = 'runRight 1.1s ease-in-out, QuestionReappear 2.7s 1.1s ease-in-out, Question-colorize 3.8s reverse';
        
        logo.style.animation = 'transitionIn 1.5s ease-in-out reverse forwards';

        this.qReset();
    }

    qReset = () => {
        const question = document.querySelector('#question');
        question.style.animation = 'none';
    }

    render() {
        return(
            <div id="app_container">
                <div id="question_container">
                    <div id="question"> {this.state.questions[this.state.question_number]} </div>
                </div>
                <div id="answer_container">
                    <div id="answer" onClick={this.changeQuestion}> Possible answer </div>
                </div>
            </div>
        )};
}

ReactDOM.render(<App />, document.querySelector('#app'));



