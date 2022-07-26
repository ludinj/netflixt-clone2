import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { arrayUnion, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { UserAuth } from "./AuthContext";
const SavedMoviesContext = createContext();

export function SavedMoviesContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const { user } = UserAuth();
  const movieRef = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedMovies);
    });
  }, [user?.email]);
  console.log(movies);

  async function deleteMovie(id) {
    console.log(id);
    try {
      const result = movies.filter((movie) => movie.id !== id);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function saveMovie(movie) {
    if (user?.email) {
      try {
        await updateDoc(movieRef, {
          savedMovies: arrayUnion({
            id: movie.id,
            title: movie.title,
            img: movie.backdrop_path,
          }),
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please Login to save a movie");
    }
  }
  return (
    <SavedMoviesContext.Provider value={{ movies, deleteMovie, saveMovie }}>
      {children}
    </SavedMoviesContext.Provider>
  );
}

export function MoviesSaved() {
  return useContext(SavedMoviesContext);
}
