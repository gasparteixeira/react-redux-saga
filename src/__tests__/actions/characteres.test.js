import { put, call, take } from "redux-saga/effects";
import { fetchCharacteres, getCharacters } from "../../actions/characters";
import { RECEIVE_CHARACTERS } from "../../constants";

describe("fetchCharacteres", () => {
  it("should call the api", () => {
    const gen = fetchCharacteres();
    expect(gen.next().value).toEqual(call(getCharacters));
    expect(gen.next().done).toBeTruthy();
    expect(gen.next().done).toBeTruthy();
  });
});
