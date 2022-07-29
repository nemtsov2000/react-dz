import { useState } from 'react';
import './addFilmForm.scss';

interface AddFilmProps {
    saveFilm(newfilmTitle: string, newfilmRate: number, newfilmComment: string): void;
}

export const AddFilmForm = (props: AddFilmProps) => {
    const [filmTitle, setFilmTitle]     = useState<string>('');
    const [filmRate, setFilmRate]       = useState<number>(0);
    const [filmComment, setFilmComment] = useState<string>('');


    const onSaveFilm = (event: React.FormEvent) => {
        event.preventDefault();
        props.saveFilm(filmTitle, filmRate, filmComment);
        setFilmTitle('');
        setFilmRate(0);
        setFilmComment('');
    };

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
                            onChange={(event) => setFilmRate(+event.target.value)}
                        />
                    </label>
                </div>
                <label htmlFor="">
                    Описание:
                </label>
                <textarea
                    value={filmComment}
                    maxLength={200}
                    onChange={(event) => setFilmComment(event.target.value)}
                />

                <input
                    className={'input-submit'}
                    type="submit"
                    value="Cохранить"
                    disabled={!(filmTitle && filmRate && filmComment)}
                />
            </div>
        </form>
    );

};
