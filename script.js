var app = new Vue({
  el: '#root',
  data: {
    cds: []
	},
  methods: {

  },
  mounted:
    function () {
      axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( function (result) {
          app.cds = result.data.response;
          console.log(app.cds);
        });
    }
});
