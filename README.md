## Get Started
For support join our [Support Server!](https://discord.gg/uGUZshHcgV)

## Installation
With npm:
```bash
$ npm i berk-api.js@latest
```
With yarn:
```bash
$ yarn add berk-api.js@latest
```

## Usage

```js
const berk = require("berk-api.js");
let pablo = berk.pablo("No memes allowed in general!", false);

pablo.then((r) => console.log(r)); 
```

This will log in console `https://api.berk404.ga/pablo?text=No+memes+allowed+in+general%21`!

All available methods can be found down below.

| Function | Required Parameters | Default | Description | Example Usage |
| -------- | ------------------- | ----------- | ------------------ | ------------- |
| `pablo()` | text, everyone   | undefined, false | Makes pablo say the given text, second argument is whether pablo mentions everyone or not. | `pablo("Hello m'lady")` |
| `anycard()` | image, {text1, text2, text3}, {color1, color2, color3}, {color1, color2, color3}, background | undefined | Returns a card with the given image and text, background and colors are optional. | `anycard("https://cdn.discordapp.com/avatars/551786741296791562/b57386832e12ec4577554fd123ba0961.webp?size=2048", {text1: "Head text here", text2: "Second text here", text3: "Third text here"})` |
|  `overlay()` | type, image | undefined | Returns the given image on the given type of overlay. Available types can be found [here](https://api.berk404.ga)! | `overlay("bravery", "https://cdn.discordapp.com/avatars/551786741296791562/b57386832e12ec4577554fd123ba0961.webp?size=2048")` |
| `whoreallyis()` | image | undefined | Returns the given image on whoreallyis meme. | `whoreallyis("https://cdn.discordapp.com/avatars/551786741296791562/b57386832e12ec4577554fd123ba0961.webp?size=2048")` |
| `poohsay()` | text1, text2 | undefined | Returns winnie pooh elegant meme with the given texts. text1 is top text and text2 bottom text. | `poohsay("BDFD, Aoi.js", "Discord.js")` |
| `angrymob()` | text1, text2 | undefined | Returns angry mob meme with the given text. text1 is top text, text2 is bottom text. | `angrymob("BDFD is.....", "The best coding lang!")` |
| `uglier()` | image | undefined | Returns the given image on the "It's even uglier up close." meme. | `uglier(https://cdn.discordapp.com/avatars/551786741296791562/b57386832e12ec4577554fd123ba0961.webp?size=2048)` |
| `info()` | none | undefined | Returns package info | `info.version` |
