declare class Fivem {
  constructor(
    server:
      | string
      | {
          ip: string;
          port: number;
        }
  );

  players(): Promise<Player[]>;

  info(): Promise<{
    enhancedHostSupport: boolean;
    resources: Array<string>;
    server: string;
    vars: {
      banner_connecting: string;
      banner_detail: string;
      developer: string;
      discord: string;
      gamename: string;
      locale: string;
      onesync_enabled: string;
      sv_enforceGameBuild: string;
      sv_enhancedHostSupport: string;
      sv_lan: string;
      sv_licenseKeyToken: string;
      sv_maxClients: string;
      sv_projectDesc: string;
      sv_projectName: string;
      sv_scriptHookAllowed: string;
      tags: string;
    };
    version: number;
  }>;
}

export = Fivem;
