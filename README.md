# IM2FinalProject
TEMPORARY README

# Tech Stack (INCOMPLETE)
Frontend: HTML5, CSS3, JavaScript, React, React Router, Vite
 
Backend: Express 

# Setup
Run this command to clone the repository into your desired directory

    # clones the repo into your local device
    git clone <url>
    # change to project directory
    cd <project name>
    # gets the newest version of the remote repo
    git pull
    # open the current directory in your preferred text editor
    code .

Once that's done, you will have to install dependencies on both client and server folders.

For client folder:

    # changes directory to client folder and does a clean install of dependencies according to package-lock.json
    cd client 
    npm ci

For server folder:

    # changes directory to server folder and does a clean install of dependencies according to package-lock.json
    cd server
    npm ci

# Running the project

To run the frontend webpage(s), simply change your directory to the client folder and run dev.

    # changes directory to client
    cd client
    # starts and runs the frontend
    npm run dev

To run the backend, change your directory to the server folder and run index.js using node

    # changes directory to server
    cd server
    # starts and runs the backend
    node <application name>.js

# Project Organization

If theres any concern about the project organization, feel free to PM me through FB Messenger or through Google Chats.

## FRONTEND

    > client
        > src
            > Components
                # list of components
            > data
                # list of data
            > Pages
                > ClientPages
                    # list of pages seen by the clients and staff
                > StaffPages
                    # list of pages seen by ONLY the staff

        # our application
        App.jsx
        # our css stylesheet 
        index.css
        # config files
        package.json
        postcss.config.js
        tailwind.config.js
        vite.config.js

## BACKEND

    > server
        index.js


