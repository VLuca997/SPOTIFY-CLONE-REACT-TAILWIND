import React, { useContext } from 'react';
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id];

    const {playWithId} = useContext(PlayerContext)

    return (
        <>
            <Navbar />
            <div className="px-2 mt-10 flex flex-col md:flex-row md:items-end gap-8">
                <img className="w-48 rounded" src={albumData.image} alt={albumData.name} />
                <div className="flex flex-col">
                    <p>Playlist</p>
                    <h2 className="text-5xl font-bold mb-4 md:text-7xl">{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p>
                        <img className="inline-block w-5" src={assets.spotify_logo} alt="Spotify Logo" />
                        <b>Spotify </b>
                        • 1,543,754 Mi Piace.
                        • <b>50 Canzoni </b>
                        Per 2 ore e 30 di ascolto!
                    </p>
                </div>
            </div>
            <div className="mt-10">
                <table className="w-full table-auto">
                    <thead className="text-left text-[#a7a7a7]">
                        <tr>
                            <th className="p-2">#</th>
                            <th className="p-2">Titolo</th>
                            <th className="p-2">Album</th>
                            <th className="p-2 hidden sm:table-cell">Aggiunto il</th>
                            <th className="p-2 text-center">
                                <img src={assets.clock_icon} className="w-4 m-auto" alt="Clock Icon" />
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-[#a7a7a7]">
                        {songsData.map((song, index) => (
                            <tr onClick={()=>playWithId(song.id)} key={index} className="hover:bg-[#ffffff2b] cursor-pointer">
                                <td className="p-2">{index + 1}</td>
                                <td className="p-2 flex items-center">
                                    <img className="w-10 mr-4" src={song.image} alt={song.name} />
                                    <span className="text-white">{song.name}</span>
                                </td>
                                <td className="p-2">{albumData.name}</td>
                                <td className="p-2 hidden sm:table-cell">5 giorni fa</td>
                                <td className="p-2 text-center">{song.duration}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default DisplayAlbum;
