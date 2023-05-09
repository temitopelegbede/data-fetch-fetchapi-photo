const photoUrl = "https://jsonplaceholder.typicode.com/photos";

const postCardDetails = async () => {
  try {
    const res = await fetch(photoUrl);
    const postData = await res.json();
    // console.log(postData);

    let cardContent = "";

    postData.map((post) => {
      cardContent += ` 
    <div class="card-content">
    <h3>PostID: ${post.albumId}</h3>
    <p>ID: ${post.id}</p>
        <h2>Title: ${post.title}</h2>
        <span>Email: ${post.url}</span>
        <p><h4>Comment:</h4> ${post.thumbnailUrl}</p>
      </div>
      `;
    });

    document.getElementById("post-details").innerHTML = cardContent;
  } catch (error) {
    console.log(error);
  }
};
postCardDetails();