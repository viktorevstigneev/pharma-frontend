<p align="center">
  <a href="" rel="noopener">
 <P>GMS-frontend</P>
 </a>
</p>

<h3 align="center">Game Motivation System</h3>

---

<p align="center"> 
When employer has worked a lot, he can lose a motivation at work. This app can help to 
increase desire to work

    <br> 
</p>

##  Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

##  About <a name = "about"></a>
An application that helps in work due to the fact that it increases interest and motivation.
Firstly you need to login in app.
There are user profile page which includes tasks,honors for this person.
If person have the team, he can to move on team page, where there are info about team and team members.
In case when user is group leader, he can edit team, for example, he can change team logo, name, description.
Also can edit membership of this team.Group leader has opportunity to add tasks and honors to team member.
When user perform the task, his balance is replenished. User can buy some things for money on his balance.
.

##  Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.


### Installing
firstly you need to clone repository :
 - <code> git clone https://gitlab.instinctools.com/gms/gms-frontend.git </code>

Next install packages :
 - <code>npm install</code> or <code>yarn</code>
After it you can start project
 - <code>yarn start</code> or <code>npm start</code>


### And coding style tests

<code>yarn(npm run) lint</code> - test that check style of coding


const MyFunc =()=>{alert("hello")} - is not correct. Test show error

<code>yarn(npm run) fix</code> - test that style style of coding


<code>const MyFunc =()=>{alert("hello")}</code> - is not correct. Test make  : <code>const MyFunc = () => {alert("hello");}</code> 


##  Usage <a name="usage"></a>

Add notes about how to use the system.
Start app, add users,  create team and use app like this [About](#about)


##  Deployment <a name = "deployment"></a>

Project doesn work without backend. Also  you need to use this service [gms-service](https://gitlab.instinctools.com/gms/gms-service)

##  Built Using <a name = "built_using"></a>

- Redux - Predictable state container
- React - UI Framework
- Webpack - module bundler
- Axios - simple promise based HTTP client

## ✍️ Authors <a name = "authors"></a>
- [@yeustsihneyeu](https://gitlab.instinctools.com/yeustsihneyeu) - Initial work

##  Acknowledgements <a name = "acknowledgement"></a>

References :
- [Redux](https://redux.js.org/) 
- [React](https://reactjs.org/) 
- [Webpack](https://webpack.js.org/) 
- [Axios](https://axios-http.com)
