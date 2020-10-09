import React, { useState } from 'react';
import Text from '../LocalisationContext/Text';
import SectionHeader from '../SectionHeader/SectionHeader';
import './ItineraryNutshell.scss';

interface IItineraryNutshellProps {
}

const ItineraryNutshell : React.FC<IItineraryNutshellProps> = props => {
    const [iconText, setIconText] = useState("text");
    var positionClassname = iconText == "icon" ? "icon" : "";

    return(
        <div className={`itinerary-nutshell`} id={`itinerary-nutshell`}>
            <SectionHeader englishTitle="The itinerary" englishSubtitle="in a nutshell" frenchTitle="L'itinéraire" frenchSubtitle="en un clin d oeil" />
            <div className={`switch`}>
                <p onClick={() => setIconText("icon")}><Text english="Icons" french="Icônes" /></p>
                <div className={`bar-circle`}>
                    <div className={`bar`}></div>
                    <div className={`circle ${positionClassname}`}></div>
                </div>
                <p onClick={() => setIconText("text")}><Text english="Text" french="Texte" /></p>
            </div>
            <div className={`table`}>
                <div className={`table-line`}>
                    <div className={`table-line-number`}>
                        <div className={`table-cell`}>1</div>
                        <div className={`table-cell`}>2</div>
                        <div className={`table-cell`}>3</div>
                        <div className={`table-cell`}>4</div>
                        <div className={`table-cell`}>5</div>
                        <div className={`table-cell`}>6</div>
                        <div className={`table-cell`}>7</div>
                    </div>
                    <div className={`days ${positionClassname}`}>
                        <div className={`table-cell day`}>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Ajaccio" french="Ajaccio" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/village.png" />
                                    </div>
                                </div>
                            </div>
                            <div className={`table-cell day-divider`}></div>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Blood Islands - Parata Peninsula" french="Îles Sanguinaires - Pointe de la Parata" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/hike.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`table-cell day`}>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Sartene" french="Sartène" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/village.png" />
                                    </div>
                                </div>
                            </div>
                            <div className={`table-cell day-divider`}></div>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Roccapina" french="Roccapina" /></p> 
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/beach.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`table-cell day`}>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Bonifacio" french="Bonifacio" /></p> 
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/village.png" />
                                    </div>
                                </div>
                            </div>
                            <div className={`table-cell day-divider`}></div>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Campu Rumanilu hike" french="Sentier de Campu Rumanilu" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/hike.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`table-cell day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Lavezzi Islands" french="Îles Lavezzi" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/village.png" />
                                    </div>
                                </div>
                        </div>
                        <div className={`table-cell day`}>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Porto Vecchio" french="Porto Vecchio" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/village.png" />
                                    </div>
                                </div>
                            </div>
                            <div className={`table-cell day-divider`}></div>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Beaches" french="Plages" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/beach.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`table-cell day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Purcaraccia pools" french="Cascades de Purcaraccia" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/village.png" />
                                    </div>
                                </div>
                        </div>
                        <div className={`table-cell day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Restonica Valley" french="Vallée de la Restonica" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/village.png" />
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                <div className={`table-line-divider`}></div>
                <div className={`table-line`}>
                    <div className={`table-line-number`}>
                        <div className={`table-cell`}>8</div>
                        <div className={`table-cell`}>9</div>
                        <div className={`table-cell`}>10</div>
                        <div className={`table-cell`}>11</div>
                        <div className={`table-cell`}>12</div>
                        <div className={`table-cell`}>13</div>
                        <div className={`table-cell`}>14</div>
                    </div>
                    <div className={`days ${positionClassname}`}>
                        <div className={`table-cell day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Tavignano Gorge" french="Gorges du Tavignano" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/village.png" />
                                    </div>
                                </div>
                        </div>
                        <div className={`table-cell day`}>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Corte" french="Corte" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/village.png" />
                                    </div>
                                </div>
                            </div>
                            <div className={`table-cell day-divider`}></div>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Bastia" french="Bastia" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/village.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`table-cell day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Cap Corse" french="Cap Corse" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/village.png" />
                                    </div>
                                </div>
                        </div>
                        <div className={`table-cell day`}>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Agriates Desert" french="Désert des Agriates" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/hike.png" />
                                    </div>
                                </div>
                            </div>
                            <div className={`table-cell day-divider`}></div>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p>
                                            <Text english="Saint Florent" french="Saint Florent" />
                                            <br></br>
                                            <Text english="Ile Rousse" french="Île Rousse" />
                                        </p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/village.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`table-cell day`}>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Revellata Peninsula" french="Pointe de la Revellata" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/hike.png" />
                                    </div>
                                </div>
                            </div>
                            <div className={`table-cell day-divider`}></div>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Calvi" french="Calvi" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/village.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`table-cell day`}>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Road to Porto" french="Route vers Porto" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/car-no-border.png" />
                                    </div>
                                </div>
                            </div>
                            <div className={`table-cell day-divider`}></div>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Natural reserve of Scandola and Girolata" french="Réserve naturelle de Scandola et Girolata" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/boat.png" />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className={`table-cell day`}>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Calanches de Piana" french="Calanches de Piana" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/hike.png" />
                                    </div>
                                </div>
                            </div>
                            <div className={`table-cell day-divider`}></div>
                            <div className={`table-cell half-day`}>
                                <div className={`flippable`}>
                                    <div className={`front`}>
                                        <p><Text english="Road to Ajaccio" french="Route vers Ajaccio" /></p>
                                    </div>
                                    <div className={`back`}>
                                        <img src="./icons/car-no-border.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItineraryNutshell;