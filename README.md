
# 🎬 Movie App

A dynamic and responsive movie web application built with React that allows users to explore, search, and view detailed information about movies and TV shows. It integrates The Movie Database (TMDB) API to fetch real-time data and offers a clean and intuitive user interface.


## 📁 Project Structure


public/
└── index.html

src/
├── assets/              # Images and static assets
│   ├── avatar.png
│   ├── movie-logo.png
│   ├── movie-logo.svg
│   ├── no-poster.png
│   └── no-results.png
│
├── components/          # Reusable components
│   ├── carousel/
│   ├── circleRating/
│   ├── contentWrapper/
│   ├── footer/
│   ├── genres/
│   ├── header/
│   ├── lazyLoadImage/
│   ├── movieCart/
│   ├── spinner/
│   ├── switchTabs/
│   └── videoPopup/
│
├── hooks/
│   └── useFetch.js      # Custom hook for API calls
│
├── pages/               # Route-based pages
│   ├── 404/
│   ├── details/
│   ├── explore/
│   ├── home/
│   └── searchResult/
│
├── store/               # Redux Toolkit slices and store
│   ├── homeSlice.js
│   └── store.js
│
├── utils/               # Utility files
│   ├── apis.js          # API configurations and functions
│   └── App.js           # Main React App component




## 🚀 Features

- 🔍 **Search** movies and TV shows
- 🎬 **Explore** trending, popular, top-rated, and upcoming content
- 📝 **Detailed view** with title, poster, genres, release date, and more
- 📊 **Circle rating** visual for vote average
- 📽️ **Video trailer popup** support
- 🧠 **Lazy loading** of images for performance
- 🌍 **Responsive UI** for all device sizes
- 🔄 **Global state management** using Redux Toolkit



## 🛠️ Tech Stack

- **Frontend**: React.js, HTML5, CSS3
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **API**: TMDB (The Movie Database)
- **HTTP Client**: Axios
- **Other**: Lazy Load Images, Custom Hooks, Modular Code



## 🔧 Getting Started

### 1. Clone the Repository

bash
git clone https://github.com/your-username/movie-app.git
cd movie-app


### 2. Install Dependencies

bash
npm install


### 3. Configure API Key

Create a `.env` file in the root directory and add your TMDB API key:

env
REACT_APP_TMDB_API_KEY=your_tmdb_api_key_here


You can get your API key from [https://www.themoviedb.org/](https://www.themoviedb.org/).


## 🧑‍💻 Author

**Himanshu Verma**


---

## 📃 License

This project is licensed under the MIT License.

```


