const person = {
  firstname: 'John',
  lastname: 'Doe',
  hobbies: ['coding', 'travelling', 'cooking'],
  walk: function () {
    console.log(person.firstname + ' is walking');
  },
};

let students = [
  { name: 'Mike' },
  { name: 'Nike' },
  { name: 'Praise' },
  { name: 'George' },
  { name: 'Unity' },
];

let phones = [
  {
    id: 1,
    name: 'Tecno',
    type: 'Camon 15 pro',
    url: 'https://static.toiimg.com/thumb/msid-74004275,width-240,resizemode-4,imgv-3/Tecno-Camon-15.jpg',
    description: `
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nihil enim harum nobis voluptas molestias quidem natus corrupti libero iure, totam adipisci saepe nesciunt beatae cum maiores iusto eos consequatur?
    `,
  },
  {
    id: 2,
    name: 'Samsung',
    type: 'S21 Ultra',
    url: 'https://fdn.gsmarena.com/imgroot/reviews/21/samsung-galaxy-s21-ultra/lifestyle/-1200w5/gsmarena_003.jpg',
    description: `
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nihil enim harum nobis voluptas molestias quidem natus corrupti libero iure, totam adipisci saepe nesciunt beatae cum maiores iusto eos consequatur?
    `,
  },
  {
    id: 3,
    name: 'Tecno',
    type: 'Camon 15 pro',
    url: 'data:image/jpeg;base64,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',
    description: `
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est nihil enim harum nobis voluptas molestias quidem natus corrupti libero iure, totam adipisci saepe nesciunt beatae cum maiores iusto eos consequatur?
    `,
  },
];

module.exports = {
  students,
  person,
  phones,
};
