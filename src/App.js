import React, { useState } from 'react';
import Logo from './logo.svg';
import Logo1 from './logo512.png';
<<<<<<< HEAD
=======

>>>>>>> 3890817316b0a576895640e9435770ddc9238ca4
const EmployeeForm = () => {
  // Daftar karyawan beserta informasi mereka
  const employees = [
    { id: 1, name: 'John Doe', photo: Logo },
    { id: 2, name: 'Jane Smith', photo: Logo1 },
    // Tambahkan karyawan lain di sini
  ];

  const [currentEmployee, setCurrentEmployee] = useState(employees[0]); // Karyawan awal yang ditampilkan

  const changeEmployee = (employee) => {
    setCurrentEmployee(employee);
  };

  return (
    <div>
      <div className="employee-card">
        <img src={currentEmployee.photo} alt={currentEmployee.name} />
        <h2>{currentEmployee.name}</h2>
      </div>
      <div className="button-container">
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
