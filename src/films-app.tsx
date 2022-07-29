import { Component } from 'react';
import films from './MOVIES.json';
import './styles/app.scss';
import { Film } from './interfaces/film';
import { Films } from './components/films/films';
import { AddFilmForm } from './components/addFilmForm/addFilmForm';

interface AppState {
    films: Film[];
}

class App extends Component<{}, AppState> {
    state = {
        films: [],
    };

    componentDidMount() {
        this.setState({ films: films });
    }

    saveFilm = (newfilmTitle: string, newfilmRate: number, newfilmComment: string) => {
        const newFilm: Film[] = this.state.films;
        const newId           = String(films.length);
        newFilm.push({
            id: newId,
            title: newfilmTitle,
            rate: newfilmRate,
            comment: newfilmComment,
        });
        this.setState({ films: newFilm });
    };

    deleteNote = (index: number) => {
        const newNotes: Film[] = this.state.films;
        newNotes.splice(index, 1);
        this.setState({ films: newNotes });
    };

    render() {
        return (
            <div className={'app'}>

                <main>
                    <div className={'container'}>
                        <AddFilmForm
                            saveFilm=
                                {(newfilmTitle, newfilmRate, newfilmComment) =>
                                    this.saveFilm(newfilmTitle, newfilmRate, newfilmComment)}
                        />
                        <h1 className={'app__title'}>
                            Список фильмов
                        </h1>
                        <Films
                            films={this.state.films}
                            deleteNote={(index) => this.deleteNote(index)}
                        />
                    </div>
                </main>
            </div>
        );
    }

}

export default App;
