import React from 'react';
// import { FaBeer } from 'react-icons/fa';
import { IoIosArrowDropdown, BiDotsVerticalRounded, FiArrowDownRight, FiArrowRight, FiArrowUp} from "react-icons/all";

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
                        <td style={{color: `blue`}}><IoIosArrowDropdown /></td>
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
                                ) : user.status === 1 ? (
                                    <span className="badge badge-pill border orange">{ `${user.status} Issue found` }</span>
                                ) : (
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
                                  <span className='green'><FiArrowDownRight /> Low Risk</span>
                            ) : user.risk > 8 && user.risk <= 14 ? (
                                <span className='blue'><FiArrowRight /> Mid Risk</span>
                            ) : (
                                <span className='red'><FiArrowUp /> High Risk</span>
                            )}
                        </td>
                        <td><BiDotsVerticalRounded /></td>
                    </tr>
                ))}
            </>
        );
}

export default EmployeeInfo;
