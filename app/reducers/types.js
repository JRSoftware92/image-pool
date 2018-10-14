import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type rootStateType = {
  +photos: Photo[],
  +activePhoto: Photo
};

export type Photo = {
  +id: string,
  +src: string,
  +caption: string
};

export type Action = {
  +type: string
};

export type GetState = () => rootStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
