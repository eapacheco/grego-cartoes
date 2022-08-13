const Noun = "noun"
const Adjective = "adjective"
const Conjuction = "conjunction"
const Pronoun = "pronoun"

let words = [
  {
    greek: "ἀδελφή",
    sub1: "-ῆ",
    sub2: "ἡ",
    portuguese: "irmã",
    clazz: Noun,
    volume: 1
  },
  {
    greek: "ἀνήρ",
    sub1: "ἀνδρός",
    sub2: "ὁ",
    portuguese: "homem; marido",
    clazz: Noun,
    volume: 1
  },
  {
    greek: "βασιλεία",
    sub1: "-ɑς",
    sub2: "ἡ",
    portuguese: "reino",
    clazz: Noun,
    volume: 1
  },
  {
    greek: "γυνή",
    sub1: "γυναῖκος",
    sub2: "ἡ",
    portuguese: "mulher; esposa",
    clazz: Noun,
    volume: 1
  },
  {
    greek: "δόξα",
    sub1: "-ῆ",
    sub2: "ἡ",
    portuguese: "glória",
    clazz: Noun,
    volume: 1
  },
  {
    greek: "ζωή",
    sub1: "-ῆ",
    sub2: "ἡ",
    portuguese: "vida (espiritual)",
    clazz: Noun,
    volume: 1
  },
  {
    greek: "καθαρός",
    sub1: "-ά",
    sub2: "-ὁν",
    portuguese: "puro(a)",
    clazz: Adjective,
    volume: 1
  },
  {
    greek: "κύριος",
    sub1: "-ου",
    sub2: "ὁ",
    portuguese: "senhor",
    clazz: Noun,
    volume: 1
  },
  {
    greek: "λόγος",
    sub1: "-ου",
    sub2: "ὁ",
    portuguese: "palavra",
    clazz: Noun,
    volume: 1
  },
  {
    greek: "μαθητής",
    sub1: "οῦ",
    sub2: "ὁ",
    portuguese: "discípulo",
    clazz: Noun,
    volume: 1
  },
  {
    greek: "περιτομή",
    sub1: "-ῆς",
    sub2: "ἡ",
    portuguese: "circunsição",
    clazz: Noun,
    volume: 1
  },
  {
    greek: "ἅγιος",
    sub1: "-ɑ",
    sub2: "-ον",
    portuguese: "santo(a)",
    clazz: Adjective,
    volume: 2
  },
  {
    greek: "ἀδελφός",
    sub1: "-ου",
    sub2: "ὁ",
    portuguese: "irmão",
    clazz: Noun,
    volume: 2
  },
  {
    greek: "ἄνθρωπος",
    sub1: "-ου",
    sub2: "ὁ",
    portuguese: "homem; ser humano",
    clazz: Noun,
    volume: 2
  },
  {
    greek: "γῆ",
    sub1: "γῆς",
    sub2: "ἡ",
    portuguese: "Terra; terra",
    clazz: Noun,
    volume: 2
  },
  {
    greek: "ἐν",
    portuguese: "em; com; por",
    clazz: Conjuction,
    volume: 2
  },
  {
    greek: "ἡμέρα",
    sub1: "-ɑς",
    sub2: "ἡ",
    portuguese: "dia",
    clazz: Noun,
    volume: 2
  },
  {
    greek: "θεός",
    sub1: "-οῦ",
    sub2: "ὁ",
    portuguese: "Deus; deus",
    clazz: Noun,
    volume: 2
  },
  {
    greek: "καί",
    portuguese: "e; mas; também",
    clazz: Conjuction,
    volume: 2
  },
  {
    greek: "οὐρανός",
    sub1: "-οῦ",
    sub2: "ὁ",
    portuguese: "céu(s)",
    clazz: Noun,
    volume: 2
  },
  {
    greek: "πατήρ",
    sub1: "πατρός",
    sub2: "ὁ",
    portuguese: "pai",
    clazz: Noun,
    volume: 2
  },
  {
    greek: "πνεῦμα",
    sub1: "-ατος",
    sub2: "τό",
    portuguese: "Espírito; espírito",
    clazz: Noun,
    volume: 2
  },
  {
    greek: "υἱός",
    sub1: "-οῦ",
    sub2: "ὁ",
    portuguese: "filho",
    clazz: Noun,
    volume: 2
  },
  {
    greek: "ἄγγελος",
    sub1: "-ου",
    sub2: "ὁ",
    portuguese: "anjo; mensageiro",
    clazz: Noun,
    volume: 3
  },
  {
    greek: "αὐτός",
    portuguese: "ele",
    clazz: Pronoun,
    volume: 3
  },
  {
    greek: "ἐγώ",
    portuguese: "eu",
    clazz: Pronoun,
    volume: 3
  },
  {
    greek: "ἔργον",
    sub1: "-ου",
    sub2: "τό",
    portuguese: "trabalho",
    clazz: Noun,
    volume: 3
  },
  {
    greek: "καρδία",
    sub1: "-ɑς",
    sub2: "ἡ",
    portuguese: "coração",
    clazz: Noun,
    volume: 3
  },
  {
    greek: "κόσμος",
    sub1: "-ου",
    sub2: "ὁ",
    portuguese: "mundo",
    clazz: Noun,
    volume: 3
  },
  {
    greek: "μέγας",
    sub1: "μεγάλη",
    sub2: "μέγα",
    portuguese: "grande",
    clazz: Adjective,
    volume: 3
  },
  {
    greek: "νεκρός",
    sub1: "-ά",
    sub2: "-όν",
    portuguese: "morto",
    clazz: Noun,
    volume: 3
  },
  {
    greek: "νόμος",
    sub1: "-ου",
    sub2: "ὁ",
    portuguese: "lei",
    clazz: Noun,
    volume: 3
  },
  {
    greek: "ὅτι",
    portuguese: "que; porque",
    clazz: Pronoun,
    volume: 3
  },
  {
    greek: "σύ",
    portuguese: "tu",
    clazz: Pronoun,
    volume: 3
  },
  {
    greek: "ὡς",
    portuguese: "como; conforme",
    clazz: Conjuction,
    volume: 3
  },
];