$(document).ready(() => {
  $("#searchForm").on("submit", (e) => {
    let searchText = $("#searchText").val();
    getMovies(searchText);
    e.preventDefault();
  });
});

"http://www.omdbapi.com?s=" + searchText + "&apikey=7ba9f7e6";

function getMovies(searchText) {
  axios
    .get("http://www.omdbapi.com?s=" + searchText + "&apikey=7ba9f7e6")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
}
