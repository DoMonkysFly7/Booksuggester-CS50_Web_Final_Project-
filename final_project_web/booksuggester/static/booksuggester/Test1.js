// I need the title, author, cover and description (done)

let g = [];

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            response: "",
            subjects: [],
            gathered: []
        };
    }

    updateResponse = (event) => {
        this.setState({
            response: event.target.value
        })};

    addSubjects = (event) => {

        const new_subject = this.state.response

        // Add new subjects to the current list
        this.setState(state => ({
            subjects: [...state.subjects, new_subject]
        }));
    }

    APIoutput = (event) => {

        const current_list = this.state.subjects;

        current_list.forEach((api_call) => {


            // You can choose how many responses to accept
            fetch(`https://openlibrary.org/subjects/${api_call}.json?limit=3`)
            .then(res => res.json())
            .then(output => {
                output['works'].forEach((book) => {
                    
                    const title = book['title'];
                    
                    this.setState(state => ({
                        gathered: [...state.gathered, title]
                    }));
                })
            })
        })
    }

    render() {
        return(
            <div>
                <h1>Input subjects here</h1>
                <input name="input" onChange={this.updateResponse}></input>
                <input type="submit" onClick={this.addSubjects}></input>

                <h1>List of current subjects:</h1>
                <ul>
                    {this.state.subjects.map((subject, i) =>
                            
                        <li key={i}>
                            {subject}
                        </li>

                    )}
                </ul>
                <button onClick={this.APIoutput}>Get API results</button>
            </div>
    )}
}

ReactDOM.render(<App />, document.querySelector('#app'))

// event.preventDefault();


