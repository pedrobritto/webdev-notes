# Tabelas HTML

- [Documentação da MDN sobre o elemento `<table>`](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/table)

Exemplo de código com a maiora dos elementos:

``` html
<table>
  <caption>People &amp; Jobs</caption>

  <!-- Header -->
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Job</th>
    </tr>
  </thead>

  <!-- Body -->
  <tbody>
    <tr>
      <td>Pedro Britto</td>
      <td>Frontend Developer</td>
    </tr>
    <tr>
      <td>Anna Paola</td>
      <td>Master Chef</td>
    </tr>
    <tr>
      <td>Adha </td>
      <td>Windwalker Monk</td>
    </tr>
    <tr>
      <td>Elbridge</td>
      <td>Retribution Pally</td>
    </tr>
  </tbody>

  <!-- Footer -->
  <tfoot>
    <tr>
      <td colspan="2">This data is true</td>
    </tr>
  </tfoot>
</table>
```
