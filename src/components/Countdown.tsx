import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';
import { CountdownContext } from '../contexts/CountdownContext';


export function Countdown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext);
    
    //essas duas linhas estao apenas formatando os dados pra ficar bem no nosso Layout.
    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button 
                    disabled
                    className={styles.CountdownButton}
                >
                    Terminou
                </button>
            ) : (
                <>
                { isActive ? (
                <button 
                    type="button"
                    className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
                    onClick={resetCountdown}
                >
                    Recomeçar
                </button>
            ) : (
                <button 
                    type="button"
                    className={styles.CountdownButton}
                    onClick={startCountdown}
                >
                    Iniciar
                </button>
            )}
                </>
            )}              
        </div>
        
    );
}