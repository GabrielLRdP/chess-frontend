//fonction qui traduit un FEN de ce type : "r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1"
// vers ce type : r0bk000r/p00pBpNp/n0000n00/0p0NP00P/000000P0/000P0000/P0P0K000/q0000b0

const fenExpander = (fen: string): string => {
  let translatedFen = fen;
  //1ère étape, on change notre chaine de caractère pour transformer les nombres en cases vides

  const reg = new RegExp("\\d+", "g");
  const numbers = fen.match(reg);

  //fonction qui va convertir un nombre en une chaine de caractère contenant n fois 0
  //exemple convert(3) => "000" convert (5) => "00000"
  const convert = (num: string) => {
    let str = "";
    for (let i = 0; i < Number(num); i++) {
      str += "0";
    }
    return str;
  };
  // fen = "r1bk3r/p2pBpNp/n4n2/1p1NP2P/6P1/3P4/P1P1K3/q5b1";
  numbers &&
    numbers.forEach((element) => {
      translatedFen = translatedFen.replace(
        element.toString(),
        convert(element)
      );
    });
  return translatedFen;
};

export { fenExpander };
