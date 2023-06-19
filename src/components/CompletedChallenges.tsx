import { useContext } from 'react';
import styles from '../styles/components/CompletedChallenges.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext';


export function CompletedChallenges() {
    const {challengesCompleted} = useContext(ChallengesContext)


    return (
        <div className={styles.completedChallengesContainer}>
            <span> desafios completos</span>
            <span>{challengesCompleted}</span>

        </div>
    );
}