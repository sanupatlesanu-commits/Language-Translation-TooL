async function translateText() {
    const text = document.getElementById("text").value;
    const source = document.getElementById("source").value;
    const target = document.getElementById("target").value;
    const result = document.getElementById("result");

    if (text.trim() === "") {
        result.innerText = "Please enter some text.";
        return;
    }

    result.innerText = "Translating...";

    try {
        const url =
            "https://api.mymemory.translated.net/get?q=" +
            encodeURIComponent(text) +
            "&langpair=" +
            source +
            "|" +
            target;

        const response = await fetch(url);
        const data = await response.json();

        result.innerText = data.responseData.translatedText;
    } catch (error) {
        result.innerText = "Translation failed. Please check your internet.";
    }
}

