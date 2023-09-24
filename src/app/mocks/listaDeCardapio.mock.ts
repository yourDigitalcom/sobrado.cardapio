import { itensBaldeCerveja, itensCervejaLongNeck } from "./cervejas.mock";
import { itensComidas } from "./comidas.mock";
import { itensCaipirinha, itensGin } from "./drinks.mock";
import { itensEssencias } from "./essencias.mock";

export const listaCardapios = [
    {
        "menu": "Sessão Rosh",
        "selected": true,
        "itens": itensEssencias,
        "title": "Sabores",
        "subMenus": [
            {
                "title": "Sabores",
                "itens": itensEssencias,
                "cardExtend": false
            }
        ]
    },
    {
        "menu": "Cervejas",
        "selected": false,
        "itens": itensComidas,
        "subMenus": [
            {
                "title": "Unidade",
                "itens": itensCervejaLongNeck,
                "cardExtend": false
            },
            {
                "title": "Balde",
                "itens": itensBaldeCerveja,
                "cardExtend": false
            }
        ]
    },
    {
        "menu": "Drinks",
        "selected": false,
        "itens": itensGin,
        "subMenus": [
            {
                "title": "Gin",
                "itens": itensGin,
                "cardExtend": false
            },
            {
                "title": "Caipirinha",
                "itens": itensCaipirinha,
                "cardExtend": false
            }
        ]
    },
    {
        "menu": "Garrafas",
        "selected": false,
        "itens": [
            {
                "img": "/assets/images/cardapio/garrafa-licor-43.png",
                "description": "Garrafa Licor 43",
                "value": 250
            },
            {
                "img": "/assets/images/cardapio/garrafa-tanqueray.png",
                "description": "Garrafa Tanqueray",
                "value": 200
            },
            // {
            //     "img": "/assets/images/cardapio/garrafa-bombay.png",
            //     "description": "Garrafa Bombay",
            //     "value": 200
            // },
            
            {
                "img": "/assets/images/cardapio/garrafa-buchanans.png",
                "description": "Garrafa Buchanans",
                "value": 390
            },
            {
                "img": "/assets/images/cardapio/garrafa-old-parr.png",
                "description": "Garrafa Old Parr",
                "value": 250
            },
            {
                "img": "/assets/images/cardapio/garrafa-red-label.png",
                "description": "Garrafa Red Label",
                "value": 170
            },
            {
                "img": "/assets/images/cardapio/garrafa-black-label.png",
                "description": "Garrafa Black Label",
                "value": 290
            },
            {
                "img": "/assets/images/cardapio/garrafa-gold-label-1l.JPG",
                "description": "Garrafa Gold Label",
                "value": 400
            },
            // {
            //     "img": "/assets/images/cardapio/garrafa-blue-label.png",
            //     "description": "Garrafa Blue Label",
            //     "value": 1999
            // },
            // {
            //     "img": "/assets/images/cardapio/garrafa-royal-salut.png",
            //     "description": "Garrafa Chivas Royal Salute 21 Anos",
            //     "value": 1800
            // },
            {
                "img": "/assets/images/cardapio/garrafa-jack-daniels.png",
                "description": "Garrafa Jack Daniels",
                "value": 280
            },
            // {
            //     "img": "/assets/images/cardapio/garrafa-jack-daniels-maca.png",
            //     "description": "Garrafa Jack Daniels Maça Verde",
            //     "value": 320
            // },
            {
                "img": "/assets/images/cardapio/garrafa-jack-daniels-mel.JPG",
                "description": "Garrafa Jack Daniels Mel",
                "value": 390
            },
            // {
            //     "img": "/assets/images/cardapio/garrafa-ciroc.PNG",
            //     "description": "Garrafa Ciroc Tradicional",
            //     "value": 320
            // },
            {
                "img": "/assets/images/cardapio/garrafa-ciroc-red.PNG",
                "description": "Garrafa Ciroc Red Berry",
                "value": 300
            },
            // {
            //     "img": "/assets/images/cardapio/garrafa-ciroc-pineapple.PNG",
            //     "description": "Garrafa Ciroc Pineapple",
            //     "value": 320
            // },
        ]
    },
    {
        "menu": "Combos",
        "selected": false,
        "itens": [
            {
                "img": "/assets/images/cardapio/garrafa-tanqueray.png",
                "description": "Combo Tanqueray",
                "value": 300
            },
            {
                "img": "/assets/images/cardapio/garrafa-buchanans.png",
                "description": "Combo Buchanans",
                "value": 420
            },
            {
                "img": "/assets/images/cardapio/garrafa-old-parr.png",
                "description": "Combo Old Parr",
                "value": 310
            },
            {
                "img": "/assets/images/cardapio/garrafa-red-label.png",
                "description": "Combo Red Label",
                "value": 240
            },
            {
                "img": "/assets/images/cardapio/garrafa-black-label.png",
                "description": "Combo Black Label",
                "value": 350
            },
            {
                "img": "/assets/images/cardapio/garrafa-gold-label-1l.JPG",
                "description": "Combo Gold Label",
                "value": 460
            },
            // {
            //     "img": "/assets/images/cardapio/garrafa-blue-label.png",
            //     "description": "Combo Blue Label",
            //     "value": 2100
            // },
            // {
            //     "img": "/assets/images/cardapio/royal-salut.png",
            //     "description": "Combo Royal Salute",
            //     "value": 1600
            // },
            
            // {
            //     "img": "/assets/images/cardapio/garrafa-bombay.png",
            //     "description": "Combo Bombay",
            //     "value": 280
            // },
            // {
            //     "img": "/assets/images/cardapio/garrafa-ciroc.PNG",
            //     "description": "Combo Ciroc Tradicional ",
            //     "value": 320
            // },
            {
                "img": "/assets/images/cardapio/garrafa-ciroc-red.PNG",
                "description": "Combo Ciroc Red Berry",
                "value": 350
            },
            // {
            //     "img": "/assets/images/cardapio/garrafa-ciroc-pineapple.PNG",
            //     "description": "Combo Ciroc Pineapple",
            //     "value": 420
            // },
            {
                "img": "/assets/images/cardapio/garrafa-jack-daniels.png",
                "description": "Combo Jack Daniels",
                "value": 310
            },
            // {
            //     "img": "/assets/images/cardapio/garrafa-jack-daniels-maca.png",
            //     "description": "Combo Jack Daniels Maça Verde",
            //     "value": 420
            // },
            {
                "img": "/assets/images/cardapio/garrafa-jack-daniels-mel.JPG",
                "description": "Combo Jack Daniels Mel ",
                "value": 320
            },
        ],
    },
    {
        "menu": "Doses",
        "selected": false,
        "itens": [
            {
                "img": "/assets/images/cardapio/doses/dose-red-label.jpeg",
                "description": "Dose Red Label",
                "value": 25
            },
            {
                "img": "/assets/images/cardapio/doses/dose-black-label.jpeg",
                "description": "Dose Black Label",
                "value": 35
            },
            {
                "img": "/assets/images/cardapio/doses/dose-jack-daniels.jpeg",
                "description": "Dose Jack Daniel's",
                "value": 35
            },
            {
                "img": "/assets/images/cardapio/doses/dose-licor43-2.png",
                "description": "Dose Licor 43",
                "value": 25
            },
        ]
    },
    {
        "menu": "Drinks Prontos",
        "selected": false,
        "itens": [
            {
                "img": "/assets/images/cardapio/smirnoff-ice-3.png",
                "description": "Vodka Sminorff Ice Limão Garrafa 275 ml",
                "value": 15
            },
            {
                "img": "/assets/images/cardapio/skol-beats.png",
                "description": "SKOL BEATS Senses 269ml",
                "value": 15
            },
            {
                "img": "/assets/images/cardapio/garrafa-draft.png",
                "description": "Chopp de Vinho Draft 600ml",
                "value": 25
            },
        ]
    },
    // {
    //     "menu": "Refrigerantes",
    //     "selected": false,
    //     "itens": [
    //         {
    //             "img": "/assets/images/cardapio/coca-lata.png",
    //             "description": "Coca Cola 350ml",
    //             "value": 6.5
    //         },
    //         {
    //             "img": "/assets/images/cardapio/guarana-lata.png",
    //             "description": "Guaraná Antarctica 350ml",
    //             "value": 6.5
    //         },
    //         {
    //             "img": "/assets/images/cardapio/fanta-uva.png",
    //             "description": "Fanta Uva 350ml",
    //             "value": 6.5
    //         },
    //         {
    //             "img": "/assets/images/cardapio/fanta-laranja.png",
    //             "description": "Fanta Laranja 350ml",
    //             "value": 6.5
    //         },
    //     ]
    // },
    {
        "menu": "Não Alcoólicos",
        "selected": false,
        "itens": [
            {
                "img": "/assets/images/cardapio/agua-mineral.png",
                "description": "Água sem gás",
                "value": 5
            },
            {
                "img": "/assets/images/cardapio/agua-mineral.png",
                "description": "Água com gás",
                "value": 5
            },
            {
                "img": "/assets/images/cardapio/red-bull-normal.png",
                "description": "Red Bull Tradicional",
                "value": 15
            },
            {
                "img": "/assets/images/cardapio/red-bull-melancia.png",
                "description": "Red Bull Tropical",
                "value": 15
            },
            {
                "img": "/assets/images/cardapio/red-bull-tropical.png",
                "description": "Red Bull Melancia",
                "value": 15
            },
            {
                "img": "/assets/images/cardapio/tonica.png",
                "description": "Água Tônica",
                "value": 6.50
            },
            {
                "img": "/assets/images/cardapio/coca-lata.png",
                "description": "Coca Cola 350ml",
                "value": 6.5
            },
            {
                "img": "/assets/images/cardapio/guarana-lata.png",
                "description": "Guaraná Antarctica 350ml",
                "value": 6.5
            },
            {
                "img": "/assets/images/cardapio/fanta-uva.png",
                "description": "Fanta Uva 350ml",
                "value": 6.5
            },
            {
                "img": "/assets/images/cardapio/fanta-laranja.png",
                "description": "Fanta Laranja 350ml",
                "value": 6.5
            },
        ]
    },
    // {
    //     "menu": "Comidas",
    //     "selected": false,
    //     "itens": [
    //         {
    //             "img": "/assets/images/cardapio/comidas/mini-hamburguer.jpeg",
    //             "title": "Mini Hamburguer",
    //             "description": "1 Salad | 1 Picles | 1 Clássico | 1 Kids.",
    //             "value": 40
    //         },
    //         {
    //             "img": "/assets/images/cardapio/comidas/pop-chicken.jpeg",
    //             "title": "Pop Chicken",
    //             "description": "Iscas de frango cobertas com cheddar, bacon, barbecue e parmesão",
    //             "value": 55
    //         },
    //     ]
    // },
]
