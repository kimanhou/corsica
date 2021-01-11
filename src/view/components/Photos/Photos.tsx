import React from 'react';
import { IPhotoData } from '../Days/Day';
import DayPhotos from '../Days/Photos/DayPhotos';
import './Photos.scss';

interface IPhotosProps {
}

const Photos : React.FC<IPhotosProps> = props => {
    const photos1 : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.jpg', gridItemType : 'portrait'}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'landscape'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'portrait'},
        {photoName : '7.jpg', gridItemType : 'portrait'},
        {photoName : '8.jpg', gridItemType : 'portrait'},
        {photoName : '9.jpg', gridItemType : 'portrait'},
        {photoName : '10.jpg', gridItemType : 'portrait'},
        {photoName : '11.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '12.jpg', gridItemType : 'panorama'},
    ]

    const photos2 : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'landscape'}, 
        {photoName : '2.jpg', gridItemType : 'portrait'}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'portrait'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'portrait'},
        {photoName : '7.jpg', gridItemType : 'landscape'},
        {photoName : '9.jpg', gridItemType : 'landscape'},
        {photoName : '8.jpg', gridItemType : 'portrait'},
        {photoName : '10.jpg', gridItemType : 'panorama'},
        {photoName : '11.jpg', gridItemType : 'portrait'},
        {photoName : '12.jpg', gridItemType : 'portrait'},
        {photoName : '13.mp4', gridItemType : 'portrait', isVideo: true},
    ]

    const photos3 : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.jpg', gridItemType : 'portrait'}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'landscape'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'panorama'},
        {photoName : '7.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '8.jpg', gridItemType : 'landscape'},
        {photoName : '9.jpg', gridItemType : 'portrait'},
        {photoName : '10.jpg', gridItemType : 'portrait'},
        {photoName : '11.jpg', gridItemType : 'portrait'},
        {photoName : '12.jpg', gridItemType : 'landscape'},
        {photoName : '13.jpg', gridItemType : 'portrait'},
        {photoName : '14.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '15.jpg', gridItemType : 'landscape'},
        {photoName : '16.jpg', gridItemType : 'portrait'},
        {photoName : '17.jpg', gridItemType : 'portrait'},
        {photoName : '18.jpg', gridItemType : 'portrait'},
        {photoName : '19.jpg', gridItemType : 'panorama'},
        {photoName : '20.jpg', gridItemType : 'portrait'},
        {photoName : '21.jpg', gridItemType : 'landscape'},
        {photoName : '22.jpg', gridItemType : 'landscape'},
        {photoName : '23.jpg', gridItemType : 'portrait'},
        {photoName : '24.jpg', gridItemType : 'portrait'},
        {photoName : '25.jpg', gridItemType : 'landscape'},
    ]

    const photos4 : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.jpg', gridItemType : 'portrait'}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'portrait'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'portrait'},
        {photoName : '7.jpg', gridItemType : 'landscape'},
        {photoName : '8.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '9.jpg', gridItemType : 'portrait'},
        {photoName : '10.jpg', gridItemType : 'landscape'},
        {photoName : '11.jpg', gridItemType : 'half'},
        {photoName : '12.jpg', gridItemType : 'half'},
        {photoName : '13.jpg', gridItemType : 'half'},
        {photoName : '14.jpg', gridItemType : 'half'},
    ]

    const photos5 : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.jpg', gridItemType : 'portrait'}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'half'}, 
        {photoName : '5.jpg', gridItemType : 'half'}, 
        {photoName : '6.jpg', gridItemType : 'half'},
        {photoName : '7.jpg', gridItemType : 'half'},
        {photoName : '8.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '9.jpg', gridItemType : 'landscape'},
        {photoName : '10.jpg', gridItemType : 'half'},
        {photoName : '11.jpg', gridItemType : 'half'},
    ]

    const photos6 : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.jpg', gridItemType : 'portrait'}, 
        {photoName : '3.mp4', gridItemType : 'portrait', isVideo: true}, 
        {photoName : '4.jpg', gridItemType : 'panorama'}, 
        {photoName : '5.jpg', gridItemType : 'landscape'}, 
        {photoName : '6.mp4', gridItemType : 'portrait', isVideo: true}, 
        {photoName : '7.jpg', gridItemType : 'landscape'},
        {photoName : '8.jpg', gridItemType : 'portrait'},
        {photoName : '9.jpg', gridItemType : 'portrait'},
        {photoName : '10.jpg', gridItemType : 'portrait'},
        {photoName : '11.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '12.jpg', gridItemType : 'landscape'},
        {photoName : '13.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '14.jpg', gridItemType : 'portrait'},
        {photoName : '15.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '16.jpg', gridItemType : 'portrait'},
    ]

    const photos7 : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.mp4', gridItemType : 'portrait', isVideo: true}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'portrait'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.mp4', gridItemType : 'portrait', isVideo: true}, 
        {photoName : '7.jpg', gridItemType : 'portrait'},
        {photoName : '8.jpg', gridItemType : 'portrait'},
        {photoName : '9.jpg', gridItemType : 'portrait'},
        {photoName : '10.jpg', gridItemType : 'portrait'},
        {photoName : '11.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '12.jpg', gridItemType : 'portrait'},
        {photoName : '13.jpg', gridItemType : 'portrait'},
        {photoName : '14.jpg', gridItemType : 'portrait'},
        {photoName : '15.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '16.jpg', gridItemType : 'portrait'},
        {photoName : '17.jpg', gridItemType : 'portrait'},
        {photoName : '18.jpg', gridItemType : 'portrait'},
        {photoName : '19.jpg', gridItemType : 'panorama'},
    ]

    const photos8 : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.jpg', gridItemType : 'portrait'}, 
        {photoName : '3.mp4', gridItemType : 'portrait', isVideo: true}, 
        {photoName : '4.mp4', gridItemType : 'portrait', isVideo: true}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'portrait'}, 
        {photoName : '7.jpg', gridItemType : 'portrait'},
        {photoName : '8.jpg', gridItemType : 'portrait'},
        {photoName : '9.jpg', gridItemType : 'portrait'}
    ]


    const corte : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.jpg', gridItemType : 'portrait'}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'landscape'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'portrait'}, 
        {photoName : '7.jpg', gridItemType : 'landscape'},
    ]

    const bastia : IPhotoData[] = [
        {photoName : '8.jpg', gridItemType : 'half'},
        {photoName : '9.jpg', gridItemType : 'half'},
        {photoName : '10.jpg', gridItemType : 'panorama'},
        {photoName : '11.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '12.jpg', gridItemType : 'portrait'},
        {photoName : '13.jpg', gridItemType : 'portrait'},
        {photoName : '14.jpg', gridItemType : 'portrait'},
        {photoName : '15.jpg', gridItemType : 'portrait'},
        {photoName : '16.jpg', gridItemType : 'portrait'},
        {photoName : '17.jpg', gridItemType : 'portrait'},
        {photoName : '18.jpg', gridItemType : 'portrait'},
        {photoName : '19.jpg', gridItemType : 'portrait'},
    ]

    const photos9 : IPhotoData[] = corte.concat(bastia);

    const photos10 : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.jpg', gridItemType : 'portrait'}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'portrait'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'portrait'}, 
        {photoName : '7.jpg', gridItemType : 'half'},
        {photoName : '8.jpg', gridItemType : 'half'}, 
        {photoName : '9.jpg', gridItemType : 'landscape'}, 
        {photoName : '10.jpg', gridItemType : 'portrait'}, 
        {photoName : '11.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '12.jpg', gridItemType : 'landscape'}, 
        {photoName : '13.jpg', gridItemType : 'panorama'}, 
        {photoName : '14.jpg', gridItemType : 'half'}, 
        {photoName : '15.mp4', gridItemType : 'half', isVideo: true},
        {photoName : '16.jpg', gridItemType : 'half'},
        {photoName : '17.jpg', gridItemType : 'half'},
        {photoName : '18.jpg', gridItemType : 'panorama'},
    ]

    const photos11 : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'half'}, 
        {photoName : '2.jpg', gridItemType : 'half'}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'landscape'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'landscape'}, 
        {photoName : '7.jpg', gridItemType : 'landscape'},
        {photoName : '8.jpg', gridItemType : 'portrait'}, 
        {photoName : '9.jpg', gridItemType : 'half'}, 
        {photoName : '10.jpg', gridItemType : 'half'},
        {photoName : '11.jpg', gridItemType : 'landscape'},
        {photoName : '12.mp4', gridItemType : 'portrait', isVideo: true}
    ]

    const revellata : IPhotoData[] = [
        {photoName : '1.mp4', gridItemType : 'portrait', isVideo: true}, 
        {photoName : '2.jpg', gridItemType : 'landscape'}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.jpg', gridItemType : 'portrait'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'panorama'}, 
        {photoName : '7.jpg', gridItemType : 'landscape'},
        {photoName : '8.jpg', gridItemType : 'portrait'}, 
        {photoName : '9.jpg', gridItemType : 'half'}, 
        {photoName : '10.jpg', gridItemType : 'half'},
    ]

    const calvi : IPhotoData[] = [
        {photoName : '11.jpg', gridItemType : 'portrait'},
        {photoName : '12.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '13.jpg', gridItemType : 'portrait'},
        {photoName : '14.jpg', gridItemType : 'panorama'},
        {photoName : '15.jpg', gridItemType : 'half'},
        {photoName : '16.jpg', gridItemType : 'half'},
        {photoName : '17.jpg', gridItemType : 'portrait'},
        {photoName : '18.jpg', gridItemType : 'portrait'},
        {photoName : '19.mp4', gridItemType : 'portrait', isVideo: true}
    ]

    const photos12 : IPhotoData[] = revellata.concat(calvi);


    const porto : IPhotoData[] = [
        {photoName : '1.mp4', gridItemType : 'portrait', isVideo: true}, 
        {photoName : '2.jpg', gridItemType : 'landscape'}, 
        {photoName : '3.jpg', gridItemType : 'half'}, 
    ]

    const cruise : IPhotoData[] = [
        {photoName : '4.jpg', gridItemType : 'half'}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.mp4', gridItemType : 'portrait', isVideo: true}, 
        {photoName : '7.jpg', gridItemType : 'portrait'},
        {photoName : '8.jpg', gridItemType : 'portrait'}, 
        {photoName : '9.jpg', gridItemType : 'portrait'}, 
        {photoName : '10.jpg', gridItemType : 'portrait'},
        {photoName : '11.jpg', gridItemType : 'panorama'},
        {photoName : '12.jpg', gridItemType : 'landscape'},
        {photoName : '13.jpg', gridItemType : 'portrait'},
        {photoName : '14.jpg', gridItemType : 'portrait'},
        {photoName : '15.jpg', gridItemType : 'landscape'},
        {photoName : '16.jpg', gridItemType : 'landscape'},
        {photoName : '17.jpg', gridItemType : 'portrait'}
    ]

    const photos13 : IPhotoData[] = porto.concat(cruise);

    const photos14 : IPhotoData[] = [
        {photoName : '1.jpg', gridItemType : 'portrait'}, 
        {photoName : '2.mp4', gridItemType : 'portrait', isVideo: true}, 
        {photoName : '3.jpg', gridItemType : 'portrait'}, 
        {photoName : '4.mp4', gridItemType : 'portrait', isVideo: true}, 
        {photoName : '5.jpg', gridItemType : 'portrait'}, 
        {photoName : '6.jpg', gridItemType : 'portrait'}, 
        {photoName : '7.jpg', gridItemType : 'portrait'},
        {photoName : '8.jpg', gridItemType : 'landscape'}, 
        {photoName : '9.jpg', gridItemType : 'landscape'}, 
        {photoName : '10.jpg', gridItemType : 'portrait'},
        {photoName : '11.jpg', gridItemType : 'portrait'},
        {photoName : '12.jpg', gridItemType : 'landscape'},
        {photoName : '13.jpg', gridItemType : 'portrait'},
        {photoName : '14.jpg', gridItemType : 'portrait'},
        {photoName : '15.mp4', gridItemType : 'portrait', isVideo: true},
        {photoName : '16.jpg', gridItemType : 'panorama'}
    ]

    return(
        <div className={`photos`}>
            <DayPhotos photos={photos1} dayNumber={1} noSectionHeader />
            <DayPhotos photos={photos2} dayNumber={2} noSectionHeader />
            <DayPhotos photos={photos3} dayNumber={3} noSectionHeader />
            <DayPhotos photos={photos4} dayNumber={4} noSectionHeader />
            <DayPhotos photos={photos5} dayNumber={5} noSectionHeader />
            <DayPhotos photos={photos6} dayNumber={6} noSectionHeader />
            <DayPhotos photos={photos7} dayNumber={7} noSectionHeader />
            <DayPhotos photos={photos8} dayNumber={8} noSectionHeader />
            <DayPhotos photos={photos9} dayNumber={9} noSectionHeader />
            <DayPhotos photos={photos10} dayNumber={10} noSectionHeader />
            <DayPhotos photos={photos11} dayNumber={11} noSectionHeader />
            <DayPhotos photos={photos12} dayNumber={12} noSectionHeader />
            <DayPhotos photos={photos13} dayNumber={13} noSectionHeader />
            <DayPhotos photos={photos14} dayNumber={14} noSectionHeader />
        </div>
    );
}

export default Photos;