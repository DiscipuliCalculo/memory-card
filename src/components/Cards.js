import React from "react";


class Cards extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Cards: [
                {id: 0, name: 'image0', image: require('./images/0.webp')},
                {id: 1, name: 'image1', image: require('./images/1.webp')},
                {id: 2, name: 'image2', image: require('./images/2.webp')},
                {id: 3, name: 'image3', image: require('./images/3.webp')},
                {id: 4, name: 'image4', image: require('./images/4.webp')},
                {id: 5, name: 'image5', image: require('./images/5.webp')},
                {id: 6, name: 'image6', image: require('./images/6.webp')},
                {id: 7, name: 'image7', image: require('./images/7.webp')},
                {id: 8, name: 'image8', image: require('./images/8.webp')},
                {id: 9, name: 'image9', image: require('./images/9.webp')},
            ],
            foundCards: [],
            currentGameScore: 0,
            highGameScore: 0
        }

        this.scrambleCards = this.scrambleCards.bind(this);
        this.updateScore = this.updateScore.bind(this);
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value})
    
    scrambleCards(e) {
        e.preventDefault()
        const cards = this.state.Cards
        let newList = []
        for (let i = 9; i >= 0; i--){
            let picked = cards.splice(Math.round(Math.random() * i), 1)
            newList.push(picked[0])
        }
        this.setState({
            Cards: newList
        });
    }

    checkCard(e) {
        e.preventDefault()
        console.log(e.target.getAttribute("index"))
        return (e.target.getAttribute("index"))
    }

    updateScore(e) {
        e.preventDefault()
        let currentFound = this.state.foundCards;
   
        const index = e.target.getAttribute("index")
        console.log(currentFound)
        console.log(index)
        if (currentFound.includes(index)) {
            this.setState({
                foundCards: [],
                currentGameScore: 0
            })
            console.log(this.state.foundCards)
        }
        else {
            currentFound.push(index);
            const currentScore = this.state.currentGameScore + 1;
            this.setState({
                foundCards: currentFound,
                currentGameScore: currentScore
            })
            if (currentScore > this.state.highGameScore) {
                this.setState({
                    highGameScore: currentScore
                })
            }
            console.log(this.state.foundCards)
        }
    }

    render() {
        const listCards =this.state.Cards.map((card) =>
            <img key={card.id} index={card.id} src={card.image} alt={card.name} onClick={this.updateScore}/>
        )

        return(
        <div>
            <div onClick={this.onChange} >Current Score: {this.state.currentGameScore}</div>
            <div onClick={this.onChange} >High Score: {this.state.highGameScore}</div>            
            <div className='Gameboard' onClick={this.scrambleCards}>{listCards}</div>
        </div>

        )
    }
}

export default Cards;