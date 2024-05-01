class Movies {

    static totalMovies: number = 0;

    public title: string;
    public releaseYear: number;

    displayInfo(): void {
        console.log(`${this.title} (${this.releaseYear})`);
    }

    constructor(title:string, releaseYear: number) {
        this.title=title;
        this.releaseYear=releaseYear;
        Movies.totalMovies += 1;
    }


    static displayClassInfo(): void {
        console.log(`The Movies class has been used to create ${Movies.totalMovies} movies.`);
    }
}

export default Movies;
