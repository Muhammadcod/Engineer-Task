import React from 'react';
import { ReactComponent as Menu} from '../assets/Vector-menu.svg';
import { IoIosArrowDropdown, FiArrowDownRight, FiArrowRight, FiArrowUp} from "react-icons/all";

function EmployeeInfo(props) {

const {employees} = props
    return (
            <>
                {employees.map((user) => (
                    <tr key={user.id} className='employee-info'>
                        <th scope="row">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">

                                </label>
                            </div>
                        </th>
                        <td style={{color: `blue`}}><IoIosArrowDropdown /></td>
                        <td className='fullName'>{user.fullname}</td>
                        <td className='location'>
                            <span className='d-block location--city'>
                                {user.city}
                            </span>
                            <span className='location--address'>
                                {user.address}
                            </span>
                        </td>
                        <td className='status'>
                            {user.status > 1
                                ? (
                                    <span className="badge badge-pill border orange"
                                          style={{background: `#FFF6DE`}}>
                                        { `${user.status} Issues found` }
                                    </span>
                                ) : user.status === 1 ? (
                                    <span className="badge badge-pill border orange"
                                          style={{background: `#FFF6DE`}}>
                                        { `${user.status} Issue found` }
                                    </span>
                                ) : (
                                    <span className="badge badge-pill border purple"
                                          style={{background: `#F6F3FF`}}>
                                        No issue
                                    </span>
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
                        <td className='risk--profile'>
                            {user.risk <= 8 ? (
                                  <span className='green'><FiArrowDownRight /> Low Risk</span>
                            ) : user.risk > 8 && user.risk <= 14 ? (
                                <span className='blue'><FiArrowRight /> Mid Risk</span>
                            ) : (
                                <span className='red'><FiArrowUp /> High Risk</span>
                            )}
                        </td>
                        <td><Menu /></td>
                    </tr>
                ))}
            </>
        );
}

export default EmployeeInfo;
