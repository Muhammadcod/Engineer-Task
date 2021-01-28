import React, {useEffect, useState} from 'react'
import axios from "axios";
import EmployeeInfo from "./components/EmployeeInfo";
import {FiPhone, GoMail, IoLocationOutline, RiBookletLine, BiFingerprint} from "react-icons/all";


function App() {
    const [employees, setEmployees] = useState([])

    const url = 'https://my.api.mockaroo.com/employees.json?key=2281f770'

    useEffect( () => {
        axios.get(url)
            .then(function (response) {
                setEmployees(response.data)

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])



    return (
        <div className="App">
            <section className='container-fluid'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item nav-item__link active">
                                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item nav-item__link">
                                <a className="nav-link" href="/">Entries</a>
                            </li>
                            <li className="nav-item nav-item__link">
                                <a className="nav-link" href="/">Divisions</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                   aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </section>
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
                                <h3 className='metric--title'>31454</h3>
                                <span>Ongoing Metric</span>
                            </span>
                            <span className=''>B</span>
                        </div>

                    </div>
                    <div className='col metric-box-wrapper'>
                        <div className='border metric-box white'>
                            <span className=''>
                                <h3 className='metric--title'>2343</h3>
                                <span>Past Metric</span>
                            </span>
                            <span className=''>B</span>
                        </div>

                    </div>
                    <div className='col metric-box-wrapper'>
                        <div className='border metric-box white'>
                            <span className=''>
                                <h3 className='metric--title'>14224</h3>
                                <span>Missed Metric</span>
                            </span>
                            <span className=''>B</span>
                        </div>

                    </div>
                    <div className='col metric-box-wrapper'>
                        <div className='border metric-box white'>
                            <span className=''>
                                <h3 className='metric--title'>635</h3>
                                <span>Failed Metric</span>
                            </span>
                            <span className=''>B</span>
                        </div>

                    </div>
                    <div className='col metric-box-wrapper'>
                        <div className='border metric-box white'>
                            <span className=''>
                                <h3 className='metric--title'>11334</h3>
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
                        <div className='border pad mb-4 white profile-info'>
                            <ul>
                                <li className='info'>
                                    <FiPhone /> <span className='pl-2'>Division Summary</span>
                                </li>
                                <li className='info'>
                                    <FiPhone /> <span className='pl-2'>08012345678</span>
                                </li>
                                <li className='info'>
                                    <GoMail /> <span className='pl-2'>asbfefr@gmail.com</span>
                                </li>
                                <li className='info'>
                                    <IoLocationOutline /> <span className='pl-2'>Mojidi, Lagos</span>
                                </li>
                                <li className='info'>
                                    <RiBookletLine /> <span className='pl-2'>2 Journal entries</span>
                                </li>
                                <li className='info'>
                                   <BiFingerprint /> <span className='pl-2'>24 fingerprints enrolled</span>
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
