import React from 'react';
import EmployeeInfo from "./EmployeeInfo";

const UserList = ({employees}) => {
  return (
    <div className='white' style={{
      display: `block`,
      overflowX: `auto`,
      whiteSpace: `nowrap`
    }}>
      <table className="table">
        <thead className="thead-light">
        <tr style={{fontWeight: `500`, fontSize: `12px`}}>
          <th scope="col">
            <div className="custom-control custom-checkbox" style={{background: `transparent`}}>
              <input type="checkbox" className="custom-control-input" id="customCheck1"/>
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
        <tbody className='employee-wrapper'>
        <EmployeeInfo employees={employees}/>
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
