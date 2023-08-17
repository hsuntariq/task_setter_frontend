import React, { useEffect } from 'react'
import { Card, Container,Col,Row } from 'react-bootstrap'
import {MdOutlineDelete} from 'react-icons/md'
import {AiOutlineEdit} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { getGoals } from '../features/goals/goalSlice'
const ShowGoals = () => {
const {goals,isLoading,isSuccess,isError,message} = useSelector(state=>state.goal);
const dispatch = useDispatch();
useEffect(()=>{
if(isError){
toast(message);
}
    try {
        dispatch(getGoals());
    } catch (error) {
        console.log(error)
    }
console.log(goals)
},[isError,message,dispatch])
if(isLoading){
return <h1>Loading...</h1>
}
return (
<>
    <Container>
        <h1 className='display-1 text-center'>Your Goals</h1>
        <Row>
            {goals.goals?.map((goal)=>{
            return (
            <>
                <Col lg={3}>
                <Card>
                    <Card.Body>
                        <Card.Title>Your Goal</Card.Title>
                        <Card.Subtitle>{goal.createdAt}</Card.Subtitle>
                        <Card.Text>{goal.goal}</Card.Text>
                        <div className="d-flex justify-content-center">
                            <Card.Link>
                                <MdOutlineDelete className="text-danger" />
                            </Card.Link>
                            <Card.Link>
                                <AiOutlineEdit className="text-info" />
                            </Card.Link>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
            </>
            )
            })}

        </Row>
    </Container>
</>
)
}

export default ShowGoals