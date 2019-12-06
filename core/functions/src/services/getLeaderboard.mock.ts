import { AdventLeaderboard } from "../models/AdventLeaderboard";

export const _getLeaderboard = async () => {
  return new Promise<AdventLeaderboard>(resolve =>
    setTimeout(() => {
      resolve(leaderboard);
    }, 3000)
  );
};

const leaderboard: AdventLeaderboard = {
  owner_id: '12900',
  members: {
    '11285': {
      last_star_ts: 0,
      id: '11285',
      local_score: 0,
      name: 'Tommy Brunn',
      global_score: 0,
      completion_day_level: {},
      stars: 0
    },
    '12900': {
      stars: 0,
      completion_day_level: {},
      global_score: 0,
      name: 'Alex Szabo',
      id: '12900',
      local_score: 0,
      last_star_ts: 0
    },
    '14668': {
      name: 'Jesper Eskilson',
      id: '14668',
      local_score: 114,
      last_star_ts: '1575181747',
      stars: 2,
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575181313'
          },
          '2': {
            get_star_ts: '1575181747'
          }
        }
      },
      global_score: 0
    },
    '27929': {
      last_star_ts: 0,
      local_score: 0,
      id: '27929',
      name: 'neque',
      global_score: 0,
      completion_day_level: {},
      stars: 0
    },
    '33370': {
      stars: 2,
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575200439'
          },
          '2': {
            get_star_ts: '1575201541'
          }
        }
      },
      global_score: 0,
      name: 'onno-vos-dev',
      id: '33370',
      local_score: 98,
      last_star_ts: '1575201541'
    },
    '35668': {
      name: 'Alexander Korling',
      id: '35668',
      local_score: 0,
      last_star_ts: 0,
      stars: 0,
      completion_day_level: {},
      global_score: 0
    },
    '42422': {
      name: 'Martin Svalin',
      local_score: 0,
      id: '42422',
      last_star_ts: 0,
      stars: 0,
      completion_day_level: {},
      global_score: 0
    },
    '47556': {
      stars: 0,
      global_score: 0,
      completion_day_level: {},
      name: 'Enid Gjoleka',
      last_star_ts: 0,
      id: '47556',
      local_score: 0
    },
    '116826': {
      name: 'Anders Lindgren',
      last_star_ts: 0,
      id: '116826',
      local_score: 0,
      stars: 0,
      global_score: 0,
      completion_day_level: {}
    },
    '165393': {
      id: '165393',
      local_score: 90,
      last_star_ts: '1575220630',
      name: 'nicevo',
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575218740'
          },
          '2': {
            get_star_ts: '1575220630'
          }
        }
      },
      global_score: 0,
      stars: 2
    },
    '165461': {
      name: 'Zhivko Lazarov',
      id: '165461',
      local_score: 0,
      last_star_ts: 0,
      stars: 0,
      completion_day_level: {},
      global_score: 0
    },
    '189451': {
      completion_day_level: {},
      global_score: 0,
      stars: 0,
      id: '189451',
      local_score: 0,
      last_star_ts: 0,
      name: 'Erika Saadi'
    },
    '191278': {
      local_score: 0,
      id: '191278',
      last_star_ts: 0,
      name: 'Dominic Ginger',
      completion_day_level: {},
      global_score: 0,
      stars: 0
    },
    '195782': {
      stars: 0,
      global_score: 0,
      completion_day_level: {},
      name: 'Bert Oja',
      last_star_ts: 0,
      id: '195782',
      local_score: 0
    },
    '203456': {
      local_score: 0,
      id: '203456',
      last_star_ts: 0,
      name: 'Sara Fransson',
      completion_day_level: {},
      global_score: 0,
      stars: 0
    },
    '208417': {
      stars: 0,
      completion_day_level: {},
      global_score: 0,
      name: null,
      local_score: 0,
      id: '208417',
      last_star_ts: 0
    },
    '213641': {
      global_score: 0,
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575187617'
          },
          '2': {
            get_star_ts: '1575190405'
          }
        }
      },
      stars: 2,
      last_star_ts: '1575190405',
      local_score: 108,
      id: '213641',
      name: 'Ivan Pedersen'
    },
    '220124': {
      stars: 2,
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575196496'
          },
          '2': {
            get_star_ts: '1575198572'
          }
        }
      },
      global_score: 0,
      name: 'dbgeek',
      id: '220124',
      local_score: 103,
      last_star_ts: '1575198572'
    },
    '232530': {
      stars: 0,
      completion_day_level: {},
      global_score: 0,
      name: 'Rafał Paliwoda',
      id: '232530',
      local_score: 0,
      last_star_ts: 0
    },
    '240455': {
      last_star_ts: 0,
      local_score: 0,
      id: '240455',
      name: 'jlordiales',
      global_score: 0,
      completion_day_level: {},
      stars: 0
    },
    '242364': {
      global_score: 0,
      completion_day_level: {},
      stars: 0,
      last_star_ts: 0,
      local_score: 0,
      id: '242364',
      name: 'Bernat Fages'
    },
    '260016': {
      global_score: 0,
      completion_day_level: {},
      stars: 0,
      last_star_ts: 0,
      local_score: 0,
      id: '260016',
      name: 'cholmboe'
    },
    '274378': {
      stars: 0,
      global_score: 0,
      completion_day_level: {},
      name: 'pschoffer',
      last_star_ts: 0,
      local_score: 0,
      id: '274378'
    },
    '314807': {
      id: '314807',
      local_score: 88,
      last_star_ts: '1575222814',
      name: 'OussaZaki',
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575220349'
          },
          '2': {
            get_star_ts: '1575222814'
          }
        }
      },
      global_score: 0,
      stars: 2
    },
    '330999': {
      local_score: 0,
      id: '330999',
      last_star_ts: 0,
      name: 'Elspeth Andrell',
      completion_day_level: {},
      global_score: 0,
      stars: 0
    },
    '368406': {
      stars: 0,
      global_score: 0,
      completion_day_level: {},
      name: null,
      last_star_ts: 0,
      local_score: 0,
      id: '368406'
    },
    '368426': {
      stars: 0,
      completion_day_level: {},
      global_score: 0,
      name: 'Christopher Wendels',
      id: '368426',
      local_score: 0,
      last_star_ts: 0
    },
    '368472': {
      local_score: 0,
      id: '368472',
      last_star_ts: 0,
      name: 'pecke01',
      completion_day_level: {},
      global_score: 0,
      stars: 0
    },
    '368947': {
      local_score: 0,
      id: '368947',
      last_star_ts: 0,
      name: 'Alexander Lindholm',
      completion_day_level: {},
      global_score: 0,
      stars: 0
    },
    '368967': {
      last_star_ts: 0,
      id: '368967',
      local_score: 0,
      name: 'Dumitru Postoronca',
      global_score: 0,
      completion_day_level: {},
      stars: 0
    },
    '369073': {
      completion_day_level: {},
      global_score: 0,
      stars: 0,
      id: '369073',
      local_score: 0,
      last_star_ts: 0,
      name: 'Plínio Balduino'
    },
    '369936': {
      global_score: 0,
      completion_day_level: {},
      stars: 0,
      last_star_ts: 0,
      id: '369936',
      local_score: 0,
      name: 'Willy Ovalle'
    },
    '370611': {
      global_score: 0,
      completion_day_level: {},
      stars: 0,
      last_star_ts: 0,
      local_score: 0,
      id: '370611',
      name: 'Winner Crespo'
    },
    '372107': {
      name: 'fdfzcq',
      last_star_ts: '1575197501',
      id: '372107',
      local_score: 103,
      stars: 2,
      global_score: 0,
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575196658'
          },
          '2': {
            get_star_ts: '1575197501'
          }
        }
      }
    },
    '373160': {
      stars: 0,
      completion_day_level: {},
      global_score: 0,
      name: 'Francisco Pereira',
      local_score: 0,
      id: '373160',
      last_star_ts: 0
    },
    '382371': {
      completion_day_level: {},
      global_score: 0,
      stars: 0,
      id: '382371',
      local_score: 0,
      last_star_ts: 0,
      name: 'Nikolai Vlasov'
    },
    '382431': {
      completion_day_level: {},
      global_score: 0,
      stars: 0,
      id: '382431',
      local_score: 0,
      last_star_ts: 0,
      name: 'jbf'
    },
    '385386': {
      completion_day_level: {},
      global_score: 0,
      stars: 0,
      local_score: 0,
      id: '385386',
      last_star_ts: 0,
      name: 'Daniel Szoboszlay'
    },
    '386706': {
      local_score: 0,
      id: '386706',
      last_star_ts: 0,
      name: null,
      completion_day_level: {},
      global_score: 0,
      stars: 0
    },
    '389358': {
      global_score: 0,
      completion_day_level: {},
      stars: 0,
      last_star_ts: 0,
      id: '389358',
      local_score: 0,
      name: 'Zhivko Lazarov'
    },
    '391617': {
      global_score: 0,
      completion_day_level: {},
      stars: 0,
      last_star_ts: 0,
      local_score: 0,
      id: '391617',
      name: 'Markus Peetzen'
    },
    '397059': {
      id: '397059',
      local_score: 116,
      last_star_ts: '1575176908',
      name: 'ismailkuruca',
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575176582'
          },
          '2': {
            get_star_ts: '1575176908'
          }
        }
      },
      global_score: 0,
      stars: 2
    },
    '405083': {
      id: '405083',
      local_score: 0,
      last_star_ts: 0,
      name: 'Victor Arias',
      completion_day_level: {},
      global_score: 0,
      stars: 0
    },
    '413624': {
      stars: 2,
      global_score: 0,
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575185615'
          },
          '2': {
            get_star_ts: '1575188836'
          }
        }
      },
      name: 'Thomas Andrade',
      last_star_ts: '1575188836',
      id: '413624',
      local_score: 111
    },
    '440175': {
      id: '440175',
      local_score: 0,
      last_star_ts: 0,
      name: 'Patrick Mariot',
      completion_day_level: {},
      global_score: 0,
      stars: 0
    },
    '440244': {
      id: '440244',
      local_score: 0,
      last_star_ts: 0,
      name: 'Hazar Kamar',
      completion_day_level: {},
      global_score: 0,
      stars: 0
    },
    '449037': {
      stars: 0,
      completion_day_level: {},
      global_score: 0,
      name: 'Ercument Kisa',
      id: '449037',
      local_score: 0,
      last_star_ts: 0
    },
    '463260': {
      name: 'Ali Rabiee',
      id: '463260',
      local_score: 0,
      last_star_ts: 0,
      stars: 0,
      completion_day_level: {},
      global_score: 0
    },
    '468912': {
      id: '468912',
      local_score: 96,
      last_star_ts: '1575205439',
      name: 'Mattias Borén',
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575204834'
          },
          '2': {
            get_star_ts: '1575205439'
          }
        }
      },
      global_score: 0,
      stars: 2
    },
    '476742': {
      id: '476742',
      local_score: 0,
      last_star_ts: 0,
      name: 'Lilach',
      completion_day_level: {},
      global_score: 0,
      stars: 0
    },
    '478713': {
      id: '478713',
      local_score: 111,
      last_star_ts: '1575186385',
      name: 'Samuel Rivas',
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575185984'
          },
          '2': {
            get_star_ts: '1575186385'
          }
        }
      },
      global_score: 0,
      stars: 2
    },
    '501768': {
      global_score: 0,
      completion_day_level: {},
      stars: 0,
      last_star_ts: 0,
      local_score: 0,
      id: '501768',
      name: 'Maja Kontrec'
    },
    '512755': {
      local_score: 0,
      id: '512755',
      last_star_ts: 0,
      name: 'Axel Bojrup',
      completion_day_level: {},
      global_score: 0,
      stars: 0
    },
    '542207': {
      completion_day_level: {},
      global_score: 0,
      stars: 0,
      id: '542207',
      local_score: 0,
      last_star_ts: 0,
      name: 'Simon'
    },
    '549639': {
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575193015'
          },
          '2': {
            get_star_ts: '1575195031'
          }
        }
      },
      global_score: 0,
      stars: 2,
      id: '549639',
      local_score: 106,
      last_star_ts: '1575195031',
      name: 'Ali Rabiee'
    },
    '654007': {
      id: '654007',
      local_score: 100,
      last_star_ts: '1575200860',
      name: 'Alex-Sorin Dachin',
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575198271'
          },
          '2': {
            get_star_ts: '1575200860'
          }
        }
      },
      global_score: 0,
      stars: 2
    },
    '657735': {
      id: '657735',
      local_score: 94,
      last_star_ts: '1575208136',
      name: 'Frederick',
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575207430'
          },
          '2': {
            get_star_ts: '1575208136'
          }
        }
      },
      global_score: 0,
      stars: 2
    },
    '661401': {
      name: 'Datrio',
      id: '661401',
      local_score: 92,
      last_star_ts: '1575213903',
      stars: 2,
      completion_day_level: {
        '1': {
          '1': {
            get_star_ts: '1575213619'
          },
          '2': {
            get_star_ts: '1575213903'
          }
        }
      },
      global_score: 0
    }
  },
  event: '2019'
};
