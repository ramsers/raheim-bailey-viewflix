import React from 'react';
import video0 from '../MainVidContent/MainVidAssests/video-list-0.jpg';
import video1 from './NextVideoAssets/video-list-1.jpg';
import video2 from './NextVideoAssets/video-list-2.jpg';
import video3 from './NextVideoAssets/video-list-3.jpg';
import video4 from './NextVideoAssets/video-list-4.jpg';
import video5 from './NextVideoAssets/video-list-5.jpg';
import video6 from './NextVideoAssets/video-list-6.jpg';
import video7 from './NextVideoAssets/video-list-7.jpg';
import video8 from './NextVideoAssets/video-list-8.jpg';
import {v4 as uuidv4} from 'uuid';

const sideVideos = [
    {
        id: uuidv4(),
        title: 'BMX Rampage: 2018 Highlights',
        channel: 'Red Cow',
        image: video0,
    },
    {
        id: uuidv4(), 
        title: 'Become A Travel Pro In One Easy Lesson', 
        channel: 'Scotty Cranmer', 
        image: video1, 
    },
    {
        id: uuidv4(), 
        title: 'Les Houches The Hidden Gem Of The Chamonix', 
        channel: 'Bernard Patrick', 
        image: video2, 
    },
    {
        id: uuidv4(), 
        title: 'Travel Health Useful Medical Information', 
        channel: 'Scotty Cranmer', 
        image: video3, 
    },
    {
        id: uuidv4(), 
        title: 'Cheap Airline Tickets Great Ways To Save', 
        channel: 'Emily Harper', 
        image: video4, 
    },
    {
        id: uuidv4(), 
        title: 'Take A Romantic Break In A Boutique Hotel', 
        channel: 'Ethan Owen', 
        image: video5, 
    },
    {
        id: uuidv4(), 
        title: 'Choose The Perfect Accommodations', 
        channel: 'Lydia Perez', 
        image: video6, 
    },
    {
        id: uuidv4(), 
        title: 'Cruising Destination Ideas', 
        channel: 'Timothy Austin', 
        image: video7, 
    },
    {
        id: uuidv4(), 
        title: 'Train Travel On Track For Safety', 
        channel: 'Scotty Cranmer', 
        image: video8, 
    },
];

export default sideVideos;