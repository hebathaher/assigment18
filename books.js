//Get All Books from API using GET
fetch('https://fakerestapi.azurewebsites.net/api/v1/Books',{
method:'GET',
headers,
})
.then(response => response.json())
.then(json => console.log(json));

//Get Books with id 2 from API using GET

fetch('https://fakerestapi.azurewebsites.net/api/v1/Books/2',{
method:'GET',
headers,
})
.then(response => response.json())
.then(json => console.log(json));

//update excerpt in the Book with id 2  using PUT
fetch('https://fakerestapi.azurewebsites.net/api/v1/Books/2',{
method:'PUT',
headers,
body:JSON.stringify({
 description: "Rebum eos at dolores consequat lorem luptatum nonummy sadipscing at ut iriure consectetuer justo. Magna sed at et ipsum. Et consetetur justo aliquyam magna mazim lorem vero rebum elitr labore mazim amet. Justo et ipsum dolor dolor et mazim invidunt. Option dolores lobortis et magna no facilisis. Lorem clita voluptua odio volutpat nonumy tempor amet sed invidunt kasd vel et vel lorem dolore consetetur diam delenit. Eirmod est tempor eos. Gubergren takimata augue facilisis et nostrud iusto option nonumy sit. Clita lorem elitr sanctus sea voluptua no amet et amet et ullamcorper accusam accusam magna. Amet velit stet.",
  excerpt: "Magna magna",
  pageCount: 200,
  publishDate: "2021-06-05T20:01:18.2038015+00:00",
  title: "Book2"
})
})
.then(response => response.json())
.then(json => console.log("update the eccerpet",json));

//Add new Book using POST
fetch('https://fakerestapi.azurewebsites.net/api/v1/Books',{
method:'POST',
headers,
body:JSON.stringify({
 description: "describtion about new book",
  excerpt: "New ",
  pageCount: 500,
  publishDate: "2021-06-05T20:01:18.2038015+00:00",
  title: "New BOOk"
})
})
.then(response => response.json())
.then(json => console.log("update the eccerpet",json));


// delete book 3
fetch('https://fakerestapi.azurewebsites.net/api/v1/Books/3', {
method:'DELETE',
headers,
});

//replace book 2 pageCount to 100 using PATCH
fetch('https://fakerestapi.azurewebsites.net/api/v1/Books/2',{
method:'PATCH',
headers,
body:JSON.stringify({
  description: "Consetetur molestie blandit stet sanctus cum ullamcorper no accusam et luptatum accusam sanctus dolore clita. Accumsan gubergren ea eirmod odio elitr exerci ea clita aliquip dolor sadipscing sit rebum dignissim. Kasd facilisis lorem voluptua consetetur dolor invidunt ut praesent elitr invidunt amet kasd magna. Sadipscing quod lorem dolore voluptua dolore. Volutpat duo luptatum et dolor at et dolores ea duo accusam sea sea diam dolor. Nam nulla sea facer ut justo sed dolor no lorem sadipscing minim sit sed voluptua.",
 excerpt: "In dolore ea ipsum molestie vulputate dolore vero est amet amet consetetur et magna. Amet amet sanctus nonumy eirmod lorem at zzril vero odio ipsum justo sadipscing ut. Dignissim clita clita justo no ea ex tempor amet lorem nonumy augue. Sit sed eu ipsum ea commodo dolor ea ipsum nibh vero eum in et vel laoreet et velit ipsum.Delenit invidunt duo gubergren ullamcorper mazim clita ea. Ipsum et vel ipsum eirmod sadipscing ea invidunt gubergren est no ullamcorper invidunt nonummy. Dolor dolore stet dolore diam ipsum dolores veniam diam est voluptua duo autem nonumy aliquip diam dolores lorem diam. Takimata erat dolore erat et nulla nonummy et vel amet voluptua gubergren duis nonummy invidunt tincidunt gubergren enim. In eum aliquip. Sea adipiscing consequatTakimata exerci amet sed erat est sit wisi amet lorem aliquyam clita molestie voluptua iusto zzril. Labore et sadipscing justo dolore takimata aliquyam vero labore nisl magna sea enim vero. Ipsum adipiscing minim ea tempor amet invidunt stet at lorem dignissim quis no velit tempor.Eos odio dolor. Sanctus dolores iusto elitr ut et placerat duo hendrerit nibh veniam sit minim. At te ut lobortis magna dolor ipsum at elit tempor facilisis erat erat justo erat et et gubergren inTincidunt at magna erat at dolores velit at amet lorem vel aliquip et odio vel dolore sea. Eum blandit suscipit erat accusam eos clita takimata dolores justo lobortis no erat accusam ipsum sadipscing. Ea tincidunt nibh aliquyam vero invidunt sed nonumy molestie consequat sea takimata temporAd sanctus rebum suscipit dolores aliquyam lorem erat rebum dolores. Accusam vel dolores ex et amet facilisis lobortis invidunt. Stet stet consetetur diam stet diam molestie eos sadipscing est",
 pageCount: 100,
  publishDate: "2021-06-05T20:30:02.6188079+00:00",
  title: "Book 2"
})
})
.then(response => response.json())
.then(json => console.log(json));

