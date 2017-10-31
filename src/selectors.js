import { createSelector } from 'reselect';

export const things = s => s.sd || {};
export const key = s => s.key || '';

export const list = createSelector(
    things,
    o => Object.keys(o).map(x => o[x])
)

export const filteredList = createSelector(
    list,
    key,
    (l, k) => l.filter(x => x.title.indexOf(k) > -1)
)

export const artists = s => s.artists || {};

export const theArtist = aname => artists.filter(x => x.name === aname);