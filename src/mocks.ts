const mocks = [
  {
    'id':'e3274362-f06e-4870-ab15-a08b9163ea63',
    'title':'Canal View Prinsengracht',
    'type':'hotel',
    'price':203,
    'previewImage':'https://13.design.pages.academy/static/hotel/12.jpg',
    'city':{
      'name':'Paris',
      'location':{
        'latitude':48.85661,
        'longitude':2.351499,
        'zoom':13}},
    'location':{
      'latitude':48.868610000000004,
      'longitude':2.342499,'zoom':16},
    'isFavorite':true,
    'isPremium':false,
    'rating':2.6},
  {
    'id':'6de1df75-3659-4aad-8d09-c076d19b49fe',
    'title':'The house among olive ',
    'type':'apartment','price':348,
    'previewImage':'https://13.design.pages.academy/static/hotel/17.jpg',
    'city':
      {'name':'Paris',
        'location':
        {'latitude':48.85661,'longitude':2.351499,'zoom':13}
      },
    'location':
      {'latitude':48.858610000000006, 'longitude':2.330499, 'zoom':16},
    'isFavorite':false,
    'isPremium':false,
    'rating':2.8},
  {
    'id':'e360a8c2-9f6e-464d-afa5-74c5bb5b5c84',
    'title':'Amazing and Extremely Central Flat',
    'type':'room',
    'price':174,
    'previewImage':'https://13.design.pages.academy/static/hotel/6.jpg',
    'city':
      {'name':'Paris',
        'location':
        {'latitude':48.85661,'longitude':2.351499,'zoom':13}},
    'location': {'latitude':48.834610000000005,'longitude':2.335499,'zoom':16},
    'isFavorite':false,
    'isPremium':false,
    'rating':3.2},
  {
    'id':'257d4584-70df-4f9f-9570-3aafe154ca10','title':'The house among olive ','type':'apartment','price':447,'previewImage':'https://13.design.pages.academy/static/hotel/14.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.85761,'longitude':2.358499,'zoom':16},'isFavorite':false,'isPremium':true,'rating':2.3},
  {
    'id':'322ecbb8-60c0-4d8b-a8af-905280248006','title':'The Pondhouse - A Magical Place','type':'house','price':502,'previewImage':'https://13.design.pages.academy/static/hotel/14.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.87561,'longitude':2.375499,'zoom':16},'isFavorite':false,'isPremium':true,'rating':3.6},
  {
    'id':'55629d5f-c51e-4834-9d6b-2000c0e8a23f','title':'Canal View Prinsengracht','type':'room','price':289,'previewImage':'https://13.design.pages.academy/static/hotel/12.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.87961000000001,'longitude':2.353499,'zoom':16},'isFavorite':false,'isPremium':false,'rating':2.6},
  {
    'id':'0cc32d4e-2714-4295-9e1e-a6510f0cd49a','title':'Loft Studio in the Central Area','type':'room','price':289,'previewImage':'https://13.design.pages.academy/static/hotel/1.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.834610000000005,'longitude':2.364499,'zoom':16},'isFavorite':false,'isPremium':true,'rating':4.6},
  {
    'id':'25d92cfe-a2b8-4b8c-a75e-b3aa1113effc','title':'Penthouse, 4-5 rooms + 5 balconies','type':'hotel','price':417,'previewImage':'https://13.design.pages.academy/static/hotel/9.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.837610000000005,'longitude':2.3454990000000002,'zoom':16},'isFavorite':false,'isPremium':false,'rating':3.1},
  {
    'id':'8cca26b1-1ab6-4e0a-b1ee-50cf6d2e913d','title':'Tile House','type':'apartment','price':432,'previewImage':'https://13.design.pages.academy/static/hotel/2.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.84761,'longitude':2.356499,'zoom':16},'isFavorite':false,'isPremium':true,'rating':1.5},
  {
    'id':'98dd3f31-e91e-452c-90f8-4f4078e324ba','title':'The Pondhouse - A Magical Place','type':'room','price':101,'previewImage':'https://13.design.pages.academy/static/hotel/7.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.862610000000004,'longitude':2.369499,'zoom':16},'isFavorite':false,'isPremium':false,'rating':2.5},
  {
    'id':'2df2288c-490b-442b-9e29-dda3db6b11fb','title':'Beautiful & luxurious apartment at great location','type':'apartment','price':225,'previewImage':'https://13.design.pages.academy/static/hotel/1.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.83861,'longitude':2.350499,'zoom':16},'isFavorite':false,'isPremium':true,'rating':4.8},
  {
    'id':'cbae3688-f5b9-443f-aa70-88a0439ae261','title':'Waterfront with extraordinary view','type':'apartment','price':182,'previewImage':'https://13.design.pages.academy/static/hotel/14.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.861610000000006,'longitude':2.340499,'zoom':16},'isFavorite':true,'isPremium':true,'rating':3.9},
  {
    'id':'b66e62ca-d63a-4e3a-a7e5-fe274c77a66b','title':'The Pondhouse - A Magical Place','type':'house','price':976,'previewImage':'https://13.design.pages.academy/static/hotel/20.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.87861,'longitude':2.357499,'zoom':16},'isFavorite':false,'isPremium':true,'rating':1.7},
  {
    'id':'3a5beeff-8c78-4037-9f1c-aa22378e78d1','title':'Loft Studio in the Central Area','type':'apartment','price':473,'previewImage':'https://13.design.pages.academy/static/hotel/2.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.877610000000004,'longitude':2.333499,'zoom':16},'isFavorite':false,'isPremium':true,'rating':2},
  {
    'id':'73417422-7fe6-4a51-aa3d-34e0029132d3','title':'Tile House','type':'house','price':361,'previewImage':'https://13.design.pages.academy/static/hotel/16.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.83961,'longitude':2.342499,'zoom':16},'isFavorite':false,'isPremium':false,'rating':3.3},
  {
    'id':'b6caa299-58af-454b-9f95-ce34764676fb','title':'Beautiful & luxurious apartment at great location','type':'house','price':418,'previewImage':'https://13.design.pages.academy/static/hotel/6.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.865610000000004,'longitude':2.350499,'zoom':16},'isFavorite':false,'isPremium':false,'rating':4.5},
  {
    'id':'bae70fc3-68ac-45a9-8dfc-be0a4970a820','title':'Canal View Prinsengracht','type':'hotel','price':162,'previewImage':'https://13.design.pages.academy/static/hotel/4.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.846610000000005,'longitude':2.374499,'zoom':16},'isFavorite':false,'isPremium':false,'rating':3},
  {
    'id':'ba756105-5535-4872-801e-a11ba376734a','title':'Amazing and Extremely Central Flat','type':'house','price':633,'previewImage':'https://13.design.pages.academy/static/hotel/6.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.837610000000005,'longitude':2.364499,'zoom':16},'isFavorite':false,'isPremium':false,'rating':4.8},
  {
    'id':'99ab2689-ff66-4445-8355-deac91994cf1','title':'Nice, cozy, warm big bed apartment','type':'hotel','price':378,'previewImage':'https://13.design.pages.academy/static/hotel/10.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.843610000000005,'longitude':2.338499,'zoom':16},'isFavorite':false,'isPremium':false,'rating':4.5},
  {
    'id':'aa0b52ae-0d40-4f3b-9c51-139340699656','title':'Loft Studio in the Central Area','type':'hotel','price':377,'previewImage':'https://13.design.pages.academy/static/hotel/3.jpg','city':{'name':'Paris','location':{'latitude':48.85661,'longitude':2.351499,'zoom':13}},'location':{'latitude':48.84461,'longitude':2.374499,'zoom':16},'isFavorite':false,'isPremium':true,'rating':1.1},
  {
    'id':'cf1f1e9b-2c70-46cc-8c9f-fe7cfe63b135','title':'Beautiful & luxurious apartment at great location','type':'house','price':157,'previewImage':'https://13.design.pages.academy/static/hotel/11.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.950361,'longitude':6.961974,'zoom':16},'isFavorite':false,'isPremium':true,'rating':4.7},
  {
    'id':'37b68097-3f89-4a73-b4c9-7e6021c184ee','title':'The Pondhouse - A Magical Place','type':'apartment','price':439,'previewImage':'https://13.design.pages.academy/static/hotel/8.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.932361,'longitude':6.937974,'zoom':16},'isFavorite':false,'isPremium':true,'rating':2.4},
  {
    'id':'ea1a307d-f32f-4522-ac56-43e7ee44a7dc','title':'Penthouse, 4-5 rooms + 5 balconies','type':'house','price':457,'previewImage':'https://13.design.pages.academy/static/hotel/4.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.934361,'longitude':6.943974,'zoom':16},'isFavorite':false,'isPremium':true,'rating':4.4},
  {
    'id':'e08a1d48-e362-4651-bbf5-d326f6350df8','title':'Waterfront with extraordinary view','type':'hotel','price':488,'previewImage':'https://13.design.pages.academy/static/hotel/10.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.947361,'longitude':6.9799739999999995,'zoom':16},'isFavorite':false,'isPremium':false,'rating':2.7},
  {
    'id':'3e97f18b-8355-47e0-9fc0-50969fa4d3c7','title':'Wood and stone place','type':'apartment','price':331,'previewImage':'https://13.design.pages.academy/static/hotel/18.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.960361,'longitude':6.967974,'zoom':16},'isFavorite':false,'isPremium':true,'rating':1.8},
  {
    'id':'8fea2e4d-d503-4ee0-aee5-124f5166eef9','title':'Loft Studio in the Central Area','type':'hotel','price':430,'previewImage':'https://13.design.pages.academy/static/hotel/10.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.941361,'longitude':6.956974,'zoom':16},'isFavorite':false,'isPremium':false,'rating':4.1},
  {
    'id':'b264833d-8af9-4bd7-9457-8d5225e8daef','title':'Loft Studio in the Central Area','type':'room','price':273,'previewImage':'https://13.design.pages.academy/static/hotel/3.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.916361,'longitude':6.944974,'zoom':16},'isFavorite':false,'isPremium':true,'rating':1.8},
  {
    'id':'ab09dda0-7ba5-4015-9d3c-a880ef3ea656','title':'Canal View Prinsengracht','type':'apartment','price':418,'previewImage':'https://13.design.pages.academy/static/hotel/20.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.949361,'longitude':6.976974,'zoom':16},'isFavorite':false,'isPremium':true,'rating':2},
  {
    'id':'dd34b49f-5054-4670-823b-c737e38d4a3f','title':'Nice, cozy, warm big bed apartment','type':'house','price':536,'previewImage':'https://13.design.pages.academy/static/hotel/17.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.913361,'longitude':6.9509739999999995,'zoom':16},'isFavorite':false,'isPremium':false,'rating':2.1},
  {
    'id':'655ff7ba-97fb-4edc-b2e5-227c5f2ef35b','title':'The house among olive ','type':'apartment','price':324,'previewImage':'https://13.design.pages.academy/static/hotel/19.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.930361,'longitude':6.937974,'zoom':16},'isFavorite':false,'isPremium':true,'rating':3.2},
  {
    'id':'28d93dd7-c5a4-444e-9ca5-7ec0c4cef900','title':'House in countryside','type':'house','price':310,'previewImage':'https://13.design.pages.academy/static/hotel/11.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.960361,'longitude':6.9509739999999995,'zoom':16},'isFavorite':false,'isPremium':true,'rating':1.9},
  {
    'id':'e34df19a-3134-4847-948c-86c54e803327','title':'Canal View Prinsengracht','type':'room','price':238,'previewImage':'https://13.design.pages.academy/static/hotel/18.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.918461,'longitude':6.969974,'zoom':16},'isFavorite':false,'isPremium':false,'rating':1.1},
  {
    'id':'8abf52ab-7eb1-441e-be4e-e03b7de0d8fb','title':'Nice, cozy, warm big bed apartment','type':'room','price':225,'previewImage':'https://13.design.pages.academy/static/hotel/17.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.957361,'longitude':6.9509739999999995,'zoom':16},'isFavorite':false,'isPremium':true,'rating':2.6},
  {
    'id':'4fc2325c-b520-4aea-bd18-8fe92d12513b','title':'Nice, cozy, warm big bed apartment','type':'apartment','price':470,'previewImage':'https://13.design.pages.academy/static/hotel/7.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.951361,'longitude':6.944974,'zoom':16},'isFavorite':false,'isPremium':true,'rating':3.2},
  {
    'id':'2225e147-bfd8-4d17-b91a-64a7e782903b','title':'The house among olive ','type':'apartment','price':293,'previewImage':'https://13.design.pages.academy/static/hotel/14.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.959361,'longitude':6.978974,'zoom':16},'isFavorite':false,'isPremium':true,'rating':1.8},
  {
    'id':'88cc9e08-590d-4117-ad4d-d9d0059f694a','title':'Beautiful & luxurious apartment at great location','type':'room','price':216,'previewImage':'https://13.design.pages.academy/static/hotel/14.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.932361,'longitude':6.960974,'zoom':16},'isFavorite':false,'isPremium':false,'rating':3.3},
  {
    'id':'54772098-54ee-47ba-b443-7e3ed63f9fa1','title':'Loft Studio in the Central Area','type':'apartment','price':267,'previewImage':'https://13.design.pages.academy/static/hotel/12.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.954361,'longitude':6.982974,'zoom':16},'isFavorite':false,'isPremium':false,'rating':3.1},
  {
    'id':'c86635d4-b983-41ba-9b3f-75c33835a8b7','title':'Nice, cozy, warm big bed apartment','type':'apartment','price':368,'previewImage':'https://13.design.pages.academy/static/hotel/8.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.945361,'longitude':6.962974,'zoom':16},'isFavorite':false,'isPremium':true,'rating':2.3},
  {
    'id':'312746e3-98ae-4814-93fb-ad435d43371b','title':'Nice, cozy, warm big bed apartment','type':'hotel','price':209,'previewImage':'https://13.design.pages.academy/static/hotel/2.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.917361,'longitude':6.977974,'zoom':16},'isFavorite':false,'isPremium':false,'rating':3.6},
  {
    'id':'d5781111-2c5c-440e-8e6c-a04ddd1ff08f','title':'Beautiful & luxurious apartment at great location','type':'apartment','price':100,'previewImage':'https://13.design.pages.academy/static/hotel/3.jpg','city':{'name':'Cologne','location':{'latitude':50.938361,'longitude':6.959974,'zoom':13}},'location':{'latitude':50.945361,'longitude':6.935974,'zoom':16},'isFavorite':false,'isPremium':true,'rating':3.4}];

export default mocks;
