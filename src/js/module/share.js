const myShare = document.querySelector('.my-share');

export const share = Ya.share2(myShare, {
  content: {
    description: 'Лосось Леонид помог мне узнать, насколько я себя люблю. Тебе тоже поможет — кликай и пройди короткий тест:',
    image: 'https://mnogolubvi.com/img/share.png'
  },
  theme: {
    services: 'vkontakte,facebook,telegram,twitter',
    lang: 'ru',
    size: 'l',
    shape: 'round'
  }
});
