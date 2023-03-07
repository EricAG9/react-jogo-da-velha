import styles from "./GameInfo.module.css"

import Icon from "../icon/Icon"
import Button from "../button/Button"

function GameInfo ({currentPlayer, winner, onReset, isDrow}) {

    const shouldEnableButton = () => winner !==0 || isDrow
    return(
        <div className={styles.gameInfo}>                
                
                {
                     !isDrow && winner === 0 && 
                    <>
                    <h4>Próximo a Jogar:</h4>  
                    {
                        currentPlayer === 1 && <Icon iconName="circle" />
                    }
                    {
                        currentPlayer === -1 && <Icon iconName="x" />
                    }
                    </>
                }
                {
                    !isDrow && winner !==0 &&
                    <>
                         <h4>Fim de Jogo! Campeão:</h4>  
                    {
                        winner === 1 && <Icon iconName="circle" />
                    }
                    {
                        winner === -1 && <Icon iconName="x" />
                    }
                    </>
                }
                {
                    isDrow && <h4>Empate!</h4>
                }
            <Button 
                onClick={onReset}
                disabled={!shouldEnableButton()}
            >Reiniciar</Button>
        </div>
    )
}

export default GameInfo