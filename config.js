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
                    type: 'github.user_badge',
                    user: 'mbwhite',
                    columns: 1, rows: 1,
                    x: 0, y: 0
                },
                {
                    type: 'github.repository_contributors_stats',
                    repository: 'fabric-composer/fabric-composer',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'travis.repository',
                    owner: 'fabric-composer',
                    repository: 'fabric-composer',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                  type: 'github.issue_labels_donut',
                  repository: 'fabric-composer/fabric-composer',
                  columns: 1, rows: 1,
                  x: 0, y: 1
              },
                  {
                    type: 'travis.build_histogram',
                    owner: 'fabric-composer',
                    repository: 'fabric-composer',
                    columns: 2, rows: 1,
                    x: 1, y: 1
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
                    x: 3, y: 1
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
        {
            // 3 x 2 dashboard
            columns: 3,
            rows:    2,
            widgets: [
                {
                    type: 'travis.build_history',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 1, rows: 2,
                    x: 0, y: 0
                },
                {
                    type: 'github.user_badge',
                    user: 'plouc',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },
                {
                    type: 'travis.repository',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'travis.build_histogram',
                    owner: 'plouc',
                    repository: 'mozaik',
                    columns: 2, rows: 1,
                    x: 1, y: 1
                }
            ]
        }
    ]
};

module.exports = config;
