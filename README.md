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

# To Contribute

To contribute, #Fork this repository in your Github which can be seen on the top right. 

![image of github watch, star, fork](https://user-images.githubusercontent.com/111989096/273213128-089875d8-74bc-4919-809c-b4ff11e82c79.png)

Go to your Forked Repository, click on Code, and copy the URL as shown.

![image of github](https://user-images.githubusercontent.com/111989096/273165397-09e93194-be12-423d-845b-64540ac63a0e.png)

In your terminal, navigate to the Directory you want it to be saved, and with the saved URL do the following:

    git clone <the_url_you_copied>

    git clone https://github.com/FennecOmega/IM2FinalProject.git    # Example
    cd IM2FinalProject                                                     # Make that file the current directory


You can then make changes within that file whenever you want, but make sure to git pull everytime you start coding to fetch the most recent changes. Once you are done adding new features, you want the changes to appear in your Forked Repository.

    git add .                                # Prepares all files to be pushed (NOTE: You can prepare specific files through file path syntax)
    git commit -m "Your commit message"      # A commit message example would be "fix: handle zero division"
    git push origin master                   # Makes the changes to your Forked Repository

Once that is finished, go to your Forked Repository and click on Compare and Pull Request to make a pull request on the actual Repository. Wait for the owner of the Repository to approve or suggest you to make more changes.

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


