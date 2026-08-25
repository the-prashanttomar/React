import React from "react"
import UserClass from "../ClassComponent/UserClass"

class About extends React.Component {
    constructor (){
        super();
        console.log("Parent-Constructor")
    }
    
    componentDidMount(){
        console.log("Parent-Component-mount")

    }
    componentDidUpdate(){
        console.log("Parent-Component-udpated-rerendered")

    }
    componentWillUnmount(){
        console.log("Parent-Component-unmount")

    }
    render() {
        console.log("Parent-Render")
        return (<div>
            <UserClass name={"Prashant"} age={"28"} />
        </div>)
    }
}

export default About