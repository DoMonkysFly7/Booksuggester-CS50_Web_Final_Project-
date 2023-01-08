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
                start_question: "Emotional or thinking type?",
                question_number: 0,
                q1_response: "", 
                books: [],
                emotional_q_set: ["","You're kinda romantic, huh?", "Are you attentive?", "Reading or watching?", "This world sucks?", "Are you artsy?", "Really young ppl write well?",
                "Wanna get spooked baby?", "You like Berserk (manga)?", "Historical human suffering?", "Ur God's cool?", "U listen to important ppl?", "You trust me?"],
                thinking_q_set: ["", ],
                emotional_r_set: ["Yes", "No", "Kinda", "Nope", "Watching", "Reading. Duh.", "I prefer the past", "Nooo", "I prefer the future", "Another one's cool"],
                thinking_q_set: ["",],
                iter_number1: 0,
                iter_number2: 1,
            }
        };

    changeQuestion = (event) => {

        this.setState(state => ({
            question_number: state.question_number + 1,
        }), this.questionTime);


        let answer = event.target.innerHTML;

        // console.log(answer);

        if (answer == "Emotional") {
            console.log('You are emotional!');
            this.setState({
                q1_response: "Emotional"
            });

        } else if (answer == "Thinking") {
            console.log('You like to think!');
            this.setState({
                q1_response: "Thinking"
            });
        }

        // console.log(`${answer} : ${question_number}`);
        this.ApiOutput_Emotional();
    }

    ApiOutput_Emotional = () => {
        // For subjects that have multiple subcategories (history and biography, for example). API searches through the /search 
        // method may be required, instead of /subjects method
        console.log('Response registered');
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

    render()
    {

        // Iterate possibility of response properly
        if (this.state.question_number !== 1) {
            console.log(this.state.question_number)
            this.state.iter_number1 += 2;
            this.state.iter_number2 += 2;
        }  

        if(this.state.q1_response === "Emotional" ){
            return(
                <div id="app_container">
                    <div id="question_container">
                        <div id="question"> {this.state.emotional_q_set[this.state.question_number]} </div>
                    </div>
                    <div id="answer_container">
                        <div id="answer" onClick={this.changeQuestion}>{this.state.emotional_r_set[this.state.iter_number1]}</div>
                        <div id="answer" onClick={this.changeQuestion}>{this.state.emotional_r_set[this.state.iter_number2]}</div>
                    </div>
                </div>
        )} else if (this.state.q1_response === "Thinking"){
            return(
                <div id="app_container">
                    <div id="question_container">
                        <div id="question"> {this.state.thinking_q_set[this.state.question_number]} </div>
                    </div>
                    <div id="answer_container">
                        <div id="answer" onClick={this.changeQuestion}>  </div>
                        <div id="answer" onClick={this.changeQuestion}>  </div>
                    </div>
                </div>
        )} else {
            // First question
            return(
                <div id="app_container">
                    <div id="question_container">
                        <div id="question"> {this.state.start_question} </div>
                    </div>
                    <div id="answer_container">
                        <div id="answer"  onClick={this.changeQuestion}>Emotional</div>
                        <div id="answer" onClick={this.changeQuestion}>Thinking</div>
                        {/* <div id="answer" onClick={this.changeQuestion}> Possible answer 3 </div> */}
                    </div>
                </div>
            )};
        }
}

ReactDOM.render(<App />, document.querySelector('#app'));



