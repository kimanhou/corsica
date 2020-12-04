import React from 'react';
import './Photos.scss';

const Photos : React.FC = props => {
    const path = `./photos/days/2/`;
    const getUrl = (mediaName : string) => {
        return `url('` + path + mediaName + `')`;
    }

    return (
    <div className={`photos-container-two`}>
        <div className={`row`}>
            <div className={`column`}>
                <div className={`image p111`} style={{
                    backgroundImage : getUrl('3.jpg')
                }}>
                </div>
                <div className={`image p112`} style={{
                    backgroundImage : getUrl('2.jpg')
                }}>
                </div>
            </div>
            <div className={`column`}>
                <div className={`image p121`} style={{
                    backgroundImage : getUrl('1.jpg')
                }}>
                </div>
                <div className={`image p122`} style={{
                    backgroundImage : getUrl('6.jpg')
                }}>
                </div>
            </div>
            <div className={`column`}>
                <div className={`image p131`} style={{
                    backgroundImage : getUrl('5.jpg')
                }}>
                </div>
                <div className={`image p132`} style={{
                    backgroundImage : getUrl('4.jpg')
                }}>
                </div>
            </div>
        </div>
        <div className={`row`}>
            <div className={`column`}>
                <div className={`image p211`} style={{
                    backgroundImage : getUrl('7.jpg')
                }}>
                </div>
                <div className={`image p212`} style={{
                    backgroundImage : getUrl('12.jpg')
                }}>
                </div>
            </div>
            <div className={`column`}>
                <div className={`image p221`} style={{
                    backgroundImage : getUrl('8.jpg')
                }}>
                </div>
                <div className={`image p222`} style={{
                    backgroundImage : getUrl('11.jpg')
                }}>
                </div>
            </div>
            <div className={`column`}>
                <div className={`image p231`}>
                    <video width="100%" autoPlay loop muted>
                        <source src={path + '13.mp4'} type="video/mp4" />
                    </video>
                </div>
            </div>
        </div>
        <div className={`image p3`} style={{
                backgroundImage : getUrl('9.jpg')
            }}>
        </div>
    </div>
    );
}

export default Photos;