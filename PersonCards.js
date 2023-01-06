import { Component } from 'react';

class PersonalCard extends Component {
    render() {
        return(
            <div>
                <h1> { this.props.firstName }, { this.props.lastName} <h1/>
                <p>Age: {this.props.age} <p/>
                <p>Hair color: {this.props.hairColor} <p/>
            <div/>
        );
    }
}


export default PersonalCard;
