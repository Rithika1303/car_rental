import React from 'react';
import DefaultLayout from '../compounds/DefaultLayout';
import { Link, useParams } from 'react-router-dom';
function BookingCar({match}) {
    const { carid } = useParams();
    return (
        <DefaultLayout>
            <h1>BookingCar page</h1>
            <h1>Car Id= {carid}</h1>
        </DefaultLayout>
    )
}

export default BookingCar;
