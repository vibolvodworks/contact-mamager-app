export interface ISocialNetworks {
    facebook: string,
    instagram: string,
    linkedin: string,
    twitter: string
  };
  export interface IPerson {
    avatar: string,
    city: string,
    company: string,
    id: number | string,
    key?: string,
    isContact: boolean,
    isFavourite: boolean,
    name: string,
    position: string,
    social_networks: ISocialNetworks
  };

  export interface IInitialState {
    people: IPerson[],
    filterPeople: IPerson[],
    searchTerm: string,
    location: string,
    loading: boolean,
}

export interface IState {
    peopleReducer: IInitialState
}