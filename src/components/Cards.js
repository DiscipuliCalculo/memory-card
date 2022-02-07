import React from "react";

class Cards extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render() {

        for (let i = 0; i < 10; i++){
            console.log(i)
            return(
                <div></div>
            )
        }
    }
}

export default Cards;