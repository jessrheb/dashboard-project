export interface NotificationSettings {
  email: {
    productUpdates: boolean;
    securityUpdates: boolean;
  };
  phone: {
    email: boolean;
    securityUpdates: boolean;
  };
}

export interface AccountType {
  firstName: string;
  lastName: string;
  imgSrc: string;
  imgAlt: string;
  location: string;
  timezone: string;
  email: string;
  notificationSettings: NotificationSettings;
}

export interface Applications {
  name: string;
  logo: string;
  description: string;
  lastUpdated: Date;
  installs: number;
}

export class Data {
  sampleAccount: AccountType = {
    firstName: 'Sofia',
    lastName: 'Rivers',
    imgSrc: 'https://dashboard-djonathas-projects.vercel.app/assets/avatar.png',
    imgAlt: 'Avatar depicting Sofia Rivers',
    location: 'Los Angeles USA',
    timezone: 'GMT-7',
    email: 'sofia@devias.io',
    notificationSettings: {
      email: {
        productUpdates: true,
        securityUpdates: false,
      },
      phone: {
        email: true,
        securityUpdates: false,
      },
    },
  };

  states = ['Alabama', 'New York', 'San Francisco', 'Los Angeles'];

  integrationApps: Array<Applications> = [
    {
      name: 'Dropbox',
      logo: 'https://dashboard-djonathas-projects.vercel.app/assets/logo-dropbox.png',
      description:
        'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
      lastUpdated: new Date(),
      installs: 594,
    },
    {
      name: 'Medium Corporation',
      logo: 'https://dashboard-djonathas-projects.vercel.app/assets/logo-medium.png',
      description:
        'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
      lastUpdated: new Date(),
      installs: 625,
    },
    {
      name: 'Slack',
      logo: 'https://dashboard-djonathas-projects.vercel.app/assets/logo-slack.png',
      description:
        'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
      lastUpdated: new Date(),
      installs: 857,
    },
    {
      name: 'Lyft',
      logo: 'https://dashboard-djonathas-projects.vercel.app/assets/logo-lyft.png',
      description:
        'Lyft is an on-demand transportation company based in San Francisco, California.',
      lastUpdated: new Date(new Date().setDate(new Date().getDate() - 1)),
      installs: 406,
    },
    {
      name: 'GitHub',
      logo: 'https://dashboard-djonathas-projects.vercel.app/assets/logo-github.png',
      description: 'GitHub is a web-based hosting service for version control of code using Git.',
      lastUpdated: new Date(new Date().setDate(new Date().getDate() - 3)),
      installs: 835,
    },
    {
      name: 'Squarespace',
      logo: 'https://dashboard-djonathas-projects.vercel.app/assets/logo-squarespace.png',
      description:
        'Squarespace provides software as a service for website building and hosting. Headquartered in NYC.',
      lastUpdated: new Date(new Date().setDate(new Date().getDate() - 4)),
      installs: 435,
    },
  ];
}
