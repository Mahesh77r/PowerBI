// const NavLinks = [
//     { name: 'Ayan', path: '/ayan' },
//     { name: 'Shantanu', path: '/shan' },
//     { name: 'Tilak', path: '/tilak' },
//     { name: 'Prathamesh', path: '/pahune' },
//     { name: 'Parikshit', path: '/parik' },
//     { name: 'Mahesh', path: '/msr' },
//     { name: 'Shivam K', path: '/kopare' },
//     { name: 'Shivam H', path: '/honade' },
// ]
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'antd';
import { Toaster, toast } from 'react-hot-toast'

import { addReport } from '../services/CRUD'

export const Navbar = ({ report }) => {

    const [visible, setVisible] = useState(false);
    const [data, setData] = useState({
        member_name: "",
        report_title: "",
        report_link: ""
    })
    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        let loadingToast;
        try {
            loadingToast = toast.loading("Processing...");
            const res = await addReport(data);
            if(res.status === 200)
            {
            setTimeout(() => {
                toast.success("Member added Successfully 😃")
              }, 1000);
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }
            console.log(res);
        } catch (error) {
            console.log(error)
            toast.error("An error occurred");
        }
        finally {
            setTimeout(() => {
                toast.dismiss(loadingToast);
              }, 1000);

        }
    };

    return (
        <>
      <Toaster position="top-center" />

            <Modal
                onCancel={() => setVisible(false)}
                footer={null}
                open={visible}
                style={{ minWidth: '900px' }}
            >
                <form onSubmit={onSubmitHandler}>
                    <h1 className='font-bold text-center text-2xl mb-3'>Add New Member</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="">
                            <label
                                htmlFor="clueName"
                                className="block text-sm font-medium text-gray-700 "
                            >
                                Member Name
                            </label>
                            <input
                                type="text"
                                id="member_name"
                                onChange={onChangeHandler}
                                value={data.member_name}
                                name="member_name"
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>

                        <div className="">
                            <label
                                htmlFor="clueName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Report Title
                            </label>
                            <input
                                type="text"
                                id="report_title"
                                onChange={onChangeHandler}
                                value={data.report_title}
                                name="report_title"
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label
                            htmlFor="clueName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Report Link
                        </label>
                        <input
                            type="text"
                            id="report_link"
                            onChange={onChangeHandler}
                            value={data.report_link}
                            name="report_link"
                            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <button className="flex text-white font-bold text-xl bg-green-600 hover:bg-green-700 p-3 rounded-md my-3">
                        <span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        </span>
                        Add Member
                    </button>
                </form>
            </Modal>

            <div className="flex flex-col h-screen w-64 bg-gray-800">
                {/* Sidebar content */}
                <div className="flex items-center justify-center h-16 border-b border-gray-700">
                    <button onClick={() => setVisible(true)} className="flex text-white font-bold text-xl bg-green-700 p-3 rounded-md my-3">
                        <span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        </span>
                        Add New Member</button>
                </div>

                <div className="flex flex-col flex-1 overflow-y-auto">
                    {/* Links */}
                    {
                        report.map((nav, i) => (

                            <Link to={`report/${nav._id}`} key={i}  className="px-6 py-3 text-gray-400 hover:text-white  active:text-red-500  hover:bg-gray-700">
                                {nav.member_name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}


