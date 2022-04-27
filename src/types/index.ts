export interface PlayersModel {
  id: number;
  firstname: string;
  lastname: string;
  birth: {
    date: string;
    country: string;
  };
  height: {
    meters: string;
  };
  weight: {
    kilograms: string;
  };
  college: string;
  affiliation: string;
}

export interface TeamModel {
  name: string;
  logo: string;
  nickname: string;
  id: number;
  code: string;
  city: string;
}
