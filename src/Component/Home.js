import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const Home = () => {
    return (
        <div>
            <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/packages/lf20_9V2NFMRbO8.json"
                style={{ height: '300px', width: '300px' }}
            >
            </Player>
            <h1 className='text-center font-bold text-5xl'>Welcome to task Manager</h1>
        </div>
    );
};

export default Home;