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
    filteredGenre: [],
  },
  methods: {
    genreFilter: function () {
      let self= this;

    }
  },
  created: function() {

  },
  mounted: function() {
    let self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function (result) {
      self.albums = result.data.response;
      self.albums.forEach((album) => {
        if (!self.filteredGenre.includes(album.genre)) {
          self.filteredGenre.push(album.genre)
        }

      });
      console.log(self.filteredGenre);
    })



  }

});
