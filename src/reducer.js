

export default (s = {}, a) => {
  switch (a.type) {
    case 'load':
      return { ...s, sd: a.ad };

    case 'key':
      return { ...s, key: a.key };

    case 'artists':
      return { ...s, artists: a.artists };

    case 'artist':
      return { ...s, artist: a.artist };

    case 'postThing':
      return { ...s, postedThing: a.postedThing };

    default:
      return s;
  }
}

