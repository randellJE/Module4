let news = [
  {
    id: 1,
    title: "Election Results",
    content: "Newly elected minister..."
  },
  { id: 2, title: "Sporting Success", content: "World Cup winners..." },
  {
    id: 3,
    title: "Tornado Warning",
    content: "Residents should prepare..."
  },
  {
    id: 4,
    title: "Jim Beans",
    content: "I can't find the coffe grinds..."
  }
];

// Function to update news on the page
function updateNews() {
  // Get the news container element
  let newsContainer = document.getElementById("news-container");

  // Clear the current content
  newsContainer.innerHTML = "";

  // Loop through the news array and add each news item to the container
  news.forEach((item) => {
    let newsItem = document.createElement("div");
    newsItem.innerHTML = `<h2>${item.title}</h2><p>${item.content}</p>`;
    newsContainer.appendChild(newsItem);
  });
}

function addNews() {
  const title = document.getElementById("newsTitle").value;
  const content = document.getElementById("newsContent").value;
  const newId = news.length + 1;

  news.push({ id: newId, title: title, content: content });

  document.getElementById("newsTitle").value = "";
  document.getElementById("newsContent").value = "";
  displayNews();
}

// Set up an interval to update the news every 5 seconds
let interval = setInterval(updateNews, 5000);

function stopInterval() {
  clearInterval(interval);
}

// Initial update when the page loads
updateNews();
