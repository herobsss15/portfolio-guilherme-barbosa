# Portfólio - Guilherme Silva Barbosa (Gui, dev .NET/C#)

Portfólio pessoal em HTML5, CSS3 e JavaScript puro (sem frameworks), no estilo
"editor de código": navegação por abas, terminal com efeito de digitação,
formação como JSON e portfólio como cards de repositório.

## Estrutura

```
index.html   -> estrutura da página (single page com âncoras)
style.css    -> estilos e temas dark/light
script.js    -> menu mobile, tema, digitação, validação do formulário
```

## Antes de publicar

1. Revise o texto de "Sobre mim", "Formação" e "Portfólio" mais uma vez.
2. Se quiser adicionar mais alguma rede social, o bloco fica em
   `.contact-links` na seção de contato do `index.html`.

## Como publicar no GitHub Pages

1. Crie um repositório público no GitHub. O endereço do site precisa conter
   o nome do aluno, então use algo como `portfolio-guilherme-barbosa`.
2. Suba os 3 arquivos (`index.html`, `style.css`, `script.js`) para a raiz do
   repositório (pelo VS Code + Git, ou pela interface do GitHub).
3. No repositório: **Settings > Pages > Source** > selecione a branch `main`
   e a pasta `/ (root)` > **Save**.
4. Em alguns minutos o site fica disponível em:
   `https://herobsss15.github.io/portfolio-guilherme-barbosa/`

## Checklist antes de entregar

- [X] Nome completo e e-mail reais preenchidos
- [ ] Site publicado (link acessível de outro dispositivo, sem `localhost`)
- [ ] Repositório público no GitHub com o código-fonte completo
- [ ] Testado o formulário de contato (validação + mensagem de sucesso)
- [ ] Testado o menu no celular (hamburguer abre/fecha)
- [ ] Testado a alternância de tema claro/escuro
- [ ] Prints de cada seção com a URL pública visível na barra do navegador
