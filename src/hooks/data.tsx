/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
  useEffect,
} from 'react';
import { PlayersModel, TeamModel } from '@/types';
import api from '../services/api';

interface DataProviderProps {
  children: ReactNode;
}

interface IDataContextData {
  getAllTeams(): Promise<void>;
  getTeamData(id: number): Promise<void>;
  getPlayersData(id: number): Promise<void>;
  getPlayerData(id: number): Promise<void>;
  teams: TeamModel[];
  team: TeamModel[];
  players: PlayersModel[];
  player: PlayersModel[];
  isLoading: boolean;
}

const DataContext = createContext({} as IDataContextData);

function DataProvider({ children }: DataProviderProps) {
  const [teams, setTeams] = useState<TeamModel[]>([]);
  const [team, setTeam] = useState<TeamModel[]>([]);
  const [players, setPlayers] = useState<PlayersModel[]>([]);
  const [player, setPlayer] = useState<PlayersModel[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const API_HOST = 'api-nba-v1.p.rapidapi.com';
  const API_KEY = '59959380d8msh8fb82788d70798cp17299ejsn3534800d2a32';

  async function getAllTeams() {
    try {
      setIsLoading(true);
      const teamsData = await api.get('/teams', {
        headers: {
          'X-RapidAPI-Host': `${API_HOST}`,
          'X-RapidAPI-Key': `${API_KEY}`,
        },
      });

      if (teamsData.status === 200) {
        setTeams(teamsData.data.response);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  }

  async function getTeamData(id: number) {
    try {
      setIsLoading(true);
      const teamData = await api.get(`/teams?id=${id}`, {
        headers: {
          'X-RapidAPI-Host': `${API_HOST}`,
          'X-RapidAPI-Key': `${API_KEY}`,
        },
      });
      if (teamData.status === 200) {
        setTeam(teamData.data.response);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  }

  async function getPlayersData(id: number) {
    try {
      setIsLoading(true);
      const playersData = await api.get(`/players?&team=${id}&season=2021`, {
        headers: {
          'X-RapidAPI-Host': `${API_HOST}`,
          'X-RapidAPI-Key': `${API_KEY}`,
        },
      });

      if (playersData.status === 200) {
        setPlayers(playersData.data.response);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  }

  async function getPlayerData(id: number) {
    try {
      setIsLoading(true);
      const playerData = await api.get(`/players?id=${id}`, {
        headers: {
          'X-RapidAPI-Host': `${API_HOST}`,
          'X-RapidAPI-Key': `${API_KEY}`,
        },
      });

      if (playerData.status === 200) {
        setPlayer(playerData.data.response);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(true);
    }
  }

  const values = useMemo(
    () => ({
      getAllTeams,
      getTeamData,
      getPlayersData,
      getPlayerData,
    }),
    [],
  );

  useEffect(() => {
    getAllTeams();
  }, []);

  return (
    <DataContext.Provider
      value={{
        ...values,
        teams,
        team,
        players,
        player,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);

  return context;
}

export { DataProvider, useData };
