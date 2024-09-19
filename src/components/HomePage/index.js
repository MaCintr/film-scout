import NowPlaying from "../NowPlaying"

const HomePage = () => {
    const movies = [
        {
            id: 1,
            title: 'Deadpool vs Wolverine',
            img: '/images/movie1.jpeg',
            rating: 79
        },
        {
            id: 2,
            title: 'Mario Bros. - The Movie',
            img: '/images/movie2.jpg',
            rating: 45
        },
        {
            id: 3,
            title: 'Friday the 13th',
            img: '/images/movie3.jpg',
            rating: 33
        },
    ]
    return (
        <div>
        <NowPlaying movies={movies}/>
        </div>
    )
}

export default HomePage