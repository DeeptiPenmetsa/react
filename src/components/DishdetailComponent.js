import React,{Component} from 'react';
import {Card, CardImg , CardText, CardTitle, CardBody} from 'reactstrap'; 

class DishdetailComponent extends Component{

    constructor(props){
        super(props);
     this.state={
    };
    }

       renderDish(dish) {
            if (dish != null)
                return(
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                );
            else
                return(
                    <div></div>
                );
        }

        renderComments(dish){
            if (dish!=null){
                const comments= dish.comments.map((cmt) => {
                    return (
                        
                        <div key={cmt.id}>
                        <CardBody>
                            <CardText>{cmt.comment}</CardText>
                            <CardText>--{cmt.author},{cmt.date}</CardText>
                        </CardBody>
                    </div>
                    );
                });
                return(
                    <div>
                    <h4>Comments</h4>
                    {comments}  
                    </div> 
                )

            } else {
                return(
                    <div></div>
                )
            }
        }

    render(){
        return (
        <div className="container">
            <div className="row">
            <div  className="col-12 col-md-5 m-1">
                {this.renderDish(this.props.details)}
            </div>
            <div  className="col-12 col-md-5 m-1">
                {this.renderComments(this.props.details)}
            </div>
            </div>
        </div>
        );
    }

}
export default DishdetailComponent;