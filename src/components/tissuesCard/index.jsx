import React from 'react';
import instruction01 from '../../images/tissue01.svg'
import instruction02 from '../../images/tissue02.svg'
import instruction03 from '../../images/tissue03.svg'
import '../../style/card.sass'

function TissuesCard () {
    return (
        <section className='intructions'>
            <p>
            Como nosso projeto funciona?
            </p>
            <section className='intructions-cards'>
                <section className='card'>
                    <img src={instruction01} alt='{image01} ' className='image-card'/>
                    <p className='card-paragraph tissue-lenght'>
                        Tecidos de até 30 cm
                    </p>
                </section>
                <section className='card'>
                    <img src={instruction02} alt='{image02} ' className='image-card'/>
                    <p className='card-paragraph tissue-lenght'>
                        Tecidos de até 50 cm
                    </p>
                </section>
                <section className='card'>
                    <img src={instruction03} alt='{image03} ' className='image-card'/>
                    <p className='card-paragraph tissue-lenght'>
                        Tecidos de até 1 m
                    </p>
                </section>
            </section>
        </section>
    );
}

export default TissuesCard;