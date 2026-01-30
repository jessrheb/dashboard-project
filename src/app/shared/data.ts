export interface AccountType {
  firstName: string;
  lastName: string;
  imgSrc: string;
  imgAlt: string;
  location: string;
  timezone: string;
  email: string;
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
  };

  states = ['Alabama', 'New York', 'San Francisco', 'Los Angeles'];
}
