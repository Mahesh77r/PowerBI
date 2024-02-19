import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from 'antd';
const NavLinks = [
    { name: 'Mahesh', path: '/msr' },
    { name: 'Shantanu', path: '/shan' },
    { name: 'Tilak', path: '/tilak' },
    { name: 'Ayan', path: '/ayan' },
    { name: 'Shivam K', path: '/kopare' },
    { name: 'Shivam H', path: '/honade' },
]
export const Navbar = () => {

    const [visible, setVisible] = useState(false);
    const [data, setData] = useState({
        member_name: "",
        report_title: "",
        report_link: ""
    })
    const onSubmitHandler = (e) => {
        try {
            console.log(data)
        } catch (error) {

        }
    };

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <>
            <Modal
                onCancel={() => setVisible(false)}
                footer={null}
                open={visible}
                style={{ minWidth: '890px' }}
            >
                <form onSubmit={onSubmitHandler}>
                    <h1>
                        
                    </h1>
                    <div className='flex justify-evenly'>

                        <div className="mt-4">
                            <label
                                htmlFor="clueName"
                                className="block text-sm font-medium text-gray-700"
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

                        <div className="mt-4">
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

                        <button className='text-white font-bold text-xl bg-green-700 p-3 rounded-md my-3'>
                            Add Member
                        </button>

                </form>
            </Modal>

            <div className="flex flex-col h-screen w-64 bg-gray-800">
                {/* Sidebar content */}
                <div className="flex items-center justify-center h-16 border-b border-gray-700">
                    <button onClick={() => setVisible(true)} className="text-white font-bold text-xl bg-green-700 p-3 rounded-md my-3">Add New Member</button>
                </div>

                <div className="flex flex-col flex-1 overflow-y-auto">
                    {/* Links */}
                    {
                        NavLinks.map((nav, i) => (

                            <Link to={nav.path} key={i} className="px-6 py-3 text-gray-400 hover:text-white hover:bg-gray-700">
                                {nav.name}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}


