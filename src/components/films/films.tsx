import deleteIcon from '../../images/close.svg';
import { Film } from '../../interfaces/film';
import './films.scss';

interface CreateNoteParams {
    films: Film[];

    deleteNote(index: number): void;
}

export const Films = (props: CreateNoteParams) => {
    return (
        <div className="block-short">
            <table className="table">
                <tbody id="tbodyShort">
                    <tr>
                        <th>Название</th>
                        <th>Оценка</th>
                        <th>Описание</th>
                    </tr>
                    {
                        props.films.map((film: Film, index: number) => (
                            <tr key={index}>
                                <td className={'tdcenter'}>{film.title}</td>
                                <td className={'tdcenter'}> {film.rate}</td>
                                <td>{film.comment}</td>
                                <td>
                                    <button
                                        onClick={() => props.deleteNote(index)}
                                    >
                                        <img src={deleteIcon} alt={'delete'}/>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};
