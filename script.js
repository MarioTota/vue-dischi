var app = new Vue({
  el: '#root',
  data: {
    cds: [],
    selectedValue:'',
    genres:[]
	},
  methods: {

  },
  mounted:
    function () {
      var self = this;
      axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(function(result)  {
          self.cds = result.data.response;

          self.cds.sort( function(cd1, cd2) {
            return parseInt(cd1.year) - parseInt(cd2.year);
          });

          self.cds.forEach(
            (element) => {
              if(!self.genres.includes(element.genre)) {
                self.genres.push(element.genre)
              }
          })
      });
    }
});
