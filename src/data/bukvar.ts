export interface BukvarLetter {
  letter: string
  upper: string
  lower: string
  words: { word: string; emoji: string; syllables: string }[]
}

export const BUKVAR_LETTERS: BukvarLetter[] = [
  {
    letter: 'А',
    upper: 'А',
    lower: 'а',
    words: [
      { word: 'Арбуз',   emoji: '🍉', syllables: 'АР-БУЗ'   },
      { word: 'Аист',    emoji: '🐦', syllables: 'А-ИСТ'    },
      { word: 'Автобус', emoji: '🚌', syllables: 'АВ-ТО-БУС' },
    ],
  },
  {
    letter: 'Б',
    upper: 'Б',
    lower: 'б',
    words: [
      { word: 'Барабан', emoji: '🥁', syllables: 'БА-РА-БАН' },
      { word: 'Бабочка', emoji: '🦋', syllables: 'БА-БОЧ-КА' },
      { word: 'Банан',   emoji: '🍌', syllables: 'БА-НАН'   },
    ],
  },
  {
    letter: 'В',
    upper: 'В',
    lower: 'в',
    words: [
      { word: 'Волк',     emoji: '🐺', syllables: 'ВОЛК'     },
      { word: 'Велосипед', emoji: '🚲', syllables: 'ВЕ-ЛО-СИ-ПЕД' },
      { word: 'Ворона',   emoji: '🐦‍⬛', syllables: 'ВО-РО-НА' },
    ],
  },
  {
    letter: 'Г',
    upper: 'Г',
    lower: 'г',
    words: [
      { word: 'Гриб',   emoji: '🍄', syllables: 'ГРИБ'   },
      { word: 'Гусь',   emoji: '🦢', syllables: 'ГУСЬ'   },
      { word: 'Гитара', emoji: '🎸', syllables: 'ГИ-ТА-РА' },
    ],
  },
  {
    letter: 'Д',
    upper: 'Д',
    lower: 'д',
    words: [
      { word: 'Дом',    emoji: '🏠', syllables: 'ДОМ'    },
      { word: 'Дерево', emoji: '🌳', syllables: 'ДЕ-РЕ-ВО' },
      { word: 'Дельфин', emoji: '🐬', syllables: 'ДЕЛ-ФИН' },
    ],
  },
  {
    letter: 'Е',
    upper: 'Е',
    lower: 'е',
    words: [
      { word: 'Ёж',   emoji: '🦔', syllables: 'ЁЖ'   },
      { word: 'Ель',  emoji: '🌲', syllables: 'ЕЛЬ'  },
      { word: 'Енот', emoji: '🦝', syllables: 'Е-НОТ' },
    ],
  },
  {
    letter: 'Ж',
    upper: 'Ж',
    lower: 'ж',
    words: [
      { word: 'Жираф',    emoji: '🦒', syllables: 'ЖИ-РАФ'   },
      { word: 'Жук',      emoji: '🪲', syllables: 'ЖУК'      },
      { word: 'Журавль', emoji: '🐦', syllables: 'ЖУ-РАВЛЬ' },
    ],
  },
  {
    letter: 'З',
    upper: 'З',
    lower: 'з',
    words: [
      { word: 'Зебра',  emoji: '🦓', syllables: 'ЗЕБ-РА'  },
      { word: 'Зонт',   emoji: '☂️', syllables: 'ЗОНТ'    },
      { word: 'Змея',   emoji: '🐍', syllables: 'ЗМЕ-Я'   },
    ],
  },
  {
    letter: 'И',
    upper: 'И',
    lower: 'и',
    words: [
      { word: 'Игла',    emoji: '🪡', syllables: 'ИГ-ЛА'  },
      { word: 'Индюк',   emoji: '🦃', syllables: 'ИН-ДЮК' },
      { word: 'Ива',     emoji: '🌿', syllables: 'И-ВА'   },
    ],
  },
  {
    letter: 'К',
    upper: 'К',
    lower: 'к',
    words: [
      { word: 'Кот',      emoji: '🐱', syllables: 'КОТ'      },
      { word: 'Корова',   emoji: '🐄', syllables: 'КО-РО-ВА' },
      { word: 'Кенгуру', emoji: '🦘', syllables: 'КЕН-ГУ-РУ' },
    ],
  },
  {
    letter: 'Л',
    upper: 'Л',
    lower: 'л',
    words: [
      { word: 'Лиса',  emoji: '🦊', syllables: 'ЛИ-СА'  },
      { word: 'Лев',   emoji: '🦁', syllables: 'ЛЕВ'    },
      { word: 'Лягушка', emoji: '🐸', syllables: 'ЛЯ-ГУШ-КА' },
    ],
  },
  {
    letter: 'М',
    upper: 'М',
    lower: 'м',
    words: [
      { word: 'Мышь',     emoji: '🐭', syllables: 'МЫШЬ'     },
      { word: 'Медведь', emoji: '🐻', syllables: 'МЕД-ВЕДЬ' },
      { word: 'Машина',  emoji: '🚗', syllables: 'МА-ШИ-НА'  },
    ],
  },
]
