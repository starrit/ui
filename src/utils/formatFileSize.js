function precisionRound(number, precision = 2) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

export default function(bytes) {
  const kb = bytes / 1024;
  const mb = kb / 1024;
  const gb = mb / 1024;

  if (gb >= 1) {
    return `${precisionRound(gb)} GB`;
  }
  else if (mb >= 1) {
    return `${precisionRound(mb)} MB`;
  }
  else if (kb >= 1) {
    return `${precisionRound(kb)} KB`;
  }
  else {
    return `${bytes} Bytes`;
  }
}
