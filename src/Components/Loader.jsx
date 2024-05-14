import React from 'react';

function Loader(props) {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex items-center justify-center h-screen'>
                    <div className='text-center'>
                        <span className='loading loading-ring loading-lg'>

                        </span>
                        <p> loading...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;