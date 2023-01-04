// I need the title, author, cover and description

class Api extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            src: "",
            title: "",
            author: "",
            description: ""
        }
    }

    render() {
        return (
            <div>
                <input onKeyPress={this.inputKeyPress} id="input"/>
                <img src={this.state.src}/>
                <h1> {this.state.title} </h1>
                <h1> {this.state.author} </h1>
                <h1> {this.state.description} </h1>
            </div>
        )
    }

    inputKeyPress = (event) => {

        if (event.key === "Enter") {
            this.Output()
            alert('Done!');
        }
    }


    Output = () => {

        const input = document.querySelector('#input').value
    
        fetch(`https://openlibrary.org/search.json?q=${input}&mode=everything`)
        .then(res => res.json())
        .then(all_books => {
            const book = all_books['docs'][0];
            // console.log(book);
    
            const title = book['title'];
            console.log(title);
    
            const author_name = book['author_name'][0];
            console.log(author_name);
    
            const work_key = book['key'];
           
            fetch(`https://openlibrary.org${work_key}.json`)
                .then(response => response.json())
                .then(book => {
                    // Print result
                    console.log(book);
                    const description = book['description'];
                    console.log(description);
    
                    const cover_id = book['covers'][16];
                    console.log(cover_id);
    
                    const source_img = `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`    

                    this.setState({
                        src: source_img,
                        title: title,
                        author: author_name,
                        description: description
                    })
                })

                .catch(error => {
                    console.log(error);
                })
        })
        .catch(error => {
            console.log(error);
        })
    
    }
}

class App extends React.Component {

    render(){
    return (
        <div>
            <Api/>
        </div>
    )};
}

ReactDOM.render(<App />, document.querySelector('#app'))

// event.preventDefault();


