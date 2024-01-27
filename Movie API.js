class Movie {
  constructor(title, genre, availableCopies) {
    this.title = title;
    this.genre = genre;
    this.availableCopies = availableCopies;
  }
}

class MovieStore {
  constructor() {
    this.movies = [];
    this.rentedMovies = [];
  }

  addMovie(title, genre, availableCopies) {
    const newMovie = new Movie(title, genre, availableCopies);
    this.movies.push(newMovie);
    console.log(`Added movie: ${title}`);
  }

  rentMovie(title) {
    const movieIndex = this.movies.findIndex(movie => movie.title === title);

    if (movieIndex !== -1) {
      const movie = this.movies[movieIndex];
      if (movie.availableCopies > 0) {
        movie.availableCopies--;
        this.rentedMovies.push(movie);
        console.log(`Rented movie: ${title}`);
      } else {
        console.log(`Sorry, ${title} is currently out of stock.`);
      }
    } else {
      console.log(`Movie not found: ${title}`);
    }
  }

  returnMovie(title) {
    const rentedMovieIndex = this.rentedMovies.findIndex(movie => movie.title === title);

    if (rentedMovieIndex !== -1) {
      const rentedMovie = this.rentedMovies[rentedMovieIndex];
      rentedMovie.availableCopies++;
      this.rentedMovies.splice(rentedMovieIndex, 1);
      console.log(`Returned movie: ${title}`);
    } else {
      console.log(`Movie not rented: ${title}`);
    }
  }

  displayMovieInventory() {
    console.log("Movie Inventory:");
    this.movies.forEach(movie => {
      console.log(`${movie.title} - Genre: ${movie.genre}, Available Copies: ${movie.availableCopies}`);
    });
  }

  displayRentedMovies() {
    console.log("Rented Movies:");
    this.rentedMovies.forEach(movie => {
      console.log(`${movie.title} - Genre: ${movie.genre}`);
    });
  }
}

// Example usage
const movieStore = new MovieStore();

movieStore.addMovie("Young Sheldon", "Drama", 5);
movieStore.addMovie("What Men Want", "Sci-Fi", 3);

movieStore.displayMovieInventory();

movieStore.rentMovie("Young Sheldon");
movieStore.rentMovie("What Men Want");
movieStore.rentMovie("Flyboys");

movieStore.displayRentedMovies();
movieStore.displayMovieInventory();

movieStore.returnMovie("Young Sheldon");

movieStore.displayRentedMovies();
movieStore.displayMovieInventory();
