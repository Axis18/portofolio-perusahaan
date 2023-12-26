import React, { useState } from 'react';
import Logo from './logo.svg';
import Logo1 from './logo512.png';

const EmployeeForm = () => {
  // Daftar karyawan beserta informasi mereka
  const employees = [
    { id: 1, name: 'John Doe ', photo: Logo },
    { id: 2, name: 'Jane Smith ', photo: Logo1 },
    // Tambahkan karyawan lain di sini
  ];

  const [currentEmployee, setCurrentEmployee] = useState(employees[1]); // Karyawan awal yang ditampilkan

  const changeEmployee = (employee) => {
    setCurrentEmployee(employee);
  };

  return (
    <div>
      <div className="employee-card absolute center ">
        <img src={currentEmployee.photo} alt={currentEmployee.name} />
        <h2>{currentEmployee.name}</h2>
      </div>
      <div className="button-container absolute hover:text-blue-800  bg-slate-500 text-red-800 ">
        {employees.map((employee) => (
          <button key={employee.id} onClick={() => changeEmployee(employee)}>
            {employee.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmployeeForm;
