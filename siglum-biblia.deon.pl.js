/*!
 * Siglum for Biblia.DEON.PL
 * http://doleczek.pl/
 *
 * Copyright Jan Doleczek <jan@doleczek.pl>
 * Released under the MIT license
 *
 * Date: 21-08-2017
 */

var Siglum = function(param){
    param = param || {};

    if (typeof param === 'string') {
        var nodes = document.querySelectorAll(param);

        for (var i = 0; i < nodes.length; i++) {
            Siglum.siglify(nodes[i]);
        }
    } else if (typeof param.innerHTML === 'string') {
        Siglum.siglify(param);
    } else {
        console.log('Nieprawidłowy parametr');
    }
};

Siglum.books = {
    'Rdz': 'Księga Rodzaju',
    'Wj': 'Księga Wyjścia',
    'Kpł': 'Księga Kapłańska',
    'Lb': 'Księga Liczb',
    'Pwt': 'Księga Powtórzonego Prawa',
    'Joz': 'Księga Jozuego',
    'Sdz': 'Księga Sędziów',
    'Rt': 'Księga Rut',
    '1 Sm': '1 Księga Samuela',
    '1Sm': '1 Księga Samuela',
    '2 Sm': '2 Księga Samuela',
    '2Sm': '2 Księga Samuela',
    '1 Krl': '1 Księga Królewska',
    '1Krl': '1 Księga Królewska',
    '2 Krl': '2 Księga Królewska',
    '2Krl': '2 Księga Królewska',
    '1 Krn': '1 Księga Kronik',
    '1Krn': '1 Księga Kronik',
    '2 Krn': '2 Księga Kronik',
    '2Krn': '2 Księga Kronik',
    'Ezd': 'Księga Ezdrasza',
    'Ne': 'Księga Nehemiasza',
    'Tb': 'Księga Tobiasza',
    'Jdt': 'Księga Judyty',
    'Est': 'Księga Estery',
    '1 Mch': '1 Księga Machabejska',
    '1Mch': '1 Księga Machabejska',
    '2 Mch': '2 Księga Machabejska',
    '2Mch': '2 Księga Machabejska',
    'Hi': 'Księga Hioba',
    'Ps': 'Księga Psalmów',
    'Prz': 'Księga Przysłów',
    'Koh': 'Księga Koheleta',
    'PnP': 'Pieśń nad pieśniami',
    'Mdr': 'Księga Mądrości',
    'Syr': 'Mądrość Syracha',
    'Iz': 'Księga Izajasza',
    'Jr': 'Księga Jeremiasza',
    'Lm': 'Lamentacje Jeremiasza',
    'Ba': 'Księga Barucha',
    'Ez': 'Księga Ezechiela',
    'Dn': 'Księga Daniela',
    'Oz': 'Księga Ozeasza',
    'Jl': 'Księga Joela',
    'Am': 'Księga Amosa',
    'Ab': 'Księga Abdiasza',
    'Jon': 'Księga Jonasza',
    'Mi': 'Księga Micheasza',
    'Na': 'Księga Nahuma',
    'Ha': 'Księga Habakuka',
    'So': 'Księga Sofoniasza',
    'Ag': 'Księga Aggeusza',
    'Za': 'Księga Zachariasza',
    'Ml': 'Księga Malachiasza',
    'Mt': 'Ewangelia wg św. Mateusza',
    'Mk': 'Ewangelia wg św. Marka',
    'Łk': 'Ewangelia wg św. Łukasza',
    'J': 'Ewangelia wg św. Jana',
    'Dz': 'Dzieje Apostolskie',
    'Rz': 'List do Rzymian',
    '1 Kor': '1 List do Koryntian',
    '1Kor': '1 List do Koryntian',
    '2 Kor': '2 List do Koryntian',
    '2Kor': '2 List do Koryntian',
    'Ga': 'List do Galatów',
    'Ef': 'List do Efezjan',
    'Flp': 'List do Filipian',
    'Kol': 'List do kolosa',
    '1 Tes': '1 List do Tesaloniczan',
    '1Tes': '1 List do Tesaloniczan',
    '2 Tes': '2 List do Tesaloniczan',
    '2Tes': '2 List do Tesaloniczan',
    '1 Tm': '1 List do Tymoteusza',
    '1Tm': '1 List do Tymoteusza',
    '2 Tm': '2 List do Tymoteusza',
    '2Tm': '2 List do Tymoteusza',
    'Tt': 'List do Tytusa',
    'Flm': 'List do Filemona',
    'Hbr': 'List do Hebrajczyków',
    'Jk': 'List Jakuba',
    '1P': '1 List Piotra',
    '2P': '2 List Piotra',
    '1J': '1 List Jana',
    '2J': '2 List Jana',
    '3J': '3 List Jana',
    'Jud': 'List Judy',
    'Ap': 'Apokalipsa św. Jana (Objawienie św. Jana)'
};

Siglum.booksLowerCase = {};

for (var k in Siglum.books) {
    Siglum.booksLowerCase[k.toLowerCase()] = Siglum.books[k];
}

Siglum.regExp = new RegExp('\\b(' + Object.keys(Siglum.books).join('|') + ') [1-9][0-9]*(,([ ]){0,1}([1-9][0-9]*([a-c]){0,1})([-–][1-9][0-9]*([a-c]){0,1}){0,1}){0,1}\\b', 'gi');
Siglum.regExpBook = new RegExp('(' + Object.keys(Siglum.books).join('|') + ')', 'gi');

Siglum.siglify = function(node) {
    if ((node.tagName || '').toLowerCase() === 'a') {
        return;
    }

    if ((' ' + node.className + ' ').indexOf(' no-siglum ') >= 0) {
        return;
    }

    if (!node.tagName) {
        var match = node.textContent.match(Siglum.regExp);

        if (!match) {
            return;
        }


        if (!!match.length) {
            var siglum = '',
                aSiglum,
                book,
                addr;

            for (var i = 0; i < match.length; i++) {
                if (match[i].length > siglum.length) {
                    siglum = match[i];
                }
            }

            var parts = node.textContent.split(siglum);
            var part = parts.shift();

            if (!!part) {
                part = document.createTextNode(part);
                node.parentNode.insertBefore(part, node);
                Siglum.siglify(part);
            }

            for (var i = 0; i < parts.length; i++) {
                book = siglum.match(Siglum.regExpBook)[0].toLowerCase();
                addr = siglum.substr(book.length).split(',');
                aSiglum = document.createElement('a');
                aSiglum.title = Siglum.booksLowerCase[book] + '\nrozdział: ' + addr[0] + (addr[1] ? '\nwers: ' + addr[1] : '');
                aSiglum.href = 'http://biblia.deon.pl/otworz.php?skrot=' + book + ' ' + addr[0].replace(/[ \t]/g, '') + (addr[1] ? '#W' + addr[1].replace(/[ ]/g, '').split('-')[0].split('–')[0] : '');
                aSiglum.target = '_blank';
                aSiglum.appendChild(document.createTextNode(siglum));
                node.parentNode.insertBefore(aSiglum, node);

                part = document.createTextNode(parts[i]);
                node.parentNode.insertBefore(part, node);
                Siglum.siglify(part);
            }

            node.parentNode.removeChild(node);
        }

        return;
    }

    var children = node.childNodes || [];

    for (var i = 0; i < children.length; i++) {
        Siglum.siglify(children[i]);
    }
};
