export interface UserInfo {
  id: number;
  createdAt: string;
  firstName: string;
  lastName: string;
  avatar: string;
  city: string;
  state: string;
  timezone: string;
  email: string;
  phoneNumber: string;
}

export interface NotificationSettings {
  id: number;
  createdAt: string;
  notifications: {
    email: {
      productUpdates: boolean;
      securityUpdates: boolean;
    };
    phone: {
      email: boolean;
      securityUpdates: boolean;
    };
  };
}

export interface Applications {
  id: number;
  updatedAt: Date;
  name: string;
  icon: string;
  description: string;
  installs: number;
}

export interface CustomersInfo {
  id: number;
  createdAt: Date;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  location: { city: string; state: string; country: string };
  phone: string;
}

export interface OverviewCards {
  value: number;
  percentage: number;
}

export interface TrafficSource {
  desktop: number;
  tablet: number;
  phone: number;
}

export interface Sales {
  thisYear: Array<number>;
  lastYear: Array<number>;
}

export interface LatestOrders {
  id: string;
  customer: string;
  orderDate: Date;
  status: string;
}

export interface LatestProducts {
  id: string;
  name: string;
  picture: string;
  updatedAt: Date;
}

export class Data {
  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];

  budget: OverviewCards = { value: 24000, percentage: 12 };

  totalCustomers: OverviewCards = { value: 1600, percentage: 16 };

  taskProgress: OverviewCards = { value: 0, percentage: 75.5 };

  totalProfit: OverviewCards = { value: 15000, percentage: 0 };

  sales: Sales = {
    thisYear: [18000, 16000, 5000, 8000, 3000, 14000, 14000, 16000, 17000, 19000, 18000, 20000],
    lastYear: [12000, 11000, 4000, 6000, 2000, 9000, 9000, 10000, 11000, 12000, 13000, 13000],
  };

  trafficSource: TrafficSource = {
    desktop: 63,
    tablet: 15,
    phone: 22,
  };
}
