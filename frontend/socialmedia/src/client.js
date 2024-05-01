import {createClient} from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'o97t6hjk',
  dataset: 'production',
  apiVersion: '2021-11-16',
  useCdn: true,
  token: 'sk9EnIH8mDfOpnbvugfWaJojlp7jfU6kvBR0S2RtIg2NcAPU1mvFGlxzMboJacUtvzJYyWyqKIA306SXBWfG0pQRrYK4IVdmEoNtNAh5lGdDrVAnzbqoGJwzzIz5oRfWwJbkVzYglIeesCzbdSxmVGbjhyX89MNYWqSmxVNWp7jHwxoOhgQ5',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
