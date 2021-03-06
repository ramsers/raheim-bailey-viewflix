import MainVidImg from '../../MainVidContent/MainVidAssests/video-list-0.jpg';
import Surfer from '../../MainVidContent/MainVidAssests/surfer-img.jpg';
import Skater from '../../MainVidContent/MainVidAssests/skateboarder-img.jpg';
import BMX from '../../MainVidContent/MainVidAssests/bmx-img.jpg';
import {v4 as uuidv4} from 'uuid';

let mainVidDesc = `On a gusty day in Southern Utah, a group of 25
daring mountain bikers blew the doors off what is
possible on two wheels, unleashing some of the
biggest moments the sport has ever seen. While
mother nature only allowed for one full run before
the conditions made it impossible to ride, that was
all that was needed for event veteran Kyle Strait,
who won the event for the second time -- eight years
after his first Red Cow Rampage title`;

let dateObj = new Date ();
let month = dateObj.getMonth() + 1;
let year = dateObj.getFullYear();
let date = dateObj.getDate();

const mainVideoData = {
    id: uuidv4(),
    title: 'BMX Rampage: 2018 Highlights',
    description: mainVidDesc,
    channel: 'By Red Cow',
    image: MainVidImg,
    views: '1,001,023',
    likes: '110,985',
    duration: '0:00/0:42',
    video: 'type of <string>',
    timestamp: '12/18/2018',
    comments: [
            {
            id: uuidv4(),
            name:"Micheal Lyons", 
            timestamp:"12/18/2018",
            comment: "They BLEW the ROOF off their last show, once everyone started figuring out they were going. This is still simply the greates opening of a concert I have EVER wistnessed",
            image: Surfer
           },
           {
            id: uuidv4(),   
            name:"Gary Wong",
            timestamp: "12/12/2018",
            comment: "Everytime I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
            image: Skater
           },
           {
            id: uuidv4(),   
            name: "Theodore Duncan ",
            timestamp: "11/15/2018",
            comment: "How can someone be so good!!! Yo can tell he lives for this and loves to do it everyday. Everytime I see him I feel instantly happy! He's definitely my favorite ever", 
            image: BMX
           }
    ]
};

export default mainVideoData;