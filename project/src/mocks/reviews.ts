import Comment from '../types/comment';

const reviews: Comment[] = [
  {
    'id': 1,
    'user': {
      'id': 10,
      'isPro': true,
      'name': 'Max',
      'avatarUrl': 'https://12.react.pages.academy/static/avatar/1.jpg'
    },
    'rating': 4,
    'comment': 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    'date': '2023-03-03T07:31:24.881Z'
  },
  {
    'id': 2,
    'user': {
      'id': 11,
      'isPro': false,
      'name': 'Jack',
      'avatarUrl': 'https://12.react.pages.academy/static/avatar/2.jpg'
    },
    'rating': 3,
    'comment': 'This villa is perfect in every way: the view on mountains and waterfalls, the hot tub and the villa itself. The evening here became a great continuation of our journeys over country.',
    'date': '2023-03-03T09:31:24.881Z'
  },
  {
    'id': 3,
    'user': {
      'id': 18,
      'isPro': true,
      'name': 'Sophie',
      'avatarUrl': 'https://12.react.pages.academy/static/avatar/9.jpg'
    },
    'rating': 3,
    'comment': 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    'date': '2023-05-05T07:31:24.881Z'
  },
  {
    'id': 4,
    'user': {
      'id': 16,
      'isPro': true,
      'name': 'Mollie',
      'avatarUrl': 'https://12.react.pages.academy/static/avatar/7.jpg'
    },
    'rating': 4,
    'comment': 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    'date': '2023-04-05T07:31:24.881Z'
  }
];

export default reviews;
