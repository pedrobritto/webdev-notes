# Formulários HTML

- [Documentação da MDN sobre formulários HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms)

Exempo de implementação de forumlário com elementos HTML5:

```html
<!-- form start-->
<form action="index.html" method="POST">
  <h1>Sign Up!</h1>

  <!-- fieldset 1 -->
  <fieldset>
    <legend><span class="number">1</span> Your basic info</legend>

    <!-- Name field -->
    <label for="name">Name</label>
      <input type="text" id="name" name="user_name" placeholder="Your name">

    <!-- Email field -->
    <label for="mail">Email</label>
      <input type="email" id="mail" name="user_email" placeholder="Your Email">

    <!-- Password field -->
    <label for="password">Password</label>
      <input type="password" id="password" name="user_password" placeholder="Your password" title="At least 8 carachters"pattern="\d{8,50}">
      <p style="font-size: 80%;">*at least 8 characters long</p>

    <!-- Age radio buttons -->
    <label>Age</label>
      <input type="radio" id="under_13" value="under_13" name="user_age">
      <label for="under_13" class="light">Under 13</label><br>

      <input type="radio" id="over_13" value="over_13" name="user_age">
      <label for="over_13" class="light">13 or more</label><br>

  </fieldset>

  <!-- fieldset 2 -->
  <fieldset>
    <legend><span class="number">2</span> More about you</legend>

    <label for="bio">Biography</label>
    <textarea id="bio" name="user_bio" placeholder="Your bio..."></textarea>

    <!-- job role dropdown -->
    <label for="job">Your Job Role</label>
    <select id="job" name="user_job">

      <optgroup label="Web">
        <option value="fontend_developer">Frontend Developer</option>
        <option value="ruby_developer">Ruby Developer</option>
        <option value="php_developer">PHP Developer</option>
        <option value="wordpress_developer">Wordpress Developer</option>
      </optgroup>

      <optgroup label="Mobile">
        <option value="ios_developer">iOS Developer</option>
        <option value="android_developer">Android Developer</option>
      </optgroup>

    </select>

    <!-- interests checkbox -->
    <label for="interests">Your Interests</label>
    <input type="checkbox" id="interests_coding" name="user_interest" value="coding">
    <label for="interests_coding" class="light">Coding</label>
    <br>

    <input type="checkbox" id="interests_space" name="user_interest" value="space">
    <label for="interests_space" class="light">Space</label>
    <br>

    <input type="checkbox" id="interests_trains" name="user_interest" value="trains">
    <label for="interests_trains" class="light">Trains</label>
    <br>

  </fieldset>

  <!-- Submit buttons -->
  <button type="submit">Sign Up!</button>
</form>
```

Em um formulário os atributos `name` e `value` formam um **key value pair** a ser enviado para o servidor e pode aparecer em URLs dessa forma:
```
/form-url?name=value

# exemplo
/form-url?user_name=Pedro&user_job=frontend-developer
```

#### Principais elementos de um formulário
- `<form>`
- `<input>`
- `<textarea>`
- `<button>`
- `<label>`
- `<fieldset>`
- `<legend>`
- `<select>`
- `<option>`
- `<optgroup>`

### `<form>`
Paired tag. Delimita a área de um formulario. Contém todas as outras tags citadas.
###### Atributos principais:
- method
- action

### `<input>`
Self-closing tag. Cria a maioria dos elementos interativos de um formulário, como campos de texto, email, telefone, senha, etc.

Todo elemento `<input>` precisa dos atributos `name` e `value`.
###### Atributos principais:
- type
- name
- value
- placeholder
- title

### `<textarea>`
Paired tag. Cria uma área de texto de mais de uma linha.

### `<button>`
Paired tag. Cria um botão, normalmente para enviar o formulário com o valor
`type="submit"`.

### `<label>`
Paired tag. Cria uma etiqueta que pode referênciar um elemento do formulário
utilizando o atributo `id` de um elemento. Exemplo: `<label for="id-do-elemento"></label>`
###### Atributo principal:
- for

### `<fieldset>`
Paired tag. Serve para dividir logicamente/semanticamente as seções de um formulário.

### `<legend>`
Paired tag. Serve para dar um título ou legenda a uma determinada seção do formulário. Normalmente vem após o elemento `<fieldset>`. Não precisa referenciar.

### `<select>`
Paired tag. Delimita a área de um menu dropdown. Deve ser populada com elementos `<option>`.
###### Atributo principal:
- name

### `<option>`
Paired tag. Cria os elementos selecionáveis de um menu dropdown. Só precisa do atributo `value`, pois o `name` é definido no elemento `<select>`
###### Atributo principal:
- value

### `<optgroup>`
Self-closing tag. Serve para ajudar a organizar a disposição de itens dentro de um menu dropdown. Cria texto visível dentro do menu, mas não pode ser selecionado.

O texto deve ser inserido com o atributo `label`.
###### Atributo principal:
- label
