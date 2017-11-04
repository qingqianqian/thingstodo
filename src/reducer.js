

export default (s = {}, a) => {
  switch (a.type) {
    //case 'load':
    //  return { ...s, sd: a.ad };
    case 'loadF':
    return { ...s,  sd: a.ad };
    
    case 'loadAll':
      return { ...s, asd: a.asd };

    case 'key':
      return { ...s, key: a.key };

    case 'artists':
      return { ...s, artists: a.artists };

    case 'artist':
      return { ...s, artist: a.artist };

    case 'postThing':
      return { ...s, postedThing: a.postedThing };

    case 'postAllThings':
      return { ...s, saved: true };

    default:
      return s;
  }
}

