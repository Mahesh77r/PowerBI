import React from 'react';

import { useParams } from 'react-router-dom';

export const Report = ({ report }) => {
    
    // Extract ID from the URL params
    const { id } = useParams();
    console.log(report);

    // Ensure report is an array
    if (!Array.isArray(report) || report.length === 0) {
        return <div>Loading...</div>;
    }


    // Find the report with the matching ID
    const selectedReport = report.find((r) => r._id === id);

    // If the report is not found, display a message
    if (!selectedReport) {
        return <div>Report not found</div>;
    }

    // Display the report details
    return (
        <div className='mt-5'>
            <h1 className='font-bold text-gray-500 text-3xl mb-4'>{selectedReport.report_title} by <span className='text-4xl text-green-700'>{selectedReport.member_name}</span></h1>
            <iframe title='Power BI Report' width='1100' height='541.25' src={selectedReport.report_link} allowFullScreen></iframe>
        </div>
    );
};




export const MaheshReport = () => {
    return (
        <>
            <div className='mt-5'>
                <h1 className='font-bold text-3xl mb-4'>Comparison of Placement Scenario</h1>
                <iframe title='Power BI Report' width='1100'height='541.25' 
                src='https://app.powerbi.com/reportEmbed?reportId=3d69e9db-3a98-4e02-b412-06ffbe22914e&autoAuth=true&ctid=5a3969f2-0e43-4a37-b30f-c240f74468df' frameborder='0' allowFullScreen></iframe>
            </div>
        </>
    );
};

export const ShantanuReport = () => {
    return (
        <div className='mt-5'>
            <h1 className='font-bold text-3xl mb-4'>Dashboard About Placement Ratio</h1>
            <iframe
                title="shantanu_dash"
                width="1140"
                height="541.25"
                src="https://app.powerbi.com/reportEmbed?reportId=c848f337-e9f3-4f76-b07c-f86f000b3818&autoAuth=true&ctid=5a3969f2-0e43-4a37-b30f-c240f74468df"
                 
                allowFullScreen="true">

            </iframe>
        </div>
    );
};

export const TilakReport = () => {
    return (
        <div className='mt-5'>
            <h1 className='font-bold text-3xl mb-4'>Comparison of Placement Scenario</h1>
            <iframe
                title="Tilak121"
                width="1140"
                height="541.25"
                src="https://app.powerbi.com/reportEmbed?reportId=73784680-a403-473d-a5da-458455dfc335&autoAuth=true&ctid=5a3969f2-0e43-4a37-b30f-c240f74468df"
                //  
                allowFullScreen="true">
            </iframe>
        </div>
    )
}

export const AyanReport = () => {
    return (
        <div className='mt-5'>
            <h1 className='font-bold text-3xl mb-4'>Comparison of Placement Scenario</h1>
            <iframe
            title="AYAN BI DB" 
            width="1140" 
            height="541.25" 
            src="https://app.powerbi.com/reportEmbed?reportId=d466d30c-6eb0-44a8-91ae-0b9f3252efbc&autoAuth=true&ctid=5a3969f2-0e43-4a37-b30f-c240f74468df" 
              
            allowFullScreen="true">
            </iframe>
        </div>
    )
}

export const ShivamKopareReport = () => {
    return (
        <div className='mt-5'>
            <h1 className='font-bold text-3xl mb-4'>Comparison of Placement Scenario</h1>
            <iframe title="Dashboards" width="1140" height="541.25" 
            src="https://app.powerbi.com/reportEmbed?reportId=522ded87-e4b6-4d56-a4c6-99fbf0354fa3&autoAuth=true&ctid=5a3969f2-0e43-4a37-b30f-c240f74468df"   allowFullScreen="true"></iframe>
        </div>
    )
}

export const ShivamHonadeReport = () => {
    return (
        <div className='mt-5'>
            <h1 className='font-bold text-3xl mb-4'>Comparison of Placement Scenario</h1>
            <iframe title="ShivamDBS" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=c9e97d8d-9ba7-4e5b-aa9b-14b8230a79c1&autoAuth=true&ctid=5a3969f2-0e43-4a37-b30f-c240f74468df"   allowFullScreen="true"></iframe>
        </div>
    )
}

export const ParikshitReport = () => {
    return (
        <div className='mt-5'>
            <h1 className='font-bold text-3xl mb-4'>Comparison of Placement Scenario</h1>
            <iframe title="Parikshit" width="1140" height="541.25" 
            src="https://app.powerbi.com/reportEmbed?reportId=cacd4c9a-d2a8-4131-b74e-70403bb5e1da&autoAuth=true&ctid=5a3969f2-0e43-4a37-b30f-c240f74468df"   allowFullScreen="true"></iframe>
            </div>
    )
}

export const PrathameshReport = () => {
    return (
        <div className='mt-5'>
            <h1 className='font-bold text-3xl mb-4'>Comparison of Placement Scenario</h1>
            <iframe title="Prathamesh_1" width="1140" height="541.25" 
            src="https://app.powerbi.com/reportEmbed?reportId=b9334411-5de1-407c-8e6f-3a9d7af24936&autoAuth=true&ctid=5a3969f2-0e43-4a37-b30f-c240f74468df"   allowFullScreen="true"></iframe>
            </div>
    )
}


