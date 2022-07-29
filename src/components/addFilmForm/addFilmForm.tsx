import { useState } from 'react';
import './addFilmForm.scss';

interface AddFilmProps {
    saveFilm(newfilmTitle: string, newfilmRate: number, newfilmComment: string): void;
}

export const AddFilmForm = (props: AddFilmProps) => {
const [filmTitle, setFilmTitle] = useState<string>('');
const [filmRate, setfilmRate] = useState<number>(0);
const [filmComment, setfilmComment] = useState<string>('');


const onSaveFilm = (event: React.FormEvent) => {
    event.preventDefault();
    props.saveFilm(filmTitle, filmRate, filmComment);
    setFilmTitle('');
    setfilmRate(0);
    setfilmComment('');
}

return (
    <form className={'add-film-form'} onSubmit={onSaveFilm}>
        <div className={'form-wrapper'}>
            <div className="first-section">
                <label>
                    Название:
                    <input
                        className={'film-input'}
                        type="text"
                        value={filmTitle}
                        onChange={(event) => setFilmTitle(event.target.value)}
                    />
                </label>
                <label>
                    Оценка:
                    <input
                        className={'film-input'}
                        type="number"
                        value={filmRate}
                        onChange={(event) => setfilmRate(+event.target.value)}
                    />
                </label>
            </div>
            <label htmlFor="">
                Описание:
            </label>
                    <textarea
                        value={filmComment}
                        maxLength={200}
                        onChange={(event) => setfilmComment(event.target.value)}
                    />

                <input
                    className={'input-submit'}
                    type='submit'
                    value='Cохранить'
                />

        </div>
    </form>
)

}
