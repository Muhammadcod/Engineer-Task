import React, {useState, useEffect} from 'react';
import Layout from "../components/Layout";
import axios from "axios";

const StudentView = () => {
    const [student, setStudent] = useState([])

    // const url = 'https://my.api.mockaroo.com/employees.json?key=2281f770'
    const url = 'http://localhost:3002/api/student'

    useEffect(() => {
        axios.get(url)
            .then(function (response) {
                setStudent(response.data)

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    console.log('student', student)

    return (
        <div>
            <Layout student={student} />
        </div>
    );
};

export default StudentView;
