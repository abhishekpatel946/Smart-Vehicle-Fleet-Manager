
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![Pull Request][issues-pr]][issues-pr]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager/">
    <img src="images/logo-readme.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Smart-Vehicle-Fleet-Manager</h3>

  <p align="center">
    An awesome Smart-Vehicle-Fleet-Manager to jumpstart your projects!
    <br />
    <a href="https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager">View Demo</a>
    ·
    <a href="https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager/issues">Report Bug</a>
    ·
    <a href="https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager/issues">Request Feature</a>
  </p>
</p>

## Table of Contents: 
* [About the Project](#about-the-project)
* [System Contents](#system-contents)
* [Installation](#installation)
* [How to Contribute](#contribution)
* [Directory Structure](#dir-str)
* [Project Contributers](#contributers)

<!-- ABOUT THE PROJECT -->
<a name="about-the-project"></a>
## About The Project 
<!--
[![Product Name Screen Shot][product-screenshot]](https://example.com)
-->
# Smart Vehicle Fleet Manager

### This project is based on real life problem face by departments like RVNL and ITD. 

We are planning to make a system to manage entire fleet of an organisation, the system can enable vehicle tracking via GPS, detect over speeding, fuel levels, accident detection,emergency response, facilitate anti-theft of vehicle and fuel,travel history [24x7] ,record this entire data, store on Cloud and present the data on a dashboard for easy understanding.

It also reduces dependence and management of manual log books which are required to be maintained and it has many flaws which are exploited, which leads to massive loss of government resources. 
Using this system Fuel Theft can be stopped too.
The system can also facilitate on-time vehicle maintenance.
It can  be installed on government/private bus,trucks,bikes,site-vehicles,etc.
The details can be monitored from a control room or a simple desktop via a dashboard.
So fetching information can be very easy and convenient.

<a name="system-contents"></a>
### What the system will consist of:
1. **Module** Installed on the Vehicle
2. A **Cloud Storage** Solution
3. A **Dashboard** to display the data in form of tables,charts and widgets.


**The vehicle will have following sensors installed:**
* GPS
* Accelerometer
* Fuel Level Sensor
* Speedometer
* An Emergency Button *to be used to alert in case of emergency*
* A relay that can remotely turn off vehicle in case of theft.
* All the data will be recorded and transmitted via the internet using a GSM module which will enable internet connectivity.

### **The dashboard:**

A dashboard will be used to show data fetched from the cloud. The data will be viewed vehicle wise and in the form of tables, charts and graphs.
*The dashboard can be viewed on smartphone but best viewed on desktop/laptop.*

**The dashboard will show data such as:**
* Location History
* Fuel Level
* Speed History
* Maintenance Alert
* Total distance travelled
* Accident Alert
* Overspeeding Instances
* Fuel Refill History



<!-- GETTING STARTED -->
## Getting Started 📃

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.
<a name="installation"></a>
### [Installation](https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager/wiki/Installation) 💡

1. Clone the repo
```sh
git clone https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager.git
```
2. Open the local copy with a good modern text editor like VS Code or Atom and start coding. 

<a name="contribution"></a>
<!-- CONTRIBUTING -->
### [Contribute](https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager/wiki/Contribution) 🐛

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. 


**Note:** We are open to any contributions small or large. 
Any contributions you make are **greatly appreciated**. Make sure first you read the [CONTRIBUTION.md](https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager/wiki/Contribution) if you want to contribute or issue a bug.


#### To contribute refer the steps below:
1. Fork the Project
2. Create your Feature Branch 
3. Commit your Changes (`git commit -m 'Add your comment here about your changes'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

```sh
If you need want to feature your name in our contributer's list, Please mention that too
```
#### You can also refer to this Directory Structure below:
<a name="dir-str"></a>
## **Basic Directory Structure:** 📁
```
├── public
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── index.html
├── src
│   ├── assets
|   |   ├── 1.jpg
|   |   ├── 2jpg.jpg
|   |   ├── admin-new.png
|   |   ├── logo-readme.png
|   |   └── Logo.png
│   ├── components
|   |   ├── dashboard
|   |   |   ├── Dashboard.css
|   |   |   └── Dashboard.js
|   |   ├── dashboard-common
|   |   |   ├── FooterLayout.js
|   |   |   └── HeaderLayout.js
|   |   ├── firebase
|   |   |   └── fireConfig.js
|   |   ├── Login
|   |   |   ├── home.css
|   |   |   └── home.jsx
|   |   └── Logs
|   |       ├── FuelLog.js
|   |       ├── FuelRefillLog.js
|   |       ├── Maintenence.js
|   |       ├── OverSpeedLog.js
|   |       └── SpeedLog.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
|   └── serviceWorker.js
├── .firebaserc
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
```

<!-- LICENSE -->
## License 📄

Distributed under the MIT License. See [`LICENSE`](https://choosealicense.com) for more information.



<!-- CONTACT -->
## Contact ✉️

Project Link: [https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager](https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager)

<a name="contributers"></a>
## Contributers: ✨
**Core:**
<table>
  <tr>
    <!-- abhishekpatel946 -->
    <td align="center"><a href="https://github.com/abhishekpatel946"><img src="https://avatars3.githubusercontent.com/u/46045014?s=460&u=bf62a7334b9af734839ac59901016653900bae52&v=4" width="100px;" alt=""/><br /><sub><b>Abhishek Patel</b></sub></a><br/> <a href="https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager/commits?author=abhishekpatel946" title="Code">💻</a> <a href="#design-abhishekpatel946" title="Design">🎨</a> <a href="#design-abhishekpatel946" title="Maintenance">🚧</a> <a href="https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager/pulls?q=is%3Apr+reviewed-by%3Aabhishekpatel946" title="Reviewed Pull Requests">👀</a> <a href="#question-abhishekpatel946" title="Answering Questions">💬</a> <a href="https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager/commits?author=abhishekpatel946" title="Documentation">📖</a> </td>
    <!-- ashutoshmourya -->
    <td align="center"><a href="https://github.com/AshutoshMourya"><img src="https://avatars2.githubusercontent.com/u/46039416?s=460&v=4" width="100px;" alt=""/><br /><sub><b>Ashutosh Mourya</b></sub></a><br /> <a href="#design-AshutoshMourya" title="Design">🎨</a> <a href="https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager/commits?author=AshutoshMourya" title="Documentation">📖</a><a href="#talk-AshutoshMourya" title="Talks">📢</a></td>
    <!-- muskankabir -->
    <td align="center"><a href="https://github.com/MuskanKabir
"><img src="https://avatars2.githubusercontent.com/u/51900911?s=460&v=4" width="100px;" alt=""/><br /><sub><b>MuskanKabir</b></sub></a><br /> <a href="#design-MuskanKabir" title="Design">🎨</a> <a href="https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager/commits?author=MuskanKabir" title="Documentation">📖</a> <a href="#talk-MuskanKabir" title="Talks">📢</a>
  </tr>
</table>


**Additional:**
1. ............


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements 
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Img Shields](https://shields.io)
* [Choose an Open Source License](https://choosealicense.com)
* [Font Awesome](https://fontawesome.com)




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/abhishekpatel946/Smart-Vehicle-Fleet-Manager.svg?style=flat
[contributors-url]: https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager//graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/abhishekpatel946/Smart-Vehicle-Fleet-Manager.svg?style=flat
[forks-url]: https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager//network/members
[stars-shield]: https://img.shields.io/github/stars/abhishekpatel946/Smart-Vehicle-Fleet-Manager.svg?style=flat
[stars-url]: https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager//stargazers
[issues-shield]: https://img.shields.io/github/issues/abhishekpatel946/Smart-Vehicle-Fleet-Manager.svg?style=flat
[issues-url]: https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager//issues
[license-shield]: https://img.shields.io/github/license/abhishekpatel946/Smart-Vehicle-Fleet-Manager.svg?style=flat
[license-url]: https://github.com/abhishekpatel946/Smart-Vehicle-Fleet-Manager//blob/master/LICENSE
[issues-pr]: https://img.shields.io/github/issues-pr/abhishekpatel946/Smart-Vehicle-Fleet-Manager.svg?style=flat
[product-screenshot]: images/screenshot.png
