import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  // typescript definition
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) notFound; // error message -> not found page 404

  const termToUse = decodeURI(term); // remove the unnecessary characters -> for spaces (%20)

  const movies = await getSearchedMovies(termToUse); // api call to get search movies

  const popularMovies = await getPopularMovies(); // api call to get popular movies

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-40 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>
        <MoviesCarousel title="Movies" movies={movies} isVertical />

        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;
