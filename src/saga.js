import { takeEvery } from 'redux-saga';
import { put } from 'redux-saga/effects';

function* getArtists(a) {
  const artists = yield fetch('http://192.168.1.136:1000/music/artists').then(r => r.json());
  yield put({ type: 'artists', artists });
}

function* getArtist(a) {
  const artist = yield fetch(`http://192.168.1.136:1000/music/artist/${a.artistName}`).then(r => r.json());
  yield put({ type: 'artist', artist });
}

export function* watch() {
  yield [
    takeEvery('get_artists', getArtists),
    takeEvery('get_artist', getArtist)
  ];
}