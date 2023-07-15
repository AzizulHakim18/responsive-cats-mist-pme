import React from 'react';
import HomeCarrosel from './HomeCarrosel';
import HomeAbout from './HomeAbout';
import HomeState from './HomeState';
import HomePhotoGallery from './HomePhotoGallery';

const Home = () => {
    return (
        <div>
            <HomeCarrosel></HomeCarrosel>
            <div className='w-3/4 mx-auto'>
                <HomeAbout></HomeAbout>
                <HomeState></HomeState>
                <HomePhotoGallery></HomePhotoGallery>
            </div>
        </div>
    );
};

export default Home;