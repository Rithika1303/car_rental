import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DefaultLayout from '../compounds/DefaultLayout';
import { getallcars } from '../redux/actions/carsActions';
import { Button, Row, Col } from 'antd';
import {Link} from 'react-router-dom';
import Spinner from '../compounds/Spinner';
function Home() {
    const { cars } = useSelector(state => state.carReducer)
    const { loading } = useSelector(state => state.alertsReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getallcars())
    }, [])

    return (
        <DefaultLayout>
            {loading == true && (<Spinner/>)}
            <Row justify='center' gutter={16} className='mt-4'>
                {cars.map(car => {
                    return <Col lg={5} sm={24} xs={24}>
                        <div className='car p-2 bs1'>
                            <img src={car.image} className="caring" />
                            <div className='car-content d-flex align-items-center justify-content-between'>
                                <div>
                                    <p>{car.name}</p>
                                    <p>{car.rentPerHour}rent Per Hour/-</p>
                                </div>
                                <div>
                                    <Button className='btn1 mr-2'><Link to={'/booking/${car._id}'}>Book Now</Link></Button>
                                </div>
                            </div>

                        </div>
                    </Col>
                })}
            </Row>
        </DefaultLayout>
    )
}

export default Home
