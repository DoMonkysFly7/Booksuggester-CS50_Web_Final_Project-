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
        const answerContainer = document.querySelector('#answer_container');
        const question = document.querySelector('#question');
        const answer = document.querySelectorAll('#answer');

        logo_container.className = 'colorTransition';
        logo.style.animation = 'transitionIn 1.5s ease-in-out reverse forwards';
        quotesContainer.className = 'colorTransition';

        question.style.animation = 'runRight 1.1s ease-in-out, QuestionReappear 2.7s 1.1s ease-in-out, Question-colorize 3.9s reverse';
        answerContainer.style.animation = 'runLeft 2.2s ease-in-out, AnswerReappear 2.7s 1.1s ease-in-out';
        answer.forEach(a => {
            a.style.animation = 'Answer-colorize 3.9s reverse';
        })

        // Delay this until the above 'question.style.animation' is done
        window.setTimeout(this.qReset, 3750);
    }

    qReset = async () => {

        // alert('success');
        document.querySelectorAll('#answer').forEach(a => {
            a.style.animation = 'none';
        });
        document.querySelector('#question').style.animation = 'none';
        document.querySelector('#answer_container').style.animation = 'none';
    }

    render() {
        return(
            <div id="app_container">
                <div id="question_container">
                    <div id="question"> {this.state.questions[this.state.question_number]} </div>
                </div>
                <div id="answer_container">
                    <div id="answer" onClick={this.changeQuestion}> Possible answer 1 </div>
                    <div id="answer" onClick={this.changeQuestion}> Possible answer 2 </div>
                    <div id="answer" onClick={this.changeQuestion}> Possible answer 3 </div>
                </div>
            </div>
        )};
}

ReactDOM.render(<App />, document.querySelector('#app'));



