export default [
  { name: 'one', path: '/one' },
  { name: 'two', path: '/two' },
  {
    name: 'three',
    path: '/three',
    children: [
      { name: 'kittens', path: '/kittens' },
      { name: 'doggos', path: '/doggos' },
      { name: 'pigeon', path: '/pigeon' },
      { name: 'pork', path: '/pork' },
      {
        name: 'quiz',
        path: '/quiz',
        children: [
          { name: 'first', path: '/first' },
          { name: 'second', path: '/second' },
          { name: 'third', path: '/third' },
        ],
      },
    ],
  },
  { name: 'four', path: '/four' },
  { name: 'five', path: '/five' },
]
