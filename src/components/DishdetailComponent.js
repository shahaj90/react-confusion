import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state={}
    }

    render() {
        const comments = this.props.dish.comments.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-12 m-1">
                  {dish.comment}<br/><br/>
                -- {dish.author} <br/>{dish.date}<br/>
              </div>
            );
        });        

        return (
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
               <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                      <CardTitle>{this.props.dish.name}</CardTitle>
                      <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <h5>Comments</h5>
                    {comments}
                </div>
            </div>
        );
    }
}

export default DishDetail;