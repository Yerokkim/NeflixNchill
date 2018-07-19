
/*pop up*/



$(function () {
    $("#popModal").modal('show');
});


function topRated(){
    $(".topRated").css("display", "block");
    $(".notTopRated").css("display", "none");
}


/*side nav*/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/*hashchange*/

function showPage(pageId){
    console.log(pageId.substr(1));
    $(".page").hide();
    $("." + pageId.substr(1)).show();
}

$(window).on("hashchange",function(){
//   console.log("success");
    showPage(location.hash);
    console.log(location.hash);
})




/*1bf356ae8ea44b5e92b029b1d38e2940*/

var app = new Vue({
    el: "#app",
    data: {


        url: "https://api.themoviedb.org/3/movie/popular?api_key=235f8d85a7c4198073a406eeb3d67977&language=en-US&page=1",
        url2: "https://api.themoviedb.org/3/movie/top_rated?api_key=235f8d85a7c4198073a406eeb3d67977&language=en-US&page=1",
        url3:"https://api.themoviedb.org/3/movie/upcoming?api_key=235f8d85a7c4198073a406eeb3d67977&language=en-US&page=1",
        movies: [],
        here: "",
        moviesTop: [],
        heretop: "",
        moviesUp:[],
        hereup:"",
        cat:{topRated:true, popular:true,comingsoon:true}
        

    },
   

    created: function () {
        this.getData();
        this.getData2();
        this.getData3();

    },



    methods: {
        
        getTopRated: function (){
          this.cat.popular = false;
            this.cat.comingsoon = false;
        },
        getData: function () {

            $.getJSON(this.url, function (data) {
                app.movies = data.results;
            });

        },

        getData2: function () {
            $.getJSON(this.url2, function (data2) {
                
                app.moviesTop = data2.results;
            });
        },
          getData3: function () {
            $.getJSON(this.url3, function (data3) {
                
                app.moviesUp = data3.results;
            });
        }
        
        
    }


})
