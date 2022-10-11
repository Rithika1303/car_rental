import React from 'react';
import DefaultLayout from '../compounds/DefaultLayout';
import {Button, Row, Col,Form, Input } from 'antd';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HostingCar } from '../redux/actions/carsActions';
import Spinner from '../compounds/Spinner';
function HostCar() {
    const dispatch= useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)
    function onFinish(values){
        values.bookedTimeSlots=[]
        dispatch(HostingCar(values))
        console.log(values)
    }
    return (
        <DefaultLayout>
            {loading == true && (<Spinner/>)}
            <Form className='p-2' onFinish={onFinish}>
                        <h1>Host a car</h1>
                        <hr/>
                        <Form.Item name='name' label='car name' rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name='image' label='image url' rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name='rentPerHour' label='rent per hour' rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name='capacity' label='capacity' rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item name='fuelType' label='fueltype' rules={[{required: true}]}>
                            <Input/>
                        </Form.Item>

                        <button className='btn1 mt-2 mb-3'>add car</button>
                        <br/>
                    </Form>
        </DefaultLayout>
    )
}
export default HostCar;
