import React from 'react'
import { Menu, Dropdown, Button, Row, Col} from 'antd';

function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('user'))
    const menu = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/">Rent a car</a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="/HostCar">Host a car</a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="">profile</a>
            </Menu.Item>
            <Menu.Item onClick={() => {
                localStorage.removeItem('user');
                window.location.href = '/login'
            }}>
                <a target="_blank">Logout</a>
            </Menu.Item>
        </Menu>
    );
    return (
        <div>
            <div className='header bs1'>
                <Row gutter={16} justify='center'>
                    <Col lg={20} sm={24} xs={24}>
                        <div className='d-flex justify-content-between'>
                            <h1>car website</h1>

                            <Dropdown overlay={menu} placement="bottomCenter">
                                <Button>{user.username}</Button>
                            </Dropdown>
                        </div>
                    </Col>
                </Row>

            </div>
            <div className='content'>
                {props.children}
            </div>
        </div>

    )
}

export default DefaultLayout
