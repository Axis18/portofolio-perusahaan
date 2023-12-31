import React, { useState } from 'react';
import Logo from './person1.png';
import Logo1 from './person2.png';
import Logo2 from './person3.png';

const EmployeeForm = () => {
  // Daftar karyawan beserta informasi mereka
  const employees = [
    { id: 1, name: 'John Doe ', job: 'Front End', photo: Logo },
    { id: 2, name: 'Jane Smith ', job: 'Back End', photo: Logo1 },
    { id: 3, name: 'Lux ', job: 'Back End', photo: Logo2 },
    // Tambahkan karyawan lain di sini
  ];

  const [currentEmployee, setCurrentEmployee] = useState(employees[1]); // Karyawan awal yang ditampilkan

  const changeEmployee = (employee) => {
    setCurrentEmployee(employee);
  };

  return (
    <>
      <section className="header rounded-sm  ">
        <div className="nav flex justify-between">
          <div className=" ml-3 mt-2">
            <a href="" className="text-2xl font-serif font-semibold text-slate-700">
              <span className="font-bold text-yellow-400">Market</span>Place
            </a>
          </div>
          <div className="px-2 ">
            <div className="flex text-xl font-semibold font-serif text-[#ffad57] mt-3 mr-10 ">
              <a href="" className="mr-3 hover:text-orange-200">
                About
              </a>
              <a href="" className="mr-3 hover:text-orange-200">
                Docs
              </a>
              <a href="" className="mr-3 hover:text-orange-200">
                Grup
              </a>
            </div>
          </div>
        </div>
        <div className="hero flex justify-center">
          <div className="text-lg  font-serif -rotate-90 w-72  mt-[9.5rem]   ">
            <a href="" className="mr-3 hover:text-orange-200">
              Twitter
            </a>
            <a href="" className="mr-3 hover:text-orange-200">
              Instagram
            </a>
            <a href="" className="mr-3 hover:text-orange-200">
              FaceBook
            </a>
          </div>

          <div className="mt-2  pl-3">
            <p className="cursor-default block mb-12">______________________________</p>
            <h1 className="text-4xl font-mono font-medium text-slate-600">
              <span className="font-semibold text-slate-700">Our</span> Little Stories
            </h1>
            <p className="mt-7 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eaque aperiam ipsam <br /> porro laboriosam cupiditate? Nemo quod mollitia <span className="font-semibold"> consectetur ullam!</span>
            </p>

            <div className="flex">
              <p className="cursor-default flex mt-12">______________________________</p>

              <div className="w-10 h-10 rounded-full bg-slate-500/70 mt-10 ml-1"></div>
              <div className="w-10 h-10 rounded-full bg-slate-500/40 mt-10 ml-1"></div>
              <div className="w-10 h-10 rounded-full bg-slate-500/25 mt-10 ml-1"></div>
            </div>

            <div className="bg-[#161614] text-[#edecea] mt-2 flex w-[61.2rem]">
              <div className="con1">
                <h5 className="font-serif text-2xl font-thin tracking-wide ml-8 mt-5 flex py-2  ">Your Title Here</h5>
                <div className="flex py-4">
                  <p className="text-5xl font-thin ml-8 mt-4 block -translate-y-4 mx-2">01 </p>
                  <p className="font-thin">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    <br /> placeat dicta veniam
                  </p>
                </div>
              </div>

              <div className="con2">
                <h5 className="font-serif text-2xl font-thin tracking-wide ml-8 mt-5 flex py-2  ">Your Title Here</h5>
                <div className="flex py-4">
                  <p className="text-5xl font-thin ml-8 mt-4 block -translate-y-4 mx-2">01 </p>
                  <p className="font-thin">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ut corporis sapiente placeat esse eveniet quos?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-14 ">
          <h1 className="text-center font-semibold text-slate-600 text-4xl">
            Our <span className="font-bold text-slate-600">Grup</span>{' '}
          </h1>
          <div className="flex">
            <div className="kiri ml-10">
              <h1 className="font-semibold mt-7 text-slate-800/80 text-5xl font-serif">
                Hello I'am <span className="font-medium tracking-wider text-[#293448]"> {currentEmployee.name} </span>
              </h1>
              <h2 className="text-2xl font-serif text-[#2a2927] font-semibold mt-1">Web Developer | {currentEmployee.job}</h2>
              <p className="mt-2  text-xl">
                Lorem ipsum <span className=" decoration-4 text-slate-700 font-medium decoration-slice">dolor sit amet</span> consectetur adipisicing elit. Aliquam eligendi
                <br />
                ratione autem nostrum repellat ea facere
                <br />
                quae laboriosam<span className="font-semibold text-2xl"> numquam modi.</span>
              </p>

              <div className="flex mt-2">
                <p className="text-xl text-gray-700 ">
                  Here's Our Employee <span className="text-2xl font-semibold">-</span>
                </p>
                <div className="button-containe">
                  {employees.map(
                    (employee) =>
                      currentEmployee.id !== employee.id && (
                        <button id="btn" className="bg-sky-500 text-white hover:bg-sky-400 rounded-full w-20 h-8 shadow-lg text-sm mx-1" key={employee.id} onClick={() => changeEmployee(employee)}>
                          {employee.name}
                        </button>
                      )
                  )}
                </div>
              </div>
            </div>

            <div className="kanan mx-auto">
              <div className="relative ">
                <img src={currentEmployee.photo} alt={currentEmployee.name} className="w-auto h-[25.2rem] -translate-y-16" />
                <span className="absolute bottom-0 -translate-y-10 -z-10">
                  <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#14b8a6"
                      d="M40.3,-41.8C55.1,-35.6,71.9,-25.6,73.4,-13.5C74.9,-1.3,61.1,13,51.5,29.9C41.9,46.7,36.5,66.2,24.6,72.6C12.8,79.1,-5.7,72.6,-21.2,64.3C-36.7,56,-49.3,45.9,-52.2,33.7C-55,21.4,-48.1,7.1,-44.8,-7.3C-41.6,-21.7,-42,-36.2,-35.2,-43.8C-28.3,-51.3,-14.2,-52,-0.7,-51.1C12.8,-50.3,25.5,-48,40.3,-41.8Z"
                      transform="translate(100 100)  scale(1.2)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeForm;
