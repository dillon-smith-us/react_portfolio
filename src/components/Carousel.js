import React from 'react';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from '../components/Card';
// image size: 1000pxwidthx1600pxheight por favor
import poggers from '../assets/images/poggers.png';
import snaccident from '../assets/images/snaccident.png';
import notetaker from '../assets/images/notetaker.png';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: "Poggers",
                    subTitle: 'Task manager for gamers',
                    imgSrc: poggers,
                    link: 'https://poggers-pog.herokuapp.com/login',
                    selected: false
                },
                {
                    id: 1,
                    title: "Snaccidental Recipe",
                    subTitle: 'recipe finder',
                    imgSrc: snaccident,
                    link: 'https://dillon-smith-us.github.io/snaccidental-recipe/',
                    selected: false
                },
                {
                    id: 2,
                    title: "Note Taker",
                    subTitle: 'track notes throughout the day',
                    imgSrc: notetaker,
                    link: 'https://safe-badlands-86120.herokuapp.com/',
                    selected: false
                },

            ]
        }

        
    }
    
    handleCardClick = (id, card) => {
            let items = [...this.state.items];

            items[id].selected = items[id].selected ? false : true;

            items.forEach(item => {
                if(item.id !== id) {
                    item.selected = false;
                }
            });

            this.setState({
                items
            });
        }

        makeItems = (items) => {
            return items.map(item => {
                return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
            })
        } 

    render() {
        return(
            <Container fluid="md">
                <Row className="justify-content-around"> 
                   <Col className="justify-content-around"> {this.makeItems(this.state.items)}</Col>
                </Row>

            </Container>
        );
    }

}

export default Carousel;