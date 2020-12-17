// {
//   "poster": "https://cdn2.jazztimes.com/2018/05/SteveGadd-800x723.jpg",
//   "title": "Steve Gadd Band",
//   "author": "Steve Gadd Band",
//   "genre": "Jazz",
//   "year": "2018"
// }

var app = new Vue({
  el:'#container',
  data: {
    albums: [],
  },
  methods: {

  },
  mounted: function() {
    let self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function (result) {
      self.albums = result.data.response;
      console.log(result.data.response);
      console.log(self.albums);
    })
  }

});
