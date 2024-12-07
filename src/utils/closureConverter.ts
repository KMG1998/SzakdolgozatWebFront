function convertClosure(closureType:number): string{
  switch (closureType){
    case 1: return 'teljesítve'
    case 2: return 'sofőr elutasítás'
    case 3: return 'utas lemondás'
    case 4: return 'folyamatban'
    default: return 'ismeretlen'
  }
}

export default convertClosure
