# Transições e Transformações CSS

## Transições
- [MDN - CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

Propriedades em uso
``` css
.transition {
  transition-property: color, background-color;
  transition-duration: .3s, .4s;
  transition-delay: 0.2s;
  transition-timing-function: ease, linear;
}
```

É possível utilizar a shorthand:
``` css
.transition {
  transition: color 0.3s ease 0.2s,
              background-color 0.4s linear 0.2s;
  /* <property> <duration> <timing-function> <delay> */
}
```

A ordem dos valores da shorthand podem assumir qualquer ordem, porém o primeiro valor numérico sempre será a `duration` e o segundo, `delay`.

Para facilitar, pode-se utilizar uma propriedade de valor constante fora da shorthand:
``` css
.transition {
  transition: color 0.3s ease,
              background-color 0.4s linear;
  transition-delay: 0.2s;
}
```
## Transformações

- [Documentação WebPlatform](https://docs.webplatform.org/wiki/css/properties/transform)

Funções de transformação:
``` css
.transform-item {
  transform: rotate();
  transform: skewX();
  transform: skewY();
  transform: scale();
  transform: translate();
  transform-origin: top left;
}
```

Para aplicar mais de uma transformação, basta separa-los com um espaço.
``` css
.transform-item {
  transform: rotate() scale() translate();
}
```
## Transformações 3D
- [3D Transforms](https://docs.webplatform.org/wiki/tutorials/3d_css)
- [Backface Visibility - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility)
- [`perspective`](https://developer.mozilla.org/en-US/docs/Web/CSS/perspective)

``` css
.content {
  /* Necessário para fazer 3d-transforms funcionarem. */
  /* Deve ser aplicado em um elemento pai. */
  perspective: 600px;
  /* Posiciona a origem da perspectiva */
  transform-origin: 50% 50%;
}

.photo {
  transform: rotateX(40deg);
}
```

Funções de transformação 3D:
``` css
.transform-item {
  transform: rotateX();
  transform: rotateY();

  transform: skewX();
  transform: skewY();
  transform: scale();
  transform: translate();
  transform-origin: top left;
}
```
Para manter as transformações 3D consistentes, é preciso adicionar `perspective: <value>` à todos os elementos pai em que se quer aplicar a transformação 3D.

`transform-style` permite fazer os elementos filho manterem seu próprio espaço tridimensional, também se comportando como objetos 3D.
