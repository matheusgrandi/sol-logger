<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
 
  <h3 align="center">SOL LOGGER</h3>

  <p align="center">
    An app to centralize and visualize inverter's data from many different manufactures.
    <br />
    <br />
    <a href="https://github.com/matheusgrandi/sol-logger/issues">Report Bug</a>
    ·
    <a href="https://github.com/matheusgrandi/sol-logger/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>        
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>    
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>    
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![product-screenshot]

This project have the goal to centralize inverter's data from many different manufactures, crawling and displaying relevant informations on dashboards.

List of available manufactures:

<ol>
<li>Omnik</li>
<li>Solarman</li>
<li>Trannergy</li>
<li>Solis</li>
<li>Fronius</li>
<li>Sungrow</li>
<li>Chint</li>
<li>Goodwe</li>
</ol>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/matheusgrandi/sol-logger.git
   ```
2. Install PIP packages
   ```sh
   pip install -r requirements.txt
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

On the script root folder run the following command line to start the app

```sh
python main.py
```

Use the menu to acess the functions.

Obs.: When sending data, write it's hexadecimal value in the folowwing format: 0xff

<p align="right">(<a href="#top">back to top</a>)</p>

See the [open issues](https://github.com/matheusgrandi/sol-logger/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Matheus Grandi - [LinkedIn](https://www.linkedin.com/in/matheus-grandi) - [Email](matheus@matheusgrandi.com) - [Instagram](https://www.instagram.com/grandimatheus/)

Project Link: [https://github.com/matheusgrandi/sol-logger](https://github.com/matheusgrandi/sol-logger)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/matheusgrandi/sol-logger.svg?style=for-the-badge
[contributors-url]: https://github.com/matheusgrandi/sol-logger/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/matheusgrandi/sol-logger.svg?style=for-the-badge
[forks-url]: https://github.com/matheusgrandi/sol-logger/network/members
[stars-shield]: https://img.shields.io/github/stars/matheusgrandi/sol-logger.svg?style=for-the-badge
[stars-url]: https://github.com/matheusgrandi/sol-logger/stargazers
[issues-shield]: https://img.shields.io/github/issues/matheusgrandi/sol-logger.svg?style=for-the-badge
[issues-url]: https://github.com/matheusgrandi/sol-logger/issues
[license-shield]: https://img.shields.io/github/license/matheusgrandi/sol-logger.svg?style=for-the-badge
[license-url]: https://github.com/matheusgrandi/sol-logger/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/company/huxx
[product-screenshot]: images/screenshot.png
