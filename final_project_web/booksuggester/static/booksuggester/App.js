// Fa o proba cu totul
// Fa componentul de final
// Baga comentarii autor

// Direct links
const author_choices = ['https://openlibrary.org/works/OL166894W.json','https://openlibrary.org/works/OL102749W.json','https://openlibrary.org/works/OL20600W.json',
 'https://openlibrary.org/works/OL1168083W.json','https://openlibrary.org/works/OL21164750W.json', 'https://openlibrary.org/works/OL1268413W.json',
'https://openlibrary.org/works/OL498463W.json', 'https://openlibrary.org/works/OL5819456W.json', 'https://openlibrary.org/works/OL103123W.json',
'https://openlibrary.org/books/OL7383896M.json'];
// In order: "Crime and punishment", "Moby Dick", "Gulliver's travels", "1984", "Amusing ourselves to death", "Man's search for meaning"
// "The Trial", "The book thief", "Fahrenheit 451", "Petersburg Taless"

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
                track_answers: [],
                emotional_q_set: ["","You're kinda romantic, huh?", "Are you attentive?", "Reading or watching?", "Past or future?", "This world sucks?", "Are you artsy?", "Really young ppl write well?",
                                "Wanna get spooked baby?", "You like Berserk (manga)?", "Historical human suffering?", "Ur God's cool?", "U listen to important ppl?", "You trust me?"],
                emotional_r_set:[{written:"Yes", hidden:"romance"},{written:"No", hidden:"thriller"},{written:"Kinda", hidden:"poetry"},{written:"Nope", hidden:"short_stories"},{written:"Watching", hidden:"-"},
                                {written:"Reading. Duh.", hidden:"plays"},{written:"I prefer the past", hidden:["history", "historical_fiction"]},{written:"I prefer the future", hidden:"science_fiction"},
                                {written:"Another one's cool", hidden:"fantasy"},{written:"I guess 'tis fine", hidden:"-"},{written:"Yeah!!!", hidden:["plays", "poetry", "art_history"]},{written:"Nein", hidden:"-"},
                                {written:"Hello no!", hidden:"-"},{written:"Bloody yes!", hidden:"young_people_fiction"},{written:"Nothing scares me!", hidden:"horror"}, // If this one is positive, make sure to add Lovecraft's 
                                {written:"Eww!", hidden:"-"},{written:"Indeed, struggler.", hidden:"historical_fiction"}, // Appears if certain conditions are met
                                {written:"Was ist das?", hidden:"-"},{written:"Yeah!", hidden:["world_war_ii", "world_war_i"]},{written:"Umm...no?", hidden:"-"},{written:"AMEN BRO!", hidden:"religion"},
                                {written:"I am my own God!", hidden:"-"},{written:"Sure, why not?", hidden:["biography", "autobiography"]},{written:"Like who? Elon? =))", hidden:"-"},
                                {written:"I want ur babies!", hidden:author_choices}, // obs.
                                {written:"MAY wnt ur babies", hidden:"-"}, {written:""}, {written:""}],

                thinking_q_set: ["","Dostoevsky or Harry Styles?", "You know Carl Jung?", "U think bout society'n stuff?", "Who's your country's leader?", "Like reading situations/ppl?",
                                "U go visiting castles bro?","Teens write well?", "U listen to celebrities?", "To be a spooked fruit?", "U love me? <3"],
                thinking_r_set: [{written:"Dosto!", hidden:["literature","anthropology"]},  {written:"My Harriet babe!", hidden:["romance", "short_stories"]},{written:"Obviously", hidden:"psychology"},
                                {written:"Who?", hidden:"-"},{written:"Always", hidden:"anthropology"},{written:"Yeahhh right", hidden:"-"},{written:"F her/him", hidden:"political_science"},
                                {written:"Idk but F her/him", hidden:"-"},{written:"All the time.", hidden:["mystery_and_detective_stories", "psychology"]},{written:"Huh?", hidden:"short_stories"},
                                {written:"Y", hidden:"history"}, // maybe a chance at historical fiction/art history too
                                {written:"N", hidden:"-"},{written:"U insane?", hidden:"-"},{written:"Bloody yes!", hidden:"young_adult_fiction"},{written:"Indubitably", hidden:["biography", "autobiography"]},
                                {written:"Who cares?", hidden:"-"},{written:"Banana!", hidden:"horror"},{written:"NO!", hidden:"-"},{written:"SPELLBLINDINGLY BEAUTIFUL!", hidden:author_choices}, // obs.
                                {written:"No xoxo", hidden:"-"}, {written:""}, {written:""}],
                iter_number1: -2,
                iter_number2: -1,
                recommended_books: [],
            }
        };

    changeQuestion = (event) => {

        let answer = event.target.innerHTML;

        this.setState(state => ({
            question_number: state.question_number + 1,
        }), this.questionTime(), this.ApiRegister(answer));
        
        if(this.state.question_number === 0) {
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
        }

        // console.log(`${answer} : ${question_number}`);;
    }

    ApiRegister = (written_answer) => {
        // Based on the answer first answer, we can know in which answers list are we: thinking or emotional
        // Based on each 'written' answer, we can iterate trhough the list of the answers and find its pair value
        // The pair value is sent to OpenLibrary API for subjects to add books to the user's list.

        if (written_answer === 'I want ur babies!' || written_answer === "SPELLBLINDINGLY BEAUTIFUL!"){
            author_choices.forEach(workitem => {
                console.log(workitem);
                // Put book keys in state.recommended_books;
                fetch(`${workitem}`)
                .then(res => res.json())
                .then(book_info => {
                    console.log(book_info['key']);
                })
            });
        }

        if (this.state.q1_response === "Thinking") {
            this.state.thinking_r_set.forEach(item => {
                if(written_answer === item.written) {
                    // The argument for the API fetch
                    this.setState(state => ({
                        track_answers: [...state.track_answers, item.hidden] 
                    }))

                    if(item.hidden != "-"){
                        // this.addBook(item.hidden);
                    }
                };
            }) 
        }

        if (this.state.q1_response === "Emotional") {
            this.state.emotional_r_set.forEach(item => {
                if(written_answer === item.written) {
                    // The argument for the API fetch
                    this.setState(state => ({
                        track_answers: [...state.track_answers, item.hidden] 
                    }))

                    if(item.hidden != "-"){
                        // this.addBook(item.hidden);
                    }
                };
            }) 
        }

        // Modify route - if necessary
        if(written_answer === "My Harriet babe!") {
            this.setState({
                q1_response: 'Emotional'
            });
        }
        // For subjects that have multiple subcategories (history and biography, for example). API searches through the /search 
        // method may be required, instead of /subjects method

        console.log(this.state.track_answers);
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

    render_end() {
        console.log(this.state.recommended_books);

        this.apiOutput();
        // Ending results
        return(
            <div> Done! </div>
        )
    }

    render()
    {   
        console.log(this.state.question_number);

        if(this.state.question_number !== 0) {
            this.state.iter_number1 += 2;
            this.state.iter_number2 += 2;
        }

        if(this.state.q1_response === "Emotional" ){
            if (this.state.emotional_r_set[this.state.iter_number2].written === "") {
                return this.render_end();
            }

            return(
                <div id="app_container">
                    <div id="question_container">
                        <div id="question"> {this.state.emotional_q_set[this.state.question_number]} </div>
                    </div>
                    <div id="answer_container">
                        <div id="answer" onClick={this.changeQuestion}>{this.state.emotional_r_set[this.state.iter_number1].written}</div>
                        <div id="answer" onClick={(this.changeQuestion)}>{this.state.emotional_r_set[this.state.iter_number2].written}</div>
                    </div>
                </div>
        )} else if (this.state.q1_response === "Thinking"){
            if(this.state.thinking_r_set[this.state.iter_number2].written === "") {
                return this.render_end();
            }
            return(
                <div id="app_container">
                    <div id="question_container">
                        <div id="question"> {this.state.thinking_q_set[this.state.question_number]} </div>
                    </div>
                    <div id="answer_container">
                        <div id="answer" onClick={this.changeQuestion}>{this.state.thinking_r_set[this.state.iter_number1].written}</div>
                        <div id="answer" onClick={this.changeQuestion}>{this.state.thinking_r_set[this.state.iter_number2].written}</div>
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



