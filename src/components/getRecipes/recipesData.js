import { v4 as uuidv4 } from 'uuid';

const recipesData = [
    {
        id: uuidv4(),
        name: 'Pankakes',
        link: '/recipes/1669586656',
        imgSrc: 'pankakes.jpg',
    },
    {
        id: uuidv4(),
        name: 'Foul Iskandrany',
        link: '/recipes/561517681',
        imgSrc: 'foul.jpg',
    },
    {
        id: uuidv4(),
        name: 'Turkey Rolls',
        link: '/recipes/1152514489',
        imgSrc: 'turkey.jpg',
    },
];

export default recipesData;