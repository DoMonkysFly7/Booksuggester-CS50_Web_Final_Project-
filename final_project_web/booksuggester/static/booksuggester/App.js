class Quotes extends React.Component {

    constructor(props) {
        super(props);

        const get_random = Math.ceil(Math.random() * 15);

        this.state = {
            quotes: ["",
                    "“A reader lives a thousand lives before he dies...The man who never reads lives only one.” -George R.R Martin",
                    "“Until I feared I would lose it, I never loved to read. One does not love breathing.” - Harper Lee",
                    "“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.” - Groucho Marx",
                    "“Classic - A book which people praise and don't read.” - Mark Twain", 
                    "“So please, oh please, we beg, we pray, go throw your TV set away, and in its place you can install a lovely bookshelf on the wall.” -Roald Dahl",
                    "“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.” - Dr.Seuss",
                    "“I kept always two books in my pocket, one to read, one to write in.” - Robert Louis Stevenson",
                    "“We are of opinion that instead of letting books grow moldy behind an iron grating, far from the vulgar gaze, it is better to let them wear out by being read.” - Juls Verne",
                    "“My alma mater was books, a good library...I could spend the rest of my life reading, just satisfying my curiosity.” - Malcom X",
                    "“Books serve to show a man that those original thoughts of his aren’t very new after all.” - Abraham Lincoln",
                    
                    "“The man who does not read good books is no better than the man who can’t.” - Mark Twain", 
                    "“Show me a family of readers, and I will show you the people who move the world.” - Napoléon Bonaparte",
                    "“Despite the enormous quantity of books, how few people read! And if one reads profitably, one would realize how much stupid stuff the vulgar herd is content to swallow every day.” - Voltaire",
                    "“If you don’t like to read, you haven’t found the right book.” - J.K. Rowling(Joanne Rowling)",
                    "“Make it a rule never to give a child a book you would not read yourself.” - George Bernard Shaw",
                    ], 
            quotes_number: get_random,
        }
    }

    render() {
        return(
            <p id="quotes">
                {this.state.quotes[this.state.quotes_number]}
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

        window.setTimeout(this.qReset, 3750);
    }

    qReset = async () => {
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



