# IM2FinalProject

TEMPORARY README

<<<<<<< HEAD
Setup
Run this command to clone the repository into your desired directory
=======
server folder -> backend (express.js)

client folder -> frontend (tailwind css, react.js, vite)
>>>>>>> 8c7ef9065ee387cd02dfc94248ad6494a5a25725

# clones the repo into your local device
git clone <url>
# change to project directory
cd <project name>
# gets the newest version of the remote repo
git pull
# open the current directory in your preferred text editor
code .

Once that's done, you will have to install dependencies on both client and server folders.

# changes directory to client folder and does a clean install of dependencies according to package-lock.json
cd client 
npm ci

# changes directory to server folder and does a clean install of dependencies according to package-lock.json
cd server
npm ci

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
