import React from 'react';
// import { ReactComponent as Menu} from '../assets/Vector-menu.svg';
import { IoIosArrowDropdown} from "react-icons/all";

function EmployeeInfo(props) {

const {students} = props
    return (
            <>
                {/*{students.map((user) => (
                    <tr key={user.studentId} className='employee-info'>
                        <th scope="row">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">

                                </label>
                            </div>
                        </th>
                        <td style={{color: `blue`}}><IoIosArrowDropdown /></td>
                        <td >{user._id}</td>
                        <td className='fullName'>{user.firstName}</td>
                        <td className='location'>
                            {user.lastName}
                        </td>
                        <td className='status'>
                            {user.class}
                        </td>
                    </tr>
                ))}*/}
                {students}
            </>
        );
}

export default EmployeeInfo;
