import { createSelector } from 'reselect';
import get from 'lodash/get';

export const currentVideoSelector = state => get(state, 'currentVideo');

export const currentVideoGenresSelector = createSelector(
  [currentVideoSelector],
  currentVideo => get(currentVideo, 'genres', [])
);

export const filmPosterPathSelector = createSelector(
  [currentVideoSelector],
  currentVideo => get(currentVideo, 'poster_path') // add default img
);

export const filmTitleSelector = createSelector(
  [currentVideoSelector],
  currentVideo => get(currentVideo, 'title')
);

export const filmRatingSelector = createSelector(
  [currentVideoSelector],
  currentVideo => get(currentVideo, 'vote_average')
);

export const filmReleaseDateSelector = createSelector(
  [currentVideoSelector],
  currentVideo => get(currentVideo, 'release_date')
);

export const filmOverviewSelector = createSelector(
  [currentVideoSelector],
  currentVideo => get(currentVideo, 'overview')
);

//  currentVideo: {
//     id: 351286,
//     title: 'Jurassic World: Fallen Kingdom',
//     tagline: 'Life finds a way',
//     vote_average: 0,
//     vote_count: 28,
//     release_date: '2018-06-01',
//     poster_path: 'https://image.tmdb.org/t/p/w500/ln6d5Okr6VK5vfQVobJTiYxeD0l.jpg',
//     overview: 'A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.',
//     budget: 0,
//     revenue: 0,
//     genres: [
//       'Action',
//       'Adventure',
//       'Drama',
//       'Science Fiction',
//       'Thriller'
//     ],
//     runtime: null
//   }
