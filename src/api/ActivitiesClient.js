import { mySiteHttpClient } from './Clients';

const foo = [
  {
    id: 1,
    startDate: '2015-06-29T00:00:00.000Z',
    endDate: null,
    name: 'HubSpot',
    type: 'Job',
    description: 'Front Office SaaS Company',
    createdAt: '2019-11-20T02:13:12.000Z',
    updatedAt: '2019-11-20T02:13:12.000Z',
    roles: [
      {
        id: 1,
        name: 'Software Engineer',
        startDate: '2015-06-29T00:00:00.000Z',
        endDate: '2017-09-30T23:59:59.000Z',
        activityId: 1,
        createdAt: '2019-11-20T02:18:10.000Z',
        updatedAt: '2019-11-20T02:18:10.000Z',
      },
      {
        id: 2,
        name: 'Senior Software Engineer',
        startDate: '2017-10-01T00:00:00.000Z',
        endDate: '2018-04-30T23:59:59.000Z',
        activityId: 1,
        createdAt: '2019-11-20T02:21:58.000Z',
        updatedAt: '2019-11-20T02:21:58.000Z',
      },
      {
        id: 3,
        name: 'Technical Lead',
        startDate: '2018-05-01T00:00:00.000Z',
        endDate: '2019-03-31T23:59:59.000Z',
        activityId: 1,
        createdAt: '2019-11-20T02:23:20.000Z',
        updatedAt: '2019-11-20T02:23:20.000Z',
      },
      {
        id: 4,
        name: 'Engineering Lead',
        startDate: '2019-04-01T00:00:00.000Z',
        endDate: null,
        activityId: 1,
        createdAt: '2019-11-20T02:23:52.000Z',
        updatedAt: '2019-11-20T02:23:52.000Z',
      },
    ],
  },
  {
    id: 2,
    startDate: '2011-09-01T00:00:00.000Z',
    endDate: '2015-05-31T00:00:00.000Z',
    name: 'Hamilton College',
    type: 'School',
    description: 'Bachelor of Arts',
    createdAt: '2019-11-20T02:35:17.000Z',
    updatedAt: '2019-11-20T02:35:17.000Z',
    roles: [],
  },
];

// export const getActivities = () => Promise.resolve({ data: foo });
export const getActivities = () => mySiteHttpClient.get('/activities');
