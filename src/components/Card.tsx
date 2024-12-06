const Card = ({ movie }: { movie: any }) => (
        <>
        <div className="h-96 w-60">
            <img src={movie.poster} className="w-full" alt="" />
            <h1 className="font-medium text-white text-lg overflow-hidden truncate whitespace-nowrap text-overflow-ellipsis">{movie.title}</h1>
            <h2 className="truncate text-white font-light">{movie.release_date}</h2>
        </div>
        </>
    )

export default Card;
