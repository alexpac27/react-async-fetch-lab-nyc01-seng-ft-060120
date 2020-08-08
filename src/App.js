import React from 'react'

class App extends React.Component{

    state = {
        people: []
    }


    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(resp =>resp.json())
        .then(data => {
            let astro = data.people
            let people = astro.map(obj => obj.name)
            this.setState({people: people})
        })
    }


    
    render(){
        return(
            <div>
                <h1>People in Space:</h1>
                <ul>
                    {this.state.people.map(person => <li>{person}</li>)}
                </ul>
            </div>
        )
    }
}

export default App