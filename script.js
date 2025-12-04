document.addEventListener("DOMContentLoaded", function() {

    const data = {
        stories: [
            {title:"David and Goliath — courage and faith", link:"https://www.biblegateway.com/passage/?search=1+Samuel+17"},
            {title:"Daniel in the Lions' Den — protection and trust in God", link:"https://www.biblegateway.com/passage/?search=Daniel+6"},
            {title:"Noah's Ark — obedience and faithfulness", link:"https://www.biblegateway.com/passage/?search=Genesis+6-9"},
            {title:"Joseph the Dreamer — forgiveness and hope", link:"https://www.biblegateway.com/passage/?search=Genesis+37-50"}
        ],
songs: [
    {title:"Way Maker — worship and trust", link:"#"},
    {title:"Oceans — trusting God in all circumstances", link:"#"},
    {title:"I Give Myself Away — devotion and surrender", link:"#"},
    {title:"Here I Am to Worship — praise and connection", link:"#"},
    {title:"David and Goliath — courage and faith", link:"..."}
],
        learning: [
            {title:"What is Faith?", link:"#"},
            {title:"What is Forgiveness?", link:"#"},
            {title:"Living a Good Christian Life", link:"#"},
            {title:"Respecting Parents and Elders", link:"#"},
            {title:"Helping Others in Community", link:"#"}
        ],
        helpful: [
            {title:"Memory Bible Verses", link:"#"},
            {title:"How to Pray Effectively", link:"#"},
            {title:"Good Manners in School", link:"#"},
            {title:"Building Confidence", link:"#"},
            {title:"Guidance for Teens", link:"#"}
        ],
        impact: [
            {title:"Visiting elderly to show love and respect", link:"#"},
            {title:"Helping children with homework and Bible study", link:"#"},
            {title:"Cleaning church and community spaces", link:"#"},
            {title:"Teaching teamwork and unity", link:"#"},
            {title:"Encouraging lonely or discouraged kids", link:"#"}
        ],
        problems: [
            {title:"Lack of motivation among youth", link:"#"},
            {title:"Loneliness in elderly people", link:"#"},
            {title:"Poor teamwork and unity", link:"#"},
            {title:"Unsafe environments for children", link:"#"},
            {title:"Lack of spiritual guidance and mentorship", link:"#"}
        ]
    };

    const resultsDiv = document.getElementById("results");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    function performSearch() {
    const query = searchInput.value.toLowerCase().trim();
    if(query === "") { displayResults([]); return; }

    let results = [];

    Object.keys(data).forEach(category => {
        data[category].forEach(item => {
            const textToSearch = item.title.toLowerCase() + " " + (item.keywords ? item.keywords.join(" ") : "");
            if(textToSearch.includes(query)) results.push(item);
        });
    });

    displayResults(results);
}document.getElementById("searchInput").addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        document.getElementById("searchButton").click();
    }
});



    function displayResults(list) {
        resultsDiv.innerHTML = "";
        if(list.length === 0) {
            resultsDiv.innerHTML = `<div class="result-item">No results found.</div>`;
            document.getElementById("searchButton").addEventListener("click", function() {
    const query = document.getElementById("searchInput").value.trim();
    if(query !== "") {
        // Opens a new tab with Google search results
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank");
    }
});

            return;
        }
        list.forEach(item => {
            const div = document.createElement("div");
            div.className = "result-item";
            div.innerHTML = `<a href="${item.link}" target="_blank">${item.title}</a>`;
            resultsDiv.appendChild(div);
        });
    }

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if(query === "") {
            displayResults([]);
            return;
        }
        let results = [];
        Object.keys(data).forEach(category => {
            data[category].forEach(item => {
                if(item.title.toLowerCase().includes(query)) results.push(item);
            });
        });
        displayResults(results);
    }

    // SEARCH BUTTON
    searchButton.addEventListener("click", performSearch);

    // LIVE SEARCH WHILE TYPING
    searchInput.addEventListener("input", performSearch);

    // CATEGORY CLICK
    const categoryCards = document.querySelectorAll(".card");
    categoryCards.forEach(card => {
        card.addEventListener("click", () => {
            const category = card.getAttribute("data-category");
            displayResults(data[category]);
        });
    });

});
