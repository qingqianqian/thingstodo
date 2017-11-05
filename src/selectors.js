import { createSelector } from 'reselect';

export const things = s => s.asd || s.sd || {};
export const key = s => s.key || '';
export const selectedId = s => s.selectedId || ''

export const list = createSelector(
    things,
    o => Object.keys(o).map(x => o[x])
)

export const filteredList = createSelector(
    list,
    key,
    (l, k) => l.filter(x => x.title.indexOf(k) > -1)
)

export const filteredThing = createSelector(
  list,
  selectedId,
  (l, k) => {
    console.log(k);
    console.log(l[0]);
    return l.find(x => x.num === k)
  }
)

export const artists = s => s.artists || {};

export const theArtist = aname => artists.filter(x => x.name === aname);