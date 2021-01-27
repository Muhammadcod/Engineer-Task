import React, {useEffect, useState} from 'react'
import axios from "axios";
import EmployeeInfo from "./components/EmployeeInfo";


function App() {
    const [employees, setEmployees] = useState([])

    const url = 'https://my.api.mockaroo.com/employees.json?key=2281f770'

    useEffect( () => {
        axios.get(url)
            .then(function (response) {
                // handle success
                console.log('res',response);
                setEmployees(response.data)

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [])

    console.log('emp',employees);


    return (
        <div className="App">
            <section>A</section>
            <section className='container-fluid mb-3 border'>
                <div className='pad'>
                    Division > Module
                </div>
            </section>
            <section className='container-fluid metric-wrapper mb-3'>
                <div className='row'>
                    <div className='col metric-box-wrapper'>
                        <div className='border metric-box white'>
                            <span className=''>
                                <h2>31454</h2>
                                <span>Ongoing Metric</span>
                            </span>
                            <span className=''>B</span>
                        </div>

                    </div>
                    <div className='col metric-box-wrapper'>
                        <div className='border metric-box white'>
                            <span className=''>
                                <h2>2343</h2>
                                <span>Past Metric</span>
                            </span>
                            <span className=''>B</span>
                        </div>

                    </div>
                    <div className='col metric-box-wrapper'>
                        <div className='border metric-box white'>
                            <span className=''>
                                <h2>14224</h2>
                                <span>Missed Metric</span>
                            </span>
                            <span className=''>B</span>
                        </div>

                    </div>
                    <div className='col metric-box-wrapper'>
                        <div className='border metric-box white'>
                            <span className=''>
                                <h2>635</h2>
                                <span>Failed Metric</span>
                            </span>
                            <span className=''>B</span>
                        </div>

                    </div>
                    <div className='col metric-box-wrapper'>
                        <div className='border metric-box white'>
                            <span className=''>
                                <h2>11334</h2>
                                <span>Pending Metric</span>
                            </span>
                            <span className=''>B</span>
                        </div>

                    </div>
                </div>
            </section>

            <section className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='border pad mb-2 white profile-info'>
                            <ul>
                                <li className='info'>
                                    6 <span className=''>Division Summary</span>
                                </li>
                                <li className='info'>
                                    1 <span className=''>08012345678</span>
                                </li>
                                <li className='info'>
                                    2 <span className=''>asbfefr@gmail.com</span>
                                </li>
                                <li className='info'>
                                    3 <span className=''>Mojidi, Lagos</span>
                                </li>
                                <li className='info'>
                                    4 <span className=''>2 Journal entries</span>
                                </li>
                                <li className='info'>
                                    5 <span className=''>24 fingerprints enrolled</span>
                                </li>
                            </ul>
                        </div>
                            <div className="border pad timeline">
                                <div className="entry">

                                    <div className="body">
                                        <p>Voluptatibus veniam .</p>
                                        <ul>
                                            <li>Rerum sit libero possimus amet excepturi</li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="entry">

                                    <div className="body">
                                        <p>Voluptatibus veniam </p>
                                        <ul>
                                            <li>Rerum sit libero possimus amet excepturi</li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="entry">

                                    <div className="body">
                                        <p>Voluptatibus veniam .</p>
                                        <ul>
                                            <li>Rerum sit libero possimus amet excepturi</li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className='col-md-9 '>
                        <div className='white'>
                            <table className="table">
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">

                                            </label>
                                        </div>
                                    </th>
                                    <th scope="col"></th>
                                    <th scope="col">NAME</th>
                                    <th scope="col">LOCATION</th>
                                    <th scope="col">STATUS</th>
                                    <th scope="col">ENTRIES</th>
                                    <th scope="col">RISK PROFILE</th>
                                    <th scope="col"></th>
                                </tr>
                                </thead>
                                <tbody>
                                    <EmployeeInfo employees={employees} />
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default App;
