import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
    
        id: 1,
         name: 'Pitaya Plus',
        description: 'Um site de streaming de animes feito em HTML, CSS, JS e PHP.',
        tools: ['PHP', 'JS', 'HTML', 'CSS'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Bergamota Store',
        description: 'Uma loja de games inspirada na Steam com dezenas de jogos.',
        tools: ['Java'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'OrangeBarber',
        tools: ['Java'],
        description: 'Uma aplicação de gerenciamento de barbearias feita em Java.',
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'PineappleLoginScreen',
        description: "Tela de Login responsiva minimalista feita em HTML, CSS e JS.",
        tools: ['Html, CSS, JS'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Front-End Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },