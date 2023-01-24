const author_choices = ['works/OL166894W','works/OL102749W','works/OL20600W','works/OL1168083W','works/OL21164750W', 'works/OL1268413W','works/OL498463W', 'works/OL5819456W', 'works/OL103123W',
'works/OL16457776W'];
//Order:"Crime and punishment", "Moby Dick", "Gulliver's travels", "1984", "Amusing ourselves to death", "Man's search for meaning"// "The Trial", "The Book Thief", "Fahrenheit 451", "Petersburg Tales"

const author_choice_temp = [];
const limit = 20;

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
                question_number: 0,
                suggestions: [],
                books: [],

                questions: ["This world sucks?","Be a spooky-fruity?","Who's your country's leader?","Ain't youth brains cool?","U listen to 'important' ppl?","Love me?","Where to travel?",
                "Historical human suffering?"],

                answers: [{written:"Another one's cool", hidden:"magic"},{written:"I guess 'tis fine", hidden:"-", quote:"Really?"}, {written:"Banana!", hidden:"horror"},{written:"Neh", hidden:"-"},
                {written:"I hate her/him", hidden:"political_science", quote:"We should grab a beer sometime."},{written:"Idk", hidden:"-"},{written:"Don't think so", hidden:"-"},{written:"Of coursely.",hidden:"young_adult_fiction",
                quote:"U cool"},{written:"Indubitably", hidden:"biography"},{written:"Like who? Elon? =))", hidden:"-",quote:"=))"},{written:"I want ur babies!", hidden:"-"},{written:"MAY wnt ur babies",hidden:"-",quote:"What do you mean 'may'???"},
                {written:"The past", hidden:"history"},{written:"The future", hidden:"science_fiction"},{written:"Y!Y!F U TOO!",hidden:"world_war",quote:"<3"},{written:"Umm...no?",hidden:"-",
                quote:":("}, {written: "", hidden:"-"},{written: "", hidden:"-"}],

                // questions: ["This world sucks?","Be a spooky-fruity?","Who's your country's leader?","Ain't youth brains cool?","U listen to 'important' ppl?","Love me?","Where to travel?",
                // "Historical human suffering?","You're kinda romantic, huh?","Like reading situations/ppl?","You like Berserk (manga)?","Ur God's cool?","Dostoevsky or Harry Styles?",
                // "You know Carl Jung?","Go recite poetry nerd","U go theater?","U think bout society'n stuff?","Ur an art student?","Long books are too long?","I give u bloody stories!",
                // "Ppl tlking bout themselves?"],
                // answers: [{written:"Another one's cool", hidden:"magic"},{written:"I guess 'tis fine", hidden:"-", quote:"Really?"}, {written:"Banana!", hidden:"horror"},{written:"Neh", hidden:"-"},
                // {written:"I hate her/him", hidden:"political_science", quote:"We should grab a beer sometime."},{written:"Idk", hidden:"-"},{written:"Don't think so", hidden:"-"},{written:"Of coursely.",hidden:"young_adult_fiction",
                // quote:"U cool"},{written:"Indubitably", hidden:"biography"},{written:"Like who? Elon? =))", hidden:"-",quote:"=))"},{written:"I want ur babies!", hidden:"-"},{written:"MAY wnt ur babies",hidden:"-",quote:"What do you mean 'may'???"},
                // {written:"The past", hidden:"history"},{written:"The future", hidden:"science_fiction"},{written:"Y!Y!F U TOO!",hidden:"world_war",quote:"<3"},{written:"Umm...no?",hidden:"-",
                // quote:":("},{written:"Yes", hidden:"romance"},{written:"No", hidden:"thriller"},{written:"Elementary.", hidden:"mystery_and_detective_stories"},{written:"Nope", hidden:"-"},
                // {written:"Indeed, struggler.", hidden:"dark_fantasy", quote:"That's my boy!"},{written:"Was ist das?", hidden:"-",quote:"Why do u even exist"},
                // {written:"AMEN BRO!",hidden:"religion",quote:"Chilllll..."},{written:"I am my own God!", hidden:"-"},
                // {written:"Dosto!", hidden:"classics"},{written:"My Harriet babe!",hidden:"-",quote:"Pls never contact me"},{written:"Obviously", hidden:"psychoanalysis"},{written:"Who?", hidden:"-",
                // quote:"Bro..."},{written:"Mkay",hidden:"poetry",quote:"That's a good boy-girl!"},{written:"No ty", hidden:"-"},{written:"Yes!!!", hidden:"play"},{written:"Nein", hidden:"-",
                // quote:"Missing out really"},{written:"Always",hidden:"society",quote:"Check out the anime 'Psycho-Pass'"},{written:"Yeahhh right",hidden:"-",quote:"Not like ur part of it"},
                // {written:"That I am!",hidden:"art_history",quote:"Only an art student would care about art history really",},{written:"God no",hidden:"-",quote:"So you are normal then"},
                // {written:"Man yes...",hidden:"short_stories",quote:"You sure don't got time for that, TikTok awaits"},{written:"I like them",hidden:"-",quote:"U want a prize or smth?"},{written:"Please no!",
                // hidden:"historical_-_general",quote:"You're so fragile!"},{written:"YES!",hidden:"violence",quote:"Get help."},{written:"...Yes?",hidden:"autobiography",quote:"???"},{written:"Who cares??",
                // hidden:"-",quote:"Indeed."}
                // ,{written: "", hidden:"-"},{written: "", hidden:"-"}],

                iter_number1: -2,
                iter_number2: -1,
            }
        };

    changeQuestion = (event) => {

        let answer = event.target.innerHTML;

        this.setState(state => ({
            question_number: state.question_number + 1,
        }), this.questionTime(), this.ApiCalls(answer));
    }

    ApiCalls = (written_answer) => {

        if (written_answer === 'MAY wnt ur babies'){
            const quote = ':(';
            this.Auth_comment(quote);
        }

        if (written_answer === 'I want ur babies!'){
            const quote = 'I am flattered';
            this.Auth_comment(quote);
            author_choices.forEach(workitem => {
                fetch(`https://openlibrary.org/${workitem}.json`)
                .then(response => response.json())
                .then(book => {
                    let description = book['description'];
                    const author_array = book['authors'][0];
                    const author_key = author_array['author']['key'];
                    const cover_id = book['covers'][0];
                    const title = book['title'];
                    const source_img = `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`    
                    
                    fetch(`https://openlibrary.org${author_key}.json`)
                    .then(response => response.json())
                    .then(result => {
                        const author = result['personal_name'];
                        author_choice_temp.push({title,author,description,source_img});
                    })
                    .catch(error => {
                        console.log(error);
                    })
                })
                .catch(error => {
                    console.log(error);
                })
            })
            this.state.suggestions.push(author_choice_temp);
        } else {
            this.state.answers.forEach((answer) => {
                if(answer.written === written_answer && answer.quote !== undefined) {
                    this,this.Auth_comment(answer.quote);
                }
                if(answer.written === written_answer && answer.hidden !== '-'){
                    const subject = answer.hidden;
                    let temp = [{"":""}];
                    fetch(`https://openlibrary.org/subjects/${subject}.json?limit=${limit}`)
                    .then(res => res.json())
                    .then(output => {
                        output['works'].forEach((book) => {
                            fetch(`https://openlibrary.org${book['key']}.json`)
                            .then(response => response.json())
                            .then(book => {
                                let description = book['description'];
                                const author_array = book['authors'][0];
                                const author_key = author_array['author']['key'];
                                const cover_id = book['covers'][0];
                                const title = book['title'];
                                const source_img = `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`    
                            
                                fetch(`https://openlibrary.org${author_key}.json`)
                                .then(response => response.json())
                                .then(result => {
                                    const author = result['personal_name'];
                                    temp.push({title,author,description,source_img});
                                    if(temp.length === limit){
                                        let get_random = Math.ceil(Math.random() * limit);
                                        if(temp[get_random] === undefined) {
                                            this.state.books.push(temp[get_random - 1]);
                                        } else {
                                            this.state.books.push(temp[get_random]);
                                        }
                                    }
                                })
                            })
                            .catch(error => {
                                console.log(error);
                            })
                        })
                    })
                }
            })
        }
    }

    Auth_comment = (comment) => {
        const element = document.querySelector('#auth_comments');

        element.innerHTML = `${comment}`;
        element.style.animation = 'transitionIn 1.5s ease-in-out, transitionIn 2.5s 1.5s ease-in-out reverse forwards';
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
        window.setTimeout(this.qReset, 3750);  // 3750 originally
    }

    qReset = async () => {
        document.querySelectorAll('#answer').forEach(a => {
            a.style.animation = 'none';
        });
        document.querySelector('#question').style.animation = 'none';
        document.querySelector('#answer_container').style.animation = 'none';
        document.querySelector('#auth_comments').innerHTML = '';
        document.querySelector('#auth_comments').style.animation = 'none';
    }

    render()
    {   
        console.log(this.state.suggestions);

        // if(this.state.question_number === 5){
        //    wait(4500).then(() => alert('Be careful what you say'));
        // }
        this.state.iter_number1 += 2;
        this.state.iter_number2 += 2;

        if(this.state.questions[this.state.question_number] === undefined){
            const get_final_random = Math.ceil(Math.random() * this.state.books.length-1);
            let rand_final_choice = this.state.books[get_final_random];

            if(rand_final_choice['description']['value']){
                rand_final_choice['description'] = rand_final_choice['description']['value'];
            } 

            //final stylization
            document.querySelector('#logo_container').style.animation = 'LogoContainer_final 0.8s forwards';
            document.querySelector('#quotes_container').style.animation = 'QuotesContainer_final 0.8s forwards';
            document.querySelector('#quotes_container').style.position = 'fixed';
            document.querySelector('header').style.display = 'none';
            document.querySelector('#auth_comments').style.top = "125px";

            console.log(rand_final_choice);

            if(this.state.suggestions[0] !== undefined){
                console.log('starting auth choice...');
                const get_final_random_auth_choice = Math.floor(Math.random()*10); // Rand between 0-9
                let rand_auth_choice = this.state.suggestions[0][get_final_random_auth_choice];

                console.log(rand_auth_choice);
                console.log(this.state.suggestions[0]);

                return(
                    <div id="final_render_2">
                            <div class="buttons">
                                <button id="another">Another</button>
                                <button id="restart">Restart</button>
                            </div>
                                <h1 id="rand_final_choice_title">{rand_final_choice['title']}</h1>
                                <h2 id="rand_final_choice_author">{rand_final_choice['author']}</h2>
                                <h4 id="rand_final_chocice_description">{rand_final_choice['description']}</h4>

                                <h3 id="rand_auth_choice_author">{rand_auth_choice['author']}</h3>
                                <h5 id="rand_auth_choice_description">{rand_auth_choice['description']}</h5>
                                <img id="rand_auth_choice_img" src={rand_auth_choice['source_img']}/>
    
                                <hr/>
                                <h6 id="credit">Data provided by OpenLibrary.org</h6>
                        </div>
            )} 
            return(
                <div id="final_render_1">
                    <div class="buttons">
                        <button id="another">Another</button>
                        <button id="restart">Restart</button>
                    </div>
                    <hr/>
                        <h2 id="rand_final_choice_title">{rand_final_choice['title']}</h2>
                        <h6 id="rand_final_choice_author"> by {rand_final_choice['author']}</h6>
                        <h6 id="rand_final_chocice_description">{rand_final_choice['description']}</h6>
                        <img id="rand_final_choice_img" alt="Book cover img" src={rand_final_choice['source_img']}/>
                    <hr/>
                        <h6 id="credit">Data provided by OpenLibrary.org</h6>
                </div>
            )
        }
        return(
            <div id="app_container">
                <div id="question_container">
                    <div id="question"> {this.state.questions[this.state.question_number]} </div>
                </div>
                <div id="answer_container">
                    <div id="answer" onClick={this.changeQuestion}>{this.state.answers[this.state.iter_number1].written}</div>
                    <div id="answer" onClick={(this.changeQuestion)}>{this.state.answers[this.state.iter_number2].written}</div>
                </div>
            </div>
        )}
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

ReactDOM.render(<App />, document.querySelector('#app'));



