// Load environment variables from .env file if available
require('dotenv').load();

var config = {
    env:  'prod',

    host: '0.0.0.0',
    port: process.env.PORT || 5000,

    // Available themes:
    // + bordeau
    // + harlequin
    // + light-grey
    // + light-yellow
    // + night-blue
    // + snow
    // + yellow
    theme: 'night-blue',

    // clients configs
    api: {
        aws: {
            region: 'eu-west-1'
        },
        jenkins: {
            baseUrl: 'https://my-jenkins.com',
            auth: {
                user:     'me',
                password: 'me'
            }
        }
    },

    // define duration between each dashboard rotation (ms)
    rotationDuration: 8000,

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 15000,

    dashboards: [

        // first dashboard
        {
            // 4 x 3 dashboard
            columns: 4,
            rows:    3,
            widgets: [

                {
                    type: 'github.repository_contributors_stats',
                    repository: 'fabric-composer/fabric-composer',
                    columns: 1, rows: 2,
                    x: 2, y: 1, title :'Contributors'
                },
                {
  type: 'github.organization_badge',
  organization: 'fabric-composer',
  columns: 1, rows: 1, x: 0, y: 0
},
                {
                    type: 'travis.repository',
                    owner: 'fabric-composer',
                    repository: 'fabric-composer',
                    columns: 1, rows: 1,
                    x: 0, y: 1, title : 'Last Build'
                },
                {
    type: 'github.issue_labels_treemap',
    repository: 'fabric-composer/fabric-composer',
    labels: [
        { color: '#6bc2c8', count: 13, name: 'P1'     },
        { color: '#5f8cc0', count: 3,  name: 'enhancement' },
        { color: '#525487', count: 7,  name: 'bug'         },
        { color: '#383b72', count: 16, name: 'playback 3' }
    ],
    columns: 1, rows: 2,
    x: 3, y: 1, title: 'Issues'
},
                  {
                    type: 'travis.build_histogram',
                    owner: 'fabric-composer',
                    repository: 'fabric-composer',
                    columns: 2, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'time.clock',
                    columns: 1, rows: 1,
                    x: 3, y: 0
                },

                {
                    type: 'travis.build_history',
                    owner: 'fabric-composer',
                    repository: 'fabric-composer',
                    columns: 1, rows: 2,
                    x: 1, y: 1, title: 'Build History'
                },

                {
                    type: 'github.pull_requests_gauge',
                    repository: 'fabric-composer/fabric-composer',
                    columns: 1, rows: 1,
                    x: 0, y: 2
                }
            ]
        },

        // second dashboard
        // {
        //     // 3 x 2 dashboard
        //     columns: 3,
        //     rows:    2,
        //     widgets: [
        //         {
        //             type: 'travis.build_history',
        //             owner: 'plouc',
        //             repository: 'mozaik',
        //             columns: 1, rows: 2,
        //             x: 0, y: 0
        //         },
        //         {
        //             type: 'github.user_badge',
        //             user: 'plouc',
        //             columns: 1, rows: 1,
        //             x: 2, y: 0
        //         },
        //         {
        //             type: 'travis.repository',
        //             owner: 'plouc',
        //             repository: 'mozaik',
        //             columns: 1, rows: 1,
        //             x: 1, y: 0
        //         },
        //         {
        //             type: 'travis.build_histogram',
        //             owner: 'plouc',
        //             repository: 'mozaik',
        //             columns: 2, rows: 1,
        //             x: 1, y: 1
        //         }
        //     ]
        // }
    ]
};

module.exports = config;
