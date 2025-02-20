import { webPageURL } from "./global_variables.js";

const anchorTags = document.getElementsByTagName("a");

[...anchorTags].map((anchorTag) => {
    anchorTag.href = webPageURL;
});