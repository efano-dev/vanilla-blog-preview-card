import { webPageURL } from "./global_variables.js";

const anchorTags = document.getElementsByTagName("a");

[...anchorTags].forEach((anchorTag) => {
    anchorTag.href = webPageURL;
});