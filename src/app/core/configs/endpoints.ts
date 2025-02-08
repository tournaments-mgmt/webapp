import {environment} from "@environments/environment";


const prefix = `${environment.apiBaseUrl}/api/public/v1`;

export const endpoints = {
  user: {
    read: (uuid: string) => [prefix, 'client/entrant/read', uuid].join('/'),
    readTeams: (uuid: string) => [prefix, 'client/teams', uuid].join('/'),
    readTeamMembers: (uuid: string) => [prefix, 'client/entrant/read_team_members', uuid].join('/'),
    create: [prefix, 'client/entrant/create'].join('/'),
    tournaments: {
      subscribe: [prefix, 'client/tournament/subscribe'].join('/'),
      getSubscribed: (uuid: string) => [prefix, 'client/tournament/get_subscribed', uuid].join('/'),
    }
  }
};
