[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/arjundubey-cr/tnpweb">
    <img src="https://scontent.fagr1-2.fna.fbcdn.net/v/t1.6435-9/83747697_1037778316576420_3166785116550725632_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=973b4a&_nc_ohc=U6a0Y45KZhkAX_7adn8&_nc_ht=scontent.fagr1-2.fna&oh=08f45c72af5598f5adf45d00bfdcf061&oe=60D576A6" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Training and Placement Cell Website</h3>

  <p align="center">
    A website for Training and Placement Cell, Faculty of Engineering and Technology, University of Lucknow.
    <br />
    <br />
    <br />
    <a href="https://tnpweb.herokuapp.com">View Website</a>
    ·
    <a href="https://github.com/arjundubey-cr/tnpw/issues">Report Bug</a>
    ·
    <a href="https://github.com/arjundubey-cr/tnpw/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Website Screen Shot][product-screenshot]](https://tnpweb.herokuapp.com)

This project is a website for Training and Placement Cell of Faculty of Engineering and Technology, Lucknow University.

Features:

- Showcase the 100+ years legacy of University and achievements by students of FoET under the guidance of Training and Placement Cell.
- Allows recruiters to filter, search, sort the student details according to their needs and export it as PDF or CSV.
- Enable students to add their details only once instead of filling google forms for every new recruiter.

### Built With

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node](https://nodejs.org/en/)
- [React-Bootstrap](https://getbootstrap.com)

<!-- GETTING STARTED -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### Prerequisites

To contribute/extend to this project it is recommended to have an understanding of following:

- JavaScript
- MERN Stack(MongoDB, Express, React JS, Node.js)
- Bootstrap
- Git
- JWT

### Setting up Local Development Environment

1. Fork the Project

```git
git clone git@github.com:<your_github_username>/tnpw.git
```

2. Generate your Mongo URI from https://mongodb.com and create a .env in root with the following content.

```sh
MONGO_URI = <PUT_MONGO_URI_HERE>
```

3. Follow these commands to install all the dependencies and start the development server on your local machine.

```sh
  cd tnpw
  npm install
  cd frontend
  npm install
  cd ..
  npm run dev
```

4. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

5. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

6. Push to the Branch (`git push origin feature/AmazingFeature`)

7. Open a Pull Request

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/arjundubey-cr/tnpw/issues) for a list of proposed features (and known issues).

## License

Distributed under the AGPLv3 License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Your Name - [Arjun Dubey](https://linkedin.com/in/arjundubeycr) - arjundubey@pm.me

<!-- ACKNOWLEDGEMENTS -->
<!--
## Acknowledgements

- [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet) -->

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/arjundubey-cr/tnpw.svg?style=for-the-badge
[contributors-url]: https://github.com/arjundubey-cr/tnpw/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/arjundubey-cr/tnpw.svg?style=for-the-badge
[forks-url]: https://github.com/arjundubey-cr/tnpw/network/members
[stars-shield]: https://img.shields.io/github/stars/arjundubey-cr/tnpw.svg?style=for-the-badge
[stars-url]: https://github.com/arjundubey-cr/tnpw/stargazers
[issues-shield]: https://img.shields.io/github/issues/arjundubey-cr/tnpw.svg?style=for-the-badge
[issues-url]: https://github.com/arjundubey-cr/tnpw/issues
[license-shield]: https://img.shields.io/github/license/arjundubey-cr/tnpw.svg?style=for-the-badge
[license-url]: https://github.com/arjundubey-cr/tnpw/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/arjundubeycr
[product-screenshot]: https://res.cloudinary.com/arjundubeycr/image/upload/v1623351189/tnpweb-herokuapp-com-1024x768desktop-66f990_y109et.png
