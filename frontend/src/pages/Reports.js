import React from 'react';

export const MaheshReport = () => {
    return (
        <>
            <div className='mt-5'>
                <h1 className='font-bold text-3xl mb-4'>Comparison of Placement Scenario</h1>
                <iframe
                    title="Power BI Report"
                    width="1100"
                    height="541.25"
                    src="https://app.powerbi.com/reportEmbed?reportId=3d69e9db-3a98-4e02-b412-06ffbe22914e&autoAuth=true&ctid=5a3969f2-0e43-4a37-b30f-c240f74468df"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
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
                frameborder="0"
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
                frameborder="0"
                allowFullScreen="true">
            </iframe>
        </div>
    )
}
