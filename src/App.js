import React, { useState } from 'react';
import Logo from './logo.svg';
import Logo1 from './logo512.png';

const EmployeeForm = () => {
  // Daftar karyawan beserta informasi mereka
  const employees = [
    { id: 1, name: 'John Doe ', description: 'Telah bekerja sejak 2010', photo: Logo },
    { id: 2, name: 'Jane Smith ', description: 'Telah bekerja sejak 2011', photo: Logo1 },
    { id: 3, name: 'Lux ', description: 'Telah bekerja sejak 2012', photo: Logo1 },
    // Tambahkan karyawan lain di sini
  ];

  const [currentEmployee, setCurrentEmployee] = useState(employees[1]); // Karyawan awal yang ditampilkan

  const changeEmployee = (employee) => {
    setCurrentEmployee(employee);
  };

  return (
    <div>
      <div className="employee-card  flex flex-col border-white bg-black text-white rounded-lg w-96 items-center justify-between mt-5 mb-5 ml-5">
        <img src={currentEmployee.photo} alt={currentEmployee.name} />
        <h2>{currentEmployee.name}</h2>
        <h2 className="mb-5">{currentEmployee.description}</h2>
      </div>
      <div className="button-container border-white bg-blue-600 rounded-lg w-20 ml-40">
        {employees.map(
          (employee) =>
            currentEmployee.id !== employee.id && (
              <button key={employee.id} onClick={() => changeEmployee(employee)}>
                {employee.name}
              </button>
            )
        )}
      </div>
    </div>
  );
};

export default EmployeeForm;
