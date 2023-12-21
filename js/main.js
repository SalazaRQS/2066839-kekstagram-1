const DESCRIPTION = ['Цветочная симфония: Прекрасное сочетание красок и фактур цветов создает нежную и романтическую картину, наполненную ароматом и красотой природы.',

  'Магический закат: Золотистые лучи заката погружают мир в сказочную атмосферу.Они играют с контурами деревьев и создают неповторимый рисунок на небе.',

  'Городская жизнь в движении: Скорость, шум и яркие неоновые огни передают динамику и особую энергию современного города.Жизнь не стоит на месте, и эта фотография иллюстрирует это насыщенное движение.',

  'Уунсет на океане: Картина спокойствия и гармонии, где ярко - оранжевые и розовые оттенки заката сливаются с прибойными волнами.Бескрайний океан наблюдает за закатом, в то время как нежный бриз ласкает кожу.',

  'Светящийся мост: В ночной городской панораме яркое освещение моста создает впечатление, будто он летит в небе.Его отражение в воде добавляет эффектности этой фотографии.',

  'Зимний чарующий лес: Воплощение зимней сказки, покрытый снегом пейзаж со сказочными деревьями.Белый покров и синие оттенки придают фотографии особую магию и таинственность.',

  'Экзотический райский остров: Бирюзовое море, песчаные пляжи и пальмы создают идеальное прозрачное фотоальбомное изображение райского острова.',

  'Темный город ночью: Огни города создают образ необычной метрополии среди ночи.Силуэты зданий и автомобилей создают загадочные и драматичные контуры в этой ночной сцене.',

  'Благоухающие яркие тюльпаны: Цветочное море, состоящее из насыщенных разнообразных тюльпанов, придают сказочную атмосферу этому изображению.Каждый цветок – это отдельная палитра пышных оттенков и текстур.',

  'Отражение гор в озере: Зеркальное отражение гор в безмятежной воде создает иллюзию двойного пейзажа, удивляющего и притягательного своей гармонией и прекрасными натуральными цветами.',];

const NAMES = ['Надежда', 'Варвара', 'Алексей', 'Вероника', 'Матвей', 'Есения', 'Анна', 'Алия', 'Екатерина', 'Олеся', 'Андрей', 'Арина', 'Виктория', 'Елизавета', 'Давид', 'Аиша', 'Сергей', 'Лев', 'Денис', 'Иван', 'Амина', 'Мирослав', 'Павел', 'Мария', 'Стефания', 'София', 'Аделина', 'Александра', 'Алиса', 'Святослав', 'Леонид', 'Станислав', 'Александр', 'Максим', 'Николай', 'Тимофей', 'Дарина', 'Фёдор', 'Марина', 'Наталья', 'Майя', 'Юрий', 'Михаил', 'Нина', 'Артём', 'Диана', 'Алёна', 'Эмилия', 'Владимир', 'Софья', 'Валентина', 'Ева', 'Никита', 'Евгений', 'Зоя', 'Ариана', 'Леон', 'Марьям', 'Илья', 'Полина'];

const MESSAGE = ['Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'В целом всё неплохо. Но не всё.', 'Всё отлично!'];

const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const SIMILAR_USER_COUNT = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getIndex = () => ({
  id: getRandomElement(ID),
  photo: `photos/${ getRandomElement(ID) }.jpg`,
  description: getRandomElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: {
    id: getRandomInteger(0, 9999),
    avatar: `img/avatar-${ getRandomInteger(1, 6) }.svg`,
    message: getRandomElement(MESSAGE),
    name: getRandomElement(NAMES),
  },
});

const userIdGenerator = Array.from({ length: SIMILAR_USER_COUNT }, getIndex);

// console.log(userIdGenerator);
