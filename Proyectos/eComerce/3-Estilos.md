1. Resetear los estilos en el index.css

```
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
```

2. Css Grid:

```
.product-card-grid {
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 200px;
}
```

3. Img size:

```
img {
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: contain;
    mix-blend-mode:color-burn;
}
```
