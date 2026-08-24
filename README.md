# Portfólio - Gui (dev .NET/C#)

Portfólio pessoal em HTML5, CSS3 e JavaScript puro (sem frameworks), no estilo
"editor de código": navegação por abas, terminal com efeito de digitação,
formação como JSON e portfólio como cards de repositório.

## Estrutura

```
index.html   -> estrutura da página (single page com âncoras)
style.css    -> estilos e temas dark/light
script.js    -> menu mobile, tema, digitação, validação do formulário
```

## Antes de publicar, ajuste isso

1. **Nome completo**: troque `Gui` pelo seu nome completo no `<title>`, no
   `<meta name="description">` e onde fizer sentido no conteúdo. A atividade
   exige que o **endereço do site** contenha seu nome
   (ex: `https://seu-usuario.github.io/portfolio-seu-nome/`).
2. **E-mail de contato**: no `index.html`, procure por `seuemail@exemplo.com`
   (aparece 2x: no link `mailto:` e como texto) e troque pelo seu e-mail real.
3. **Links de redes sociais** (LinkedIn etc.), se quiser adicionar, ficam no
   bloco `.contact-links` da seção de contato.
4. Revise o texto de "Sobre mim" e "Formação", os dados usados foram os que
   você já tinha me contado; ajuste como preferir.

## Como publicar no GitHub Pages

1. Crie um repositório público no GitHub. Sugestão de nome, incluindo seu
   nome conforme pede a atividade: `portfolio-seu-nome`.
2. Suba os 3 arquivos (`index.html`, `style.css`, `script.js`) para a raiz do
   repositório (pelo VS Code + Git, ou pela interface do GitHub).
3. No repositório: **Settings > Pages > Source** > selecione a branch `main`
   e a pasta `/ (root)` > **Save**.
4. Em alguns minutos o site fica disponível em:
   `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`

## Checklist antes de entregar

- [ ] Nome completo e e-mail reais preenchidos
- [ ] Site publicado (link acessível de outro dispositivo, sem `localhost`)
- [ ] Repositório público no GitHub com o código-fonte completo
- [ ] Testado o formulário de contato (validação + mensagem de sucesso)
- [ ] Testado o menu no celular (hamburguer abre/fecha)
- [ ] Testado a alternância de tema claro/escuro
- [ ] Prints de cada seção com a URL pública visível na barra do navegador
