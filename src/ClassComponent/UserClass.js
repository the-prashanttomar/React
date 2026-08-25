import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Location: "Home",
            City: "Agra",
            Count: 0
        }
        
        console.log("Child-Constructor")
    }
    componentDidMount(){
        console.log("Child-Component-mount")

    }
    render() {
        console.log("Child-Render")
        const { name, age } = this.props
        return (
            <div className="about-card">
                <h2>{name}</h2>
                <h4>{age}</h4>
                <h4>{this.state.Location}</h4>
                <h4>{this.state.City}</h4>
                <h4>Count is {this.state.Count}</h4>
                <button onClick={() => {
                    this.setState({
                        Count: this.state.Count + 1
                    })

                }}>Increase Count</button>
            </div>
        )
    }
}
export default UserClass