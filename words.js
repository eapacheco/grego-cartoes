const Noun = "noun"
const Adjective = "adjective"
const Conjuction = "conjunction"
const Pronoun = "pronoun"
const Adverb = "adverb"
const Pronominal = "pronominal"
const Numeral = "numeral"
const Preposition = "preposition"
const Verb = "verb"

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
  {
    greek: "ἀλλά",
    portuguese: "mas, porém, exceto",
    clazz: Conjuction,
    volume: 4
  },
  {
    greek: "ἁμαρτία",
    sub1: "-ɑς",
    sub2: "ἡ",
    portuguese: "pecado",
    clazz: Noun,
    volume: 4
  },
  {
    greek: "ἀρχιερεύς",
    sub1: "-έως",
    sub2: "ὁ",
    portuguese: "sumo sacerdote, sacerdote principal",
    clazz: Noun,
    volume: 4
  },
  {
    greek: "δέ",
    portuguese: "mas, porém, e, também (Muitas vezes não é necessário traduzir)",
    clazz: Conjuction,
    volume: 4
  },
  {
    greek: "δοῦλος",
    sub1: "-ου",
    sub2: "ὁ",
    portuguese: "escravo",
    clazz: Noun,
    volume: 4
  },
  {
    greek: "ἔθνος",
    sub1: "-ους",
    sub2: "τό",
    portuguese: "povo, nação",
    clazz: Noun,
    volume: 4
  },
  {
    greek: "ἐκεῖνος",
    sub1: "-η",
    sub2: "-ο",
    portuguese: "aquele(a)",
    clazz: Pronominal,
    volume: 4
  },
  {
    greek: "ἑπτά",
    portuguese: "sete",
    clazz: Numeral,
    volume: 4
  },
  {
    greek: "ἵνα",
    portuguese: "para que, a fim de que; que, de que modo",
    clazz: Conjuction,
    volume: 4
  },
  {
    greek: "οὐ",
    sub1: "οὐκ",
    sub2: "οὐχ",
    portuguese: "não",
    clazz: Adverb,
    volume: 4
  },
  {
    greek: "οὖν",
    portuguese: "pois, portanto; então",
    clazz: Adverb,
    volume: 4
  },
  {
    greek: "ὄχλος",
    sub1: "-ου",
    sub2: "ὁ",
    portuguese: "multidão",
    clazz: Noun,
    volume: 4
  },
  {
    greek: "πόλις",
    sub1: "-εως",
    sub2: "ἡ",
    portuguese: "cidade",
    clazz: Adverb,
    volume: 4
  },
  {
    greek: "πρός",
    portuguese: "para, em prol de, para que, junto a, com",
    clazz: Preposition,
    volume: 4
  },
  {
    greek: "χάρις",
    sub1: "-℩τος",
    sub2: "ἡ",
    portuguese: "graça",
    clazz: Noun,
    volume: 4
  },
  {
    greek: "χείρ",
    sub1: "χειρός",
    sub2: "ἡ",
    portuguese: "mão",
    clazz: Noun,
    volume: 4
  },
  {
    greek: "λαός",
    sub1: "-οῦ",
    sub2: "ὁ",
    portuguese: "povo",
    clazz: Noun,
    volume: 4
  },
  {
    greek: "ἀγάπη",
    sub1: "-ης",
    sub2: "ἡ",
    portuguese: "amor",
    clazz: Noun,
    volume: 5
  },
  {
    greek: "αἰών",
    sub1: "-ῶνος",
    sub2: "ὁ",
    portuguese: "idade, era, século; eternidade",
    clazz: Noun,
    volume: 5
  },
  {
    greek: "ἀκούω",
    portuguese: "eu ouço, eu escuto",
    clazz: Verb,
    volume: 5
  },
  {
    greek: "γάρ",
    portuguese: "pois, portanto; assim pois; a saber; com efeito; certamente",
    clazz: Conjuction,
    volume: 5
  },
  {
    greek: "γινώσκω",
    portuguese: "eu sei; eu conheço; eu compreendo",
    clazz: Verb,
    volume: 5
  },
  {
    greek: "γράφω",
    portuguese: "eu escrevo",
    clazz: Verb,
    volume: 5
  },
  {
    greek: "δικαιωσύνη",
    sub1: "-ης",
    sub2: "ἡ",
    portuguese: "justiça",
    clazz: Noun,
    volume: 5
  },
  {
    greek: "εἰρήνη",
    sub1: "-ης",
    sub2: "ἡ",
    portuguese: "paz",
    clazz: Noun,
    volume: 5
  },
  {
    greek: "εἰς",
    portuguese: "para; até; entre; por causa de",
    clazz: Preposition,
    volume: 5
  },
  {
    greek: "εὑρίσκω",
    portuguese: "eu encontro",
    clazz: Verb,
    volume: 5
  },
  {
    greek: "θάνατός",
    sub1: "-ου",
    sub2: "ὁ",
    portuguese: "morte",
    clazz: Noun,
    volume: 5
  },
  {
    greek: "λαλέω",
    portuguese: "du falo",
    clazz: Verb,
    volume: 5
  },
  {
    greek: "πολύς",
    sub1: "πολλή",
    sub2: "πολύ",
    portuguese: "muito(s), muita(s)",
    clazz: Adjective,
    volume: 5
  },
  {
    greek: "σάρξ",
    sub1: "σαρκός",
    sub2: "ἡ",
    portuguese: "carne",
    clazz: Noun,
    volume: 5
  },
  {
    greek: "σῶμα",
    sub1: "-ατος",
    sub2: "τό",
    portuguese: "corpo",
    clazz: Noun,
    volume: 5
  },
  {
    greek: "φωνή",
    sub1: "-ῆς",
    sub2: "ἡ",
    portuguese: "voz; som",
    clazz: Noun,
    volume: 5
  },
];