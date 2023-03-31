import React from 'react'
import "./videoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter() {
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h3>@Fernando</h3>
                <p>Descrição do Video</p>
                <div className='videoFooter__music'>
                    <MusicNoteIcon className='videoFooter__icon' />
                    <div className='videoFooterMusic__text'>
                        <p>Título da música</p>
                    </div>

                </div>
            </div>
            <img
                className='vdeoFooter__record'
                alt="Imagem de um vinil girando"
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
            />
        </div>
    );
}

export default VideoFooter

