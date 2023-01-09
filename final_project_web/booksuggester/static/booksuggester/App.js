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
                recommended_books: [],
                track_answers: [],
                emotional_q_set: ["","You're kinda romantic, huh?", "Are you attentive?", "Reading or watching?", "Past or future?", "This world sucks?", "Are you artsy?", "Really young ppl write well?",
                                "Wanna get spooked baby?", "You like Berserk (manga)?", "Historical human suffering?", "Ur God's cool?", "U listen to important ppl?", "You trust me?"],
                emotional_r_set: ["Yes", "No", "Kinda", "Nope", "Watching", "Reading. Duh.", "I prefer the past", "I prefer the future", "Another one's cool", "I guess 'tis fine","Yeah!", "Nein",
                                "Hello no!", "Bloody yes!", "I'd like to!", "Eww.", "Indeed, sir.", "Was ist das?", "Yeah!", "Umm...no?", "AMEN BRO!", "I am my own God!", "Sure, why not!",
                                "Like who? Elon? =))", "I want ur babies!", "MAY wnt ur babies"],
                thinking_q_set: ["","Dostoevsky or Harry Styles?", "You know Carl Jung?", "U think bout society'n stuff?", "Who's your country's leader?", "Like reading situations/ppl?",
                                "U go visiting castles bro?", "U listen to celebrities?", "To be a spooked fruit?", "U love me? <3"],
                thinking_r_set: ["Dosto!", "My Harriet babe!", "Obviously.", "Who?", "Always", "Yeahhh right", "F her/him", "Idk but F her/him", "All the time.", "Huh?", "Y", "N", "Indubitably", 
                                "Who cares?", "Banana!", "NO!", "SPELLBLINDINGLY BEAUTIFUL!", "No xoxo"],
              
                // Trebuie sa fie un numar par de raspunsuri, astfel react nu poate sa rendeze 'written' deoarece unul din cele doua nu ar exista
                thinkging_r_mock_set: [ {written:"Dosto!", hidden:"literature"}, 
                                        {written:"My Harriet babe!", hidden:"-"}, 
                                        {written:"Obviously", hidden:"-"},
                                        {written:"Who?", hidden:"-"},
                                        {written:"Always", hidden:"-"},
                                        {written:"Yeahhh right", hidden:"-"}],

                iter_number1: -2,
                iter_number2: -1,
            }
        };

    changeQuestion = (event) => {

        this.setState(state => ({
            question_number: state.question_number + 1,
        }), this.questionTime);
        
        let answer = event.target.innerHTML;

        if (answer === "Emotional") {
            console.log('You are emotional!');
            this.setState({
                q1_response: "Emotional"
            });

        } else if (answer !== "Emotional") {
            console.log('You like to think!');
            this.setState({
                q1_response: "Thinking"
            });
        }

        // console.log(`${answer} : ${question_number}`);
        this.ApiOutput_Emotional(answer);
    }

    ApiOutput_Emotional = (written_answer) => {
        // Based on the answer first answer, we can know in which answers list are we: thinking or emotional
        // Based on each 'written' answer, we can iterate trhough the list of the answers and find its pair value
        // The pair value is sent to OpenLibrary API for subjects to add books to the user's list.
        
        if (this.state.q1_response === "Thinking") {
            this.state.thinkging_r_mock_set.forEach(item => {
                if(written_answer === item.written) {
                    // The argument for the API fetch
                    console.log(item.hidden);
                };
            }) 
        }

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
        console.log(this.state.question_number);

        if(this.state.question_number !== 0) {
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
                        <div id="answer" onClick={(this.changeQuestion)}>{this.state.emotional_r_set[this.state.iter_number2]}</div>
                    </div>
                </div>
        )} else if (this.state.q1_response === "Thinking"){
            return(
                <div id="app_container">
                    <div id="question_container">
                        <div id="question"> {this.state.thinking_q_set[this.state.question_number]} </div>
                    </div>
                    <div id="answer_container">
                        <div id="answer" onClick={this.changeQuestion}>{this.state.thinkging_r_mock_set[this.state.iter_number1].written}</div>
                        <div id="answer" onClick={this.changeQuestion}>{this.state.thinkging_r_mock_set[this.state.iter_number2].written}</div>
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
                        <div id="answer" onClick={this.changeQuestion}>Emotional</div>
                        <div id="answer"onClick={this.changeQuestion}>Thinking</div>
                    </div>
                </div>
            )};
        }
}

ReactDOM.render(<App />, document.querySelector('#app'));



