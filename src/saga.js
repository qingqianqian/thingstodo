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

const postData = (url, data) => {
  return fetch(url, {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    method: "POST",
    body: JSON.stringify(data)
  });
}

function* postThing(a) {
  const postedThing = yield postData(`http://localhost:3000/addthing`, a.data).then(r => r.json());
  yield put({ type: 'postThing', postedThing });
}

export function* watch() {
  yield [
    takeEvery('get_artists', getArtists),
    takeEvery('get_artist', getArtist),
    takeEvery('save', postThing)
  ];
}