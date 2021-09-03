import { Component } from 'react'
import { Card } from 'react-bootstrap'

class SongLists extends Component {

   

    state = {
        // here I will store the data coming from the fetch
        SongLists: null
    }

    fetchSongs = async () => {
        // here I can do my fetch
        try {
            let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
            console.log(response)
            if (response.ok) {
                let data = await response.json()
                this.setState({SongLists: data } , () => 
                console.log(this.state.SongLists)


                    
                
                )
            } else {
                console.log('something went wrong')
            }
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.fetchSongs()
        
    }

   

    

    render() {
        console.log('SongLists rendered again')
        // the render() method gets fired again everytime there's a change in its state or in its props
        return (
            <div className="mt-3">
                <p>Song selected: {this.props.selectedMovie}</p>
                {
                    this.state.SongLists && (
                        // I'm entering this portion of the JSX just when the fetch is completed
                        // so just when SongLists in the state is not null anymore
                        <div>
                            <Card>
                                <Card.Img variant="top" src={this.state.data.cover_medium} />
                                <Card.Body>
                                    <Card.Title>{this.state.data.title}</Card.Title>
                                    <Card.Text>
                                        {this.state.SongLists.imdbID}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default SongLists