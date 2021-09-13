import React from "react"
import aimpic from "../assets/aim3.jpg"
import aimpic2 from "../assets/aim1.jpg"
import aimpic3 from "../assets/aim4.jpg"
import flyhostpic from "../assets/flyhost1.jpg"
import flyhost2 from "../assets/flyhost22.jpg"
import flyhost3 from "../assets/flyhost4.jpg"
import flyhost4 from "../assets/flyhost5.jpg"
import moviedb from "../assets/movieapp1.jpg"
import moviedb2 from "../assets/movieapp2.jpg"
import moviedb3 from "../assets/movieapp3.jpg"
import board1 from "../assets/board1.jpg"
import board2 from "../assets/board2.jpg"
import board3 from "../assets/board3.jpg"
import board4 from "../assets/board4.jpg"
import neetchatpic from "../assets/neet3.jpg"
import neetchatpic2 from "../assets/neetchat1.jpg"
import neetchatpic3 from "../assets/neetchat2.jpg"
import fashion1 from "../assets/fashion2.jpg"
import fashion2 from "../assets/fashion3.jpg"
import fashionpic from "../assets/fashion1.jpg"
import youtubepic from "../assets/youtubepic2.jpg"
import youtube2 from "../assets/youtubepic1.jpg"
import youtube3 from "../assets/youtubepic3.jpg"
import fly1 from "../assets/fly1.jpg"
import fly2 from "../assets/fly2.jpg"
import fly3 from "../assets/fly3.jpg"
import fly4 from "../assets/fly4.jpg"
import spring1 from "../assets/springboard1.jpg"
import spring2 from "../assets/springboard2.jpg"
import spring3 from "../assets/springboard3.jpg"
import con1 from "../assets/con1.jpg"
import con2 from "../assets/con2.jpg"
import con3 from "../assets/con3.jpg"
import apex1 from "../assets/newheader.png"
import pool1 from "../assets/pool1.png"
import pool3 from "../assets/pool3.jpg"
import pool2 from "../assets/mock2.jpg"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()


const initialState = {
    projects:

        [
            {
                id: 0,
                name: "Apex Training(PWA)",
                description: "Train and schedule clients the easiest way possible with Apex Training Facilities personal training software and progressive web application.",
                summary: "I was approached by my good friends over at Apex Performance Facility a gym franchise here in Arizona to help design and build their new training software that would help them easily keep track of client appointments, progress, and performance. To Start, I designed the landing page with multiple components using TailwindCSS and HTML 5. Next I dove in to the fundamentals of the application experimenting with NextJS's server side rendering and image components for the best possible client performance I could achieve. I personally think NodeJS and MySQL are the most scalable easy to set up server and database enviroments out there so I decided to choose them for the back end enviroment along with TypeScript for type safety on the server. Overall this project was a huge success and one of the most fun pieces of work I've ever had the chance of working on! ",
                thumbnail: apex1,
                stack: ["React", "Typescript", "NodeJS", "MySql"],
                stackList: ["NextJs", "Typescript", "TailwindCSS", "NodeJS", "Express", "Azure", "MySql", "Heroku", "Netlify"],
                slides: [apex1, apex1, apex1],
                frontEnd: "Create React App is my go to for creating scalable web applications and websites. I chose to stick with Reacts own Context API for fluent and clean state management and reuseable code. ",
                backEnd: "NodeJS with Express is what I chose for this application and like many other of my applications because of how simple and easy it is to spin up a server and create routes for your front-end to communicate with and makes it extremely easy to work with the AWS-SDK package.",
                database: "I chose PostgreSQL to configure and store Springboards data while being hosted through a Azure PostgreSQL instance.",
                video: "https://www.youtube.com/watch?v=hhREaLWhNbA",
                sourcecode: "https://github.com/hunterfoulk/springboard-client",
                demolink: "https://springboards.netlify.app/"
            },
            {
                id: 1,
                name: "KP Construction",
                description: "Small business client’s contractor portfolio showcasing services offered, area of expertise and highlighting past endeavors.",
                summary: "Referred by a friend and previous client, a small contracting business owner reached out to me to build his website. He previously used HomeAdvisor for marketing but wanted more customizability of the content displayed to promote his business. He specified three must-have features: an eye-catching landing page, list of services and a gallery to showcase previous work. He allowed me free-range creativity with the rest. The content from his previous marketing page was used to populate the website I built for him. ",
                summary2: "Once I implemented features he requested, I started getting creative with the layout and user experience.Some features I added include a testimonial section showcasing positive reviews and an inquiry email server to allow clients the ability to reach out directly from within the site.I continue to honor any requests for alterations and additions to the website.His appreciation and excitement about the finished product motivated my drive to continue doing freelance work",
                thumbnail: con1,
                stack: ["React", "Typescript", "NodeJS", "PostgreSQL"],
                stackList: ["React", "Typescript", "Context API", "SCSS", "NodeJS", "Express", "NodeMailer", "Netlify"],
                slides: [con1, con2, con3],
                frontEnd: "Create React App is my go to for creating scalable web applications and websites. I chose to stick with Reacts own Context API for fluent and clean state management and reuseable code. ",
                backEnd: "NodeJS with Express is what I chose for this application and like many other of my applications because of how simple and easy it is to spin up a server and create routes for your front-end to communicate with and makes it extremely easy to work with the AWS-SDK package.",
                database: "I chose PostgreSQL to configure and store Springboards data while being hosted through a Azure PostgreSQL instance.",
                video: "https://www.youtube.com/watch?v=hhREaLWhNbA",
                sourcecode: "https://github.com/hunterfoulk/springboard-client",
                demolink: "https://springboards.netlify.app/"
            },
            {
                id: 2,
                name: "Piranha Pool Service",
                description: "Local pool cleaning service and supply company's portfolio showcase and booking services.",
                summary: "A locally owned pool cleaning supply and service company needed a simple website and booking service for their company. So I reached out and offered my expertise and the best possible long term options to go with so the owner of the product and company can continue to expand.In the they were thrilled with their new online presence!. ",
                thumbnail: pool1,
                stack: ["React", "Typescript", "NodeJS", "MySQL"],
                stackList: ["HTML", "JavaScript", "CSS", "NodeJS", "Express", "MySql"],
                slides: [pool1, pool2, pool3],
                frontEnd: "Create React App is my go to for creating scalable web applications and websites. I chose to stick with Reacts own Context API for fluent and clean state management and reuseable code. ",
                backEnd: "NodeJS with Express is what I chose for this application and like many other of my applications because of how simple and easy it is to spin up a server and create routes for your front-end to communicate with and makes it extremely easy to work with the AWS-SDK package.",
                database: "I chose PostgreSQL to configure and store Springboards data while being hosted through a Azure PostgreSQL instance.",
                video: "https://www.youtube.com/watch?v=hhREaLWhNbA",
                sourcecode: "https://github.com/hunterfoulk/springboard-client",
                demolink: "https://springboards.netlify.app/"
            },
            {
                id: 3,
                name: "SpringBoards",
                description: "Springboards is a collection of anonymous discussion and conversation boards with a wide range of varying topics and insightful information from around the world.",
                summary: "Springboards is a collection of anonymous discussion and conversation boards with a wide range of varying topics and insightful information from around the world. Springboards is created with Create React App by facebook, NodeJS, PostgreSQL, and Azure Cloud Platform.",
                thumbnail: con1,
                stack: ["React", "Typescript", "NodeJS", "PostgreSQL"],
                stackList: ["React", "Typescript", "Context API", "SCSS", "NodeJS", "Express", "Azure", "PostgreSQL", "Heroku", "Netlify"],
                slides: [spring1, spring2, spring3],
                frontEnd: "Create React App is my go to for creating scalable web applications and websites. I chose to stick with Reacts own Context API for fluent and clean state management and reuseable code. ",
                backEnd: "NodeJS with Express is what I chose for this application and like many other of my applications because of how simple and easy it is to spin up a server and create routes for your front-end to communicate with and makes it extremely easy to work with the AWS-SDK package.",
                database: "I chose PostgreSQL to configure and store Springboards data while being hosted through a Azure PostgreSQL instance.",
                video: "https://www.youtube.com/watch?v=hhREaLWhNbA",
                sourcecode: "https://github.com/hunterfoulk/springboard-client",
                demolink: "https://springboards.netlify.app/"
            },
            {
                id: 5,
                name: "FlyChat",
                description: "Real time video watching and live chat application for users to create and join a room to watch youtube videos together in sync and chat in real time.",
                summary: "FlyChat is a website created with Create React App, NodeJS, and SocketIO for users to create and join rooms to watch videos together and chat in real time together. ",
                thumbnail: fly1,
                stack: ["React", "Javascript", "NodeJS", "SocketIO"],
                stackList: ["React", "JavaScript", "Context API", "SCSS", "NodeJS", "Express", "SocketIO", "Heroku"],
                slides: [fly1, fly2, fly3, fly4],
                frontEnd: "I chose Create React App for the front-end of this project because I feel CRA is the easiest to setup big applications and has the highest scalability in front-end web development. I chose to implement Context API for scalable state management for the app I enjoy the very personal preference and freedom of design pattern and flow that context allows you to have when managing state across your whole app. I also chose SCSS for my styling library for cleaner styling files with its nesting and css function functionality.",
                backEnd: "I chose to use NodeJS for this application for the use of the socketIO library for the functionality of real time chatting using websockets.",
                database: "No database was used for this application.",
                video: "https://www.youtube.com/watch?v=dI_V61cIm7o",
                sourcecode: "https://github.com/hunterfoulk/flychat",
                demolink: "https://flychat.netlify.app/"
            },
            {
                id: 4,
                name: "Flyhost",
                description: "File sharing and hosting platform to easily access and download desired files and folders uploaded to the web.",
                summary: "FlyHost allows users to upload any type of file or folder of their choosing to quickly upload them to the cloud for other users to search and download them right from their computer using AWS S3 Bucket and AWS RDS.",
                thumbnail: flyhostpic,
                stack: ["React", "Typescript", "NodeJS", "MySQL"],
                stackList: ["React", "Typescript", "Context API", "SCSS", "NodeJS", "Express", "AWS RDS", "AWS S3 Bucket", "MySQL"],
                slides: [flyhost2, flyhostpic, flyhost3, flyhost4],
                frontEnd: "I chose Create React App for the front-end of this project because I feel CRA is the easiest to setup big applications and has the highest scalability in front-end web development. I chose to implement Context API for scalable state management for the app I enjoy the very personal preference and freedom of design pattern and flow that context allows you to have when managing state across your whole app. I also chose SCSS for my styling library for cleaner styling files with its nesting and css function functionality.",
                backEnd: "NodeJS with Express is what I chose for this application and like many other of my applications because of how simple and easy it is to spin up a server and create routes for your front-end to communicate with and makes it extremely easy to work with the AWS-SDK package.",
                database: "I chose MySQL for this application for the need of a more complex database design and structure with MySQL Workbench to hold and store user data while strongly keeping database normalization with the need for my database to be in third normal form.",
                video: "https://www.youtube.com/watch?v=-PWKD_FZB6c",
                sourcecode: "https://github.com/hunterfoulk/Flyhost",
                demolink: ""

            },
            {
                id: 5,
                name: "Companyboard",
                description: "Desktop application for companies to create a company board for employee's to log in and join boards to collab and track progress and productivity.",
                summary: "CompanyBoard is a desktop application built with Create React App and Electron. I chose to wrap the application in Electron and migrate to a more dekstop application because i felt it was more fitting for the style of the app and for a cleaner and better user experience. I decided on using AWS S3 bucket to store all the user profile pictures and board pictures for easy storage and fetching. ",
                thumbnail: board3,
                stack: ["React", "Javascript", "NodeJS", "MySQL"],
                stackList: ["React", "Javascript", "Context API", "SCSS", "NodeJS", "Express", "AWS RDS", "AWS S3 Bucket", "MySQL"],
                slides: [board1, board2, board3, board4],
                frontEnd: "I also chose Create React App for the front-end of this project because I feel CRA is the easiest to setup big applications and has the highest scalability in front-end web development. I chose to implement Context API for scalable state management for the app I enjoy the very personal preference and freedom of design pattern and flow that context allows you to have when managing state across your whole app. I also chose SCSS for my styling library for cleaner styling files with its nesting and css function functionality.",
                backEnd: "NodeJS with Express is what I chose for this application and like many other of my applications because of how simple and easy it is to spin up a server and create routes for your front-end to communicate with. I also made good use of the AWS-SDK package for quick image uploads to the cloud for users to store their profile pictures and board pictures.",
                database: "I chose MySQL for this application for the need of a more complex database design and structure with MySQL Workbench to hold and store user data while strongly keeping database normalization with the need for my database to be in third normal form.",
                video: "https://www.youtube.com/watch?v=5kEnnTNx4Ww",
                sourcecode: "https://github.com/hunterfoulk/CompanyBoard",
                demolink: ""


            },
            {
                id: 6,
                name: "NeetChat",
                description: "Chat room application for users to create a room to chat and hangout in real time!",
                summary: "NeetChat is a real time chat room application built using web sockets that allows users to caht and recieve messages in real time using the SocketIo client and server package.",
                thumbnail: neetchatpic,
                stack: ["React", "Javascript", "NodeJS", "SocketIO"],
                stackList: ["React", "SCSS", "NodeJS", "Express", "SocketIO", "Web Sockets"],
                slides: [neetchatpic2, neetchatpic3, neetchatpic],
                frontEnd: "This applications Front-end was written in React for a simple and easy get up and going client side to build a responsive web chat for users to hangout in. I also used SocketIO's client package to communicate with the server via web sockets.",
                backEnd: "I used NodeJS with Express with SocketIO an HTTP web socket package for instant chat and response capabilities for the client to interact with.",
                database: "No Database or storage was used for this application.",
                video: "https://www.youtube.com/watch?v=D9tu8Imj0NM",
                sourcecode: "https://github.com/hunterfoulk/Neet-Chat",
                demolink: ""

            },
            {
                id: 7,
                name: "HuntUpload",
                description: "Youtube experimental clone that allows users to sign up and log in to post videos and watch videos on the web quickly and easily and subscribe to their friends!",
                summary: "File sharing and hosting platform to easily access and download desired files and folders uploaded to the web.",
                thumbnail: youtubepic,
                stack: ["React", "Typescript", "NodeJS", "PostgreSQL"],
                stackList: ["React", "SCSS", "NodeJS", "Express", "SocketIO", "Web Sockets"],
                slides: [youtube2, youtubepic, youtube3],
                frontEnd: "This applications Front-end was written in React for a simple and easy get up and going client side to build a responsive web chat for users to hangout in. I also used SocketIO's client package to communicate with the server via web sockets.",
                backEnd: "I used NodeJS with Express with SocketIO an HTTP web socket package for instant chat and response capabilities for the client to interact with.",
                database: "No Database or storage was used for this application.",
                video: "https://www.youtube.com/watch?v=hMmqQdF_1Pk",
                sourcecode: "https://github.com/hunterfoulk/HuntUpload",
                demolink: ""

            },

            {
                id: 8,
                name: "Godspeed-fashion",
                description: "Fashion brand e-commerce website template created with my personal favorite style of clothing brand design",
                summary: "Godspeed E-commerce fashion website template written in Create React App. This template application also includes functiality such as searching for clothes by name or colothing color, seperate filters for womens and mens clothes and you are also given the option to filter by which clothing items you are looking to purchase along with a fully functional cart feature.",
                thumbnail: fashionpic,
                stack: ["React", "Javascript", "NodeJS", "MongoDB"],
                stackList: ["React", "SCSS", "NodeJS", "Express", "Mongoose", "MongoDB"],
                slides: [fashionpic, fashion1, fashion2],
                frontEnd: "Godspeed-Fashions front end is written with Create React App with Context API for the updateable cart feature for users to add clothing items to their cart before checking out.",
                backEnd: "I used NodeJS with Express for my backend of choice for this application for easy route managaemet and scheme management for my server to pull data from my MongoDB database.",
                database: "I used MongoDB for this app because i found it of more use for simply fetching data for my front-end to display than using a relational database like SQL",
                video: "https://www.youtube.com/watch?v=oNUo43lIc64",
                sourcecode: "https://github.com/hunterfoulk/Flyhost",
                demolink: ""

            },

            {
                id: 9,
                name: "Aim-Training",
                description: "First person shooter reflex and aim trainer for FPS players to warm up and improve their skills and potentially beat their highscores on the leaderboards!",
                summary: "Aim-Training allows users to quickly hop in and warm up and train their FPS reflexes and reaction times before preparing for a match.",
                thumbnail: aimpic,
                stack: ["React", "Javascript", "NodeJS", "MongoDB"],
                stackList: ["React", "CSS", "NodeJS", "Express", "Mongoose", "MongoDB"],
                slides: [aimpic2, aimpic, aimpic3],
                frontEnd: "I chose to also write Aim-Training in Create React App to make use of the very easy real time state management functionality needed for a fluent hit and miss counter with the setInterval generated targerts. ",
                backEnd: "I also chose NodeJS and Express for this Aim-Training for the post to and update leaderboard functionality.",
                database: "All of Aim-Trainings leaderboards scores are stored in a MongoDB database for easy fetching and storing of unrelational data",
                video: "https://www.youtube.com/watch?v=hnAgJokz4RE",
                sourcecode: "https://github.com/hunterfoulk/Aim-Training",
                demolink: ""

            },

            {
                id: 10,
                name: "MovieDB",
                description: "Movie look up and review web application using the IMDB API to view movie reviews,ratings, and summarys.",
                summary: "MovieDB is a quick and simple but great looking IMDB moving browsing app that I created with Create React App and Ant Design. The core features of the app are movie browsing and search functionality and you can checkout the movie reviews and ratings.",
                thumbnail: moviedb,
                stack: ["React", "Javascript", "CSS", "IMDB API"],
                stackList: ["React", "CSS", "Ant Design", "IMDB API"],
                slides: [moviedb3, moviedb2, moviedb],
                frontEnd: "I built MovieDB with Create React App and the help of Ant Design a styled component libray for a great looking UI experience.",
                backEnd: "I did not need the use of a server for this application",
                database: "I fetched all of the movie data from the IMDB Api that they host free to use online with a big selection of movies to browse and make use of.",
                video: "https://www.youtube.com/watch?v=0UxfSG-9Si0",
                sourcecode: "https://github.com/hunterfoulk/MovieDB",
                demolink: ""

            },
        ],


    bottomProjects: [{
        id: 3,
        name: "Construction",
        description: "Springboards is a collection of anonymous discussion and conversation boards with a wide range of varying topics and insightful information from around the world.",
        summary: "Springboards is a collection of anonymous discussion and conversation boards with a wide range of varying topics and insightful information from around the world. Springboards is created with Create React App by facebook, NodeJS, PostgreSQL, and Azure Cloud Platform.",
        thumbnail: con1,
        stack: ["React", "Typescript", "NodeJS", "PostgreSQL"],
        stackList: ["React", "Typescript", "Context API", "SCSS", "NodeJS", "Express", "Azure", "PostgreSQL", "Heroku", "Netlify"],
        slides: [con1, con1, con1],
        frontEnd: "Create React App is my go to for creating scalable web applications and websites. I chose to stick with Reacts own Context API for fluent and clean state management and reuseable code. ",
        backEnd: "NodeJS with Express is what I chose for this application and like many other of my applications because of how simple and easy it is to spin up a server and create routes for your front-end to communicate with and makes it extremely easy to work with the AWS-SDK package.",
        database: "I chose PostgreSQL to configure and store Springboards data while being hosted through a Azure PostgreSQL instance.",
        video: "https://www.youtube.com/watch?v=hhREaLWhNbA",
        sourcecode: "https://github.com/hunterfoulk/springboard-client",
        demolink: "https://springboards.netlify.app/"
    },
    {
        id: 5,
        name: "FlyChat",
        description: "Real time video watching and live chat application for users to create and join a room to watch youtube videos together in sync and chat in real time.",
        summary: "FlyChat is a website created with Create React App, NodeJS, and SocketIO for users to create and join rooms to watch videos together and chat in real time together. ",
        thumbnail: fly1,
        stack: ["React", "Javascript", "NodeJS", "SocketIO"],
        stackList: ["React", "JavaScript", "Context API", "SCSS", "NodeJS", "Express", "SocketIO", "Heroku"],
        slides: [fly1, fly2, fly3, fly4],
        frontEnd: "I chose Create React App for the front-end of this project because I feel CRA is the easiest to setup big applications and has the highest scalability in front-end web development. I chose to implement Context API for scalable state management for the app I enjoy the very personal preference and freedom of design pattern and flow that context allows you to have when managing state across your whole app. I also chose SCSS for my styling library for cleaner styling files with its nesting and css function functionality.",
        backEnd: "I chose to use NodeJS for this application for the use of the socketIO library for the functionality of real time chatting using websockets.",
        database: "No database was used for this application.",
        video: "https://www.youtube.com/watch?v=dI_V61cIm7o",
        sourcecode: "https://github.com/hunterfoulk/flychat",
        demolink: "https://flychat.netlify.app/"
    },
    {
        id: 4,
        name: "Flyhost",
        description: "File sharing and hosting platform to easily access and download desired files and folders uploaded to the web.",
        summary: "FlyHost allows users to upload any type of file or folder of their choosing to quickly upload them to the cloud for other users to search and download them right from their computer using AWS S3 Bucket and AWS RDS.",
        thumbnail: flyhostpic,
        stack: ["React", "Typescript", "NodeJS", "MySQL"],
        stackList: ["React", "Typescript", "Context API", "SCSS", "NodeJS", "Express", "AWS RDS", "AWS S3 Bucket", "MySQL"],
        slides: [flyhost2, flyhostpic, flyhost3, flyhost4],
        frontEnd: "I chose Create React App for the front-end of this project because I feel CRA is the easiest to setup big applications and has the highest scalability in front-end web development. I chose to implement Context API for scalable state management for the app I enjoy the very personal preference and freedom of design pattern and flow that context allows you to have when managing state across your whole app. I also chose SCSS for my styling library for cleaner styling files with its nesting and css function functionality.",
        backEnd: "NodeJS with Express is what I chose for this application and like many other of my applications because of how simple and easy it is to spin up a server and create routes for your front-end to communicate with and makes it extremely easy to work with the AWS-SDK package.",
        database: "I chose MySQL for this application for the need of a more complex database design and structure with MySQL Workbench to hold and store user data while strongly keeping database normalization with the need for my database to be in third normal form.",
        video: "https://www.youtube.com/watch?v=-PWKD_FZB6c",
        sourcecode: "https://github.com/hunterfoulk/Flyhost",
        demolink: ""

    },
    {
        id: 5,
        name: "Companyboard",
        description: "Desktop application for companies to create a company board for employee's to log in and join boards to collab and track progress and productivity.",
        summary: "CompanyBoard is a desktop application built with Create React App and Electron. I chose to wrap the application in Electron and migrate to a more dekstop application because i felt it was more fitting for the style of the app and for a cleaner and better user experience. I decided on using AWS S3 bucket to store all the user profile pictures and board pictures for easy storage and fetching. ",
        thumbnail: board3,
        stack: ["React", "Javascript", "NodeJS", "MySQL"],
        stackList: ["React", "Javascript", "Context API", "SCSS", "NodeJS", "Express", "AWS RDS", "AWS S3 Bucket", "MySQL"],
        slides: [board1, board2, board3, board4],
        frontEnd: "I also chose Create React App for the front-end of this project because I feel CRA is the easiest to setup big applications and has the highest scalability in front-end web development. I chose to implement Context API for scalable state management for the app I enjoy the very personal preference and freedom of design pattern and flow that context allows you to have when managing state across your whole app. I also chose SCSS for my styling library for cleaner styling files with its nesting and css function functionality.",
        backEnd: "NodeJS with Express is what I chose for this application and like many other of my applications because of how simple and easy it is to spin up a server and create routes for your front-end to communicate with. I also made good use of the AWS-SDK package for quick image uploads to the cloud for users to store their profile pictures and board pictures.",
        database: "I chose MySQL for this application for the need of a more complex database design and structure with MySQL Workbench to hold and store user data while strongly keeping database normalization with the need for my database to be in third normal form.",
        video: "https://www.youtube.com/watch?v=5kEnnTNx4Ww",
        sourcecode: "https://github.com/hunterfoulk/CompanyBoard",
        demolink: ""


    },
    {
        id: 6,
        name: "NeetChat",
        description: "Chat room application for users to create a room to chat and hangout in real time!",
        summary: "NeetChat is a real time chat room application built using web sockets that allows users to caht and recieve messages in real time using the SocketIo client and server package.",
        thumbnail: neetchatpic,
        stack: ["React", "Javascript", "NodeJS", "SocketIO"],
        stackList: ["React", "SCSS", "NodeJS", "Express", "SocketIO", "Web Sockets"],
        slides: [neetchatpic2, neetchatpic3, neetchatpic],
        frontEnd: "This applications Front-end was written in React for a simple and easy get up and going client side to build a responsive web chat for users to hangout in. I also used SocketIO's client package to communicate with the server via web sockets.",
        backEnd: "I used NodeJS with Express with SocketIO an HTTP web socket package for instant chat and response capabilities for the client to interact with.",
        database: "No Database or storage was used for this application.",
        video: "https://www.youtube.com/watch?v=D9tu8Imj0NM",
        sourcecode: "https://github.com/hunterfoulk/Neet-Chat",
        demolink: ""

    },
    {
        id: 7,
        name: "HuntUpload",
        description: "Youtube experimental clone that allows users to sign up and log in to post videos and watch videos on the web quickly and easily and subscribe to their friends!",
        summary: "File sharing and hosting platform to easily access and download desired files and folders uploaded to the web.",
        thumbnail: youtubepic,
        stack: ["React", "Typescript", "NodeJS", "PostgreSQL"],
        stackList: ["React", "SCSS", "NodeJS", "Express", "SocketIO", "Web Sockets"],
        slides: [youtube2, youtubepic, youtube3],
        frontEnd: "This applications Front-end was written in React for a simple and easy get up and going client side to build a responsive web chat for users to hangout in. I also used SocketIO's client package to communicate with the server via web sockets.",
        backEnd: "I used NodeJS with Express with SocketIO an HTTP web socket package for instant chat and response capabilities for the client to interact with.",
        database: "No Database or storage was used for this application.",
        video: "https://www.youtube.com/watch?v=hMmqQdF_1Pk",
        sourcecode: "https://github.com/hunterfoulk/HuntUpload",
        demolink: ""

    },

    {
        id: 8,
        name: "Godspeed-fashion",
        description: "Fashion brand e-commerce website template created with my personal favorite style of clothing brand design",
        summary: "Godspeed E-commerce fashion website template written in Create React App. This template application also includes functiality such as searching for clothes by name or colothing color, seperate filters for womens and mens clothes and you are also given the option to filter by which clothing items you are looking to purchase along with a fully functional cart feature.",
        thumbnail: fashionpic,
        stack: ["React", "Javascript", "NodeJS", "MongoDB"],
        stackList: ["React", "SCSS", "NodeJS", "Express", "Mongoose", "MongoDB"],
        slides: [fashionpic, fashion1, fashion2],
        frontEnd: "Godspeed-Fashions front end is written with Create React App with Context API for the updateable cart feature for users to add clothing items to their cart before checking out.",
        backEnd: "I used NodeJS with Express for my backend of choice for this application for easy route managaemet and scheme management for my server to pull data from my MongoDB database.",
        database: "I used MongoDB for this app because i found it of more use for simply fetching data for my front-end to display than using a relational database like SQL",
        video: "https://www.youtube.com/watch?v=oNUo43lIc64",
        sourcecode: "https://github.com/hunterfoulk/Flyhost",
        demolink: ""

    },

    {
        id: 9,
        name: "Aim-Training",
        description: "First person shooter reflex and aim trainer for FPS players to warm up and improve their skills and potentially beat their highscores on the leaderboards!",
        summary: "Aim-Training allows users to quickly hop in and warm up and train their FPS reflexes and reaction times before preparing for a match.",
        thumbnail: aimpic,
        stack: ["React", "Javascript", "NodeJS", "MongoDB"],
        stackList: ["React", "CSS", "NodeJS", "Express", "Mongoose", "MongoDB"],
        slides: [aimpic2, aimpic, aimpic3],
        frontEnd: "I chose to also write Aim-Training in Create React App to make use of the very easy real time state management functionality needed for a fluent hit and miss counter with the setInterval generated targerts. ",
        backEnd: "I also chose NodeJS and Express for this Aim-Training for the post to and update leaderboard functionality.",
        database: "All of Aim-Trainings leaderboards scores are stored in a MongoDB database for easy fetching and storing of unrelational data",
        video: "https://www.youtube.com/watch?v=hnAgJokz4RE",
        sourcecode: "https://github.com/hunterfoulk/Aim-Training",
        demolink: ""

    },

    {
        id: 10,
        name: "MovieDB",
        description: "Movie look up and review web application using the IMDB API to view movie reviews,ratings, and summarys.",
        summary: "MovieDB is a quick and simple but great looking IMDB moving browsing app that I created with Create React App and Ant Design. The core features of the app are movie browsing and search functionality and you can checkout the movie reviews and ratings.",
        thumbnail: moviedb,
        stack: ["React", "Javascript", "CSS", "IMDB API"],
        stackList: ["React", "CSS", "Ant Design", "IMDB API"],
        slides: [moviedb3, moviedb2, moviedb],
        frontEnd: "I built MovieDB with Create React App and the help of Ant Design a styled component libray for a great looking UI experience.",
        backEnd: "I did not need the use of a server for this application",
        database: "I fetched all of the movie data from the IMDB Api that they host free to use online with a big selection of movies to browse and make use of.",
        video: "https://www.youtube.com/watch?v=0UxfSG-9Si0",
        sourcecode: "https://github.com/hunterfoulk/MovieDB",
        demolink: ""

    },],


    frontend: ["React", "Redux", "Context API", "TypeScript", "NextJS", "Gatsby", "JavaScript", "HTML", "CSS", "SASS", "Material UI", "Bootstrap"],

    backend: ["NodeJS", "Express", "JavaScript", "Serverless", "MVC", "SocketIO", "Knex", "Seqeuelize"],

    database: ["SQL", "MySQL", "PostgreSQL", "MongoDB", "Data Structures", "Netlify", "AWS SDK", "AWS S3", "AWS RDS"],





}


function reducer(state, action) {
    switch (action.type) {
        case "ROUTE_PROJECT": {
            return {
                ...state,
                projects: state.projects,
            }
        }
        default:
            throw new Error("Bad Action Type")
    }
}

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
}

export default GlobalContextProvider