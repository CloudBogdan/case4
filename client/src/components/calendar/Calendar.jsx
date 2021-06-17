import React, { useEffect, useState } from "react";
import Calendar from 'react-calendar';

const CustomCalendar = ()=> {

    return (
        <Calendar value={ [new Date("2021-06-10"), new Date("2021-06-12")] } />
    ); 
};

export default CustomCalendar