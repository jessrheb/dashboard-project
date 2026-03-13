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

export interface LatestProducts {
  image: string;
  name: string;
  dateUpdated: Date;
}

export interface LatestOrders {
  order: string;
  customer: string;
  dateOrdered: Date;
  status: string;
}

export class Data {
  states = ['Alabama', 'New York', 'San Francisco', 'Los Angeles'];

  /*   customersInfo: Array<CustomersInfo> = [
    {
      id: 1,
      name: 'Alcides Antonio',
      avatar: 'https://dashboard-djonathas-projects.vercel.app/assets/avatar-10.png',
      email: 'alcides.antonio@devias.io',
      location: 'Madrid, Comunidad de Madrid, Spain',
      phone: '908-691-3242',
      signedUp: new Date(),
    },
    {
      id: 2,
      name: 'Marcus Finn',
      avatar: 'https://dashboard-djonathas-projects.vercel.app/assets/avatar-9.png',
      email: 'marcus.finn@devias.io',
      location: 'Carson City, Nevada, USA',
      phone: '415-907-2647',
      signedUp: new Date(),
    },
    {
      id: 3,
      name: 'Jie Yan',
      avatar: 'https://dashboard-djonathas-projects.vercel.app/assets/avatar-8.png',
      email: 'jie.yan.song@devias.io',
      location: 'North Canton, Ohio, USA',
      phone: '770-635-2682',
      signedUp: new Date(),
    },
    {
      id: 4,
      name: 'Nasimiyu Danai',
      avatar: 'https://dashboard-djonathas-projects.vercel.app/assets/avatar-7.png',
      email: 'nasimiyu.danai@devias.io',
      location: 'Salt Lake City, Utah, USA',
      phone: '801-301-7894',
      signedUp: new Date(),
    },
    {
      id: 5,
      name: 'Iulia Albu',
      avatar: 'https://dashboard-djonathas-projects.vercel.app/assets/avatar-6.png',
      email: 'iulia.albu@devias.io',
      location: 'Murray, Utah, USA',
      phone: '313-812-8947',
      signedUp: new Date(),
    },
  ]; */

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

  latestProducts: Array<LatestProducts> = [
    {
      image: 'https://dashboard-djonathas-projects.vercel.app/assets/product-5.png',
      name: 'Soja & Co. Eucalyptus',
      dateUpdated: new Date(),
    },
    {
      image: 'https://dashboard-djonathas-projects.vercel.app/assets/product-4.png',
      name: 'Necessaire Body Lotion',
      dateUpdated: new Date(),
    },
    {
      image: 'https://dashboard-djonathas-projects.vercel.app/assets/product-3.png',
      name: 'Ritual of Sakura',
      dateUpdated: new Date(),
    },
    {
      image: 'https://dashboard-djonathas-projects.vercel.app/assets/product-2.png',
      name: 'Lancome Rouge',
      dateUpdated: new Date(),
    },
    {
      image: 'https://dashboard-djonathas-projects.vercel.app/assets/product-1.png',
      name: 'Erbology Aloe Vera',
      dateUpdated: new Date(),
    },
  ];

  latestOrders: Array<LatestOrders> = [
    { order: 'ORD-007', customer: 'Ekaterina Tankova', dateOrdered: new Date(), status: 'Pending' },
    { order: 'ORD-006', customer: 'Cao Yu', dateOrdered: new Date(), status: 'Delivered' },
    { order: 'ORD-004', customer: 'Alexa Richardson', dateOrdered: new Date(), status: 'Refunded' },
    { order: 'ORD-003', customer: 'Anje Keizer', dateOrdered: new Date(), status: 'Pending' },
    {
      order: 'ORD-002',
      customer: 'Clarke Gillebert',
      dateOrdered: new Date(),
      status: 'Delivered',
    },
    { order: 'ORD-001', customer: 'Adam Denisov', dateOrdered: new Date(), status: 'Delivered' },
  ];
}
