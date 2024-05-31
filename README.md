# Vtuber Project static website
## contributors
- [Hongming Wang](hongming-wang.com) 

## customize
### color 
path: `./css/main.css`
```css
/** line 14-19 */
:root {
  --color-font: white;
  --color-page-background: #323232;
  --color-component-background: #4a4a4a;
  --color-header-footer: #444;
}
```

### video list
path: `./js/videoList.js`
```js
//line 1
const videoList = [
  {
    title: "title",
    url: "url"
  },
];
```