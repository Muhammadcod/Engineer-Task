import React from 'react';

function EmployeeInfo(props) {
const {employees} = props
    return (
            <>
                {employees.map((user) => (
                    <tr key={user.id}>
                        <th scope="row">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">

                                </label>
                            </div>
                        </th>
                        <td>M</td>
                        <td>{user.fullname}</td>
                        <td className='location'>
                            <span className='d-block'>
                                {user.city}
                            </span>
                            <span>
                                {user.address}
                            </span>
                        </td>
                        <td>
                            {user.status > 1
                                ? (
                                    <span className="badge badge-pill border orange">{ `${user.status} Issues found` }</span>
                                )
                                : user.status === 1 ? (
                                <span className="badge badge-pill border orange">{ `${user.status} Issue found` }</span>
                                )
                                    : (
                                <span className="badge badge-pill border purple">No issue</span>
                                )
                            }
                        </td>
                        <td className='entries'>
                            <ul className='exception'>
                                <li>
                                    {user.entries} Unique Entries
                                </li>
                            </ul>
                            Homogenous
                        </td>
                        <td>
                            {user.risk <= 8 ? (
                                 <p className='green'>A Low Risk</p>
                            ) : user.risk > 8 && user.risk <= 14 ? (
                                <p className='blue'>A Mid Risk</p>
                            ) : (
                                <p className='red'>A High Risk</p>
                            )}
                        </td>
                        <td>|</td>
                    </tr>
                ))}


            </>
        );

}

export default EmployeeInfo;
