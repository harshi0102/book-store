<a name="readme-top"></a>

<div align="center">

  <h3><b>Bookstore</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 Bookstore <a name="about-project"></a>

  Bookstore is an app that allows you to view a list of books, add a new book and remove a book. Built using React and Redux (state management).

  Phase-1: Initialize Project with Components Branch- 
  I Created React app and added Redux and Added linters .I Created components and files for structuring the Application.I Implemented navigation for Books and Categories.I Added dummy data for the books and created reusable component
  
  Phase -2:Add Reducer-actions Branch-
  I added the Redux Toolkit with the node package manager.I used a redux directory to hold all Redux logic and Implemented a global Redux store for the application state.I Defined a slice of state for the books and categories and Added reducers and actions for the various states.I used a Provider to pass the store to the app.I also used  feature folder approach to structure the application files.

  Phase-3:Use Redux-in-Components Branch-
  I Added the books slice to the booksList component and updated the initial state of the booksSlice
  I also Added usedispatch for dispatching actions and implemented an event handler that adds a book to the books array and another that removes a book from the books array.I Wrapped the app with the Provider component from react-redux

  Phase-4:Connect-to-API Branch
  I made use of the Bookstore API at backend. I used axios with createAsyncThunk to make my HTTP request to the backend. I fetched books from the Bookstore API after the component has rendered.
  I refractor my add book and remove book features to persist my changes in the server.

  Phase 5- Add Styling Branch
I added styling to the react -bookstore project just similar to the design provided below:
The details of the Bookstore design in Zeplin.I styled according to the design.

Check out for [Live Demo](https://bookstore-react-rycz.onrender.com)

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li>React</li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li>Not Available</li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li>Not Available</li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- Project setup with React
- Books page
- Section for adding new book

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo](https://bookstore-react-rycz.onrender.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

- Nodejs
- Node Package Manager
- VS Code text editor

### Setup

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone git@github.com/harshi0102/book-store.git
```

### Install

Install this project with:

  ```bash
    cd book-store
    npm install
  ```

### Usage

To run the project, execute the following command:
  ```bash
    npm start
  ```

### Run tests

To run tests, run the following command:

- Jest Test
```sh
  npm test
```

- Stylint
```bash 
npx stylelint "**/*.{css,scss}"
```

- Eslint
```bash
  npx eslint "**/*.{js,jsx}"
```

### Deployment

 [Click here for live demo](https://bookstore-react-rycz.onrender.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Harshika Govind**

- GitHub: [harshi0102](https://github.com/harshi0102)
- LinkedIn: [harshikagovind](https://linkedin.com/in/harshikagovind)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- Improve page UI
- Add user interactions

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/harshi0102/book-store/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

Hat tip to Microverse team for inspiring this project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](https://github.com/harshi0102/book-store/blob/development/LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
